import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AxiosSecure } from "../../../lib/AxiosSecure";
import { API } from "../../../api";
import { setShowLoginModal } from "../../../redux/features/global/globalSlice";
import toast from "react-hot-toast";
import { scrollToLeft, scrollToRight } from "../../../utils/scroll";

const IndianCardGame = () => {
  const [showSeeAll, setShowSeeAll] = useState(false);
  const ref = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token, bonusToken } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getGames = async () => {
      const res = await AxiosSecure.post(API.mac88, {
        gameList: "ALL",
        product: "ALL",
        isHome: false,
      });

      if (res?.status === 200) {
        const result = res?.data;
        setData(result);
      }
    };
    getGames();
  }, []);

  const handleAuraCasino = (code, name) => {
    if (token) {
      if (bonusToken) {
        return toast.error("Bonus wallet is available only on sports.");
      } else {
        navigate(`/casino/${name.replace(/ /g, "")}/${code}`);
      }
    } else {
      dispatch(setShowLoginModal(true));
    }
  };

  return (
    <div className="w-full py-2">
      <div
        title="Game Shows"
        className="flex items-start flex-col gap-0.5 w-full uppercase"
      >
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center justify-center gap-1">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width={16}
                height={16}
                x={0}
                y={0}
                viewBox="0 0 511.643 511.643"
              >
                <g>
                  <path
                    d="M453.209 184.081C373.725 121.725 300.804 41.437 270.565 6.713c-7.795-8.951-21.691-8.951-29.486 0-30.24 34.723-103.16 115.011-182.644 177.368C22.372 212.373 1.267 254.915 1.267 299.99c0 80 66.652 144.853 148.871 144.853 27.807 0 53.101-10.455 71.97-27.539v28.247c0 34.386-24.644 38.65-43.766 54.707-4.599 3.862-1.775 11.384 4.23 11.384h145.994c5.984 0 8.811-7.47 4.262-11.358-18.926-16.176-43.294-19.786-43.294-54.478v-28.503c18.869 17.084 44.163 27.539 71.97 27.539 82.219 0 148.871-64.853 148.871-144.853.001-45.074-21.104-87.616-57.166-115.908z"
                    fill="#d6035e"
                    opacity={1}
                  />
                </g>
              </svg>
            </p>
            <span className="text-text_secondary text-sm not-italic font-bold uppercase">
              Indian Card Games
            </span>
          </div>
          <div className="flex items-center justify-center gap-1.5">
            <button
              onClick={() => setShowSeeAll(!showSeeAll)}
              className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out text-text_secondary text-x not-italic mr-[8px] 
      cursor-pointer
      
      "
              type="button"
            >
              {showSeeAll ? "View Less" : "View All"}
            </button>
            <svg
              onClick={() => scrollToLeft(ref)}
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="var(--color-icon_secondary)"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 text-text_secondary bg-bg_secondary4 rounded flex items-center justify-center active:scale-[98%] transition-all duration-300 active:opacity-80"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 6l-6 6l6 6" />
            </svg>
            <svg
              onClick={() => scrollToRight(ref)}
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="var(--color-icon_secondary)"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 text-text_secondary bg-bg_secondary4 rounded flex items-center justify-center active:scale-[98%] transition-all duration-300 active:opacity-80"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 6l6 6l-6 6" />
            </svg>
          </div>
        </div>
        <div
          ref={ref}
          className={`  ${showSeeAll ? "w-full h-max scroll-smooth no-scrollbar  gap-x-2 pt-1 pb-2  grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-2 gap-y-2" : "w-full h-max scroll-smooth no-scrollbar  gap-x-2 pt-1 pb-2 flex items-start justify-start overflow-x-auto"}   `}
        >
          {data?.data?.map((item, i) => {
            return (
              <div
                onClick={() => handleAuraCasino(item?.game_id, item?.game_name)}
                key={i}
                className={`
                
                ${showSeeAll ? "   relative overflow-hidden w-full aspect-1 object-cover rounded-md cursor-pointer" : "relative overflow-hidden min-w-[150px] w-[150px] sm:min-w-[170px] sm:w-[170px] md:min-w-[190px] md:w-[190px] aspect-1 object-cover rounded-md cursor-pointer "}
                
             `}
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src={item?.img}
                  alt={item?.game_name}
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className=" bg-bg_skeletonLoaderBg transition-all duration-500 ease-in-out active:scale-105 w-full h-full"
                  title={`${item?.game_name}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default IndianCardGame;

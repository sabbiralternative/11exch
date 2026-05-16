import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Settings } from "../../../api";
import toast from "react-hot-toast";
import { setShowLoginModal } from "../../../redux/features/global/globalSlice";
import WarningCondition from "../../shared/WarningCondition/WarningCondition";
import { scrollToLeft, scrollToRight } from "../../../utils/scroll";

const GameShow = ({ popularGames }) => {
  const [showSeeAll, setShowSeeAll] = useState(false);
  const ref = useRef();
  const navigate = useNavigate();
  const [showWarning, setShowWarning] = useState(false);
  const [gameInfo, setGameInfo] = useState({ gameName: "", gameId: "" });
  const { token, bonusToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleNavigate = (game) => {
    if (token) {
      if (bonusToken) {
        return toast.error("Bonus wallet is available only on sports.");
      }
      if (Settings.casino_currency !== "AED") {
        navigate(
          `/casino/${game?.game_name.replace(/ /g, "")}/${game?.game_id}`,
        );
      } else {
        setGameInfo({ gameName: "", gameId: "" });
        setGameInfo({ gameName: game?.game_name, gameId: game?.game_id });
        setShowWarning(true);
      }
    } else {
      dispatch(setShowLoginModal(true));
    }
  };

  return (
    <div className="w-full py-2 mt-0.5">
      {showWarning && (
        <WarningCondition gameInfo={gameInfo} setShowWarning={setShowWarning} />
      )}
      <div
        title="Game Shows"
        className="flex items-start flex-col gap-0.5 w-full"
      >
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center justify-center gap-1">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={18}
                viewBox="0 0 16 18"
                fill="#d6035e"
              >
                <path
                  d="M11.9802 5.61846C8.76732 3.66374 10.274 0.904781 10.3386 0.790102C10.4324 0.626906 10.4321 0.426129 10.3379 0.263215C10.2436 0.100301 10.0697 0 9.88143 0C8.22757 0 6.93248 0.469898 6.03217 1.39669C4.49377 2.9803 4.56513 5.445 4.59558 6.49751C4.59895 6.61409 4.60187 6.71484 4.60187 6.78966C4.60187 7.57111 4.72724 8.29255 4.83787 8.92905C4.90917 9.33922 4.97073 9.69346 4.98166 9.97196C4.99337 10.2701 4.93895 10.3384 4.93663 10.3412C4.92886 10.3504 4.86417 10.3848 4.68927 10.3848C4.48979 10.3848 4.34273 10.3196 4.21245 10.1736C3.70352 9.60289 3.66833 8.0447 3.76564 7.19698C3.78305 7.04749 3.73576 6.89773 3.63567 6.78537C3.53562 6.67301 3.39232 6.60874 3.24185 6.60874C1.87269 6.60874 0.849609 8.84777 0.849609 10.8497C0.849609 11.7908 1.03889 12.7127 1.41221 13.5898C1.77313 14.4377 2.28778 15.203 2.94193 15.8643C4.30431 17.2415 6.10055 18 7.99983 18C9.90674 18 11.7025 17.2522 13.0564 15.8945C14.4067 14.5403 15.1504 12.7486 15.1504 10.8496C15.1504 8.4266 13.2545 6.39369 11.9802 5.61846ZM7.99983 16.9453C4.69574 16.9453 1.90433 14.1539 1.90433 10.8496C1.90433 10.0461 2.09607 9.20257 2.43037 8.53548C2.50846 8.37963 2.58858 8.24593 2.66764 8.13329C2.67647 9.0033 2.81428 10.1893 3.42442 10.8745C3.75355 11.2441 4.19093 11.4395 4.6893 11.4395C5.15488 11.4395 5.50968 11.2983 5.74375 11.02C6.18137 10.4998 6.04704 9.72693 5.87702 8.74842C5.7737 8.15393 5.65659 7.48009 5.65659 6.78962C5.65659 6.69952 5.65346 6.59176 5.64988 6.46692C5.62102 5.46996 5.56093 3.39543 6.78869 2.13159C7.33984 1.56421 8.10934 1.2189 9.08282 1.10074C8.97292 1.46566 8.87817 1.92892 8.87452 2.44761C8.86643 3.59047 9.30356 5.22457 11.4321 6.51952C12.4619 7.14604 14.0957 8.87562 14.0957 10.8497C14.0957 14.2108 11.3611 16.9453 7.99983 16.9453Z"
                  fill="#d6035e"
                />
              </svg>
            </p>
            <span className="text-text_secondary text-sm not-italic font-bold uppercase">
              GAME SHOWS
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
          {popularGames?.map((item, i) => {
            return (
              <div
                onClick={() => handleNavigate(item)}
                key={i}
                className={`
                
                ${showSeeAll ? "   relative overflow-hidden w-full aspect-1 object-cover rounded-md cursor-pointer" : "relative overflow-hidden min-w-[150px] w-[150px] sm:min-w-[170px] sm:w-[170px] md:min-w-[190px] md:w-[190px] aspect-1 object-cover rounded-md cursor-pointer "}
                
             `}
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src={item?.url_thumb}
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

export default GameShow;

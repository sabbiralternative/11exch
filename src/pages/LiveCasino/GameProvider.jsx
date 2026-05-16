import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { scrollToLeft, scrollToRight } from "../../utils/scroll";

const GameProvider = ({ casinoProviders }) => {
  const ref = useRef();
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();
  const sortedData =
    casinoProviders &&
    casinoProviders?.length > 0 &&
    casinoProviders?.sort((a, b) => a.sort - b.sort);
  return (
    <div className="flex flex-col w-full py-0.5 font-roboto">
      <div className="w-[100%] flex flex-row justify-between px-1.5">
        <div className="max-w-[85%] text-text_color_primary1 font-semibold capitalize">
          <div className="flex items-center gap-1.5 py-1">
            <span className=" text-text_secondary px-1.5 uppercase text-sm font-medium font-extrabold">
              Game Providers
            </span>
          </div>
        </div>
        <div className="flex w-[108.75px] items-center justify-end gap-[5px]">
          <button
            onClick={() => setShowMore(!showMore)}
            className="relative overflow-hidden  text-text_secondary min-w-max rounded-md px-1 py-0.5 font-semibold text-[12px] leading-[18px] transition-all ease-in-out duration-200"
            type="button"
          >
            {showMore ? "View Less" : "View All"}
          </button>
          <button
            onClick={() => scrollToLeft(ref)}
            className="relative overflow-hidden flex w-[20px] h-[20px] justify-center bg-bg_secondary4 items-center rounded"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="var(--color-icon_secondary)"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 6l-6 6l6 6" />
            </svg>
          </button>
          <button
            onClick={() => scrollToRight(ref)}
            className="relative overflow-hidden flex w-[20px] h-[20px] justify-center bg-bg_secondary4 items-center rounded"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="var(--color-icon_secondary)"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 6l6 6l-6 6" />
            </svg>
          </button>
        </div>
      </div>
      <div
        ref={ref}
        className={`   ${showMore ? " w-full gap-1 px-1.5   grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8" : "w-full gap-1 px-1.5   flex overflow-x-auto no-scrollbar scroll-smooth  "}      `}
      >
        {sortedData?.map((provider) => (
          <div
            onClick={() =>
              navigate(
                `/game-provider/${provider?.game_name}/${provider?.game_id}`,
              )
            }
            key={provider?.game_id}
            className={`  flex flex-col items-center justify-center      ${showMore ? "relative overflow-hidden w-full aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-sm cursor-pointer hover:scale-105" : " overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md  active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-sm cursor-pointer hover:scale-105  relative "}               `}
          >
            <img
              style={{ filter: "invert(1)" }}
              src={provider?.url_thumb}
              alt={provider?.game_name}
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
              title={provider?.game_name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameProvider;

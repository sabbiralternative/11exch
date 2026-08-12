import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useLanguage from "../../../hooks/use-language";
import { LanguageKey } from "../../../const";

const GameProvider = ({ casinoProviders }) => {
  const { getLanguage } = useLanguage();
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();
  const sortedData =
    casinoProviders &&
    casinoProviders?.length > 0 &&
    casinoProviders?.sort((a, b) => a.sort - b.sort);
  return (
    <div className="w-full py-2">
      <div className="w-[100%] flex flex-row justify-between py-1.5">
        <div className="max-w-[85%] text-text_color_primary1 font-semibold capitalize">
          <div className="flex items-center gap-1.5 ">
            <span className=" text-base text-text_secondary font-extrabold font-medium font-extrabold">
              {getLanguage(LanguageKey.CASINO_PROVIDERS)}
            </span>
          </div>
        </div>
        <div className="flex w-[108.75px] items-center justify-end gap-[5px]">
          <button
            onClick={() => setShowMore((prev) => !prev)}
            className="relative overflow-hidden  text-text_secondary min-w-max rounded-md px-1 py-0.5 font-semibold text-[12px] leading-[18px] transition-all ease-in-out duration-200"
            type="button"
          >
            {showMore
              ? getLanguage(LanguageKey.VIEW_LESS)
              : getLanguage(LanguageKey.VIEW_ALL)}
          </button>
          <button
            className="relative overflow-hidden flex w-[20px] h-[20px] justify-center bg-bg_secondary4 items-center rounded"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="var(--color-bg-primary)"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 6l-6 6l6 6" />
            </svg>
          </button>
          <button
            className="relative overflow-hidden flex w-[20px] h-[20px] justify-center bg-bg_secondary4 items-center rounded"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="var(--color-bg-primary)"
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
        className={`${showMore ? "w-full  gap-y-2 gap-x-2    grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6" : "w-full  gap-y-2 gap-x-2   grid grid-rows-3 grid-flow-col overflow-x-auto no-scrollbar scroll-smooth"}       `}
      >
        {sortedData?.map((item) => {
          return (
            <div
              onClick={() =>
                navigate(`/game-provider/${item?.game_name}/${item?.game_id}`)
              }
              key={item?.game_id}
              className={`  ${showMore ? "relative overflow-hidden w-full aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md" : "relative overflow-hidden min-w-[114px] md:min-w-[140px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md "}    `}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <img
                style={{ filter: "invert(1)" }}
                src={item?.url_thumb}
                alt={item?.game_name}
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                title={item?.game_name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GameProvider;

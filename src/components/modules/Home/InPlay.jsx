import { useEffect, useState } from "react";
import { useGroupQuery } from "../../../redux/features/events/events";
import { useNavigate } from "react-router-dom";
import ScoreHome from "./ScoreHome";

const InPlay = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const { data } = useGroupQuery({ sportsType: 0 }, { pollingInterval: 1000 });
  const eventName = { 4: "Cricket", 2: "Tennis", 1: "Football" };
  useEffect(() => {
    if (data) {
      const categories = Array.from(
        new Set(
          Object.values(data)
            .filter((item) => item.visible)
            .map((item) => item.eventTypeId),
        ),
      );
      const sortedCategories = categories.sort((a, b) => {
        const order = { 4: 0, 1: 1, 2: 2 };
        return order[a] - order[b];
      });
      setCategories(sortedCategories);
    }
  }, [data]);

  const navigateGameList = (eventTypeId, keys) => {
    navigate(`/event-details/${eventTypeId}/${keys}`);
  };

  const OddBox = (value, index) => {
    return (
      <div
        title="1.59-1.6"
        className={`w-full relative  ${value?.status !== "OPEN" ? "opacity-70 cursor-not-allowed" : "cursor-pointer"}`}
      >
        <div className="undefined w-full rounded-[0.375rem] grid grid-cols-2 text-[13px] text-text_secondary overflow-hidden">
          <button
            title="leftOption-1.59"
            disabled={value?.status !== "OPEN"}
            className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out  h-[35px] col-span-1 w-full flex items-center justify-center bg-bg_backBtnBgColor  h-[2.1875rem] active:opacity-70 flex flex-col items-center justify-center  leading-4 disabled:opacity-80 font-bold   
      cursor-pointer
      active:scale-[98%]
      "
            type="button"
          >
            <span className=" text-[13px]">
              {value?.[index]?.ex?.availableToBack?.[0]?.price}
            </span>
          </button>
          <button
            title="rightOption-1.6"
            disabled={value?.status !== "OPEN"}
            className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out  h-[35px] col-span-1 w-full flex items-center justify-center bg-bg_layBtnBgColor h-[2.1875rem] active:opacity-70 flex flex-col items-center justify-center leading-4  font-bold  
      cursor-pointer
      active:scale-[98%]
      "
            type="button"
          >
            <span className="text-[13px]">
              {value?.[index]?.ex?.availableToLay?.[0]?.price}
            </span>
          </button>
        </div>
        <div className="absolute top-1/2 z-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-bg_secondary w-[1.25rem] h-[1.25rem] rounded-full flex items-center justify-center text-text_secondary2 text-[13px] font-semibold">
          {index}
        </div>
      </div>
    );
  };

  return (
    <div className=" w-full py-2">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center justify-center gap-1">
          <span className="pr-1">
            <div className="relative w-max flex items-center justify-center">
              <span className="inline-block w-2.5 h-2.5 z-0 rounded-full bg-red-600 animate-pulse " />
              <span className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 inline-block z-2 rounded-full bg-red-600" />
            </div>
          </span>
          <span className="text-text_secondary text-sm not-italic font-bold uppercase">
            IN PLAY
          </span>
        </div>
        <div className="flex items-center justify-center gap-1.5" />
      </div>
      {categories?.map((category) => {
        const groupedData = Object.entries(data)
          .filter(
            ([, value]) =>
              value.eventTypeId === category && value.visible === true,
          )
          .reduce(
            (acc, [key, value]) => {
              if (!value.visible) return acc;

              if (value.inPlay === 1) {
                acc.inPlay[key] = value;
              } else {
                acc.upcoming[key] = value;
              }

              return acc;
            },
            { inPlay: {}, upcoming: {} },
          );

        return (
          <div key={category} className="w-full py-[7px] font-roboto">
            <div className="py-1.5 px-3 overflow-hidden relative rounded-tl-xl rounded-tr-xl w-full bg-cricketHeaderGradient border-l-border_cricketLeft border-r-border_cricketRight flex items-start justify-start text-text_secondary border-l border-solid border-r border-l-border_cricketLeft border-r-border_cricketRight">
              <div
                className={`absolute top-0 left-0 h-full w-[88%] border-tl-xl vector one-${eventName[category]?.toLowerCase()}-bg`}
              />
              <div className="absolute top-0 right-[7%] h-full w-[29%] vector2 circket-2-bg" />
              <div className="w-full flex items-center gap-1 flex-1 bg-transparent z-[1] font-roboto text-text_secondary text-sm font-medium leading-150 tracking-widest">
                <span>🏏</span>
                <div className=" capitalize max-w-full truncate">
                  {eventName[category]}
                </div>
                <div className="flex items-center justify-center w-5 h-5 bg-bg_secondary text-text_secondary2  font-roboto font-bold leading-120 not-italic text-x1 rounded-full ">
                  {Object.keys(groupedData.inPlay).length}
                </div>
              </div>
            </div>
            {Object.entries(groupedData.inPlay).map(([key, value]) => {
              return (
                <div
                  onClick={() => navigateGameList(value?.eventTypeId, key)}
                  key={key}
                  className="flex flex-col items-center justify-start gap-y-[0.56rem] pt-3 border-l border-border_secondary5 border-r border-r-border_secondary6 h-max "
                >
                  <div className=" w-full flex items-center justify-between px-3 active:scale-[98%] transition-all duration-300 ease-in-out">
                    <div className="flex w-[80%] items-center justify-start gap-x-1">
                      <div
                        title="4-scorecard"
                        className="flex items-center h-full gap-x-0.5 w-[20%]"
                      >
                        <div className="flex items-center justify-center gap-[0.625rem] w-full text-text_secondary5">
                          <ScoreHome data={value} />
                        </div>
                        <div className="w-[0.172rem] rounded-3xl bg-cricketDividerLineGradient h-8" />
                      </div>
                      <div className="flex items-center justify-start flex-col gap-y-0 text-[0.8125rem] font-medium text-text_secondary  ml-1 w-[90%]">
                        <div className=" truncate w-full">{value?.player1}</div>
                        <div className=" truncate w-full">{value?.player2}</div>
                      </div>
                    </div>
                    <div className="flex w-[20%] items-center justify-end gap-x-1">
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 10 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className=" h-3 w-3"
                      >
                        <g id="Group">
                          <path
                            id="Vector"
                            d="M9.12109 1.99756H5.70725L6.96496 0.739849C7.07939 0.625415 7.07939 0.440005 6.96496 0.325571C6.85053 0.211138 6.66512 0.211138 6.55068 0.325571L5 1.87625L3.44932 0.325591C3.33488 0.211157 3.14947 0.211157 3.03504 0.325591C2.92061 0.440024 2.92061 0.625435 3.03504 0.739868L4.29275 1.99756H0.878906C0.394258 1.99756 0 2.41135 0 2.896V8.77491C0 9.25956 0.394258 9.65381 0.878906 9.65381H1.75781V9.94678C1.75781 10.1087 1.88885 10.2398 2.05078 10.2398C2.21271 10.2398 2.34375 10.1087 2.34375 9.94678V9.65381H7.63672V9.94678C7.63672 10.1087 7.76775 10.2398 7.92969 10.2398C8.09162 10.2398 8.22266 10.1087 8.22266 9.94678V9.65381H9.12109C9.60574 9.65381 10 9.25956 10 8.77491V2.896C10 2.41135 9.60574 1.99756 9.12109 1.99756ZM7.63672 8.18897C7.63672 8.3509 7.50568 8.48194 7.34375 8.48194H1.46484C1.30291 8.48194 1.17188 8.3509 1.17188 8.18897V3.48194C1.17188 3.32 1.30291 3.18897 1.46484 3.18897H7.34375C7.50568 3.18897 7.63672 3.32 7.63672 3.48194V8.18897ZM8.80859 7.60303C8.80859 7.76497 8.67756 7.896 8.51562 7.896C8.35369 7.896 8.22266 7.76497 8.22266 7.60303V6.41163C8.22266 6.24969 8.35369 6.11866 8.51562 6.11866C8.67756 6.11866 8.80859 6.24969 8.80859 6.41163V7.60303ZM8.51562 5.53272C8.35383 5.53272 8.22266 5.40155 8.22266 5.23975C8.22266 5.07795 8.35383 4.94678 8.51562 4.94678C8.67742 4.94678 8.80859 5.07795 8.80859 5.23975C8.80859 5.40155 8.67742 5.53272 8.51562 5.53272ZM8.51562 4.36084C8.35383 4.36084 8.22266 4.22967 8.22266 4.06788C8.22266 3.90608 8.35383 3.77491 8.51562 3.77491C8.67742 3.77491 8.80859 3.90608 8.80859 4.06788C8.80859 4.22967 8.67742 4.36084 8.51562 4.36084Z"
                            fill="#F5A524"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="w-full flex items-center justify-center gap-x-[0.44rem] px-3">
                    {OddBox(value, 0)}
                    {OddBox(value, 2)}
                    {OddBox(value, 1)}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default InPlay;

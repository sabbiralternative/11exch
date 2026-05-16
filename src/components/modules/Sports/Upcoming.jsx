import ScoreHome from "../Home/ScoreHome";

const Upcoming = ({ uniqueDates, upcoming, navigateGameList }) => {
  return (
    <div className="w-full pt-1 pb-[7rem]">
      {uniqueDates?.map((date) => {
        const filteredData = Object.entries(upcoming).filter(
          ([, value]) => value.date?.split(" ")[0] === date,
        );

        return (
          <div key={date} className="w-full font-roboto pb-1.5">
            <div className="py-1.5 px-3 overflow-hidden relative rounded-tl-xl rounded-tr-xl w-full bg-cricketHeaderGradient border-l-border_cricketLeft border-r-border_cricketRight flex items-start justify-start text-text_secondary border-l border-solid border-r border-l-border_cricketLeft border-r-border_cricketRight">
              <div className="absolute top-0 left-0 h-full w-[88%] border-tl-xl vector one-cricket-bg" />
              <div className="absolute top-0 right-[7%] h-full w-[29%] vector2 circket-2-bg" />
              <div className="w-full flex items-center gap-1 flex-1 bg-transparent z-[1] font-roboto text-text_secondary text-sm font-medium leading-150 tracking-widest">
                <span>🏏</span>
                <div className=" capitalize max-w-full truncate">
                  {/* 27th Apr 2026 */}
                  {date}
                </div>
                <div className="flex items-center justify-center w-5 h-5 bg-bg_secondary text-text_secondary2  font-roboto font-bold leading-120 not-italic text-x1 rounded-full ">
                  {filteredData?.length}
                </div>
              </div>
            </div>
            {filteredData?.map(([key, value]) => {
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
                      <span className=" font-roboto font-normal text-text_tertiary7 text-x text-end">
                        <div className="text-text_secondary5 font-roboto font-normal w-full flex flex-col items-center justify-center gap-y-0.5">
                          <span className="text-wrap w-auto text-start text-[10px]">
                            {value?.timeStatus}
                          </span>
                        </div>
                      </span>
                    </div>
                  </div>
                  <div className=" w-full transition-all ease-in-out" />
                  <div className="bg-exchLoginTextGradient h-[1px] w-full opacity-[0.2]" />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Upcoming;

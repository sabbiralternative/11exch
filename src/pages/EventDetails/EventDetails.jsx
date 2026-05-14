import { MatchOdds } from "../../components/modules/EventDetails/MatchOdds";
import { Bookmaker } from "../../components/modules/EventDetails/Bookmaker";
import { Fancy } from "../../components/modules/EventDetails/Fancy";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetEventDetailsQuery } from "../../redux/features/events/events";
import { setPredictOdd } from "../../redux/features/events/eventSlice";
import { HorseGreyhoundEventDetails } from "../../components/modules/EventDetails/HorseGreyhoundEventDetails";

const EventDetails = () => {
  const { eventTypeId, eventId } = useParams();
  const [profit, setProfit] = useState(0);
  const dispatch = useDispatch();
  const { placeBetValues, price, stake } = useSelector((state) => state.event);

  const { data } = useGetEventDetailsQuery(
    { eventTypeId, eventId },
    {
      pollingInterval: 1000,
    },
  );

  useEffect(() => {
    if (
      price &&
      stake &&
      placeBetValues?.back &&
      placeBetValues?.btype === "MATCH_ODDS"
    ) {
      const multiply = price * stake;
      setProfit(formatNumber(multiply - stake));
    } else if (
      price &&
      stake &&
      placeBetValues?.back &&
      (placeBetValues?.btype === "BOOKMAKER" ||
        placeBetValues?.btype === "BOOKMAKER2")
    ) {
      setProfit(formatNumber(1 + price / stake));
    }
  }, [price, stake, profit, placeBetValues, setProfit]);

  useEffect(() => {
    let total;
    if (
      placeBetValues?.btype === "MATCH_ODDS" ||
      placeBetValues?.btype === "BOOKMAKER"
    ) {
      if (placeBetValues?.back) {
        if (placeBetValues?.btype === "MATCH_ODDS") {
          total = price * stake - stake;
        }
        if (placeBetValues?.btype === "BOOKMAKER") {
          const bookmaker = 1 + price / 100;
          total = bookmaker * stake - stake;
        }

        if (stake) {
          const currentExposure = placeBetValues?.exposure?.map((exp) => {
            return {
              exposure: exp?.isBettingOnThisRunner
                ? formatNumber(exp?.exposure + total)
                : formatNumber(exp?.exposure + -1 * stake),

              id: exp?.id,
              isBettingOnThisRunner: exp?.isBettingOnThisRunner,
            };
          });

          dispatch(setPredictOdd(currentExposure));
        }
      } else if (placeBetValues?.lay) {
        if (placeBetValues?.btype === "MATCH_ODDS") {
          total = -1 * (price * stake - stake);
        }
        if (placeBetValues?.btype === "BOOKMAKER") {
          const bookmaker = 1 + price / 100;
          total = -1 * (bookmaker * stake - stake);
        }

        if (stake) {
          const currentExposure = placeBetValues?.exposure?.map((exp) => {
            return {
              exposure: exp?.isBettingOnThisRunner
                ? formatNumber(exp?.exposure + total)
                : formatNumber(1 * exp?.exposure + 1 * stake),
              id: exp?.id,
              isBettingOnThisRunner: exp?.isBettingOnThisRunner,
            };
          });
          dispatch(setPredictOdd(currentExposure));
        }
      }
    }
  }, [price, stake, placeBetValues, dispatch]);

  /* Format number */
  const formatNumber = (value) => {
    const hasDecimal = value % 1 !== 0;
    // value?.toFixed(2)
    return hasDecimal ? parseFloat(value?.toFixed(2)) : value;
  };

  const matchOdds = data?.result?.filter(
    (game) =>
      game.btype === "MATCH_ODDS" &&
      game?.visible == true &&
      game?.name !== "tied match",
  );
  const bookmaker = data?.result?.filter(
    (game) =>
      game.btype === "BOOKMAKER" &&
      game?.visible == true &&
      game?.name !== "tied match",
  );

  const tiedMatch = data?.result?.filter(
    (game) =>
      (game.btype === "MATCH_ODDS" || game.btype === "BOOKMAKER") &&
      game?.visible == true &&
      game?.name === "tied match",
  );
  return (
    <main className="w-full flex-1  pt-1  bg-bg_appBackgroundColor">
      <div className="w-full">
        <div className=" w-full sticky -top-0.5 left-0 right-0 z-[99]">
          <div className="w-full overflow-hidden ">
            <div className="flex items-center justify-between gap-y-1 flex-col w-full px-4 py-2 relative bg-bg_inputBgColor">
              <div className="absolute bottom-[-5.879px] top-0 w-[38%] left-0 h-[108%] z-0 bg-bg_topBarEventDetailsBg blur-97" />
              <div className="absolute bottom-[-5.879px] top-0 w-[38%] right-0 h-[108%] z-0 bg-bg_topBarEventDetailsBg blur-[157px]" />

              <div className=" w-full flex items-start justify-between gap-x-2 min-h-max">
                <div className=" w-[52%]  h-max">
                  <div className="flex items-start justify-start gap-y-[2px] flex-col w-full h-max">
                    <span className="font-roboto leading-120 text-text_secondary text-base font-semibold w-full break-words whitespace-normal">
                      {data?.result?.[0]?.eventName}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full border-b border-border_tertiary23 bg-bg_appBackgroundColor">
            <div className=" flex flex-row font-manrope-regular items-center justify-start gap-0 text-nowrap capitalize text-[12px] px-1 relative">
              <div className="cursor-pointer w-full flex flex-row items-center justify-center">
                <span className=" text-text_secondary  py-2.5 px-1.5 text-[12px] md:text-[13px] lg:text-base font-bold leading-4 active:scale-95 flex items-center justify-center gap-x-1 block z-10 ">
                  Market
                </span>
              </div>
              <div className="cursor-pointer w-full flex flex-row items-center justify-center">
                <span className=" text-text_tertiary8  text-[12px] py-2.5 px-1.5 text-[12px] md:text-[13px] lg:text-base font-bold leading-4 active:scale-95 flex items-center justify-center gap-x-1 block z-10 ">
                  Match Info
                </span>
              </div>
              <div className="cursor-pointer w-full flex flex-row items-center justify-center">
                <span className=" text-text_tertiary8  text-[12px] py-2.5 px-1.5 text-[12px] md:text-[13px] lg:text-base font-bold leading-4 active:scale-95 flex items-center justify-center gap-x-1 block z-10 ">
                  Open Bets
                </span>
              </div>
              <div
                className="w-full h-1  absolute bottom-0 z-1 transition-all ease-in-out duration-150 bg-bg_eventTopActiveTab"
                style={{
                  width: "156.016px",
                  bottom: "0px",
                  left: "3.48959px",
                  height: "3px",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>
        </div>
        <div className="w-full h-max">
          <div className="flex items-start justify-start flex-col w-full pb-20">
            {matchOdds?.length > 0 && <MatchOdds data={matchOdds} />}
            {bookmaker?.length > 0 && <Bookmaker data={bookmaker} />}
            {data?.result?.length > 0 && <Fancy data={data?.result} />}
            {eventTypeId == 7 || eventTypeId == 4339 ? (
              <HorseGreyhoundEventDetails data={data?.result} />
            ) : null}
            {tiedMatch?.length > 0 && <MatchOdds data={tiedMatch} />}
          </div>
        </div>
      </div>
    </main>
  );
};

export default EventDetails;

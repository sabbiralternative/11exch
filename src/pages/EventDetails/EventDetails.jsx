import { MatchOdds } from "../../components/modules/EventDetails/MatchOdds";
import { Bookmaker } from "../../components/modules/EventDetails/Bookmaker";
import { Fancy } from "../../components/modules/EventDetails/Fancy";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useGetEventDetailsQuery,
  useVideoMutation,
} from "../../redux/features/events/events";
import { setPredictOdd } from "../../redux/features/events/eventSlice";
import { HorseGreyhoundEventDetails } from "../../components/modules/EventDetails/HorseGreyhoundEventDetails";
import Score from "../../components/modules/EventDetails/Score";
import { FaTv } from "react-icons/fa6";
import { Settings } from "../../api";
import OpenBets from "../../components/modals/OpenBets/OpenBets";

const EventDetails = () => {
  const [showOpenBetsModal, setShowOpenBetsModal] = useState(false);
  const [sportsVideo, { data: iframe }] = useVideoMutation();
  const [showScore, setShowScore] = useState(true);
  const [showVideo, setShowVideo] = useState(true);
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

  useEffect(() => {
    const handleGetVideo = async () => {
      const payload = {
        eventTypeId: eventTypeId,
        eventId: eventId,
        type: "video",
        casinoCurrency: Settings.casino_currency,
      };
      await sportsVideo(payload).unwrap();
    };
    handleGetVideo();
  }, []);

  return (
    <main className="w-full flex-1  pt-1  bg-bg_appBackgroundColor">
      <div className="w-full">
        <div className=" w-full sticky -top-0.5 left-0 right-0 z-[99]">
          <div className="w-full overflow-hidden ">
            <div className="flex items-center justify-between gap-y-1 flex-col w-full px-4 py-2 relative bg-bg_inputBgColor">
              <div className="absolute bottom-[-5.879px] top-0 w-[38%] left-0 h-[108%] z-0 bg-bg_topBarEventDetailsBg blur-97" />
              <div className="absolute bottom-[-5.879px] top-0 w-[38%] right-0 h-[108%] z-0 bg-bg_topBarEventDetailsBg blur-[157px]" />
              <div className="flex items-center justify-between relative w-full z-10">
                <div className="flex items-center gap-x-1 w-full ">
                  <span className="w-6 h-6">
                    <svg
                      _ngcontent-byj-c191
                      xmlns="http://www.w3.org/2000/svg"
                      width={22}
                      height={22}
                      viewBox="0 0 20 20"
                      fill="none"
                      className="ng-tns-c191-0"
                    >
                      <path
                        _ngcontent-byj-c191
                        d="M13.1213 17.0759L6.25 10.2046L13.1213 3.33325L14.0833 4.31242L8.19115 10.2046L14.0833 16.0968L13.1213 17.0759Z"
                        fill="#D71082"
                        className="ng-tns-c191-0"
                      />
                    </svg>
                  </span>
                  <div className="flex items-center justify-center px-1.5 py-1.5 rounded-full gap-0.5 pr-2.5 bg-giftBoxGradient shadow-sm">
                    <div className="relative w-max flex items-center justify-center">
                      <span className="inline-block w-2.5 h-2.5 z-0 rounded-full bg-red-600 animate-pulse " />
                      <span className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 inline-block z-2 rounded-full bg-red-600" />
                    </div>
                    <span className="font-roboto text-xs font-medium leading-120 text-text_secondary">
                      Upcoming (Opens in 42s)
                    </span>
                  </div>
                </div>
                <button
                  className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out cursor-pointer active:scale-90 transition-all duration-300 ease-in-out 
      cursor-pointer
      
      "
                  type="button"
                >
                  <svg
                    width={18}
                    height={18}
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1717_31141)">
                      <path
                        d="M8.5 0.5C4.07841 0.5 0.5 4.078 0.5 8.5C0.5 12.9215 4.078 16.5 8.5 16.5C12.9216 16.5 16.5 12.922 16.5 8.5C16.5 4.07847 12.922 0.5 8.5 0.5ZM8.5 15.3837C4.70431 15.3837 1.61628 12.2957 1.61628 8.5C1.61628 4.70428 4.70431 1.61628 8.5 1.61628C12.2957 1.61628 15.3837 4.70428 15.3837 8.5C15.3837 12.2957 12.2957 15.3837 8.5 15.3837Z"
                        fill="var(--color-icon_secondary)"
                      />
                      <path
                        d="M8.5003 7.1687C8.02642 7.1687 7.68945 7.36883 7.68945 7.66367V11.6757C7.68945 11.9285 8.02642 12.1812 8.5003 12.1812C8.95311 12.1812 9.32164 11.9285 9.32164 11.6757V7.66361C9.32164 7.36879 8.95311 7.1687 8.5003 7.1687Z"
                        fill="var(--color-icon_secondary)"
                      />
                      <path
                        d="M8.50019 4.69409C8.01578 4.69409 7.63672 5.04159 7.63672 5.44175C7.63672 5.84194 8.01581 6.19997 8.50019 6.19997C8.97406 6.19997 9.35319 5.84194 9.35319 5.44175C9.35319 5.04159 8.97403 4.69409 8.50019 4.69409Z"
                        fill="var(--color-icon_secondary)"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1717_31141">
                        <rect
                          width={16}
                          height={16}
                          fill="white"
                          transform="translate(0.5 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
              <div className=" w-full flex items-start justify-between gap-x-2 min-h-max">
                <div className=" w-[52%]  h-max">
                  <div className="flex items-start justify-start gap-y-[2px] flex-col w-full h-max">
                    <span className="font-roboto leading-120 text-text_secondary text-base font-semibold w-full break-words whitespace-normal">
                      {data?.result?.[0]?.eventName}
                    </span>
                    {/* <span className="font-roboto leading-120 text-[13px] text-text_secondary5 font-medium">
                      Womens International Twenty20 Matches
                    </span> */}
                  </div>
                </div>
                <div className="w-[48%] h-fiull text-end">
                  <div className="flex items-end justify-center relative z-1 flex-col gap-1 w-full">
                    <div className="font-roboto text-x1 font-normal leading-120 text-text_tertiary4" />
                    <div className="font-roboto text-x1 font-normal leading-120 text-text_tertiary4">
                      <span>In Play</span>: <span />
                    </div>
                  </div>
                </div>
                <div />
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

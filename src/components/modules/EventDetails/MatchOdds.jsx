import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useExposure } from "../../../hooks/exposure";
import {
  setPlaceBetValues,
  setRunnerId,
} from "../../../redux/features/events/eventSlice";
import BetSlip from "./BetSlip";
import toast from "react-hot-toast";
import { Settings } from "../../../api";
import { isGameSuspended } from "../../../utils/isOddSuspended";
import { handleCashOutPlaceBet } from "../../../utils/handleCashoutPlaceBet";
import SpeedCashOut from "../../modals/SpeedCashOut/SpeedCashOut";

export const MatchOdds = ({ data }) => {
  const [speedCashOut, setSpeedCashOut] = useState(null);
  const { eventId } = useParams();
  const [teamProfit, setTeamProfit] = useState([]);
  const dispatch = useDispatch();
  const { runnerId, stake, predictOdd } = useSelector((state) => state.event);
  const { token } = useSelector((state) => state.auth);
  const { windowWidth } = useSelector((state) => state.global);
  const { data: exposure } = useExposure(eventId);

  const handleBetSlip = (betType, games, runner, price) => {
    if (token) {
      let selectionId;
      let runnerId;
      let eventTypeId;
      if (!price) {
        return;
      }

      let pnlBySelection;
      const updatedPnl = [];

      if (exposure?.pnlBySelection) {
        const obj = exposure?.pnlBySelection;
        pnlBySelection = Object?.values(obj);
      }

      if (games?.btype == "FANCY") {
        selectionId = games?.id;
        runnerId = games?.id;
        eventTypeId = games?.eventTypeId;
      } else if (games?.btype && games?.btype !== "FANCY") {
        selectionId = runner?.id;
        runnerId = games.runners.map((runner) => runner.id);
        eventTypeId = games?.eventTypeId;
        games?.runners?.forEach((rnr) => {
          const pnl = pnlBySelection?.find((p) => p?.RunnerId === rnr?.id);
          if (pnl) {
            updatedPnl.push({
              exposure: pnl?.pnl,
              id: pnl?.RunnerId,
              isBettingOnThisRunner: rnr?.id === runner?.id,
            });
          } else {
            updatedPnl.push({
              exposure: 0,
              id: rnr?.id,
              isBettingOnThisRunner: rnr?.id === runner?.id,
            });
          }
        });
      }

      const betData = {
        price,
        side: betType === "back" ? 0 : 1,
        selectionId,
        btype: games?.btype,
        eventTypeId,
        betDelay: games?.betDelay,
        marketId: games?.id,
        lay: betType === "lay",
        back: betType === "back",
        selectedBetName: runner?.name,
        name: games.runners.map((runner) => runner.name),
        runnerId,
        isWeak: games?.isWeak,
        maxLiabilityPerMarket: games?.maxLiabilityPerMarket,
        isBettable: games?.isBettable,
        maxLiabilityPerBet: games?.maxLiabilityPerBet,
        exposure: updatedPnl,
        marketName: games?.name,
        eventId: games?.eventId,
        totalSize: 0,
      };
      if (games?.btype == "FANCY") {
        dispatch(setRunnerId(games?.id));
      } else if (games?.btype && games?.btype !== "FANCY") {
        dispatch(setRunnerId(runner?.id));
      } else {
        dispatch(setRunnerId(runner?.selectionId));
      }

      dispatch(setPlaceBetValues(betData));
    } else {
      toast.error("Please login to place a bet.");
    }
  };

  const computeExposureAndStake = (
    exposureA,
    exposureB,
    runner1,
    runner2,
    gameId,
  ) => {
    let runner,
      largerExposure,
      layValue,
      oppositeLayValue,
      lowerExposure,
      speedCashOut;

    const pnlArr = [exposureA, exposureB];
    const isOnePositiveExposure = onlyOnePositive(pnlArr);

    if (exposureA > exposureB) {
      // Team A has a larger exposure.
      runner = runner1;
      largerExposure = exposureA;
      layValue = runner1?.lay?.[0]?.price;
      oppositeLayValue = runner2?.lay?.[0]?.price;
      lowerExposure = exposureB;
    } else {
      // Team B has a larger exposure.
      runner = runner2;
      largerExposure = exposureB;
      layValue = runner2?.lay?.[0]?.price;
      oppositeLayValue = runner1?.lay?.[0]?.price;
      lowerExposure = exposureA;
    }
    if (exposureA > 0 && exposureB > 0) {
      const difference = Math.abs(exposureA - exposureB);
      if (difference <= 10) {
        speedCashOut = true;
      }
    }
    // Compute the absolute value of the lower exposure.
    let absLowerExposure = Math.abs(lowerExposure);

    // Compute the liability for the team with the initially larger exposure.
    let liability = absLowerExposure * (layValue - 1);

    // Compute the new exposure of the team with the initially larger exposure.
    let newExposure = largerExposure - liability;

    // Compute the profit using the new exposure and the lay odds of the opposite team.
    let profit = newExposure / layValue;

    // Calculate the new stake value for the opposite team by adding profit to the absolute value of its exposure.
    let newStakeValue = absLowerExposure + profit;

    // Return the results.
    return {
      runner,
      newExposure,
      profit,
      newStakeValue,
      oppositeLayValue,
      gameId,
      isOnePositiveExposure,
      exposureA,
      exposureB,
      runner1,
      runner2,
      speedCashOut,
    };
  };
  function onlyOnePositive(arr) {
    let positiveCount = arr?.filter((num) => num > 0).length;
    return positiveCount === 1;
  }
  useEffect(() => {
    let results = [];
    if (
      data?.length > 0 &&
      exposure?.pnlBySelection &&
      Object.keys(exposure?.pnlBySelection)?.length > 0
    ) {
      data.forEach((game) => {
        const runners = game?.runners || [];
        if (runners?.length === 2) {
          const runner1 = runners[0];
          const runner2 = runners[1];
          const pnl1 = pnlBySelection?.find(
            (pnl) => pnl?.RunnerId === runner1?.id,
          )?.pnl;
          const pnl2 = pnlBySelection?.find(
            (pnl) => pnl?.RunnerId === runner2?.id,
          )?.pnl;

          if (pnl1 && pnl2 && runner1 && runner2) {
            const result = computeExposureAndStake(
              pnl1,
              pnl2,
              runner1,
              runner2,
              game?.id,
            );
            results.push(result);
          }
        }
      });
      setTeamProfit(results);
    } else {
      setTeamProfit([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventId, data]);

  let pnlBySelection;
  if (exposure?.pnlBySelection) {
    const obj = exposure?.pnlBySelection;
    pnlBySelection = Object?.values(obj);
  }

  return (
    <Fragment>
      {speedCashOut && (
        <SpeedCashOut
          speedCashOut={speedCashOut}
          setSpeedCashOut={setSpeedCashOut}
        />
      )}
      {data?.length > 0 &&
        data?.map((game) => {
          const teamProfitForGame = teamProfit?.find(
            (profit) =>
              profit?.gameId === game?.id && profit?.isOnePositiveExposure,
          );
          const speedCashOut = teamProfit?.find(
            (profit) => profit?.gameId === game?.id && profit?.speedCashOut,
          );

          return (
            <div
              key={game?.id}
              className="flex items-center justify-center w-full px-3 pt-1"
            >
              <div className="flex items-center justify-center flex-col border text-text_secondary border-solid border-border_tertiary20 border-b-0 w-full rounded-md font-roboto">
                <div className="flex items-center justify-between py-1.5 px-2 w-full bg-cricketHeaderGradient relative rounded-tl-md rounded-tr-md">
                  <div className="absolute top-0 left-0 h-full w-[88%] border-tl-xl vector one-cricket-bg" />
                  <div className="absolute top-0 right-[7%] h-full w-[29%] vector2 circket-2-bg" />
                  <div className="flex items-center justify-between relative z-1 gap-1 w-[60%]">
                    <span className="font-roboto text-xs font-medium leading-150 capitalize">
                      {game?.name?.toUpperCase()}
                    </span>
                    <div className="flex items-center justify-center gap-[3px]">
                      {Settings.cashout &&
                        game?.runners?.length !== 3 &&
                        game?.status === "OPEN" &&
                        !speedCashOut && (
                          <button
                            onClick={() =>
                              handleCashOutPlaceBet(
                                game,
                                "lay",
                                dispatch,
                                pnlBySelection,
                                token,
                                teamProfitForGame,
                              )
                            }
                            style={{
                              cursor: `${
                                !teamProfitForGame ? "not-allowed" : "pointer"
                              }`,
                              opacity: `${!teamProfitForGame ? "0.6" : "1"}`,
                            }}
                            type="button"
                            className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out bg-bg_cashoutBtnGrad rounded-md px-1.5 py-0.5 text-center shadow-[inset_-12px_-8px_40px_#46464620] flex items-center justify-center flex-col flex-wrap w-max h-max mr-1 text-text_secondary2  active:scale-[98%] transition-all duration-300 ease-in-out 
      cursor-pointer
      
      "
                          >
                            <div className="text-[10px] md:text-[12px] text-text_secondary2  whitespace-nowrap">
                              Cashout{" "}
                              {teamProfitForGame?.profit &&
                                `(${teamProfitForGame.profit.toFixed(0)})`}
                            </div>
                          </button>
                        )}
                      {Settings.cashout &&
                        game?.runners?.length !== 3 &&
                        game?.status === "OPEN" &&
                        game?.name !== "toss" &&
                        speedCashOut && (
                          <button
                            onClick={() =>
                              setSpeedCashOut({
                                ...speedCashOut,
                                market_name: game?.name,
                                event_name: game?.eventName,
                              })
                            }
                            disabled={isGameSuspended(game)}
                            type="button"
                            className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out bg-bg_cashoutBtnGrad rounded-md px-1.5 py-0.5 text-center shadow-[inset_-12px_-8px_40px_#46464620] flex items-center justify-center flex-col flex-wrap w-max h-max mr-1 text-text_secondary2  active:scale-[98%] transition-all duration-300 ease-in-out 
      cursor-pointer
      
      "
                          >
                            <div className="text-[10px] md:text-[12px] text-text_secondary2  whitespace-nowrap">
                              Speed Cashout
                            </div>
                          </button>
                        )}

                      <div className="flex items-center justify-center gap-0.5 py-0.5 px-1 bg-bg_primary5 rounded">
                        <span className="w-4 h-4">
                          <svg
                            width={14}
                            height={14}
                            viewBox="0 0 10 10"
                            fill="var(--color-icon_secondary)"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="Watch">
                              <g id="62-Stopwatch">
                                <path
                                  id="Vector"
                                  d="M7.85933 3.20625L8.34683 2.72188C8.37597 2.69274 8.39908 2.65815 8.41485 2.62008C8.43062 2.58201 8.43874 2.54121 8.43874 2.5C8.43874 2.45879 8.43062 2.41799 8.41485 2.37992C8.39908 2.34185 8.37597 2.30726 8.34683 2.27813C8.31769 2.24899 8.2831 2.22588 8.24503 2.21011C8.20696 2.19434 8.16616 2.18622 8.12496 2.18622C8.08375 2.18622 8.04295 2.19434 8.00488 2.21011C7.96681 2.22588 7.93222 2.24899 7.90308 2.27813L7.41871 2.76563C6.8256 2.26054 6.08886 1.95448 5.31246 1.89063V1.25H5.93746C6.02034 1.25 6.09982 1.21708 6.15843 1.15847C6.21703 1.09987 6.24996 1.02038 6.24996 0.9375C6.24996 0.85462 6.21703 0.775134 6.15843 0.716529C6.09982 0.657924 6.02034 0.625 5.93746 0.625H4.06246C3.97958 0.625 3.90009 0.657924 3.84149 0.716529C3.78288 0.775134 3.74996 0.85462 3.74996 0.9375C3.74996 1.02038 3.78288 1.09987 3.84149 1.15847C3.90009 1.21708 3.97958 1.25 4.06246 1.25H4.68746V1.89063C3.84938 1.95984 3.0589 2.30873 2.44297 2.88126C1.82704 3.45379 1.42143 4.21673 1.29128 5.04753C1.16114 5.87832 1.31401 6.72875 1.72535 7.46221C2.13668 8.19566 2.78261 8.76958 3.55937 9.09176C4.33613 9.41394 5.19863 9.46569 6.00834 9.2387C6.81805 9.01171 7.52797 8.51915 8.02406 7.84014C8.52014 7.16112 8.77361 6.33508 8.74373 5.49468C8.71386 4.65429 8.40238 3.84832 7.85933 3.20625ZM4.99996 8.75C4.38189 8.75 3.7777 8.56672 3.2638 8.22334C2.7499 7.87996 2.34936 7.39191 2.11283 6.82089C1.87631 6.24987 1.81442 5.62153 1.935 5.01534C2.05558 4.40915 2.35321 3.85233 2.79025 3.41529C3.22729 2.97825 3.78411 2.68062 4.3903 2.56005C4.99649 2.43947 5.62482 2.50135 6.19584 2.73788C6.76686 2.9744 7.25492 3.37494 7.5983 3.88884C7.94168 4.40275 8.12496 5.00693 8.12496 5.625C8.12496 6.03538 8.04413 6.44174 7.88708 6.82089C7.73003 7.20003 7.49985 7.54453 7.20967 7.83471C6.91948 8.12489 6.57499 8.35508 6.19584 8.51212C5.8167 8.66917 5.41034 8.75 4.99996 8.75Z"
                                  fill="var(--color-icon_secondary)"
                                />
                                <path
                                  id="Vector_2"
                                  d="M5.31251 5.49688V3.75C5.31251 3.66712 5.27958 3.58763 5.22098 3.52903C5.16237 3.47042 5.08289 3.4375 5.00001 3.4375C4.91713 3.4375 4.83764 3.47042 4.77903 3.52903C4.72043 3.58763 4.68751 3.66712 4.68751 3.75V5.625C4.68727 5.66613 4.69515 5.7069 4.7107 5.74497C4.72625 5.78305 4.74917 5.81767 4.77813 5.84687L5.71563 6.78437C5.74468 6.81366 5.77924 6.83691 5.81733 6.85278C5.85541 6.86864 5.89625 6.87681 5.93751 6.87681C5.97876 6.87681 6.0196 6.86864 6.05769 6.85278C6.09577 6.83691 6.13033 6.81366 6.15938 6.78437C6.18867 6.75532 6.21192 6.72076 6.22778 6.68268C6.24365 6.6446 6.25182 6.60375 6.25182 6.5625C6.25182 6.52125 6.24365 6.4804 6.22778 6.44232C6.21192 6.40424 6.18867 6.36968 6.15938 6.34063L5.31251 5.49688Z"
                                  fill="var(--color-icon_secondary)"
                                />
                              </g>
                            </g>
                          </svg>
                        </span>
                        <span className="font-roboto text-xs font-medium leading-150 text-text_secondary tracking-widest">
                          0s
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-around relative z-1 gap-1 w-[40%]">
                    <span className="font-roboto text-center font-normal leading-150 uppercase w-[50%] text-text_secondary text-x">
                      Back
                    </span>
                    <span className="font-roboto text-center font-normal leading-150 uppercase w-[50%] text-text_secondary text-x">
                      Lay
                    </span>
                  </div>
                </div>
                {game?.runners?.map((runner) => {
                  const pnl = pnlBySelection?.find(
                    (pnl) => pnl?.RunnerId === runner?.id,
                  );
                  const predictOddValues = predictOdd?.find(
                    (val) => val?.id === runner?.id,
                  );
                  return (
                    <div
                      key={runner?.id}
                      className="flex items-center justify-between w-full border-b border-solid border-b-border_tertiary20 py-0.5 pr-0.5 pl-2"
                    >
                      <div className="w-[60%] grid grid-cols-3 items-center">
                        <div className="flex items-start justify-start gap-y-[1px] flex-col w-full col-span-3">
                          <div className="font-roboto text-md font-medium leading-120 capitalize text-text_secondary  w-full truncate">
                            {runner?.name}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-[1px] w-[40%]">
                        <div
                          title="2.08-2.1"
                          className={`w-full relative  ${runner?.status !== "OPEN" ? "opacity-70" : "cursor-pointer"}`}
                        >
                          <div className=" rounded-none rounded-sm w-full rounded-[0.375rem] grid grid-cols-2 text-[13px] text-text_secondary overflow-hidden">
                            <button
                              disabled={runner?.status !== "OPEN"}
                              title="leftOption-2.08"
                              onClick={() =>
                                handleBetSlip(
                                  "back",
                                  game,
                                  runner,
                                  runner?.back?.[0]?.price,
                                )
                              }
                              className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out h-[43px] col-span-1 w-full flex items-center justify-center bg-bg_backBtnBgColor  h-[2.1875rem] active:opacity-70 flex flex-col items-center justify-center  leading-4 disabled:opacity-80 font-bold    disabled:cursor-not-allowed 
      cursor-pointer
      active:scale-[98%]
      "
                              type="button"
                            >
                              <span className=" text-sm">
                                {" "}
                                {runner?.back?.[0]?.price}
                              </span>
                              <span className="text-x">
                                {runner?.back?.[0]?.size}
                              </span>
                            </button>
                            <button
                              disabled={runner?.status !== "OPEN"}
                              onClick={() =>
                                handleBetSlip(
                                  "back",
                                  game,
                                  runner,
                                  runner?.back?.[0]?.price,
                                )
                              }
                              title="rightOption-2.1"
                              className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out h-[43px] col-span-1 w-full flex items-center justify-center bg-bg_layBtnBgColor h-[2.1875rem] active:opacity-70 flex flex-col items-center justify-center leading-4  font-bold  disabled:cursor-not-allowed 
      cursor-pointer
      active:scale-[98%]
      "
                              type="button"
                            >
                              <span className="text-sm">
                                {" "}
                                {runner?.back?.[0]?.price}
                              </span>
                              <span className="text-x">
                                {" "}
                                {runner?.back?.[0]?.size}
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
    </Fragment>
  );
};

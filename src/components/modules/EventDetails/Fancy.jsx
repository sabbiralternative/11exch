import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useExposure } from "../../../hooks/exposure";
import { useGetLadderMutation } from "../../../redux/features/events/events";
import {
  setPlaceBetValues,
  setRunnerId,
} from "../../../redux/features/events/eventSlice";

import BetSlip from "./BetSlip";
import toast from "react-hot-toast";
import Ladder from "../../modals/Ladder/Ladder";

export const Fancy = ({ data }) => {
  const fancyData = data?.filter(
    (fancy) =>
      fancy.btype === "FANCY" &&
      fancy.tabGroupName === "Normal" &&
      fancy?.visible == true,
  );
  const [marketName, setMarketName] = useState("");
  const [ladderData, setLadderData] = useState([]);
  const { eventId } = useParams();

  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { runnerId } = useSelector((state) => state.event);
  const { data: exposure } = useExposure(eventId);
  const [getLadder] = useGetLadderMutation();

  const handleBetSlip = (betType, games, runner, price, bottomValue) => {
    if (token) {
      let selectionId;
      let runnerId;
      let eventTypeId;
      if (games?.status !== "OPEN") return;
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
        games?.runners?.forEach((runner) => {
          const pnl = pnlBySelection?.find((p) => p?.RunnerId === runner?.id);
          if (pnl) {
            updatedPnl.push(pnl?.pnl);
          }
        });
      } else {
        selectionId = runner?.selectionId;
        eventTypeId = games?.marketId;
        games?.runners?.forEach((runner) => {
          const pnl = pnlBySelection?.find(
            (p) => p?.RunnerId === runner?.selectionId,
          );
          if (pnl) {
            updatedPnl.push(pnl?.pnl);
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
        pnl: updatedPnl,
        marketName: games?.name,
        eventId: games?.eventId,
        totalSize: 0,
        bottomValue,
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

  let pnlBySelection;
  if (exposure?.pnlBySelection) {
    const obj = exposure?.pnlBySelection;
    pnlBySelection = Object?.values(obj);
  }

  const handleGetLadder = async (pnl, marketName) => {
    if (!pnl?.MarketId) {
      return;
    }
    setMarketName(marketName);
    const res = await getLadder({ marketId: pnl?.MarketId }).unwrap();

    if (res.success) {
      setLadderData(res.result);
    }
  };
  return (
    <Fragment>
      {ladderData?.length > 0 && (
        <Ladder
          ladderData={ladderData}
          setLadderData={setLadderData}
          marketName={marketName}
        />
      )}
      {fancyData?.length > 0 && (
        <div className="flex items-center justify-center w-full px-3 pt-1">
          <div className="flex items-center justify-center flex-col border text-text_secondary border-solid border-border_tertiary20 border-b-0 w-full rounded-md font-roboto">
            <div className="flex items-center justify-between py-1.5 px-2 w-full bg-cricketHeaderGradient relative rounded-tl-md rounded-tr-md">
              <div className="absolute top-0 left-0 h-full w-[88%] border-tl-xl vector one-cricket-bg" />
              <div className="absolute top-0 right-[7%] h-full w-[29%] vector2 circket-2-bg" />
              <div className="flex items-center justify-between relative z-1 gap-1 w-[60%]">
                <span className="font-roboto text-xs font-medium leading-150 capitalize">
                  Fancy
                </span>
              </div>
              <div className="flex items-center justify-around relative z-1 gap-1 w-[40%]">
                <span className="font-roboto text-center font-normal leading-150 uppercase w-[50%] text-text_secondary text-x">
                  No
                </span>
                <span className="font-roboto text-center font-normal leading-150 uppercase w-[50%] text-text_secondary text-x">
                  Yes
                </span>
              </div>
            </div>
            {fancyData?.map((game) => {
              const pnl = pnlBySelection?.find(
                (pnl) => pnl?.MarketId === game?.id,
              );
              return (
                <Fragment key={game?.id}>
                  <div className="flex items-center justify-between w-full border-b border-solid border-b-border_tertiary20 py-0.5 pr-0.5 pl-2">
                    <div className="w-[60%] grid grid-cols-3 items-center">
                      <div className="flex items-start justify-start gap-y-[1px]  w-full col-span-3">
                        <div className="font-roboto text-md font-medium leading-120 capitalize text-text_secondary  w-full truncate">
                          {game?.name}
                        </div>
                        {pnl && (
                          <div className="w-full flex flex-row gap-x-1">
                            <div
                              className={`text-[12px] font-bold ${
                                pnl?.pnl > 0 ? "text-green-500" : "text-red-500"
                              }`}
                            >
                              {pnl?.pnl}
                            </div>
                          </div>
                        )}
                        <div
                          onClick={() => handleGetLadder(pnl, game?.name)}
                          className={`${
                            pnl?.pnl
                              ? "opacity-100 cursor-pointer"
                              : "opacity-50 cursor-not-allowed"
                          }`}
                        >
                          <svg
                            height={18}
                            width={18}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="63d691358b4e4026f6539708_stairs 1">
                              <path
                                id="Vector"
                                d="M5.21875 3.13672V13.1367"
                                stroke="#fff"
                              ></path>
                              <path
                                id="Vector_2"
                                d="M5.21875 5.48047H10.5312"
                                stroke="#fff"
                              ></path>
                              <path
                                id="Vector_3"
                                d="M5.21875 8.13672H10.5312"
                                stroke="#fff"
                              ></path>
                              <path
                                id="Vector_4"
                                d="M5.21875 11.1055H10.5312"
                                stroke="#fff"
                              ></path>
                              <path
                                id="Vector_5"
                                d="M10.5312 3.13672V13.1367"
                                stroke="#fff"
                              ></path>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-[1px] w-[40%]">
                      <div
                        title="2.08-2.1"
                        className={`w-full relative ${game?.status !== "OPEN" ? "opacity-70" : "cursor-pointer"}`}
                      >
                        <div className=" rounded-none rounded-sm w-full rounded-[0.375rem] grid grid-cols-2 text-[13px] text-text_secondary overflow-hidden">
                          <button
                            disabled={game?.status !== "OPEN"}
                            onClick={() =>
                              handleBetSlip(
                                "lay",
                                game,
                                game?.runners?.[0],
                                game?.runners?.[0]?.lay?.[0]?.line,
                                game?.runners?.[0]?.lay?.[0]?.price,
                              )
                            }
                            title="leftOption-2.08"
                            className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out h-[43px] col-span-1 w-full flex items-center justify-center bg-bg_backBtnBgColor  h-[2.1875rem] active:opacity-70 flex flex-col items-center justify-center  leading-4 disabled:opacity-80 font-bold  disabled:cursor-not-allowed  
      cursor-pointer
      active:scale-[98%]
      "
                            type="button"
                          >
                            <span className=" text-sm">
                              {" "}
                              {game?.runners?.[0]?.lay?.[0]?.line}
                            </span>
                            <span className="text-x">
                              {" "}
                              {game?.runners?.[0]?.lay?.[0]?.price}
                            </span>
                          </button>
                          <button
                            disabled={game?.status !== "OPEN"}
                            onClick={() =>
                              handleBetSlip(
                                "back",
                                game,
                                game?.runners?.[0],
                                game?.runners?.[0]?.back?.[0]?.line,
                                game?.runners?.[0]?.back?.[0]?.price,
                              )
                            }
                            title="rightOption-2.1"
                            className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out h-[43px] col-span-1 w-full flex items-center justify-center bg-bg_layBtnBgColor h-[2.1875rem] active:opacity-70 flex flex-col items-center justify-center leading-4  font-bold  
      cursor-pointer
      active:scale-[98%] disabled:opacity-80 disabled:cursor-not-allowed
      "
                            type="button"
                          >
                            <span className="text-sm">
                              {game?.runners?.[0]?.back?.[0]?.line}
                            </span>
                            <span className="text-x">
                              {" "}
                              {game?.runners?.[0]?.back?.[0]?.price}
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {game?.id === runnerId && (
                    <BetSlip currentPlaceBetEvent={game} />
                  )}
                </Fragment>
              );
            })}
          </div>
        </div>
      )}
    </Fragment>
  );
};

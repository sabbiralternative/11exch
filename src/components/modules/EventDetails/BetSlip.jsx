import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useCurrentBets } from "../../../hooks/currentBets";
import useBalance from "../../../hooks/balance";
import { useExposure } from "../../../hooks/exposure";
import {
  setPlaceBetValues,
  setPrice,
  setRunnerId,
  setStake,
} from "../../../redux/features/events/eventSlice";
import { API, Settings } from "../../../api";
import { v4 as uuidv4 } from "uuid";
import { isBetDelay, isDelay } from "../../../utils/isBetDelay";
import { AxiosJSEncrypt } from "../../../lib/AxiosJSEncrypt";
import toast from "react-hot-toast";
import {
  handleDecreasePrice,
  handleIncreasePrice,
} from "../../../utils/editBetSlipPrice";
import BetLoading from "./BetLoading";

const BetSlip = ({ currentPlaceBetEvent }) => {
  const { closePopupForForever } = useSelector((state) => state.global);
  const [isCashOut, setIsCashOut] = useState(false);
  const [profit, setProfit] = useState(0);
  const { eventTypeId } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { eventId } = useParams();

  const { refetch: refetchCurrentBets } = useCurrentBets(eventId);
  const { refetch: refetchBalance } = useBalance();
  const { refetch: refetchExposure } = useExposure(eventId);
  const { placeBetValues, price, stake } = useSelector((state) => state?.event);

  const buttonValues = localStorage.getItem("buttonValue");
  let parseButtonValues = [];
  if (buttonValues) {
    parseButtonValues = JSON.parse(buttonValues);
  }

  useEffect(() => {
    dispatch(setPrice(parseFloat(placeBetValues?.price)));
    dispatch(
      setStake(
        placeBetValues?.totalSize > 0
          ? placeBetValues?.totalSize?.toFixed(2)
          : null,
      ),
    );
    setIsCashOut(placeBetValues?.cashout || false);
  }, [placeBetValues, dispatch]);

  let payload = {};
  if (price) {
    if (placeBetValues?.btype === "SPORTSBOOK") {
      payload = {
        price: price,
        side: placeBetValues?.side,
        selectionId: placeBetValues?.selectionId,
        btype: placeBetValues?.btype,
        placeName: placeBetValues?.placeName,
        eventTypeId: placeBetValues?.eventTypeId,
        betDelay: currentPlaceBetEvent?.betDelay,
        marketId: placeBetValues?.marketId,
        maxLiabilityPerMarket: placeBetValues?.maxLiabilityPerMarket,
        maxLiabilityPerBet: placeBetValues?.maxLiabilityPerBet,
        totalSize: stake,
        isBettable: placeBetValues?.isBettable,
        eventId: placeBetValues?.eventId,
        cashout: isCashOut,
        b2c: Settings.b2c,
      };
    } else {
      payload = {
        betDelay: currentPlaceBetEvent?.betDelay,
        btype: placeBetValues?.btype,
        eventTypeId: placeBetValues?.eventTypeId,
        marketId: placeBetValues?.marketId,
        price: price,
        selectionId: placeBetValues?.selectionId,
        side: placeBetValues?.side,
        totalSize: stake,
        maxLiabilityPerMarket: placeBetValues?.maxLiabilityPerMarket,
        isBettable: placeBetValues?.isBettable,
        maxLiabilityPerBet: placeBetValues?.maxLiabilityPerBet,
        eventId: placeBetValues?.eventId,
        cashout: isCashOut,
        b2c: Settings.b2c,
      };
    }
  }

  /* Handle bets */

  const handleOrderBets = async () => {
    setLoading(true);
    const payloadData = [
      {
        ...payload,

        nounce: uuidv4(),

        apk: closePopupForForever ? true : false,
        isbetDelay: isBetDelay(placeBetValues),
      },
    ];

    let delay = 0;

    if (isDelay(placeBetValues)) {
      if (
        eventTypeId == 4 &&
        placeBetValues?.btype === "MATCH_ODDS" &&
        price > 3 &&
        placeBetValues?.name?.length === 2
      ) {
        delay = 9000;
      }
      if (
        eventTypeId == 4 &&
        placeBetValues?.btype === "MATCH_ODDS" &&
        price > 7 &&
        placeBetValues?.name?.length === 3
      ) {
        delay = 9000;
      } else {
        delay = Settings?.bet_delay ? currentPlaceBetEvent?.betDelay * 1000 : 0;
      }
    }

    // Introduce a delay before calling the API
    setTimeout(async () => {
      try {
        // const res = await createOrder(payloadData).unwrap();
        const { data } = await AxiosJSEncrypt.post(API.order, payloadData);

        if (data?.success) {
          setLoading(false);
          refetchExposure();
          refetchBalance();
          dispatch(setRunnerId(null));
          dispatch(setPlaceBetValues(null));
          refetchCurrentBets();

          dispatch(setStake(null));
          toast.success(data?.result?.result?.placed?.[0]?.message);
        } else {
          setLoading(false);
          toast.error(
            data?.error?.status?.[0]?.description || data?.error?.errorMessage,
          );
        }
      } catch {
        toast.error("Something went wrong. Please try again.");
      }
    }, delay);
  };

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
      const bookmaker = 1 + price / 100;
      const total = bookmaker * stake - stake;

      setProfit(formatNumber(total));
    } else if (price && stake && placeBetValues?.btype === "FANCY") {
      const profit =
        (parseFloat(placeBetValues?.bottomValue) * parseFloat(stake)) /
        parseFloat(stake);
      setProfit(profit);
    }
  }, [price, stake, profit, placeBetValues, setProfit]);

  /* Format number */
  const formatNumber = (value) => {
    const hasDecimal = value % 1 !== 0;
    // value?.toFixed(2)
    return hasDecimal ? parseFloat(value?.toFixed(2)) : value;
  };

  const handleCancelBet = () => {
    dispatch(setRunnerId(null));
    dispatch(setPlaceBetValues(null));
    dispatch(setStake(null));
  };

  const handleButtonValue = (value) => {
    setIsCashOut(false);
    const buttonValue = Number(value);
    const prevStake = !stake ? null : Number(stake);

    if (prevStake === null) {
      dispatch(setStake(buttonValue));
    }
    if (prevStake >= 0) {
      dispatch(setStake(buttonValue + prevStake));
    }
  };

  return (
    <div className="w-full px-0.5">
      {loading && <BetLoading absolute={true} />}
      <div
        className="overflow-hidden transition-height  ease-in-out duration-200  w-full "
        style={{ height: "250px" }}
      >
        <div className=" bg-bg_secondary w-full h-max p-3 font-roboto rounded-sm border-b-[5px] border-solid border-border_betSlipBackBorderColor flex flex-col gap-y-[0.385rem]">
          <div className=" grid grid-cols-12 gap-x-2 w-full items-center">
            <div className="bg-bg_betSlipProfitColor border-border_betSlipProfitColor col-span-6 rounded-md py-[5px] px-2 border-l-[2px]  flex items-center justify-between shadow-md">
              <span className="text-text_tertiary9 text-xs font-medium">
                Profit :{" "}
              </span>
              <span className="text-text_tertiary10 text-xs font-semibold w-[60%] truncate text-end">
                ₹{profit}
              </span>
            </div>
            <div className="col-span-6 text-end w-full truncate text-[0.6875rem] text-text_tertiary13 font-semibold">
              Max Market: ₹ ${placeBetValues?.maxLiabilityPerBet}
            </div>
          </div>
          <div
            title="Odds-StakesInput"
            className=" w-full grid grid-cols-12 gap-x-[0.875rem] text-text_secondary2 "
          >
            <div
              title="OddsInput"
              className=" col-span-6 grid grid-cols-5 gap-x-2"
            >
              <div className=" col-span-5 flex flex-col gap-y-[0.25rem]">
                <span className=" text-text_tertiary14 text-[0.6875rem] font-medium">
                  ODDS
                </span>
                <div className="flex items-center justify-between w-full disabled:cursor-not-allowed w-full text-text_tertiary15 h-[2.5rem] flex items-center justify-start rounded-lg shadow-sm">
                  {!placeBetValues?.isWeak && (
                    <button
                      onClick={() => {
                        handleDecreasePrice(
                          price,
                          placeBetValues,
                          dispatch,
                          setPrice,
                        );
                        setIsCashOut(false);
                      }}
                      className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out cursor-pointer bg-bg_increamentDecrementBtn text-white h-full px-[1px] py-1.5 min-w-[25%] flex items-center justify-center active:scale-[99.5%] active:opacity-80 transition-all duration-300 ease-in-out  rounded-l-lg 
      cursor-pointer
      
      "
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 18 4"
                        fill="var(--color-icon_secondary)"
                      >
                        <path
                          d="M16.3363 3.1535H1.66367C1.02639 3.1535 0.51001 2.63713 0.51001 1.99985C0.51001 1.36257 1.02639 0.846191 1.66367 0.846191H16.3363C16.9736 0.846191 17.49 1.36257 17.49 1.99985C17.49 2.63713 16.9736 3.1535 16.3363 3.1535Z"
                          fill="var(--color-icon_secondary)"
                        />
                      </svg>
                    </button>
                  )}

                  <input
                    onChange={(e) => {
                      dispatch(setPrice(e.target.value));
                      setIsCashOut(false);
                    }}
                    value={price}
                    placeholder="Enter Odds"
                    className="block w-full focus:outline-none   border border-l-0 border-r-0 border-solid border-border_secondary10 text-center h-full focus:border-border_primary text-sm  flex items-center text-center justify-center"
                    autoComplete="off"
                    type="number"
                  />
                  {!placeBetValues?.isWeak && (
                    <button
                      onClick={() => {
                        handleIncreasePrice(
                          price,
                          placeBetValues,
                          dispatch,
                          setPrice,
                        );
                        setIsCashOut(false);
                      }}
                      className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out cursor-pointer bg-bg_increamentDecrementBtn text-white h-full px-[1px] py-1.5 min-w-[25%] flex items-center justify-center active:scale-[99.5%] active:opacity-80 transition-all duration-300 ease-in-out  rounded-r-lg 
      cursor-pointer
      
      "
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 18 18"
                        fill="var(--color-icon_secondary)"
                      >
                        <path
                          d="M8.99997 17.4897C8.36269 17.4897 7.84631 16.9734 7.84631 16.3361V1.66342C7.84631 1.02614 8.36269 0.509766 8.99997 0.509766C9.63725 0.509766 10.1536 1.02614 10.1536 1.66342V16.3361C10.1536 16.9734 9.63725 17.4897 8.99997 17.4897Z"
                          fill="var(--color-icon_secondary)"
                        />
                        <path
                          d="M16.3363 10.1535H1.66367C1.02639 10.1535 0.51001 9.63713 0.51001 8.99985C0.51001 8.36257 1.02639 7.84619 1.66367 7.84619H16.3363C16.9736 7.84619 17.49 8.36257 17.49 8.99985C17.49 9.63713 16.9736 10.1535 16.3363 10.1535Z"
                          fill="var(--color-icon_secondary)"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div
              title="StakesInput"
              className=" col-span-6 flex flex-col gap-y-[0.25rem]"
            >
              <span className=" text-text_tertiary14 text-[0.6875rem] font-medium uppercase">
                Stakes
              </span>
              <span>
                <input
                  onChange={(e) => {
                    dispatch(setStake(e.target.value));
                    setIsCashOut(false);
                  }}
                  placeholder={`Max bet: ${placeBetValues?.maxLiabilityPerBet}`}
                  value={stake || ""}
                  className="block w-full focus:outline-none  w-full text-text_tertiary15 border border-solid focus:border-border_primary h-10 flex items-center justify-start transition-all duration-300 ease-in-out rounded-lg px-1.5 shadow-sm border-border_secondary10 flex items-center text-center justify-center"
                  autoComplete="off"
                  type="number"
                />
              </span>
            </div>
          </div>
          <div className=" grid grid-cols-12 gap-x-1 gap-y-1 ">
            {parseButtonValues?.slice(0, 6)?.map((button, i) => (
              <button
                key={i}
                onClick={() => handleButtonValue(button?.value)}
                className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out  bg-bg_betSlipBtnsBgColor text-[0.875rem] font-medium rounded-[1.375rem] py-2 px-[0.9375rem] w-full col-span-3 overflow-hidden w-full text-[12px] py-2 font-semibold rounded-[4px]  bg-bg_betSlipBtnsBgColor text-text_secondary text-center border  focus:border-border_primary 
      cursor-pointer
      
      "
                type="button"
              >
                {button?.value}
              </button>
            ))}
          </div>
          <div className=" grid grid-cols-12 gap-x-1 gap-y-1 ">
            <button
              onClick={() => dispatch(setStake(parseButtonValues[0]?.value))}
              className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out col-span-3 w-full text-[10px] min-h-[26px] font-semibold  rounded-[4px] bg-minBtnGrd text-text_secondary py-2 
      cursor-pointer
      
      "
              type="button"
            >
              MIN
            </button>
            <button
              onClick={() =>
                dispatch(
                  setStake(
                    parseButtonValues?.[parseButtonValues?.length - 1]?.value,
                  ),
                )
              }
              className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out col-span-3 w-full text-[10px] font-semibold rounded-[4px] bg-maxBtnGrd text-text_secondary py-2 
      cursor-pointer
      
      "
              type="button"
            >
              MAX
            </button>

            <button
              onClick={() => {
                dispatch(setStake(null));
              }}
              className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out col-span-3 w-full text-[10px] font-semibold rounded-[4px] bg-clearBtnGrd text-text_secondary leading-4 py-2 
      cursor-pointer
      
      "
              id="clearBtn"
              type="button"
            >
              CLEAR
            </button>
          </div>
          <div title="BetBtns" className=" grid grid-cols-2 gap-x-2 w-full">
            <button
              onClick={handleCancelBet}
              className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out  col-span-1 w-full bg-bg_betSlipCancelBtnBg text-transparent bg-clip-text font-semibold font-bold  text-base text-center border h-full border-solid border-border_cancelBtnBorderColor rounded-lg min-h-10 flex items-center justify-center shadow-sm 
      cursor-pointer
      
      "
              type="button"
            >
              Cancel Bet
            </button>
            <div className="w-full">
              <button
                onClick={handleOrderBets}
                className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out col-span-1 w-full bg-bg_betSlipPlaceBetBtnBg font-semibold font-bold  text-base text-center border border-solid rounded-lg min-h-10 h-full flex items-center justify-center shadow-betSlipPlaceBetBtnBoxShadow text-text_tertiary17 disabled:opacity-80 disabled:cursor-not-allowed cursor-pointer 
      cursor-pointer
      
      "
                type="button"
              >
                Place Bet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetSlip;

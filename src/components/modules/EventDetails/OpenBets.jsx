import { Fragment } from "react";
import toast from "react-hot-toast";
import useSBCashOut from "../../../hooks/sb_cashout";

const OpenBets = ({ currentBets, sportsBook, refetch }) => {
  const { mutate: cashOut } = useSBCashOut();
  const sports =
    sportsBook &&
    sportsBook?.MarketGroups?.filter(
      (group) =>
        group?.Name !== "Bet Builder" &&
        group?.Name !== "Fast Markets" &&
        group?.Name !== "Player Specials",
    );
  const handleCashOut = ({ betHistory, sportsBook, price, cashout_value }) => {
    let item;
    sports?.forEach((group) => {
      group?.Items?.forEach((data) => {
        if (betHistory?.marketId == data?.Id) {
          item = data;
        }
      });
    });

    const column = item?.Items?.find(
      (col) => col?.Id === betHistory?.selectionId,
    );

    const payload = {
      price,
      cashout_value,
      back: true,
      side: 0,
      selectionId: column?.Id,
      btype: "SPORTSBOOK",
      placeName: column?.Name,
      eventTypeId: sportsBook?.EventTypeId,
      betDelay: sportsBook?.betDelay,
      marketId: item?.Id,
      maxLiabilityPerMarket: item?.maxLiabilityPerMarket,
      maxLiabilityPerBet: item?.maxLiabilityPerBet,
      isBettable: sportsBook?.isBettable,
      isWeak: sportsBook?.isWeak,
      marketName: item?.Name,
      eventId: sportsBook?.eventId,
      betId: betHistory?.betId,
    };

    cashOut(payload, {
      onSuccess: (data) => {
        if (data?.success) {
          refetch();
          toast.success(data?.result?.message);
        } else {
          toast.error(data?.error);
        }
      },
    });
  };
  return (
    <Fragment>
      {currentBets && currentBets?.length > 0 && (
        <div className="mt-1 w-full">
          {currentBets?.map((bet) => {
            let column;
            sports?.forEach((group) => {
              group?.Items?.forEach((data) => {
                if (bet?.marketId == data?.Id) {
                  column = data?.Items?.find(
                    (col) => col?.Id === bet?.selectionId,
                  );
                }
              });
            });

            const price = (
              0.92 * bet?.amount * (bet?.userRate / column?.Price) -
              bet?.amount
            )?.toFixed(2);
            return (
              <div
                key={bet?.betId}
                className=" bg-gray-700 rounded-md mb-1 px-4 w-full py-3  "
              >
                <div
                  id="eventHeader"
                  className="  font-semibold flex items-center justify-between"
                >
                  <div
                    className={`font-medium underline capitalize text-sm  ${
                      bet?.betType === "Back"
                        ? "text-green-400"
                        : "text-rose-400"
                    }`}
                  >
                    {bet?.title}
                  </div>

                  {bet?.cashout && column && (
                    <button
                      onClick={() =>
                        handleCashOut({
                          betHistory: bet,
                          sportsBook,
                          price: column?.Price,
                          cashout_value: price,
                        })
                      }
                      type="button"
                      className="btn_box "
                      style={{
                        width: "100px",
                        backgroundColor: "#f3f3f3ff",
                        display: "flex",
                        alignItems: "center",
                        cursor: `pointer`,
                        justifyContent: "center",
                        gap: "0px 2px",
                        borderRadius: "2px",
                      }}
                    >
                      <span style={{ fontSize: "10px", color: "black" }}>
                        Cashout
                      </span>
                      {price && (
                        <span style={{ color: "black", fontSize: "10px" }}>
                          :
                        </span>
                      )}

                      {price && (
                        <span
                          style={{
                            color: `${price > 0 ? "green" : "red"}`,
                            fontSize: "10px",
                          }}
                        >
                          {price}
                        </span>
                      )}
                    </button>
                  )}
                </div>
                <div className=" font-normal text-white  capitalize text-xs font-lato">
                  {bet?.marketName}
                </div>
                <div
                  id="tiem_Date_of_order_0_1743688800000"
                  className=" text-xs font-lato font-normal text-white"
                >
                  <strong>Placed : </strong>
                  <span>{bet?.placeDate}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {currentBets?.length === 0 || !currentBets ? (
        <div className="mt-1 text-white flex items-center justify-center w-full my-2">
          No bet available
        </div>
      ) : null}
    </Fragment>
  );
};

export default OpenBets;

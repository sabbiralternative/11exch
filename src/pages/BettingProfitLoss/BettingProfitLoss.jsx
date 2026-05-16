import { useNavigate } from "react-router-dom";

import { useAccountStatement } from "../../hooks/accountStatement";
import { from_date, to_date } from "../../utils/default-date";
import { useSelector } from "react-redux";
import { userToken } from "../../redux/features/auth/authSlice";
import moment from "moment";

const BettingProfitLoss = () => {
  const { data: passbook } = useAccountStatement({
    from: from_date,
    to: to_date,
    type: "GR",
  });
  const navigate = useNavigate();
  const token = useSelector(userToken);
  const handleNavigateSinglePassbook = (item) => {
    if (item?.plDetails) {
      navigate(`/betting-profit-loss/${item?.marketId}`);
    }
  };

  const getUniqueDate =
    passbook &&
    Array.from(new Set(passbook?.result?.map((item) => item?.settledTime)));

  return (
    <main className="w-full flex-1  pt-1 overflow-y-auto scroll-smooth bg-bg_appBackgroundColor">
      <nav className="flex items-center py-2  h-max justify-start gap-1.5 w-full text-text_secondary font-roboto text-sm font-normal leading-120 py-2 bg-bg_appBackgroundColor w-full z-10 capitalize border-b border-solid border-border_secondary px-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          viewBox="0 0 20 20"
          fill="none"
          className="w-5 h-5"
        >
          <path
            d="M13.1213 17.0759L6.25 10.2046L13.1213 3.33325L14.0833 4.31242L8.19115 10.2046L14.0833 16.0968L13.1213 17.0759Z"
            fill="#D71082"
            className="ng-tns-c191-0"
          />
        </svg>
        <span className="text-text_secondary">Betting Profit &amp; Loss</span>
      </nav>
      <div className="flex items-center justify-center flex-col gap-y-3 w-full px-3 ">
        {token && getUniqueDate?.length > 0 ? (
          getUniqueDate?.map((category) => {
            const filterData = passbook?.result?.filter(
              (item) => item.settledTime?.split(" ")[0] === category,
            );
            const totalPnl = filterData?.reduce((acc, curr) => {
              return acc + curr.memberWin;
            }, 0);
            return (
              <div
                key={category}
                title="Profit & Loss Statement"
                className="w-full px-1 my-1.5 font "
              >
                <div className="w-full text-text_color_primary2 rounded-[4px] flex items-center justify-between px-2.5 py-[9px] bg-primary1">
                  <div className="text-xs text-white  font-[600] leading-[140%]">
                    {moment(category).format("Do-MMM-YYYY")}
                  </div>
                  <div className="text-xs text-text_color_primary2  font-[600] flex items-center justify-center leading-[140%]">
                    <span className="text-white">Total PL</span>
                    <span className="-mt-0.5 ml-1 text-white">:</span>
                    <span
                      className={`ml-1 ${
                        totalPnl > 0
                          ? "text-green-500"
                          : totalPnl < 0
                            ? "text-red-500"
                            : "text-white"
                      }`}
                      style={{ textShadow: "1px 1px #000000" }}
                    >
                      {totalPnl?.toFixed(2)}
                    </span>
                  </div>
                </div>
                {filterData?.map((item) => (
                  <div
                    onClick={() => handleNavigateSinglePassbook(item)}
                    key={item?.eventId}
                    className="w-full flex bg-bg_color_primary active:scale-95 transition-all ease-in-out duration-200 flex-col rounded-[4px] items-center justify-start gap-y-1 my-1 shadow-md cursor-pointer"
                  >
                    <div className="w-full text-start  bg-gray-400 bg-clip-text text-transparent px-2.5 py-2 text-xs font-[550] capitalize flex items-center justify-between">
                      <span>{item?.narration}</span>
                      <span className="text-gray-400">{item?.time}</span>
                    </div>
                    <div className="w-full bg-bg_secondary px-2.5 py-2 flex items-center justify-between  text-xs sm:text-sm">
                      <span className="text-text_color_primary1 w-1/2 border-r border-r-border_color_primary flex items-center justify-start gap-x-1">
                        <span>PL:</span>
                        <span
                          className={`font-semibold  ${
                            item?.memberWin > 0
                              ? "text-green-500"
                              : item?.memberWin < 0
                                ? "text-red-500"
                                : "text-black"
                          }`}
                        >
                          ₹ {item?.memberWin}
                        </span>
                      </span>
                      <span className="text-text_color_primary1 w-1/2 flex items-center justify-end gap-x-1">
                        <span>Balance:</span>
                        <span className="font-semibold ">
                          ₹ {item?.balance}
                        </span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            );
          })
        ) : (
          <div className="flex items-center justify-center w-full pt-20">
            <h2 className="text-base text-white">
              No betting profit and loss yet!
            </h2>
          </div>
        )}
      </div>
    </main>
  );
};

export default BettingProfitLoss;

import { useNavigate } from "react-router-dom";
import { useCurrentBets } from "../../hooks/currentBets";

const OpenBets = () => {
  const navigate = useNavigate();
  const { data: myBets } = useCurrentBets();

  return (
    <main className="w-full flex-1  pt-1 overflow-y-auto scroll-smooth bg-bg_appBackgroundColor">
      <nav
        onClick={() => navigate(-1)}
        className="flex items-center py-2  h-max justify-start gap-1.5 w-full text-text_secondary font-roboto text-sm font-normal leading-120 py-2 bg-bg_appBackgroundColor w-full z-10 capitalize border-b border-solid border-border_secondary px-3"
      >
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
        <span className="text-text_secondary">Open Bets</span>
      </nav>
      <div className=" w-full h-max mb-[60px] overflow-y-auto">
        {myBets?.length > 0 ? (
          <div className="w-full origin-top scaleVerticalOpen">
            <div className="flex flex-col gap-1 w-full">
              {myBets?.map((bet) => {
                return (
                  <div
                    key={bet?.betId}
                    className=" bg-white rounded-md divide-y divide-divide_color_primary1 w-full shadow "
                  >
                    <div id="eventHeader" className="font-semibold   px-3 py-2">
                      <div
                        onClick={() => {
                          navigate(
                            `/event-details/${bet?.eventTypeId}/${bet?.eventId}`,
                          );
                        }}
                        className={`font-medium underline capitalize text-sm cursor-pointer   ${
                          bet?.betType === "Back"
                            ? "text-text_color_changeAnimationBack "
                            : "text-text_color_changeAnimationLay"
                        }`}
                      >
                        {bet?.title}
                      </div>
                    </div>
                    <div className="px-3 py-2 text-text_color_primary1  uppercase  flex flex-col">
                      <span className=" font-semibold text-xs ">
                        {bet?.nation}
                      </span>
                      <span className=" font-normal text-xs">
                        {bet?.sports}
                      </span>
                    </div>
                    <div
                      id="tiem_Date_of_order_0_1745380800000"
                      className=" text-xs px-3 py-2 text-center bg-bg_color_tertiary1  font-normal rounded-b-md text-text_color_primary1"
                    >
                      PLACED - {bet?.placeDate}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="w-full origin-top scaleVerticalOpen">
            <div className="w-full font-medium text-sm bg-bg_color_primary rounded px-4  py-3 shadow text-white ">
              You have no matched Bets.
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default OpenBets;

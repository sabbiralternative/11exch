import { useNavigate, useParams } from "react-router-dom";

export const LeftSidebar = () => {
  const { eventName } = useParams();
  const navigate = useNavigate();

  return (
    <div className="bg-white w-[15%] min-w-60 h-full hidden md:block overflow-auto hide-scrollbar shadow-md z-30">
      <div className="min-w-28 flex flex-col">
        <div className="bg-black text-white px-3 py-2 border-b-2 border-goldenYellow text-[13px]">
          Sports
        </div>
        <div className="border-b border-goldenYellow">
          <button
            type="button"
            className="flex justify-between items-center w-full bg-white text-black px-3 py-1 text-left hover:bg-gray1 cursor-pointer text-[13px] border-b border-black"
          >
            <span className="flex-1">All Sports</span>
            <span className="flex-shrink-0">
              <img
                src="data:image/svg+xml,%3csvg%20width='15'%20height='14'%20viewBox='0%200%2015%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.0127%2011.833V1.64746C14.0127%201.2373%2013.8703%200.889811%2013.5854%200.60498C13.3006%200.32015%2012.9531%200.177734%2012.543%200.177734H2.35742C1.94727%200.177734%201.59977%200.32015%201.31494%200.60498C1.03011%200.889811%200.887695%201.2373%200.887695%201.64746V11.833C0.887695%2012.2432%201.03011%2012.5907%201.31494%2012.8755C1.59977%2013.1603%201.94727%2013.3027%202.35742%2013.3027H12.543C12.9531%2013.3027%2013.3006%2013.1603%2013.5854%2012.8755C13.8703%2012.5907%2014.0127%2012.2432%2014.0127%2011.833ZM2.35742%2011.833V1.64746H12.543V11.833H2.35742ZM4.10059%204.04004L7.4502%207.38965L10.7998%204.04004L11.8252%205.06543L7.4502%209.44043L3.0752%205.06543L4.10059%204.04004Z'%20fill='%23243A48'/%3e%3c/svg%3e"
                alt="down"
                className="h-[15px] w-[15px]"
              />
            </span>
          </button>
          <div className="bg-white">
            <button
              onClick={() => navigate("/exchange_sports/inplay/0")}
              type="button"
              className="w-full text-left px-3 py-1 text-black border-b border-goldenYellow last:border-b-0 hover:bg-gray1 cursor-pointer capitalize text-[13px]"
            >
              Inplay
            </button>
            <button
              onClick={() => navigate("/exchange_sports/cricket/4")}
              type="button"
              className="w-full text-left px-3 py-1 text-black border-b border-goldenYellow last:border-b-0 hover:bg-gray1 cursor-pointer capitalize text-[13px]"
            >
              Cricket
            </button>
            <button
              onClick={() => navigate("/exchange_sports/football/1")}
              type="button"
              className="w-full text-left px-3 py-1 text-black border-b border-goldenYellow last:border-b-0 hover:bg-gray1 cursor-pointer capitalize text-[13px]"
            >
              Football
            </button>
            <button
              onClick={() => navigate("/exchange_sports/tennis/2")}
              type="button"
              className="w-full text-left px-3 py-1 text-black border-b border-goldenYellow last:border-b-0 hover:bg-gray1 cursor-pointer capitalize text-[13px]"
            >
              Tennis
            </button>

            <button
              onClick={() => navigate("/exchange_sports/horserace/7")}
              type="button"
              className="w-full text-left px-3 py-1 text-black border-b border-goldenYellow last:border-b-0 hover:bg-gray1 cursor-pointer capitalize text-[13px]"
            >
              Horse Racing
            </button>
            <button
              onClick={() => navigate("/exchange_sports/greyhound/4339")}
              type="button"
              className="w-full text-left px-3 py-1 text-black border-b border-goldenYellow last:border-b-0 hover:bg-gray1 cursor-pointer capitalize text-[13px]"
            >
              GreyHound
            </button>

            <button
              onClick={() => navigate("/exchange_sports/kabaddi/6")}
              type="button"
              className="w-full text-left px-3 py-1 text-black border-b border-goldenYellow last:border-b-0 hover:bg-gray1 cursor-pointer capitalize text-[13px]"
            >
              Kabaddi
            </button>
          </div>
        </div>
        <div className="text-[13px]">
          <div className="bg-black text-white capitalize px-3 py-1 border-b-2 border-goldenYellow">
            {eventName}
          </div>
        </div>
      </div>
    </div>
  );
};

import { useLocation, useNavigate } from "react-router-dom";
import NavSLider from "../../components/modules/Sports/NavSLider";
import { useGroupQuery } from "../../hooks/group";
import { useEffect, useMemo, useState } from "react";
import Upcoming from "../../components/modules/Sports/Upcoming";
import Footer from "../../components/UI/Footer/Footer";
import InPlay from "../../components/modules/Sports/InPlay";

const Sports = () => {
  const [uniqueDates, setUniqueDates] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const eventTypeId = params.get("eventTypeId");
  const { data } = useGroupQuery({ sportsType: Number(eventTypeId) || 4 });

  const navigateGameList = (eventTypeId, keys) => {
    navigate(`/event-details/${eventTypeId}/${keys}`);
  };

  const groupedData = useMemo(() => {
    if (!data) return { inPlay: {}, upcoming: {} };

    return Object.entries(data).reduce(
      (acc, [key, value]) => {
        if (!value.visible) return acc;

        if (value.inPlay === 1) {
          acc.inPlay[key] = value;
        } else {
          acc.upcoming[key] = value;
        }

        return acc;
      },
      { inPlay: {}, upcoming: {} },
    );
  }, [data]);

  useEffect(() => {
    if (groupedData.upcoming) {
      const categories = Array.from(
        new Set(
          Object.values(groupedData.upcoming)

            .map((item) => item.date?.split(" ")[0]),
        ),
      );
      setUniqueDates(categories);
    }
  }, [groupedData.upcoming]);

  return (
    <main className="w-full flex-1  pt-1 overflow-y-auto scroll-smooth bg-bg_appBackgroundColor">
      <div className=" w-full h-full flex flex-col">
        <NavSLider />
        <div className="flex-1 w-full overflow-y-auto">
          <div className="w-full px-2 h-full">
            <div className="w-full h-max">
              <InPlay
                groupedData={groupedData}
                navigateGameList={navigateGameList}
              />
              {Object.keys(groupedData?.upcoming).length > 0 && (
                <div className=" w-max py-2">
                  <div className=" flex flex-row font-manrope-regular items-center justify-start gap-2.5 relative">
                    <div className="cursor-pointer w-full flex flex-row items-center justify-center">
                      <span className=" text-text_secondary  px-[25px] py-2  text-[13px] md:text-sm lg:text-base font-bold leading-4 active:scale-95 block z-10 ">
                        Upcoming
                      </span>
                    </div>

                    <div
                      className="absolute z-1 w-full h-full transition-all ease-in-out duration-150 bg-bg_UpcomingliveBgColor text-sm rounded-full border border-solid border-current"
                      style={{
                        width: "119.701px",
                        top: "1px",
                        left: "0px",
                        height: "29.6484px",
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
            <Upcoming
              upcoming={groupedData?.upcoming}
              uniqueDates={uniqueDates}
              navigateGameList={navigateGameList}
            />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Sports;

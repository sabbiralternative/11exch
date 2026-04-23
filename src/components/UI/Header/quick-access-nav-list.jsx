import { Link, useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
import EditStake from "../../modals/EditState/EditStake";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { Settings } from "../../../api";
import WarningCondition from "../../shared/WarningCondition/WarningCondition";
import { useGroupQuery } from "../../../hooks/group";

export const QuickAccessNavList = () => {
  const navigate = useNavigate();
  const [showWarning, setShowWarning] = useState(false);
  const [gameInfo, setGameInfo] = useState({ gameName: "", gameId: "" });
  const { token, bonusToken } = useSelector((state) => state.auth);
  const [showEditStakeModal, setShowEditStakeModal] = useState(false);
  const { data } = useGroupQuery({ sportsType: Number(0) });
  const groupedData = useMemo(() => {
    if (!data) return { cricket: 0, football: 0, tennis: 0 };

    return Object.values(data).reduce(
      (acc, value) => {
        if (!value.visible) return acc;
        if (value.inPlay === 0) return acc;

        if (value.eventTypeId === 4) acc.cricket++;
        if (value.eventTypeId === 2) acc.tennis++;
        if (value.eventTypeId === 1) acc.football++;

        return acc;
      },
      {
        cricket: 0,
        football: 0,
        tennis: 0,
      },
    );
  }, [data]);

  const handleNavigateToIFrame = (name, id) => {
    if (token) {
      if (bonusToken) {
        return toast.error("Bonus wallet is available only on sports.");
      }
      if (Settings.casino_currency !== "AED") {
        navigate(`/casino/${name}/${id}`);
      } else {
        setGameInfo({ gameName: "", gameId: "" });
        setGameInfo({ gameName: name, gameId: id });
        setShowWarning(true);
      }
    } else {
      toast.error("Please login to access the game");
    }
  };
  return (
    <div className="relative z-10 w-screen overflow-visible hide-scrollbar bg-sub-header-gradient text-black max-md:hidden">
      {showWarning && (
        <WarningCondition gameInfo={gameInfo} setShowWarning={setShowWarning} />
      )}
      {showEditStakeModal && (
        <EditStake setShowEditStakeModal={setShowEditStakeModal} />
      )}
      <div className="flex min-w-full font-bold text-[12px] relative">
        <div className="relative w-full">
          <div className="flex overflow-x-auto hide-scrollbar pr-[100px]">
            <Link
              className="text-center text-xs text-nowrap px-3 py-[7px] border-r border-gray4 capitalize"
              to="/"
            >
              <div className="flex items-center justify-center gap-1">Home</div>
            </Link>
            <Link
              className="text-center text-xs text-nowrap px-3 py-[7px] border-r border-gray4 capitalize"
              to="/exchange_sports/inplay/0"
            >
              <div className="flex items-center justify-center gap-1">
                In-play
              </div>
            </Link>

            <Link
              className="text-center text-xs text-nowrap px-3 py-[7px] border-r border-gray4 capitalize"
              to="/exchange_sports/cricket/4"
            >
              <div className="flex items-center justify-center gap-1">
                Cricket
                {groupedData?.cricket > 0 && (
                  <span className="inline-flex items-center rounded bg-white text-[10px] font-normal text-red-500 absolute top-[-10px] m-auto">
                    <div className="px-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-radio h-3 w-3 shrink-0 text-red-500"
                      >
                        <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
                        <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
                        <circle cx={12} cy={12} r={2} />
                        <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
                        <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" />
                      </svg>
                    </div>
                    <div className="bg-red-500 text-white font-bold rounded-r px-1">
                      {groupedData?.cricket}
                    </div>
                  </span>
                )}
              </div>
            </Link>
            <Link
              className="text-center text-xs text-nowrap px-3 py-[7px] border-r border-gray4 capitalize"
              to="/exchange_sports/football/1"
            >
              <div className="flex items-center justify-center gap-1">
                Football
                {groupedData?.football > 0 && (
                  <span className="inline-flex items-center rounded bg-white text-[10px] font-normal text-red-500 absolute top-[-10px] m-auto">
                    <div className="px-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-radio h-3 w-3 shrink-0 text-red-500"
                      >
                        <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
                        <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
                        <circle cx={12} cy={12} r={2} />
                        <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
                        <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" />
                      </svg>
                    </div>
                    <div className="bg-red-500 text-white font-bold rounded-r px-1">
                      {groupedData?.football}
                    </div>
                  </span>
                )}
              </div>
            </Link>
            <Link
              className="text-center text-xs text-nowrap px-3 py-[7px] border-r border-gray4 capitalize"
              to="/exchange_sports/tennis/2"
            >
              <div className="flex items-center justify-center gap-1">
                Tennis
                {groupedData?.tennis > 0 && (
                  <span className="inline-flex items-center rounded bg-white text-[10px] font-normal text-red-500 absolute top-[-10px] m-auto">
                    <div className="px-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-radio h-3 w-3 shrink-0 text-red-500"
                      >
                        <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
                        <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
                        <circle cx={12} cy={12} r={2} />
                        <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
                        <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" />
                      </svg>
                    </div>
                    <div className="bg-red-500 text-white font-bold rounded-r px-1">
                      {groupedData?.tennis}
                    </div>
                  </span>
                )}
              </div>
            </Link>

            <Link
              className="text-center text-xs text-nowrap px-3 py-[7px] border-r border-gray4 capitalize bg-header-gradient text-white"
              to="/casino?product=All&category=All"
            >
              <div className="flex items-center justify-center gap-1">
                Casino
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAi5JREFUOBGNlEtPE1EUx8+5tJ0EN5ZEZoJSMcYqUVkMLERWEjfE+BFY+g1cG1fuXPolTFQMQVa4MRpYAOURaqRqNDwXENRoGJj2+D/jvU1tZpST/Hrvefae03vL1CYi0gnTZdBvuWLXs1ifrs7MPaizPDTMkwOjN17BlggjURPuAZdYwp4Tb8pHFEXl6tvFNRI+Eo9vmkheIOxJDh/T4HxKTqrJ87xrLFQVkuv5uJCPKbrAxI8MouPUjGxjSMxL6haJTzHTIYoWtNBCdk6qJyShinoaRD5a3Nb9vwotwr+rQW0SsjFJIaZ6QCxb6tdC822BqtbAbVAGj8ExcBKcu9i7o4qeSCj7RN8Qc5eZ98F3cB/6AJgFiXSVgj7MZpMbHDDJn9YQuAfvVxujyzhs71t0zDbR9YSuVcyJK8IUwNeckea49qpwTLYWcXvYf2K/ZvUQegWXzce3NGekPvfLdeGCFmzwXwvsQzCMWCNOJBi4BNKwrVmHK+RDf46kW2AYXAKj4CXs74D7klIxKH7BoLtNLpfamta9A16DN8Al6vPJg6b0Xi2fxqCjHMWHatQnosPcxbduYdujupUOrCsg692FQrQsx5THEznSe+TEDdzpumYVUV/yy8XMAZ7ITmshNycNOoloN3rnfHS0nbRms/5XSB/3J1AFy5sfPj/DpZwQMhMk9WLz6JiRh4ApMAg+Ar2UmqTofr1Wq5lfG3tn8DfiN9j0d1B8ENfNGE704zeVEr3MtkifbgAAAABJRU5ErkJggg=="
                  alt="casino-icon"
                  className="h-[18px] w-[18px]"
                />
              </div>
            </Link>
            <a
              className="text-center text-xs text-nowrap px-3 py-[7px] border-r border-gray4 capitalize bg-color text-white"
              onClick={() => handleNavigateToIFrame("sportsbook", "550000")}
            >
              <div className="flex items-center justify-center gap-1">
                Sportsbook
              </div>
            </a>
            <Link
              className="text-center text-xs text-nowrap px-3 py-[7px] border-r border-gray4 capitalize"
              to="/exchange_sports/horserace/7"
            >
              <div className="flex items-center justify-center gap-1">
                Horse race
              </div>
            </Link>
            <Link
              className="text-center text-xs text-nowrap px-3 py-[7px] border-r border-gray4 capitalize"
              to="/exchange_sports/greyhound/4339"
            >
              <div className="flex items-center justify-center gap-1">
                GreyHound
              </div>
            </Link>

            <Link
              className="text-center text-xs text-nowrap px-3 py-[7px] border-r border-gray4 capitalize"
              to="/exchange_sports/kabaddi/6"
            >
              <div className="flex items-center justify-center gap-1">
                kabaddi
              </div>
            </Link>
          </div>
        </div>
        <div
          onClick={() => setShowEditStakeModal(true)}
          className="absolute right-2 flex items-center gap-2 bg-sub-header-gradient h-full"
        >
          <div className="flex items-center gap-1 cursor-pointer">
            Setting
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-settings w-4 h-4"
            >
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
              <circle cx={12} cy={12} r={3} />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

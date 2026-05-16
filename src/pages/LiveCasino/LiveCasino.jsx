import { useDispatch, useSelector } from "react-redux";
import Banner from "../../components/modules/Home/Banner";
import Footer from "../../components/UI/Footer/Footer";
import { useLotusHomeLobby } from "../../hooks/lotusHomeLobby";
import GameProvider from "./GameProvider";
import { useNavigate } from "react-router-dom";
import useLiveCasinoLobby from "../../hooks/liveCasinoLobby";
import { useRef, useState } from "react";
import {
  setSelectedCategory,
  setShowLoginModal,
} from "../../redux/features/global/globalSlice";
import { Settings } from "../../api";
import toast from "react-hot-toast";
import WarningCondition from "../../components/shared/WarningCondition/WarningCondition";

const LiveCasino = () => {
  const { data: lotusLobby } = useLotusHomeLobby();
  const ref = useRef([]);
  const [showMoreCategory, setShowMoreCategory] = useState(null);
  const { token, bonusToken } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const { selectedCategory } = useSelector((state) => state.global);
  const { data } = useLiveCasinoLobby("LIVE_CASINO");
  const categories = data && Object.keys(data);
  const [searchQuery, setSearchQuery] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const [gameInfo, setGameInfo] = useState({ gameName: "", gameId: "" });
  const dispatch = useDispatch();

  const handleCategoryClick = (category) => {
    setSearchQuery("");
    dispatch(setSelectedCategory(category));
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredGames =
    data && selectedCategory && selectedCategory !== "ALL"
      ? { [selectedCategory]: data[selectedCategory] }
      : data;

  const getFilteredGamesByName = (games) =>
    games &&
    games?.filter((game) =>
      game?.game_name?.toLowerCase().includes(searchQuery),
    );

  const handleNavigate = (game) => {
    if (token) {
      if (bonusToken) {
        return toast.error("Bonus wallet is available only on sports.");
      }
      if (Settings.casino_currency !== "AED") {
        navigate(
          `/casino/${game?.game_name.replace(/ /g, "")}/${game?.game_id}`,
        );
      } else {
        setGameInfo({ gameName: "", gameId: "" });
        setGameInfo({ gameName: game?.game_name, gameId: game?.game_id });
        setShowWarning(true);
      }
    } else {
      dispatch(setShowLoginModal(true));
    }
  };

  const scrollToLeft = (ref, index) => {
    if (ref?.current) {
      ref.current[index].scrollLeft -= 200;
    }
  };

  const scrollToRight = (ref, index) => {
    if (ref?.current) {
      ref.current[index].scrollLeft += 200;
    }
  };

  const handleSetShowMore = (category) => {
    if (showMoreCategory === category) {
      setShowMoreCategory(null);
    } else {
      setShowMoreCategory(category);
    }
  };

  return (
    <main className="w-full flex-1  pt-1 overflow-y-auto scroll-smooth bg-bg_appBackgroundColor">
      {showWarning && (
        <WarningCondition gameInfo={gameInfo} setShowWarning={setShowWarning} />
      )}
      <div className="relative w-full h-max font-roboto">
        <Banner />
        <div className="w-full h-max pb-20">
          <div className="w-full flex justify-end items-center py-1">
            <div className="relative max-w-sm group shadow-sm transition-all duration-300 ease-in-out w-[40%]">
              <input
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search...(min 3 chras)"
                className="w-full bg-bg_searchboxInputBgColor text-xs sm:text-sm text-text_tertiary5 placeholder:text-text_tertiary20 rounded-full py-1.5 pl-4 focus:outline-none focus-visible:ring-0 pr-10 "
                aria-label="Search"
                type="text"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  className="text-text_tertiary20 transition-colors duration-200 group-focus-within:text-text_tertiary5"
                  aria-hidden="true"
                >
                  <g id="layer1">
                    <path
                      id="circle2017"
                      d="M7.20459 0.448486C3.48555 0.448486 0.456055 3.47798 0.456055 7.19703C0.456055 10.9161 3.48555 13.9515 7.20459 13.9515C8.79311 13.9515 10.254 13.3948 11.4087 12.4705L14.2197 15.28C14.3616 15.416 14.5511 15.491 14.7476 15.489C14.944 15.487 15.1319 15.4082 15.271 15.2693C15.41 15.1304 15.4892 14.9427 15.4915 14.7462C15.4937 14.5497 15.419 14.3601 15.2832 14.2181L12.4722 11.407C13.3972 10.2506 13.9546 8.78738 13.9546 7.19703C13.9546 3.47798 10.9236 0.448486 7.20459 0.448486ZM7.20459 1.94851C10.113 1.94851 12.4531 4.28866 12.4531 7.19703C12.4531 10.1054 10.113 12.4514 7.20459 12.4514C4.29621 12.4514 1.95605 10.1054 1.95605 7.19703C1.95605 4.28866 4.29621 1.94851 7.20459 1.94851Z"
                      fill="currentColor"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className=" bg-transparent w-full h-full pb-1 md:pb-0">
            <div className=" w-full">
              <div className="w-full pb-4 ">
                <GameProvider casinoProviders={lotusLobby?.casinoProviders} />
                <div className="flex items-center justify-between w-full overflow-x-auto gap-[3px] no-scrollbar mt-2 text-center">
                  <div className="flex gap-[6px]">
                    <button
                      onClick={() => handleCategoryClick("ALL")}
                      className={`${
                        selectedCategory === "ALL"
                          ? "bg-primary"
                          : " bg-bg_Quaternary gap-1"
                      }
                            inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out px-4 py-2 flex items-center justify-center border whitespace-nowrap uppercase font-lato font-[700] text-xs cursor-pointer rounded-full text-white
                            
                          `}
                      type="button"
                    >
                      <span
                        className={`${
                          selectedCategory === "ALL"
                            ? "text-white"
                            : "text-black"
                        }`}
                      >
                        ALL
                      </span>
                    </button>
                    {categories &&
                      categories?.map((category) => {
                        return (
                          <button
                            onClick={() => handleCategoryClick(category)}
                            key={category}
                            className={`${
                              selectedCategory === category
                                ? "  bg-bg_Primary    text-white"
                                : " bg-bg_Quaternary  gap-1  text-black"
                            }
                            inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out px-4 py-2 flex items-center justify-center border whitespace-nowrap uppercase font-lato font-[700] text-xs cursor-pointer rounded-full 
                            
                          `}
                            type="button"
                          >
                            <span
                              className={`${
                                selectedCategory === category
                                  ? "text-white"
                                  : "text-text_Quinary"
                              }`}
                            >
                              {category}
                            </span>
                          </button>
                        );
                      })}
                  </div>
                </div>
                {data &&
                  Object.entries(filteredGames)?.map(
                    ([category, games], idx) => {
                      const filteredByName = getFilteredGamesByName(games); // Filter games by name

                      // If no games match the search, show a message
                      if (filteredByName?.length === 0) return null;
                      return (
                        <div
                          key={idx}
                          className="flex flex-col w-full py-0.5 font-roboto"
                        >
                          <div className="w-full overflow-hidden">
                            <div className="w-[100%] flex flex-row justify-between px-1">
                              <div className="max-w-[85%] text-text_color_primary1 font-semibold capitalize">
                                <div className="flex items-center gap-1.5 py-1 px-1.5">
                                  <span className="text-text_secondary uppercase text-sm md:text-base font-medium font-extrabold">
                                    {category}
                                  </span>
                                </div>
                              </div>
                              <div className="flex w-[108.75px] items-center justify-end gap-[5px]">
                                <button
                                  onClick={() => handleSetShowMore(category)}
                                  className="relative overflow-hidden  text-text_secondary min-w-max rounded-md px-1 py-0.5 font-semibold text-[12px] leading-[18px] transition-all ease-in-out duration-200"
                                  type="button"
                                >
                                  {showMoreCategory === category
                                    ? "View Less"
                                    : "View All"}
                                </button>
                                <button
                                  onClick={() => {
                                    scrollToLeft(ref, idx);
                                  }}
                                  className="relative overflow-hidden flex w-[20px] h-[20px] justify-center bg-bg_secondary4 items-center rounded"
                                  type="button"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={18}
                                    height={18}
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="var(--color-icon_secondary)"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path
                                      stroke="none"
                                      d="M0 0h24v24H0z"
                                      fill="none"
                                    />
                                    <path d="M15 6l-6 6l6 6" />
                                  </svg>
                                </button>
                                <button
                                  onClick={() => {
                                    scrollToRight(ref, idx);
                                  }}
                                  className="relative overflow-hidden flex w-[20px] h-[20px] justify-center bg-bg_secondary4 items-center rounded"
                                  type="button"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={18}
                                    height={18}
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="var(--color-icon_secondary)"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path
                                      stroke="none"
                                      d="M0 0h24v24H0z"
                                      fill="none"
                                    />
                                    <path d="M9 6l6 6l-6 6" />
                                  </svg>
                                </button>
                              </div>
                            </div>
                            <div
                              ref={(el) => (ref.current[idx] = el)}
                              className={`  ${showMoreCategory === category ? "w-full h-max scroll-smooth no-scrollbar  gap-x-2 pt-1 pb-2  grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6   gap-y-2 px-1.5" : "pt-0 w-full h-max overflow-x-auto px-1.5 no-scrollbar flex gap-x-2"}   `}
                              style={{ scrollBehavior: "smooth" }}
                            >
                              {filteredByName?.map((game, i) => {
                                return (
                                  <div
                                    key={i}
                                    onClick={() => handleNavigate(game)}
                                    className={`       ${showMoreCategory === category ? "  relative overflow-hidden w-full aspect-1 object-cover rounded-md cursor-pointer" : "w-max h-max "}`}
                                  >
                                    <div
                                      className={`
                                      
                                      ${showMoreCategory === category ? "  " : "relative overflow-hidden min-w-[130px] w-[130px] sm:min-w-[148px] sm:w-[148px] md:min-w-[170px] md:w-[170px] aspect-[3/4] object-cover rounded-md cursor-pointer "}
                                     `}
                                      style={{
                                        display: "inline-block",
                                        position: "relative",
                                      }}
                                    >
                                      <img
                                        src={game?.url_thumb}
                                        alt="First Person Dream Catcher"
                                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                                        className="  transition-all w-full h-full duration-500 ease-in-out active:scale-105"
                                        title="First Person Dream Catcher - exch11"
                                      />
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      );
                    },
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default LiveCasino;

import Banner from "../../components/modules/Home/Banner";
import EventNameList from "../../components/modules/Home/EventNameList";
import GameProvider from "../../components/modules/Home/GameProvider";
import GameShow from "../../components/modules/Home/GameShow";
import HomeFooter from "../../components/modules/Home/HomeFooter";
import IndianCardGame from "../../components/modules/Home/IndianCardGame";
import InPlay from "../../components/modules/Home/InPlay";
import LossBackCard from "../../components/modules/Home/LossBackCard";
// import TrendingGame from "../../components/modules/Home/TrendingGame";
import WhatsApp from "../../components/modules/Home/WhatsApp";
import Footer from "../../components/UI/Footer/Footer";
import { useLotusHomeLobby } from "../../hooks/lotusHomeLobby";

const Home = () => {
  const { data: lotusLobby } = useLotusHomeLobby();

  return (
    <main className="w-full flex-1  pt-1 overflow-y-auto scroll-smooth bg-bg_appBackgroundColor">
      <WhatsApp />
      <div className="w-full h-full">
        <div className="w-full px-2 h-max">
          <Banner />
          <div className=" w-full py-2 flex flex-col gap-2">
            <div
              className="
          w-full shadow-lg min-h-[70px] max-h-full rounded-xl md:col-span-1 overflow-hidden 
          bg-gradient-to-br from-[#5b21b6] to-[#9333ea] relative
          px-5 py-4 flex flex-col items-start gap-2 justify-start cursor-pointer
          active:scale-[0.97] md:hover:scale-[103%] transition-all duration-300
        "
            >
              <div className="absolute top-4 right-4 w-16 h-16">
                <div
                  className="relative overflow-hidden "
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="/assets/gift-icon1.png"
                    alt="gift-icon"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className="  w-full h-full"
                  />
                </div>
              </div>
              <div className="absolute bottom-2 left-2 w-8 h-8 rounded-full bg-white opacity-10" />
              <div className="text-white text-sm leading-normal z-10">
                <span className="font-[900] text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200">
                  Your Free Bets are waiting!
                </span>
              </div>
              <div className="flex items-center gap-2 w-full z-10">
                <button
                  className="relative overflow-hidden p-2 bg-gradient-to-r from-amber-400 to-yellow-300 hover:from-amber-500 hover:to-yellow-400 text-black font-bold text-xs leading-normal rounded-md w-max flex items-center gap-1 shadow-md"
                  type="button"
                >
                  <span> Play Now</span>
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
                    className="w-4 h-4"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                    <path d="M11 13l9 -9" />
                    <path d="M15 4h5v5" />
                  </svg>
                </button>
              </div>
            </div>
            <LossBackCard />
            {/* <TrendingGame /> */}
            <EventNameList />
          </div>
          <GameProvider casinoProviders={lotusLobby?.casinoProviders} />
          <InPlay />
          <IndianCardGame />
          <GameShow popularGames={lotusLobby?.popularGames} />
        </div>
        <HomeFooter />
      </div>

      <Footer />
    </main>
  );
};

export default Home;

import InPlay from "../../components/modules/Home/InPlay";
import WhatsApp from "../../components/modules/Home/WhatsApp";
import Footer from "../../components/UI/Footer/Footer";

const Home = () => {
  return (
    <main className="w-full flex-1  pt-1 overflow-y-auto scroll-smooth bg-bg_appBackgroundColor">
      <WhatsApp />
      <div className="w-full h-full">
        <div className="w-full px-2 h-max">
          <div className="w-full bg-transparent">
            <div
              title="InPlayAndPopulars"
              id="banners"
              className=" w-full overflow-hidden"
              style={{ aspectRatio: "2.00632 / 1", maxHeight: "350px" }}
            >
              <div className="w-full relative h-full z-10 rounded-md overflow-hidden">
                <img
                  src="https://promotions-material.s3.ap-south-1.amazonaws.com/inPlaySlidingBanners/2-1758969397483"
                  className="w-full h-full cursor-pointer 
        absolute top-0 left-0 transition-all  ease-in-out duration-500 transform      z-0  "
                  height={-20}
                  width={-20}
                  alt="exch11"
                  title="exch11 "
                  loading="lazy"
                />
                <img
                  src="https://promotions-material.s3.ap-south-1.amazonaws.com/inPlaySlidingBanners/Aviator-1770649696062"
                  className="w-full h-full cursor-pointer 
        absolute top-0 left-0 transition-all  ease-in-out duration-500 transform      z-0  "
                  height={-20}
                  width={-20}
                  alt="exch11"
                  title="exch11 "
                  loading="lazy"
                />
                <img
                  src="https://promotions-material.s3.ap-south-1.amazonaws.com/inPlaySlidingBanners/lien-1773670093074"
                  className="w-full h-full cursor-pointer 
        absolute top-0 left-0 transition-all  ease-in-out duration-500 transform      z-0 translate-x-full z-0 "
                  height={-20}
                  width={-20}
                  alt="exch11"
                  title="exch11 "
                  loading="lazy"
                />
                <img
                  src="https://promotions-material.s3.ap-south-1.amazonaws.com/inPlaySlidingBanners/IPL-1773921217601"
                  className="w-full h-full cursor-pointer 
        absolute top-0 left-0 transition-all  ease-in-out duration-500 transform  -translate-x-full z-0    z-0  "
                  height={-20}
                  width={-20}
                  alt="exch11"
                  title="exch11 "
                  loading="lazy"
                />
                <img
                  src="https://promotions-material.s3.ap-south-1.amazonaws.com/inPlaySlidingBanners/Psl-1774521345535"
                  className="w-full h-full cursor-pointer 
        absolute top-0 left-0 transition-all  ease-in-out duration-500 transform     translate-x-0 z-10  "
                  height={-20}
                  width={-20}
                  alt="exch11"
                  title="exch11 "
                  loading="lazy"
                />
                <img
                  src="https://promotions-material.s3.ap-south-1.amazonaws.com/inPlaySlidingBanners/smartsoft-1774975183811"
                  className="w-full h-full cursor-pointer 
        absolute top-0 left-0 transition-all  ease-in-out duration-500 transform   translate-x-full   z-0  "
                  height={-20}
                  width={-20}
                  alt="exch11"
                  title="exch11 "
                  loading="lazy"
                />
                <img
                  src="https://promotions-material.s3.ap-south-1.amazonaws.com/inPlaySlidingBanners/Freespin-1775642784557"
                  className="w-full h-full cursor-pointer 
        absolute top-0 left-0 transition-all  ease-in-out duration-500 transform      z-0  "
                  height={-20}
                  width={-20}
                  alt="exch11"
                  title="exch11 "
                  loading="lazy"
                />
                <img
                  src="https://promotions-material.s3.ap-south-1.amazonaws.com/inPlaySlidingBanners/Buttonfirst-1775739166638"
                  className="w-full h-full cursor-pointer 
        absolute top-0 left-0 transition-all  ease-in-out duration-500 transform  -translate-x-full z-0    z-0  "
                  height={-20}
                  width={-20}
                  alt="exch11"
                  title="exch11 "
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className=" w-full py-2 flex flex-col gap-2">
            <div
              className="
          w-full shadow-lg min-h-[70px] max-h-full rounded-xl md:col-span-1 overflow-hidden font-lato
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
            <div className="relative px-2 flex flex-col items-center w-full rounded-lg bg-gradient-to-br from-[#5b21b6] to-[#9333ea] overflow-hidden shadow-lg">
              <div className="absolute top-2 right-2 w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 opacity-20" />
              <div className="absolute bottom-8 right-4 w-8 h-8 rounded-full bg-gradient-to-br from-yellow-300 to-amber-500 opacity-20" />
              <div className="absolute top-1/2 left-4 w-6 h-6 rounded-full bg-gradient-to-br from-amber-300 to-amber-400 opacity-10" />
              <div className="absolute top-12 right-16 w-4 h-4 rounded-full bg-white opacity-10" />
              <div className="absolute bottom-4 right-24 w-3 h-3 rounded-full bg-amber-200 opacity-20" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_110%,rgba(255,255,255,0.1)_0%,transparent_46%)]" />
              <div className="py-4 w-full relative">
                <div className="relative text-center z-20 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-white font-black leading-normal text-xl tracking-wider uppercase">
                  Lossback Bonus
                </div>
                <div className="h-[120%] aspect-square absolute bottom-0 translate-y-1/3 md:translate-y-1/2 left-0 z-10 opacity-60">
                  <div
                    className="relative overflow-hidden w-full h-full"
                    style={{
                      display: "inline-block",
                      position: "relative",
                    }}
                  >
                    <img
                      src="/assets/cash-bundle.webp"
                      alt="Lossback Bonus"
                      sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                      className="  w-full h-full object-cover"
                      title="Lossback Bonus"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 w-full py-3">
                <div className="flex flex-col text-white leading-normal tracking-wider z-20">
                  <div className="text-base flex items-center gap-2 mt-1">
                    <div className="mt-1">
                      <span className="px-2 py-1 text-xs font-bold rounded-full bg-white/20 text-white">
                        Login to view available claims
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  className="relative overflow-hidden bg-gradient-to-r from-amber-400 to-yellow-300 hover:from-amber-500 hover:to-yellow-400 ml-auto active:scale-[98%] transition-all duration-150 text-black px-5 py-2 text-sm font-bold rounded-lg shadow-md"
                  type="button"
                >
                  SEE ALL
                </button>
              </div>
              <div className="w-full h-1 bg-gradient-to-r from-amber-400 to-yellow-200" />
            </div>
            <div
              title="TrendingTitle"
              className="flex items-start flex-col gap-0.5"
            >
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center justify-center gap-1">
                  <p>🔥</p>
                  <span className="text-text_secondary text-sm not-italic font-bold uppercase">
                    Trending Now
                  </span>
                </div>
                <div className="flex items-center justify-center gap-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="var(--color-icon_secondary)"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-text_secondary bg-bg_secondary4 rounded flex items-center justify-center active:scale-[98%] transition-all duration-300 active:opacity-80"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M15 6l-6 6l6 6" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="var(--color-icon_secondary)"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-text_secondary bg-bg_secondary4 rounded flex items-center justify-center active:scale-[98%] transition-all duration-300 active:opacity-80"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 6l6 6l-6 6"></path>
                  </svg>
                </div>
              </div>
              <div className=" w-full h-max scroll-smooth no-scrollbar flex items-start justify-start overflow-x-auto gap-x-0 pt-1 pb-2">
                <div
                  className="relative overflow-hidden rounded-md object-contain min-w-[102px] aspect-[2] z-10  active:scale-95 transition-all duration-300 active:opacity-80 px-1 shadow-sm"
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="https://promomaterial.imgix.net/trendingGames/Mines-1721914398809"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className="  w-[102px] aspect-[2] rounded-md"
                  />
                </div>
                <div
                  className="relative overflow-hidden rounded-md object-contain min-w-[102px] aspect-[2] z-10  active:scale-95 transition-all duration-300 active:opacity-80 px-1 shadow-sm"
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="https://s3.ap-south-1.amazonaws.com/cdn.mac1j.com/gstatic/promotions/3x4.webp"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className="  w-[102px] aspect-[2] rounded-md"
                  />
                </div>
                <div
                  className="relative overflow-hidden rounded-md object-contain min-w-[102px] aspect-[2] z-10  active:scale-95 transition-all duration-300 active:opacity-80 px-1 shadow-sm"
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="https://promomaterial.imgix.net/trendingGames/Limbo-1721914378674"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className="  w-[102px] aspect-[2] rounded-md"
                  />
                </div>
                <div
                  className="relative overflow-hidden rounded-md object-contain min-w-[102px] aspect-[2] z-10  active:scale-95 transition-all duration-300 active:opacity-80 px-1 shadow-sm"
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="https://promomaterial.imgix.net/trendingGames/auratrendin.png"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className="  w-[102px] aspect-[2] rounded-md"
                  />
                </div>
                <div
                  className="relative overflow-hidden rounded-md object-contain min-w-[102px] aspect-[2] z-10  active:scale-95 transition-all duration-300 active:opacity-80 px-1 shadow-sm"
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/trendingGames/TowerLegends-1725113047837"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className="  w-[102px] aspect-[2] rounded-md"
                  />
                </div>
                <div
                  className="relative overflow-hidden rounded-md object-contain min-w-[102px] aspect-[2] z-10  active:scale-95 transition-all duration-300 active:opacity-80 px-1 shadow-sm"
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="https://promomaterial.imgix.net/trendingGames/Aviator-1708340856473"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className="  w-[102px] aspect-[2] rounded-md"
                  />
                </div>
                <div
                  className="relative overflow-hidden rounded-md object-contain min-w-[102px] aspect-[2] z-10  active:scale-95 transition-all duration-300 active:opacity-80 px-1 shadow-sm"
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/trendingGames/crash-1725373368487"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className="  w-[102px] aspect-[2] rounded-md"
                  />
                </div>
                <div
                  className="relative overflow-hidden rounded-md object-contain min-w-[102px] aspect-[2] z-10  active:scale-95 transition-all duration-300 active:opacity-80 px-1 shadow-sm"
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="https://promomaterial.imgix.net/trendingGames/onedayteenpatti-1708340918149"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className="  w-[102px] aspect-[2] rounded-md"
                  />
                </div>
                <div
                  className="relative overflow-hidden rounded-md object-contain min-w-[102px] aspect-[2] z-10  active:scale-95 transition-all duration-300 active:opacity-80 px-1 shadow-sm"
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="https://promomaterial.imgix.net/trendingGames/YeenpattiT20-1708340956004"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className="  w-[102px] aspect-[2] rounded-md"
                  />
                </div>
                <div
                  className="relative overflow-hidden rounded-md object-contain min-w-[102px] aspect-[2] z-10  active:scale-95 transition-all duration-300 active:opacity-80 px-1 shadow-sm"
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="https://promomaterial.imgix.net/trendingGames/7UpDown-1708340997647"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className="  w-[102px] aspect-[2] rounded-md"
                  />
                </div>
                <div
                  className="relative overflow-hidden rounded-md object-contain min-w-[102px] aspect-[2] z-10  active:scale-95 transition-all duration-300 active:opacity-80 px-1 shadow-sm"
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="https://promomaterial.imgix.net/trendingGames/andarbahar-1708341033450"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className="  w-[102px] aspect-[2] rounded-md"
                  />
                </div>
                <div
                  className="relative overflow-hidden rounded-md object-contain min-w-[102px] aspect-[2] z-10  active:scale-95 transition-all duration-300 active:opacity-80 px-1 shadow-sm"
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="https://promomaterial.imgix.net/trendingGames/Hi-low-1708341422376"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className="  w-[102px] aspect-[2] rounded-md"
                  />
                </div>
                <div
                  className="relative overflow-hidden rounded-md object-contain min-w-[102px] aspect-[2] z-10  active:scale-95 transition-all duration-300 active:opacity-80 px-1 shadow-sm"
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="https://promomaterial.imgix.net/trendingGames/roulette-1708341470145"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className="  w-[102px] aspect-[2] rounded-md"
                  />
                </div>
                <div
                  className="relative overflow-hidden rounded-md object-contain min-w-[102px] aspect-[2] z-10  active:scale-95 transition-all duration-300 active:opacity-80 px-1 shadow-sm"
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="https://promomaterial.imgix.net/trendingGames/sicbo-1708341507738"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className="  w-[102px] aspect-[2] rounded-md"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-5 grid-rows-2 gap-[5px] sm:gap-2 sm:grid-cols-8 md:flex md:overflow-x-auto no-scrollbar scroll-smooth w-full font-roboto">
              <div className="flex items-center justify-between px-2 flex-col bg-bg_sportGameCard rounded border border-solid border-border_secondary w-full sm:w-[68px] gap-y-0.5 pt-2.5 pb-1 active:scale-95 transition-all duration-300 active:opacity-90 aspect-2">
                <p className=" w-7 h-auto flex items-center justify-center">
                  <span>🏏</span>
                </p>
                <span className="text-text_secondary  text-x1 font-normal not-italic leading-120 text-center flex items-end justify-end w-auto">
                  Cricket
                </span>
              </div>
              <div className="flex items-center justify-between px-2 flex-col bg-bg_sportGameCard rounded border border-solid border-border_secondary w-full sm:w-[68px] gap-y-0.5 pt-2.5 pb-1 active:scale-95 transition-all duration-300 active:opacity-90 aspect-2">
                <p className=" w-7 h-auto flex items-center justify-center">
                  <span>🎾</span>
                </p>
                <span className="text-text_secondary  text-x1 font-normal not-italic leading-120 text-center flex items-end justify-end w-auto">
                  Tennis
                </span>
              </div>
              <div className="flex items-center justify-between px-2 flex-col bg-bg_sportGameCard rounded border border-solid border-border_secondary w-full sm:w-[68px] gap-y-0.5 pt-2.5 pb-1 active:scale-95 transition-all duration-300 active:opacity-90 aspect-2">
                <p className=" w-7 h-auto flex items-center justify-center">
                  <span>⚽</span>
                </p>
                <span className="text-text_secondary  text-x1 font-normal not-italic leading-120 text-center flex items-end justify-end w-auto">
                  Football
                </span>
              </div>
              <div className="flex items-center justify-between px-2 flex-col bg-bg_sportGameCard rounded border border-solid border-border_secondary w-full sm:w-[68px] gap-y-0.5 pt-2.5 pb-1 active:scale-95 transition-all duration-300 active:opacity-90 aspect-2">
                <p className=" w-7 h-auto flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={21}
                    height={15}
                    viewBox="0 0 21 15"
                    fill="none"
                  >
                    <g id="Group">
                      <g id={1}>
                        <g id="Group_2">
                          <path
                            id="Vector"
                            d="M12.9176 4.26299C12.7665 4.11182 12.3413 2.93186 12.597 2.64495C12.8527 2.35804 13.2774 2.63501 13.2437 2.9254C13.21 3.21579 13.2703 3.60811 13.2667 3.76773C13.2631 3.92735 13.4014 4.00392 13.3504 4.08796C13.2994 4.17199 13.1396 4.48426 12.9181 4.26299H12.9176Z"
                            fill="#547F6A"
                          />
                          <path
                            id="Vector_2"
                            d="M13.284 3.96614C13.479 3.83089 13.8873 3.9557 14.5064 3.67674C14.5064 3.67674 14.607 3.77072 14.5498 3.81945C14.0624 4.23515 13.2774 4.60361 13.0048 4.33957C12.7322 4.07603 13.1441 4.0631 13.284 3.96614Z"
                            fill="#547F6A"
                          />
                          <path
                            id="Vector_3"
                            d="M10.2456 2.93792C9.99647 3.16963 9.93726 3.74495 10.0919 4.00003C10.6717 4.95723 11.8916 4.95425 12.4123 5.31972C12.4791 5.36646 12.7267 4.98706 12.7252 4.94082C12.7195 4.74839 11.6977 3.95528 10.9071 3.51223C10.5242 3.29742 10.5074 2.69476 10.2456 2.93792Z"
                            fill="#CCAF9B"
                          />
                          <path
                            id="Vector_4"
                            d="M20.1297 10.3648C19.9434 10.1599 19.6683 9.49412 18.8711 9.77109C18.8711 9.77109 19.0926 10.3111 19.1906 10.8317L20.1297 10.3648Z"
                            fill="#875A3C"
                          />
                          <path
                            id="Vector_5"
                            d="M7.09781 4.81753C6.31279 4.16465 5.97183 2.77087 4.15731 3.29596C2.34278 3.82105 2.15801 5.29638 2.3683 5.7623C2.57808 6.22872 1.47201 7.72543 0.200562 6.94077C0.200562 6.94077 1.33471 8.43549 2.51836 7.81195C3.70201 7.1884 3.09666 5.57683 4.02409 4.9677C5.6661 3.88818 7.09781 4.81753 7.09781 4.81753Z"
                            fill="#965326"
                          />
                          <path
                            id="Vector_6"
                            d="M3.84591 4.59726C2.919 5.20688 3.45851 6.65635 2.27485 7.2799C1.73636 7.56333 1.20859 7.40869 0.792605 7.15559C0.60273 7.13321 0.403668 7.06658 0.200012 6.94128C0.200012 6.94128 1.33416 8.436 2.51781 7.81245C3.70147 7.1889 3.32172 5.76479 4.24812 5.15517C5.89013 4.07565 7.09675 4.81754 7.09675 4.81754C7.02938 4.76185 6.96558 4.70019 6.90382 4.63505C6.20965 4.2293 4.97853 3.85189 3.84489 4.59726H3.84591Z"
                            fill="#703B18"
                          />
                          <path
                            id="Vector_7"
                            d="M17.4107 3.36102C16.8329 3.01842 15.8611 3.01046 15.0312 3.1472C14.1563 3.29141 14.0165 3.73743 13.3713 3.90053C13.3713 3.90053 13.5372 3.98904 13.9736 3.82246C13.6827 4.04722 13.4713 3.92788 13.1401 4.20634C12.6572 4.61209 12.3168 4.61955 12.0626 4.61408C12.2581 4.72795 12.4235 4.74187 12.768 4.67574C12.768 4.67574 11.5588 5.22967 11.1837 5.0974C11.2617 5.23066 11.8426 5.82587 12.816 5.65631C13.8052 5.48376 17.4112 3.36102 17.4112 3.36102H17.4107Z"
                            fill="#935125"
                          />
                          <path
                            id="Vector_8"
                            d="M16.1199 4.04375C15.2394 4.03082 14.4585 3.86723 13.9573 3.62358C13.7894 3.73546 13.6173 3.83889 13.3708 3.90104C13.3708 3.90104 13.5367 3.98955 13.9731 3.82298C13.6822 4.04773 13.4709 3.92839 13.1396 4.20685C12.6567 4.6126 12.3163 4.62006 12.0621 4.61459C12.2576 4.72846 12.423 4.74238 12.7675 4.67625C12.7675 4.67625 11.5583 5.23018 11.1832 5.09791C11.2613 5.23118 11.8421 5.82638 12.8155 5.65682C13.4331 5.54891 15.0705 4.68122 16.2138 4.04475C16.1827 4.04475 16.1516 4.04475 16.1204 4.04425L16.1199 4.04375Z"
                            fill="#75411D"
                          />
                          <path
                            id="Vector_9"
                            d="M5.60632 10.2235C6.38777 10.0743 10.0842 8.63432 9.52734 6.73534C9.13381 5.39377 7.88941 4.16757 6.66901 4.98454C5.9922 5.43753 5.70075 6.56777 6.0657 7.18783C6.70576 8.27531 5.60632 10.2235 5.60632 10.2235Z"
                            fill="#A35826"
                          />
                          <path
                            id="Vector_10"
                            d="M2.63726 12.8768C2.87154 12.7863 3.5606 12.7918 3.47536 11.9604C3.47536 11.9604 2.91697 11.9544 2.40451 11.843L2.63726 12.8768Z"
                            fill="#89431B"
                          />
                          <path
                            id="Vector_11"
                            d="M4.76007 9.84457C5.09848 9.78639 6.1091 9.05146 6.35665 7.94658C6.35665 7.94658 7.82257 8.95251 7.4127 9.38511C7.00233 9.81771 5.7513 10.2896 5.24854 10.3498C4.74527 10.4099 4.76058 9.84457 4.76058 9.84457H4.76007Z"
                            fill="#A35826"
                          />
                          <path
                            id="Vector_12"
                            d="M4.72386 9.78493C4.60697 10.1942 4.40689 11.3169 3.10992 11.8013L3.28857 12.5153L3.58206 12.5024C3.58206 12.5024 4.91782 11.0624 5.34504 10.4657C5.77225 9.86847 5.02092 8.74121 4.72335 9.78543L4.72386 9.78493Z"
                            fill="#A35826"
                          />
                          <path
                            id="Vector_13"
                            d="M16.9626 13.5212C16.8514 13.2318 15.3732 9.94854 14.7541 10.6566C14.1349 11.3642 15.5248 11.9713 15.9341 12.4919C16.343 13.0131 16.271 13.5282 16.271 13.5282L16.7881 13.7371L16.9626 13.5212Z"
                            fill="#A35826"
                          />
                          <path
                            id="Vector_14"
                            d="M13.5882 9.8004C13.7128 10.2857 14.3773 11.1156 14.9822 11.3379C15.1695 11.407 15.3568 11.3931 15.4421 11.2474C15.4421 11.2474 15.2262 9.45382 14.8189 8.87801C14.411 8.3022 13.4249 9.16442 13.5882 9.8004Z"
                            fill="#A35826"
                          />
                          <path
                            id="Vector_15"
                            d="M15.4395 7.83433C15.9591 6.00446 13.4892 6.8816 10.6804 5.70065C7.73222 4.46101 6.97426 4.31333 6.79918 5.69518C6.56031 7.58123 9.83667 9.65773 11.6099 9.89243C14.5417 10.2798 15.0587 9.1754 15.4395 7.83433Z"
                            fill="#DB9565"
                          />
                          <path
                            id="Vector_16"
                            d="M15.2644 6.85517C14.853 7.93618 15.1409 9.91721 11.6839 9.48609C10.3068 9.31454 7.80215 6.99092 6.80939 5.62598C6.80582 5.64885 6.80276 5.67073 6.79918 5.6946C6.56031 7.58065 9.83667 9.65715 11.6099 9.89185C14.5417 10.2792 15.0587 9.17482 15.4395 7.83375C15.5783 7.34396 15.5033 7.0481 15.2644 6.85467V6.85517Z"
                            fill="#9E5625"
                          />
                          <path
                            id="Vector_17"
                            d="M15.266 6.76919C14.8546 7.8502 15.1425 9.83123 11.6854 9.40012C10.3083 9.22857 7.80371 6.90494 6.81095 5.5405C6.80737 5.56337 6.8038 5.58525 6.80074 5.60912C6.56186 7.49517 9.83823 9.57167 11.6109 9.80637C14.5427 10.1937 15.0598 9.08984 15.4406 7.74827C15.5799 7.25798 15.5044 6.96262 15.2655 6.76919H15.266Z"
                            fill="#BF703A"
                          />
                          <path
                            id="Vector_18"
                            d="M10.0659 5.44898C12.8364 6.4022 13.7026 4.0194 16.0592 3.53657C16.4885 3.44856 16.8463 3.4058 17.1464 3.39735C18.6705 3.35359 18.4122 4.78466 18.1024 4.88958C14.7658 6.02081 16.1138 8.32754 14.7444 9.34241C11.9692 10.0888 10.0659 5.44948 10.0659 5.44948V5.44898Z"
                            fill="#DB9565"
                          />
                          <path
                            id="Vector_19"
                            d="M17.1459 3.39678C16.8457 3.40523 16.4879 3.44849 16.0587 3.53601C15.7254 3.60413 15.4222 3.71054 15.1389 3.83983C16.6855 4.05712 15.6059 6.30666 15.1741 7.65718C15.1741 7.65817 15.9341 6.52595 15.9341 6.52694C16.2583 5.9024 16.8503 5.31267 18.1019 4.88852C18.4117 4.7836 18.67 3.35203 17.1459 3.39628V3.39678Z"
                            fill="#CE814D"
                          />
                          <path
                            id="Vector_20"
                            d="M17.1459 3.39683C17.0775 3.39882 17.005 3.4028 16.93 3.40827C17.0622 4.25558 16.5278 5.54145 15.4962 6.6702C14.1681 8.12315 14.0129 9.65865 11.6824 9.55522C12.0029 9.92219 13.5546 9.98633 14.7331 9.66959C16.1026 8.65471 14.7653 6.0208 18.1019 4.88907C18.4117 4.78415 18.67 3.35258 17.1459 3.39683Z"
                            fill="#BF703A"
                          />
                          <g id="Vector_21" opacity="0.5">
                            <path
                              d="M14.5193 4.30334L16.0423 6.40271L16.2021 6.16354L14.5974 4.25958L14.5193 4.30334Z"
                              fill="#BC5642"
                            />
                          </g>
                          <path
                            id="Vector_22"
                            d="M20.1895 5.13717C19.5974 4.83236 18.8568 3.89406 18.697 3.54549C18.2856 3.30184 16.9519 2.88316 16.7375 3.71107C16.7105 3.81698 16.4726 5.37137 17.9834 5.25104C18.4954 5.21026 19.2891 5.52005 19.7541 5.77862C20.2058 6.02973 20.4544 5.27391 20.1895 5.13767V5.13717Z"
                            fill="#DB9565"
                          />
                          <path
                            id="Vector_23"
                            d="M18.1662 4.82147C17.0381 4.5803 17.1055 3.95875 16.7605 3.63852C16.7518 3.66139 16.7441 3.68526 16.7375 3.71062C16.7105 3.81653 16.2761 5.37888 17.9538 5.2491C18.4658 5.20932 19.2891 5.5191 19.7541 5.77767C19.9776 5.90148 20.1507 5.77966 20.2369 5.60861C19.6974 5.38982 18.867 4.97064 18.1657 4.82097L18.1662 4.82147Z"
                            fill="#CE814D"
                          />
                          <path
                            id="Vector_24"
                            d="M17.3459 5.19744C17.3459 5.19744 17.0677 3.91404 17.1198 3.27658L17.2546 3.25569L17.7823 5.25611C17.7823 5.25611 17.5077 5.27799 17.3459 5.19793V5.19744Z"
                            fill="#BF703A"
                          />
                          <g id="Vector_25" opacity="0.5">
                            <path
                              d="M14.6402 4.35701L17.1469 5.32365L17.349 5.20034L16.7349 4.97856L16.9238 3.40578L16.8549 3.42766L16.5757 4.9184L14.7183 4.31325L14.6402 4.35701Z"
                              fill="#BC5642"
                            ></path>
                          </g>
                          <path
                            id="Vector_26"
                            d="M20.2762 6.0128C20.115 6.11075 19.653 6.26241 19.6239 5.9586C19.6428 5.70848 19.482 5.50312 19.5106 5.50014C19.5397 5.49715 20.4044 5.93572 20.2762 6.0128Z"
                            fill="#7F4426"
                          />
                          <path
                            id="Vector_27"
                            d="M20.4146 6.0079C20.3222 6.09691 20.1103 6.22122 19.9725 5.94774C19.8347 5.67425 19.5622 5.57331 19.6413 5.5395C19.9919 5.38933 19.752 4.9617 19.9419 5.01888C20.3451 5.13971 20.8913 5.54994 20.4146 6.0079Z"
                            fill="#93532F"
                          />
                          <path
                            id="Vector_28"
                            d="M9.606 6.58665C9.606 6.58665 9.89183 8.18381 9.61008 9.03111L8.95828 8.63879L9.606 6.58715V6.58665Z"
                            fill="#BF703A"
                          />
                          <path
                            id="Vector_29"
                            d="M7.56126 10.5502C8.47082 10.418 10.8386 6.80695 9.50084 5.37688C8.55555 4.36697 6.89618 4.08304 6.06523 5.38931C5.41547 6.41065 5.9805 7.74774 6.44651 8.16841C7.36321 8.99583 7.56177 10.5497 7.56177 10.5497L7.56126 10.5502Z"
                            fill="#DB9565"
                          />
                          <path
                            id="Vector_30"
                            d="M10.1097 5.46334C9.78103 5.32858 9.48346 5.21123 9.21549 5.11129C8.24979 4.32713 6.81756 4.2063 6.06521 5.38925C6.04224 5.42505 6.02131 5.46135 6.0014 5.49765C6.65116 6.56076 7.68527 7.58658 9.608 7.64973C12.1902 7.73376 14.3294 5.32759 14.7239 4.05215C13.2575 4.87609 12.2596 6.18037 10.1097 5.46284V5.46334Z"
                            fill="#E8A070"
                          />
                          <path
                            id="Vector_31"
                            d="M12.6817 5.40727C12.9589 5.28694 13.1697 7.63791 11.9529 7.55885C10.7355 7.47929 9.91121 7.23117 9.9306 6.71602C9.94591 6.31673 10.0347 5.77821 10.074 5.55595C10.0786 5.53059 10.0934 5.50871 10.1144 5.49528C10.1358 5.48186 10.1618 5.47838 10.1853 5.48583C10.4778 5.57484 11.4379 5.94778 12.6817 5.40777V5.40727Z"
                            fill="#BF703A"
                          />
                          <path
                            id="Vector_32"
                            d="M11.5359 5.60266L10.9943 9.75217L11.541 9.87549L12.4179 5.47238L11.5359 5.60266Z"
                            fill="#BF703A"
                          />
                          <path
                            id="Vector_33"
                            d="M11.1071 9.84609L11.4037 9.87891L12.2576 5.49271L11.7079 5.54193L11.1071 9.84609Z"
                            fill="#FFC364"
                          />
                          <path
                            id="Vector_34"
                            d="M12.6843 5.24616C12.9492 5.13328 13.0855 7.48327 11.9207 7.40868C10.7559 7.33409 10.0393 7.10486 10.0577 6.62204C10.072 6.24811 10.1572 5.7434 10.1945 5.53556C10.1986 5.51169 10.2129 5.4913 10.2333 5.47837C10.2537 5.46594 10.2782 5.46246 10.3012 5.46942C10.5809 5.55296 11.494 5.75186 12.6843 5.24616Z"
                            fill="#FFDB8A"
                          />
                          <path
                            id="Vector_35"
                            d="M11.3343 8.2197L11.1071 9.84619L11.4037 9.8795L11.7196 8.25649C11.5879 8.25401 11.4593 8.24108 11.3343 8.22019V8.2197Z"
                            fill="#F2AD49"
                          />
                          <path
                            id="Vector_36"
                            d="M12.5536 5.29285C12.793 5.19141 12.9155 7.31067 11.8651 7.24305C10.8147 7.17542 10.168 6.96907 10.1848 6.53348C10.1976 6.19585 10.2746 5.74137 10.3083 5.55341C10.3119 5.53203 10.3247 5.51313 10.343 5.50219C10.3614 5.49076 10.3839 5.48777 10.4043 5.49424C10.6564 5.56982 11.4802 5.74932 12.5536 5.29285Z"
                            fill="#FFC364"
                          />
                          <g id="Vector_37" opacity="0.5">
                            <path
                              d="M10.4206 5.66079C10.2026 5.58173 10.1271 5.39178 10.3573 5.30327C10.5875 5.21476 11.37 5.62598 11.8635 5.49521C11.8635 5.49521 11.8763 6.18837 10.4206 5.66079Z"
                              fill="#BC5642"
                            />
                          </g>
                          <path
                            id="Vector_38"
                            d="M10.3481 5.53355C10.1307 5.45449 10.0551 5.26454 10.2848 5.17603C10.515 5.08752 11.4113 5.54946 11.9044 5.41869C11.9044 5.41869 11.8033 6.06113 10.3481 5.53355Z"
                            fill="#BC5642"
                          />
                          <g id="Vector_39" opacity="0.7">
                            <path
                              d="M8.26767 4.88762C9.09761 5.57133 10.074 5.79957 10.8264 6.02383C10.6998 6.01339 10.6033 6.01189 10.5839 6.03029C10.5237 6.08648 10.5982 6.95517 10.4681 7.47031C10.4201 7.53148 10.3762 7.60855 10.3762 7.60855C10.3762 7.60855 10.7029 7.92181 11.1643 7.83927C11.1643 7.83927 10.7789 7.72988 10.6365 7.53595L11.5563 6.09991C11.5563 6.09991 11.4057 6.07455 11.2194 6.0477C11.2225 6.04223 11.2255 6.03676 11.2286 6.03079C11.2393 6.0104 11.2485 5.98852 11.2567 5.96665C11.2567 5.96665 11.2567 5.96665 11.2567 5.96615C11.2807 5.902 11.2924 5.83836 11.2832 5.82244C11.2704 5.80057 11.1255 5.37244 11.0642 5.33166C10.8759 5.30034 10.4614 5.11586 10.3236 5.16558C10.1516 5.22774 10.0684 5.31227 10.2333 5.48034C10.2277 5.47785 10.098 5.45945 10.0924 5.45697C10.0169 5.42614 9.94235 5.39581 9.86987 5.36647C9.86578 5.36498 9.8617 5.36349 9.85762 5.3615C9.7831 5.33166 9.7096 5.30232 9.63865 5.27448C9.63763 5.27448 9.63712 5.27398 9.63661 5.27348C9.48859 5.21531 9.34771 5.16111 9.21398 5.11138C8.86741 4.82994 8.46061 4.63452 8.04666 4.55397C8.08596 4.67878 8.16202 4.8021 8.26614 4.88762H8.26767Z"
                              fill="#BC5642"
                            />
                          </g>
                          <g id="Vector_40" opacity="0.5">
                            <path
                              d="M12.0805 5.29189L12.0024 5.3262C12.0779 6.32317 10.9106 7.28435 10.9106 7.28435L11.15 7.31369C12.3357 6.2824 12.0805 5.29189 12.0805 5.29189Z"
                              fill="#BC5642"
                            />
                          </g>
                          <path
                            id="Vector_41"
                            d="M12.104 5.44748L12.0264 5.48079C12.106 6.45639 11.0984 7.34745 11.0984 7.34745L11.1403 7.42552C12.3214 6.41661 12.104 5.44748 12.104 5.44748Z"
                            fill="#F7E0D0"
                          />
                          <path
                            id="Vector_42"
                            d="M6.62821 8.11078C6.1913 7.64685 5.72886 6.2466 6.46948 5.26703C6.82013 4.8031 7.26828 4.56939 7.73786 4.5147C7.10137 4.48138 6.48019 4.73746 6.06523 5.38985C5.41547 6.41119 5.9805 7.74828 6.44651 8.16895C7.25858 8.90189 7.50664 10.2047 7.55258 10.4921C7.51583 10.1057 7.34637 8.87305 6.62821 8.11078Z"
                            fill="#C1723D"
                          />
                          <path
                            id="Vector_43"
                            d="M13.1682 9.61194C13.6051 10.0565 14.9669 10.1823 15.8198 10.048C16.0837 10.0068 16.2991 9.87548 16.3139 9.66714C16.3139 9.66714 15.2583 8.11175 14.4299 7.74479C13.6015 7.37782 12.595 9.03017 13.1677 9.61194H13.1682Z"
                            fill="#DB9565"
                          />
                          <path
                            id="Vector_44"
                            d="M16.1807 9.4786C16.1317 9.6775 15.9025 9.77347 15.6386 9.77596C14.7755 9.78441 13.4464 9.4617 13.0778 8.95849C13.06 8.93462 13.0457 8.90876 13.0324 8.8829C12.9676 9.16683 12.8354 9.50396 13.0069 9.67899C13.4443 10.123 14.9664 10.1822 15.8198 10.0484C16.0837 10.0072 16.2991 9.8759 16.3139 9.66756C16.3139 9.66756 16.2649 9.59546 16.1807 9.4791V9.4786Z"
                            fill="#BF703A"
                          />
                          <path
                            id="Vector_45"
                            d="M19.3763 9.61194C19.0788 9.52841 15.5329 8.6806 15.7259 9.60299C15.9193 10.5254 17.2341 9.76808 17.8936 9.74968C18.553 9.73178 18.9405 10.0992 18.9405 10.0992L19.407 9.79692L19.3758 9.61194H19.3763Z"
                            fill="#DB9565"
                          />
                          <path
                            id="Vector_46"
                            d="M18.2106 9.48561C17.5624 9.41252 16.2521 9.90429 15.9285 9.26881C15.7718 9.33544 15.6922 9.44235 15.7259 9.60296C15.9193 10.5254 17.2342 9.76805 17.8936 9.74965C18.5531 9.73175 18.9405 10.0992 18.9405 10.0992L19.2054 9.92766C19.0513 9.78645 18.7185 9.5428 18.2106 9.48561Z"
                            fill="#C1723D"
                          />
                          <path
                            id="Vector_47"
                            d="M17.1571 14.5684C17.0764 14.3029 17.1126 13.5824 16.2745 13.4879C16.2745 13.4879 16.2439 14.0712 16.1097 14.5838L17.1571 14.5689V14.5684Z"
                            fill="#89431B"
                          />
                          <path
                            id="Vector_48"
                            d="M8.95571 13.2771C8.95571 13.2771 8.83219 13.9807 8.62445 14.5286L9.60853 14.5431C9.57587 14.2447 9.72542 13.4591 8.95571 13.2766V13.2771Z"
                            fill="#875A3C"
                          />
                          <path
                            id="Vector_49"
                            d="M6.63995 10.6437C6.91506 10.4169 7.48775 9.23148 7.21774 8.10521C7.21774 8.10521 9.40027 7.7109 9.26655 8.32301C9.01185 9.48955 7.98744 10.5586 7.56635 10.8719C7.14577 11.1852 6.63943 10.6437 6.63943 10.6437H6.63995Z"
                            fill="#DB9565"
                          />
                          <path
                            id="Vector_50"
                            d="M6.95433 11.1718C7.34991 11.4433 8.5157 11.935 8.6285 13.5928L9.4957 13.6978L9.49263 13.3944C9.49263 13.3944 8.32072 11.3816 7.8052 10.6914C7.28917 10.0007 5.94575 10.4786 6.95433 11.1718Z"
                            fill="#C1723D"
                          />
                          <path
                            id="Vector_51"
                            d="M7.58114 10.7571C8.09666 11.4472 9.26909 13.4601 9.26909 13.4601L9.27113 13.6704L9.49571 13.6978L9.49265 13.3945C9.49265 13.3945 8.35953 11.2757 7.84401 10.5855C7.57604 10.227 7.04725 10.2901 6.77826 10.4279C7.04419 10.3946 7.37749 10.4846 7.58114 10.7576V10.7571Z"
                            fill="#DB9565"
                          />
                          <path
                            id="Vector_52"
                            d="M10.0291 3.12232C9.74173 3.30829 9.61872 3.84332 9.7652 4.10388C10.3358 5.11876 11.6828 5.17793 12.2382 5.58219C12.3096 5.6344 12.5602 5.25202 12.5577 5.20478C12.547 5.01135 11.495 4.17896 10.687 3.7036C10.2965 3.47337 10.3216 2.93386 10.0291 3.12282V3.12232Z"
                            fill="#F7E0D0"
                          />
                          <path
                            id="Vector_53"
                            d="M11.7686 5.13913C11.2214 4.84924 10.8682 4.441 10.98 4.22768C11.0259 4.14017 11.1438 4.09939 11.3041 4.10138C11.0964 3.95718 11.007 3.79359 10.8095 3.67723C10.419 3.44701 10.321 2.93335 10.0291 3.12231C9.74173 3.30828 9.61872 3.84331 9.7652 4.10387C10.3358 5.11875 11.6828 5.17792 12.2382 5.58218C12.2795 5.61201 12.3801 5.49815 12.4576 5.38676C12.255 5.35245 12.0136 5.26891 11.7691 5.13913H11.7686Z"
                            fill="#CCAF9B"
                          />
                          <path
                            id="Vector_54"
                            d="M11.5558 6.06013C11.6553 5.82792 12.1892 5.05321 12.4812 5.11139C12.7731 5.16956 12.1555 6.08847 12.1555 6.08847L11.5558 6.05963V6.06013Z"
                            fill="#F7E0D0"
                          />
                          <path
                            id="Vector_55"
                            d="M10.5492 7.54386C10.9422 6.96606 11.5976 5.50714 11.6961 5.42858C11.7946 5.35001 12.6909 5.55438 12.6909 5.55438L10.6645 7.58414L10.5492 7.54386Z"
                            fill="#7C4F31"
                          />
                          <path
                            id="Vector_56"
                            d="M10.7519 7.49671C10.8738 7.18991 11.1051 6.79808 11.4139 6.40227C11.7303 5.99652 12.0611 5.67132 12.3321 5.48087C12.0703 5.43165 11.7523 5.38391 11.6956 5.42916C11.5971 5.50772 10.9417 6.96664 10.5487 7.54444L10.6641 7.58472L10.7513 7.4972L10.7519 7.49671Z"
                            fill="#5E3920"
                          />
                          <path
                            id="Vector_57"
                            d="M10.9453 3.89255C9.86781 3.94725 9.8035 3.35652 9.8867 3.05419C9.96989 2.75187 10.6891 2.17258 11.4435 2.03981C12.1509 1.915 12.9175 2.01097 13.1467 2.14075C13.3764 2.27004 13.3432 2.70363 13.282 3.02635C13.2299 3.30033 12.5552 3.66332 12.3392 3.45547C12.1233 3.24762 11.9549 3.69415 11.6553 3.59072C11.4205 3.51017 11.3495 3.87216 10.9458 3.89255H10.9453Z"
                            fill="#7AC1A0"
                          />
                          <path
                            id="Vector_58"
                            d="M13.1207 3.15913C11.9748 3.14223 11.0525 2.70863 11.0601 2.19149C11.0601 2.17558 11.0617 2.15967 11.0637 2.14426C10.4624 2.36354 9.95508 2.8041 9.88618 3.05471C9.80298 3.35704 9.86729 3.94727 10.9448 3.89307C11.3485 3.87268 11.4195 3.51069 11.6543 3.59124C11.9539 3.69467 12.1223 3.24814 12.3382 3.45599C12.5199 3.63102 13.0268 3.4008 13.2131 3.16013C13.1824 3.16013 13.1513 3.16013 13.1207 3.16013V3.15913Z"
                            fill="#589378"
                          />
                          <path
                            id="Vector_59"
                            d="M12.5556 4.51021C12.4536 4.31281 12.3877 2.94538 12.7169 2.69725C13.0467 2.44913 13.3754 2.84593 13.2585 3.14975C13.1416 3.45357 13.0855 3.88915 13.0354 4.05971C12.9859 4.23026 13.0967 4.34463 13.0232 4.42319C12.9492 4.50176 12.7052 4.79961 12.5556 4.51021Z"
                            fill="#7AC1A0"
                          />
                          <path
                            id="Vector_60"
                            d="M12.6889 4.62653C12.5832 4.44553 12.4571 3.34712 12.6246 2.81258C12.3188 3.26258 12.4377 4.36 12.5286 4.53653C12.5689 4.61459 12.6429 4.62305 12.6919 4.6315C12.6909 4.63001 12.6899 4.62852 12.6889 4.62653Z"
                            fill="#589378"
                          />
                          <path
                            id="Vector_61"
                            d="M12.9941 4.2774C13.2217 4.17745 13.5785 4.40718 14.2558 4.25254C14.2558 4.25254 14.3253 4.37685 14.2558 4.41613C13.6658 4.74879 12.8022 4.96012 12.6164 4.61354C12.4306 4.26646 12.8308 4.3495 12.9936 4.2779L12.9941 4.2774Z"
                            fill="#7AC1A0"
                          />
                          <path
                            id="Vector_62"
                            d="M14.2819 4.31876C13.6924 4.64793 12.8374 4.85528 12.6526 4.5102C12.6241 4.456 12.6047 4.33715 12.6006 4.30185C12.5536 4.34262 12.523 4.5097 12.5899 4.635C12.7756 4.98208 13.6658 4.74838 14.2559 4.41572C14.2906 4.39583 14.29 4.35456 14.2814 4.31876H14.2819Z"
                            fill="#589378"
                          />
                          <path
                            id="Vector_63"
                            d="M13.4979 1.88177L13.0564 2.10603L13.3162 2.69676L13.8256 2.59284L13.4979 1.88177Z"
                            fill="#6BAA8F"
                          />
                          <path
                            id="Vector_64"
                            d="M10.4977 7.54432C10.4977 7.54432 10.6661 7.94012 11.1735 7.83421C11.1735 7.83421 10.7223 7.64874 10.8009 7.32205C10.8453 7.13658 10.4982 7.54432 10.4982 7.54432H10.4977Z"
                            fill="#5E3920"
                          />
                          <path
                            id="Vector_65"
                            d="M7.7552 10.8153C7.87821 10.5647 8.14312 9.64926 7.91088 9.5339C7.67864 9.41853 7.03756 10.147 6.91455 10.3976C6.79154 10.6482 6.87984 10.9446 7.11157 11.0599C7.3433 11.1753 7.63168 11.0654 7.75469 10.8153H7.7552Z"
                            fill="#DB9565"
                          />
                          <path
                            id="Vector_66"
                            d="M16.1143 9.29419C15.9361 9.25292 15.3129 9.22159 15.2746 9.38867C15.2364 9.55574 15.7978 9.85807 15.9754 9.89884C16.1536 9.94011 16.3292 9.83818 16.3669 9.6711C16.4052 9.50403 16.2919 9.33546 16.1138 9.29419H16.1143Z"
                            fill="#DB9565"
                          />
                          <path
                            id="Vector_67"
                            d="M11.1158 2.29004C11.078 2.54264 11.3853 3.38647 11.6609 3.31039C11.9366 3.23381 11.7053 2.6212 11.7053 2.6212L11.1158 2.29054V2.29004Z"
                            fill="#7AC1A0"
                          />
                          <path
                            id="Vector_68"
                            d="M11.0214 3.27754C10.7733 3.36008 9.59119 2.91654 10.3247 2.47349C10.659 2.27161 10.8167 2.07271 11.3419 2.11498C11.8671 2.15725 11.2858 3.18953 11.0219 3.27754H11.0214Z"
                            fill="#7AC1A0"
                          />
                          <path
                            id="Vector_69"
                            d="M12.4367 2.07963C12.106 2.20096 12.354 2.45804 12.3811 2.55003C12.3944 2.59528 12.351 2.25019 12.4954 2.1577C12.7205 2.01449 12.623 2.01052 12.4367 2.07914V2.07963Z"
                            fill="#589378"
                          />
                          <g id="Vector_70" opacity="0.5">
                            <path
                              d="M13.3177 2.77433C13.3203 2.74798 13.3223 2.72162 13.3238 2.69527L13.8256 2.59333L13.4979 1.88177L13.061 2.10404C12.8201 2.01553 12.3255 1.95487 11.8074 1.99515C11.8084 2.15178 12.0391 2.48991 12.4214 2.47201C12.9941 2.44515 13.0161 2.69378 13.3177 2.77483V2.77433Z"
                              fill="#BC5642"
                            />
                          </g>
                          <path
                            id="Vector_71"
                            d="M14.0512 2.84838C14.0512 2.84838 13.2386 2.3397 13.4259 1.71466C13.6765 0.877297 14.5881 1.35962 14.5881 1.35962C14.5881 1.35962 14.7412 1.65598 14.6606 1.90162C14.6494 1.93693 14.5682 1.95284 14.5534 1.99013C14.4503 2.25019 14.5105 2.52467 14.0512 2.84838Z"
                            fill="#FFCD9C"
                          />
                          <path
                            id="Vector_72"
                            d="M13.9644 1.82356C14.043 1.58837 14.1675 1.39196 14.3089 1.2567C14.0195 1.18361 13.5867 1.17764 13.4259 1.71467C13.2386 2.33971 14.0512 2.84839 14.0512 2.84839C14.0532 2.8469 14.0552 2.8454 14.0573 2.84391C13.8715 2.64601 13.8256 2.23926 13.9644 1.82356Z"
                            fill="#FFAE85"
                          />
                          <path
                            id="Vector_73"
                            d="M14.312 2.41974C14.312 2.41974 14.5386 2.49532 14.5892 2.47145C14.5177 2.31034 14.4488 1.96873 14.4488 1.96873C14.4488 1.96873 14.2921 2.40233 14.312 2.41974Z"
                            fill="#FFCD9C"
                          />
                          <path
                            id="Vector_74"
                            d="M14.2003 2.04831L13.9808 2.01897L13.9961 1.77781L14.3993 1.73505L14.2003 2.04831Z"
                            fill="#4E7993"
                          />
                          <path
                            id="Vector_75"
                            d="M14.4626 2.25126C14.4626 2.25126 14.1247 2.11949 14.1793 1.91014C14.2308 1.71274 14.678 1.8286 14.678 1.8286L14.5703 2.13739L14.607 2.1538L14.5866 2.21943L14.4621 2.25076L14.4626 2.25126Z"
                            fill="#95C0DB"
                          />
                          <path
                            id="Vector_76"
                            d="M14.4917 1.97168C14.5289 1.90753 14.5738 1.85433 14.6198 1.81554C14.4973 1.79217 14.2084 1.75339 14.1681 1.90703C14.1267 2.06466 14.3202 2.18151 14.4126 2.22826C14.4126 2.15417 14.4391 2.06168 14.4917 1.97217V1.97168Z"
                            fill="#679CB7"
                          />
                          <path
                            id="Vector_77"
                            d="M13.2687 1.94643C13.2687 1.94643 13.4729 2.24229 13.7174 2.34622C13.9619 2.44965 14.0196 1.76494 14.0196 1.76494L13.8506 1.81765C13.8506 1.81765 13.8052 2.19406 13.723 2.1876C13.6408 2.18113 13.4489 1.87433 13.4489 1.87433L13.2682 1.94643H13.2687Z"
                            fill="#514133"
                          />
                          <path
                            id="Vector_78"
                            d="M13.2039 2.02195C13.232 2.01648 14.1125 1.73355 14.8133 1.68929C14.8133 1.68929 14.6101 0.562038 13.7434 0.844971C12.9921 1.09061 13.2034 2.02195 13.2034 2.02195H13.2039Z"
                            fill="#7A6756"
                          />
                          <path
                            id="Vector_79"
                            d="M14.0844 1.59187C13.7741 1.41286 13.5587 1.16822 13.5076 0.964844C13.0416 1.30695 13.2039 2.02248 13.2039 2.02248C13.2269 2.01801 13.8113 1.83105 14.4055 1.73707C14.3008 1.70276 14.1921 1.65452 14.0844 1.59237V1.59187Z"
                            fill="#685949"
                          />
                          <path
                            id="Vector_80"
                            d="M14.4881 2.17705C14.4881 2.17705 14.2262 2.07462 14.2686 1.91251C14.3084 1.75936 14.6775 1.84936 14.6775 1.84936L14.5841 2.15268L14.4881 2.17705Z"
                            fill="#4E7993"
                          />
                          <path
                            id="Vector_81"
                            d="M14.5013 2.15032C14.5013 2.15032 14.264 2.05933 14.3023 1.91562C14.3385 1.78037 14.6733 1.85993 14.6733 1.85993L14.5891 2.12844L14.5018 2.14983L14.5013 2.15032Z"
                            fill="#3B5460"
                          />
                          <path
                            id="Vector_82"
                            d="M14.3534 2.05433L14.6372 1.85593L14.6734 1.8604L14.6331 1.99167L14.5019 2.15079C14.4315 2.12842 14.3922 2.10306 14.3539 2.05433H14.3534Z"
                            fill="#5F7D89"
                          />
                          <path
                            id="Vector_83"
                            d="M14.0695 1.76143C14.0695 1.76143 14.5269 1.82757 14.7249 1.86386C14.8709 1.89022 15.0087 1.83254 15.0046 1.79475C14.9954 1.70922 14.6912 1.53867 14.6912 1.53867C14.6912 1.53867 14.1216 1.72464 14.0695 1.76193V1.76143Z"
                            fill="#7A6756"
                          />
                          <path
                            id="Vector_84"
                            d="M14.6734 1.78034C14.5024 1.75299 14.3508 1.71868 14.2518 1.68686C14.1625 1.71918 14.0874 1.74802 14.0691 1.76145C14.0691 1.76145 14.5264 1.82758 14.7244 1.86388C14.8418 1.88526 14.9521 1.85194 14.9899 1.81863C14.8995 1.81216 14.7903 1.79924 14.6734 1.78034Z"
                            fill="#685949"
                          />
                          <path
                            id="Vector_85"
                            d="M13.1549 1.69976C13.3264 1.62567 14.7219 1.43174 14.7657 1.46407C14.7841 1.48296 14.8015 1.55407 14.804 1.59832C14.188 1.70225 13.797 1.79076 13.1651 1.95485L13.1549 1.69976Z"
                            fill="#F4C198"
                          />
                          <path
                            id="Vector_86"
                            d="M14.3294 2.59382C14.3294 2.59382 14.5131 2.56199 14.4289 2.44564C14.3452 2.32928 14.1477 2.52221 14.1441 2.37254C14.1441 2.37254 14.0614 2.56697 14.3294 2.59382Z"
                            fill="#A35826"
                          />
                          <path
                            id="Vector_87"
                            d="M13.8439 2.27751L14.0512 2.84835L13.8628 2.75636L13.7582 2.2805L13.8439 2.27751Z"
                            fill="#685949"
                          />
                          <path
                            id="Vector_88"
                            d="M14.1196 2.80865C14.1308 2.76241 14.0818 2.7102 14.0093 2.6918C13.9368 2.6734 13.869 2.69578 13.8572 2.74202C13.8455 2.78826 13.895 2.84048 13.967 2.85887C14.0394 2.87727 14.1073 2.8544 14.1191 2.80865H14.1196Z"
                            fill="#685949"
                          />
                          <path
                            id="Vector_89"
                            d="M14.2497 1.91702C14.2497 1.9021 14.238 1.88967 14.2227 1.88918C14.2079 1.88918 14.1956 1.90111 14.1951 1.91603C14.1951 1.93094 14.2069 1.94338 14.2217 1.94387C14.2365 1.94387 14.2492 1.93194 14.2492 1.91702H14.2497Z"
                            fill="#3B5460"
                          />
                          <path
                            id="Vector_90"
                            d="M13.9174 1.55508C13.5714 1.6063 13.2335 1.66547 13.1549 1.69978L13.1651 1.95487C13.6245 1.83553 13.9562 1.75647 14.3401 1.68188C14.1706 1.65652 14.0226 1.61078 13.9174 1.55508Z"
                            fill="#C99163"
                          />
                          <path
                            id="Vector_91"
                            d="M12.5557 3.91652L13.0263 3.83995L13.1912 3.1448C13.1912 3.1448 12.8058 3.08861 12.548 3.21939L12.5557 3.91603V3.91652Z"
                            fill="#F7E0D0"
                          />
                          <path
                            id="Vector_92"
                            d="M13.0023 3.42863C12.9906 3.42764 12.9793 3.42664 12.9681 3.42614C12.9569 3.42515 12.9446 3.42465 12.9313 3.42416C12.9181 3.42366 12.9028 3.42316 12.8859 3.42266C12.8691 3.42217 12.8487 3.42167 12.8252 3.42117C12.8134 3.42117 12.8022 3.42117 12.7925 3.42167C12.7828 3.42167 12.7736 3.42366 12.7665 3.42614C12.7588 3.42863 12.7532 3.43211 12.7486 3.43708C12.744 3.44206 12.742 3.44902 12.741 3.45747C12.741 3.46195 12.741 3.46692 12.741 3.47189C12.7496 3.46841 12.7578 3.46592 12.766 3.46443C12.7741 3.46244 12.7843 3.46095 12.7956 3.45996C12.8068 3.45896 12.8216 3.45847 12.839 3.45847C12.8568 3.45847 12.8788 3.45847 12.9058 3.45847C12.9461 3.45896 12.9758 3.46891 12.9941 3.4883C13.012 3.50769 13.0196 3.53454 13.0161 3.56935C13.011 3.61858 12.9957 3.65537 12.9696 3.67974C12.9436 3.7041 12.9094 3.71604 12.866 3.71554C12.8609 3.71554 12.8533 3.71554 12.843 3.71455C12.8333 3.71405 12.8231 3.71306 12.8119 3.71206C12.8007 3.71107 12.7895 3.71007 12.7787 3.70908C12.7675 3.70808 12.7573 3.70709 12.7481 3.70609C12.7083 3.70212 12.6792 3.68968 12.6603 3.6688C12.6409 3.64792 12.6328 3.61659 12.6348 3.57482C12.6363 3.54797 12.6379 3.51963 12.6399 3.49079C12.6414 3.46145 12.644 3.43261 12.647 3.40377C12.6522 3.35255 12.6695 3.31327 12.6991 3.28642C12.7287 3.26006 12.7695 3.24714 12.8211 3.24763C12.8553 3.24763 12.89 3.24913 12.9252 3.25012C12.9599 3.25111 12.9936 3.25261 13.0258 3.25459C13.0253 3.26106 13.0248 3.26703 13.0242 3.27349C13.0242 3.27995 13.0232 3.28592 13.0227 3.29239C13.0202 3.31675 13.0176 3.34012 13.014 3.36299C13.0105 3.38587 13.0069 3.40775 13.0028 3.42913L13.0023 3.42863ZM12.9023 3.59869C12.9084 3.59819 12.914 3.59521 12.9191 3.59073C12.9237 3.58626 12.9268 3.5793 12.9278 3.57035C12.9288 3.55941 12.9268 3.55145 12.9222 3.54548C12.9176 3.53952 12.9084 3.53653 12.8961 3.53653C12.8823 3.53653 12.8681 3.53653 12.8533 3.53653C12.8385 3.53653 12.8237 3.53653 12.8088 3.53653C12.794 3.53653 12.7803 3.53653 12.7665 3.53653C12.7527 3.53653 12.7405 3.53653 12.7292 3.53653C12.7103 3.53703 12.6996 3.54797 12.6976 3.56836C12.6971 3.57582 12.6976 3.58178 12.7001 3.58576C12.7022 3.58974 12.7063 3.59322 12.7124 3.59521C12.718 3.5972 12.7251 3.59819 12.7338 3.59869C12.7425 3.59869 12.7532 3.59919 12.765 3.59968C12.7777 3.59968 12.791 3.59968 12.8053 3.60018C12.8196 3.60018 12.8333 3.60018 12.8466 3.60018C12.8594 3.60018 12.8711 3.60018 12.8808 3.60018C12.891 3.60018 12.8977 3.60018 12.9023 3.59869Z"
                            fill="#7C685C"
                          />
                          <path
                            id="Vector_93"
                            d="M12.5577 4.04375C12.5817 4.12232 12.6297 3.81203 12.6179 3.75585C12.6057 3.69966 12.5419 3.66435 12.5434 3.55645C12.5449 3.44855 12.5128 3.89657 12.5577 4.04375Z"
                            fill="#589378"
                          />
                          <path
                            id="Vector_94"
                            d="M12.5205 3.52758C12.5368 3.60813 12.6139 3.30382 12.6072 3.24663C12.6006 3.18945 12.5404 3.14818 12.5526 3.04077C12.5644 2.93337 12.4899 3.37641 12.5205 3.52758Z"
                            fill="#589378"
                          />
                          <path
                            id="Vector_95"
                            d="M18.7338 3.52757C18.4408 3.34906 17.642 3.1064 17.151 3.27447C17.1316 3.9741 17.3699 4.75676 17.6155 5.30274C17.7247 5.31716 17.8467 5.32064 17.983 5.3092C18.2392 5.28782 18.5659 5.35694 18.8869 5.46484L19.6178 4.62748C19.2253 4.22819 18.8374 3.75979 18.7343 3.52757H18.7338Z"
                            fill="#FFBC5A"
                          />
                          <path
                            id="Vector_96"
                            d="M17.8844 3.24669C17.6256 3.20591 17.3592 3.15868 17.1494 3.23078C17.13 3.9304 17.3153 4.75682 17.6154 5.3028C17.7247 5.31722 17.8467 5.3207 17.9829 5.30926C18.2392 5.28788 18.5658 5.357 18.8869 5.4649L19.2253 5.09048C19.1579 5.02136 18.1396 4.69168 17.8844 3.24719V3.24669Z"
                            fill="#F29541"
                          />
                          <path
                            id="Vector_97"
                            d="M17.8477 3.59276C17.4929 3.38839 16.8069 3.18551 16.6263 2.61766C17.1918 2.92048 17.8247 2.6828 18.2581 3.36005C18.3295 3.47193 18.0498 3.70862 17.8477 3.59226V3.59276Z"
                            fill="#DB9565"
                          />
                          <path
                            id="Vector_98"
                            d="M17.0861 2.77236C16.9315 2.74103 16.7763 2.69876 16.6263 2.61821C16.8069 3.18606 17.4929 3.38844 17.8477 3.59331C17.9477 3.65099 18.0666 3.62165 18.1524 3.56397C17.8206 3.38944 17.3041 3.19402 17.0861 2.77236Z"
                            fill="#CE814D"
                          />
                          <path
                            id="Vector_99"
                            d="M17.7333 3.44113C17.5118 3.31135 17.0943 3.29196 16.9943 2.89764C17.3939 3.12538 17.596 2.98615 17.9993 3.29892C18.0355 3.36605 17.8538 3.51125 17.7333 3.44113Z"
                            fill="#A55925"
                          />
                          <path
                            id="Vector_100"
                            d="M18.0468 3.63803C18.0468 3.63803 17.4659 3.49134 17.4884 3.7161C17.5108 3.94085 18.3494 4.04776 18.3494 4.04776L18.0473 3.63803H18.0468Z"
                            fill="#FFBC5A"
                          />
                          <path
                            id="Vector_101"
                            d="M20.4451 5.68908C20.391 5.73533 20.3788 5.52151 20.2604 5.40466C20.142 5.28781 20.682 5.48571 20.4451 5.68908Z"
                            fill="#6D351D"
                          />
                          <path
                            id="Vector_102"
                            d="M18.7353 4.01896C18.6664 3.87476 18.5056 3.78327 18.3759 3.8141C18.2463 3.84492 18.1973 3.98664 18.2662 4.13084C18.3346 4.27504 18.4954 4.36703 18.625 4.33571C18.7547 4.30488 18.8037 4.16316 18.7353 4.01896Z"
                            fill="#BF703A"
                          />
                          <path
                            id="Vector_103"
                            d="M18.6812 4.05667C18.6245 3.93882 18.4933 3.86374 18.3877 3.8891C18.2815 3.91445 18.2412 4.03031 18.2973 4.14816C18.3535 4.26601 18.4846 4.34109 18.5908 4.31573C18.697 4.29037 18.7373 4.17451 18.6812 4.05667Z"
                            fill="#DB9565"
                          />
                          <path
                            id="Vector_104"
                            d="M18.3755 3.98364L18.6613 4.07862C18.6613 4.07862 18.4081 4.36403 18.3755 3.98364Z"
                            fill="#6D351D"
                          />
                          <path
                            id="Vector_105"
                            d="M10.4584 7.70848L10.6702 7.88401C10.6702 7.88401 11.1296 7.52848 11.0025 7.44892C10.8749 7.36936 10.4584 7.70848 10.4584 7.70848Z"
                            fill="#F7E0D0"
                          />
                          <path
                            id="Vector_106"
                            d="M11.1403 7.39963C11.1408 7.35687 11.1071 7.32156 11.0642 7.32107C11.0213 7.32057 10.9866 7.35488 10.9861 7.39764C10.9856 7.44041 11.0193 7.47571 11.0622 7.4767C11.1045 7.4772 11.1398 7.44289 11.1403 7.40013V7.39963Z"
                            fill="#F7E0D0"
                          />
                          <path
                            id="Vector_107"
                            d="M13.8368 4.59613L13.8695 4.30325L14.0532 4.28287L14.1068 4.50812L13.8368 4.59613Z"
                            fill="#589378"
                          />
                          <path
                            id="Vector_108"
                            d="M13.0416 4.26209L12.8665 4.52414L13.015 4.12982L13.0416 4.26209Z"
                            fill="#64B28B"
                          />
                          <path
                            id="Vector_109"
                            d="M12.4613 3.2989C12.4613 3.27006 12.3658 2.80862 12.2464 2.74398C12.2989 2.66989 12.521 3.11045 12.521 3.11045L12.4607 3.2994L12.4613 3.2989Z"
                            fill="#589378"
                          />
                          <path
                            id="Vector_110"
                            d="M11.272 2.19453C11.2179 2.31784 11.1367 2.81907 11.2174 2.79769C11.298 2.77581 11.2858 2.44812 11.3557 2.31685C11.4261 2.18558 11.5833 2.01552 11.5833 2.01552C11.5833 2.01552 11.3848 1.93795 11.272 2.19502V2.19453Z"
                            fill="#93D1B2"
                          />
                          <path
                            id="Vector_111"
                            d="M12.0545 2.99956C11.91 2.98862 11.5144 2.79619 11.5344 2.60674C11.5441 2.51226 11.6385 2.68729 11.7998 2.8121C11.9616 2.93641 12.1913 3.0105 12.054 3.00006L12.0545 2.99956Z"
                            fill="#93D1B2"
                          />
                          <path
                            id="Vector_112"
                            d="M11.0653 3.79616C10.9851 3.82699 10.4288 3.91301 10.3287 3.75638C10.2282 3.59975 11.37 3.6798 11.0653 3.79616Z"
                            fill="#67A587"
                          />
                          <path
                            id="Vector_113"
                            d="M14.5514 1.1781C14.4993 1.10053 14.4355 1.0523 14.4095 1.0702C14.3834 1.0881 14.4049 1.16517 14.4564 1.24274C14.509 1.32031 14.5723 1.36855 14.5983 1.35064C14.6244 1.33274 14.6034 1.25567 14.5509 1.1781H14.5514Z"
                            fill="#AD947F"
                          />
                          <path
                            id="Vector_114"
                            d="M14.2957 0.921529C14.236 0.888214 14.1773 0.879263 14.1655 0.901142C14.1538 0.923021 14.1926 0.967773 14.2528 1.00059C14.313 1.03391 14.3712 1.04286 14.383 1.02098C14.3947 0.999099 14.3559 0.954347 14.2957 0.921032V0.921529Z"
                            fill="#AD947F"
                          />
                          <path
                            id="Vector_115"
                            d="M14.6693 1.64399L14.801 1.61714C14.801 1.61714 14.9623 1.7146 14.9725 1.79516L14.6693 1.64399Z"
                            fill="#AD947F"
                          />
                          <path
                            id="Vector_116"
                            d="M13.2371 1.58239L13.5642 1.50979C13.5642 1.50979 13.4234 1.18011 13.429 1.08961C13.2845 1.28155 13.2371 1.58288 13.2371 1.58288V1.58239Z"
                            fill="#7A6756"
                          />
                          <g id="Vector_117" opacity="0.5">
                            <path
                              d="M16.9151 3.60367L19.2446 5.49271L19.3661 5.40867L16.9687 3.44952L16.9151 3.60367Z"
                              fill="#BC5642"
                            />
                          </g>
                          <path
                            id="Vector_118"
                            d="M19.5994 5.48821C19.626 5.51009 19.6347 5.54738 19.6193 5.57871C19.604 5.60954 19.5688 5.62545 19.5361 5.61699L14.5795 4.36344L14.6127 4.22968L16.7876 4.77963L16.8493 3.40425L16.9662 3.35005L19.5994 5.48821ZM16.9233 4.81394L19.2871 5.41163L16.9912 3.54646L16.9233 4.81345V4.81394Z"
                            fill="#5B493B"
                          />
                          <path
                            id="Vector_119"
                            d="M19.7786 5.55841C19.7801 5.44405 19.6892 5.35007 19.5759 5.34857C19.4621 5.34708 19.3687 5.43808 19.3672 5.55244C19.3656 5.66681 19.456 5.76079 19.5698 5.76228C19.6831 5.76377 19.777 5.67278 19.7786 5.55841Z"
                            fill="#FFDB8A"
                          />
                          <path
                            id="Vector_120"
                            d="M13.8848 4.20142L13.942 4.61761L14.408 4.35358L14.4018 4.16064L13.8848 4.20142Z"
                            fill="#F7E0D0"
                          />
                          <path
                            id="Vector_121"
                            d="M14.5381 4.31074L16.1536 6.28779L16.3057 6.11127L14.6141 4.26848L14.5381 4.31074Z"
                            fill="#5B493B"
                          />
                          <path
                            id="Vector_122"
                            d="M14.3615 4.17407C14.4529 4.10893 14.6096 3.9886 14.679 4.0428C14.7484 4.097 14.7704 4.31877 14.7357 4.33965C14.7009 4.36054 14.5402 4.37147 14.408 4.35357C14.2763 4.33617 14.263 4.24418 14.3615 4.17407Z"
                            fill="#F7E0D0"
                          />
                          <path
                            id="Vector_123"
                            d="M13.6168 8.65277C13.5045 8.54089 13.5607 7.78955 14.0583 7.7796C14.556 7.76966 15.5533 8.69901 15.4987 8.92228C15.4441 9.14554 14.0558 9.09034 13.6168 8.65277Z"
                            fill="#E8A070"
                          />
                          <path
                            id="Vector_124"
                            d="M2.84043 5.69804C2.74652 5.07549 2.61177 3.76227 4.45182 3.41022C3.36412 3.86669 2.95221 4.55637 2.84043 5.69804Z"
                            fill="#C16F36"
                          />
                          <path
                            id="Vector_125"
                            d="M3.73718 4.41616C4.07508 3.97212 4.82641 3.07559 6.18412 4.04223C5.22351 3.62355 4.53139 3.78466 3.73718 4.41616Z"
                            fill="#C16F36"
                          />
                          <path
                            id="Vector_126"
                            d="M3.7612 5.30671C3.96588 4.78709 4.4472 3.71901 6.0152 4.27741C4.97752 4.13769 4.35481 4.48128 3.7612 5.30671Z"
                            fill="#965326"
                          />
                          <path
                            id="Vector_127"
                            d="M3.09206 5.90446C3.17271 6.37237 3.2947 7.36139 1.91147 7.65576C2.72558 7.29427 3.02571 6.76719 3.09206 5.90446Z"
                            fill="#965326"
                          />
                          <path
                            id="Vector_128"
                            d="M8.67091 9.28768C8.43204 9.85106 7.59955 10.7376 7.64498 10.3513C7.66897 10.1459 8.10384 8.7427 8.41417 8.32601C8.68776 7.95854 9.16908 8.11169 8.67091 9.28718V9.28768Z"
                            fill="#E8A070"
                          />
                          <path
                            id="Vector_129"
                            d="M12.3449 7.12872C12.3459 7.0596 12.2928 7.00292 12.2264 7.00192C12.1601 7.00093 12.1055 7.05562 12.105 7.12524C12.1039 7.19435 12.1565 7.25104 12.2229 7.25204C12.2892 7.25303 12.3438 7.19784 12.3449 7.12872Z"
                            fill="#BF703A"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </p>
                <span className="text-text_secondary  text-x1 font-normal not-italic leading-120 text-center flex items-end justify-end w-auto">
                  Horse Racing
                </span>
              </div>
              <div className="flex items-center justify-between px-2 flex-col bg-bg_sportGameCard rounded border border-solid border-border_secondary w-full sm:w-[68px] gap-y-0.5 pt-2.5 pb-1 active:scale-95 transition-all duration-300 active:opacity-90 aspect-2">
                <p className=" w-7 h-auto flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={12}
                    viewBox="0 0 24 12"
                    fill="none"
                  >
                    <g id="Group">
                      <g id="Isolation Mode">
                        <g id="Group_2">
                          <path
                            id="Vector"
                            d="M20.1789 0.277645C20.6899 0.263749 21.3529 0.146523 21.5671 0.22939C21.7811 0.312257 22.0229 0.41584 22.1404 0.443378C22.2578 0.470916 22.3407 0.63665 22.2993 0.747308C22.2579 0.857965 22.5686 0.995908 23.0451 1.07877C23.5216 1.16164 23.9498 1.41706 23.9498 1.41706L23.7702 1.8799C23.7702 1.8799 23.638 1.99637 23.4127 1.98096C23.1408 1.98349 22.8273 1.99915 22.633 1.96277L22.5683 1.96025L22.2705 1.91881L22.0426 1.90315L21.8951 1.88496L21.6801 1.90315C21.6801 1.90315 21.4754 1.94205 21.4418 1.9653C21.4082 1.98854 21.2864 2.05852 21.2736 2.16211C21.2607 2.26569 21.3928 2.34073 21.4989 2.3435C21.605 2.34603 21.7915 2.32026 21.9496 2.28641C22.1075 2.25281 22.1957 2.21895 22.2864 2.26038C22.3771 2.30182 22.6722 2.40035 22.6722 2.40035C22.6722 2.40035 22.9809 2.45037 23.0762 2.4289C23.1714 2.40742 23.1901 2.36422 23.1901 2.36422C23.1926 2.45492 23.1123 2.56103 22.9958 2.61813C22.8793 2.67522 22.7705 2.60777 22.465 2.57922C22.1593 2.55067 22.1414 2.63884 21.8642 2.65703C21.5871 2.67522 21.4757 2.5585 21.1753 2.69341C20.8749 2.82807 19.787 3.21133 19.497 3.4238C19.2069 3.63628 19.098 3.67771 18.6941 3.92101C18.2901 4.16455 17.3129 5.45076 17.3129 5.45076C17.3129 5.45076 16.1664 4.54781 16.1664 4.53215C16.1664 4.51648 15.985 2.51202 15.985 2.51202L16.125 2.41197C16.2442 2.4241 18.2585 2.16943 18.686 1.64924C18.5748 1.64192 18.6145 1.6073 18.5005 1.6212C18.3866 1.63509 18.2141 1.69371 18.1155 1.68335C18.017 1.67299 17.8505 1.67627 17.7974 1.44586C18.0412 1.35365 18.1794 1.31399 18.5248 0.961549C18.8702 0.609365 19.4778 0.13288 20.1789 0.277897V0.277645Z"
                            fill="#E4B17C"
                          />
                          <path
                            id="Vector_2"
                            d="M22.299 0.747307C22.3405 0.636902 22.2576 0.471169 22.1401 0.443378C22.1232 0.439336 22.1038 0.433778 22.082 0.426956C22.1699 0.563131 21.9797 0.880197 22.1758 1.06513C22.3857 1.2632 22.1525 1.71796 21.4065 1.58962C20.6604 1.46128 20.1475 2.18409 21.4181 2.60373C21.4431 2.61206 21.4678 2.62015 21.4929 2.62823C21.606 2.6348 21.7091 2.66663 21.864 2.65653C22.1411 2.63834 22.1593 2.55042 22.4648 2.57871C22.7705 2.60726 22.8791 2.67447 22.9956 2.61762C23.112 2.56052 23.1924 2.45441 23.1899 2.36371C23.1899 2.36371 23.1712 2.40692 23.0759 2.42839C22.9804 2.44987 22.6719 2.39984 22.6719 2.39984C22.6719 2.39984 22.3766 2.30131 22.2862 2.25988C22.1955 2.21845 22.1075 2.25205 21.9494 2.2859C21.7915 2.3195 21.605 2.34552 21.4987 2.343C21.3926 2.34047 21.2604 2.26518 21.2733 2.1616C21.2862 2.05802 21.408 1.98804 21.4416 1.96479C21.4752 1.94155 21.6798 1.90264 21.6798 1.90264L21.8948 1.88445L22.0424 1.90264L22.2702 1.91831L22.5681 1.95974L22.6328 1.96227C22.8271 1.99865 23.1403 1.98298 23.4124 1.98046C23.6378 1.99612 23.7699 1.8794 23.7699 1.8794L23.9496 1.41656C23.9496 1.41656 23.5213 1.16114 23.0448 1.07827C22.5684 0.995402 22.2576 0.857207 22.299 0.746802V0.747307Z"
                            fill="#BF905F"
                          />
                          <path
                            id="Vector_3"
                            d="M22.3784 2.27558C22.4905 2.15811 22.7237 2.12021 22.6959 2.18741C22.6684 2.25487 22.6459 2.32561 22.6924 2.31171C22.7389 2.29782 22.7614 2.35491 22.7614 2.35491C22.8703 2.30135 23.0653 2.37058 22.9789 2.43778C22.9789 2.43778 22.6285 2.44132 22.3781 2.27558H22.3784Z"
                            fill="#FFF4E5"
                          />
                          <path
                            id="Vector_4"
                            d="M22.5909 1.97148C22.6098 2.05435 22.7463 2.07506 22.7738 2.03363C22.7478 2.3219 22.9741 2.17006 23.0085 2.09755C23.0792 2.1736 23.2743 1.98538 23.2743 1.98538C23.2743 1.98538 22.6839 2.00104 22.5906 1.97148H22.5909Z"
                            fill="#FFF4E5"
                          />
                          <path
                            id="Vector_5"
                            d="M21.517 2.34344C21.6698 2.25527 21.8227 2.06629 21.8977 2.0716C21.9727 2.0769 21.8745 2.21409 21.9727 2.18554C22.0713 2.15699 22.1592 2.2012 22.1592 2.25022C22.0452 2.27346 21.9674 2.28129 21.9599 2.29165C21.952 2.30201 21.5402 2.35632 21.517 2.34344Z"
                            fill="#FFF4E5"
                          />
                          <path
                            id="Vector_6"
                            d="M11.5389 5.20168C12.8651 5.72667 13.3623 6.36207 13.3623 6.36207L16.1249 6.63821C16.7328 6.36207 17.3128 5.45028 17.3128 5.45028C15.9316 4.15195 16.1249 2.4115 16.1249 2.4115C16.1249 2.4115 14.9648 2.30109 13.6662 1.85897C12.3679 1.41684 11.5943 0.864566 11.1246 1.12681C10.655 1.3893 9.13556 3.29549 9.13556 3.54409C9.13556 3.79269 9.19089 5.03595 9.27375 5.11881C9.35662 5.20168 11.5389 5.20168 11.5389 5.20168Z"
                            fill="#FFC421"
                          />
                          <path
                            id="Vector_7"
                            d="M15.5722 3.76529C16.7323 4.48355 16.318 6.27908 16.1247 6.63834C15.9314 6.99735 14.3842 7.7434 13.307 7.82627C12.2297 7.90913 9.4946 9.01419 9.1356 9.64959C8.77659 10.285 7.39515 10.6993 7.2572 10.7822C6.98106 10.285 7.53334 9.53893 8.03079 9.62205C8.80438 8.95912 9.13585 8.79339 9.10806 8.57232C9.08052 8.35126 9.1356 8.26839 9.3842 8.29618C9.6328 8.32372 11.1522 7.49505 11.6494 7.30178C12.1466 7.10851 12.8098 6.47311 13.0306 5.80993C13.2517 5.14699 13.9421 3.46187 15.5722 3.76554V3.76529Z"
                            fill="#C4986B"
                          />
                          <path
                            id="Vector_8"
                            d="M5.35105 2.60507C5.10245 2.92264 4.81216 3.59998 4.12851 4.28338C3.39635 5.01554 2.11874 5.83738 1.29007 5.75452C0.597831 5.68529 -0.201783 4.78765 0.461404 4.29045C0.185266 4.20758 -0.118663 4.81544 0.0470703 5.28485C0.212804 5.75426 0.710004 6.27925 1.67687 6.27925C2.64373 6.27925 4.12169 5.18809 4.68811 4.81519C5.15475 4.50798 5.88286 4.20051 5.91065 4.09011C5.93819 3.9797 5.3513 2.60532 5.3513 2.60532L5.35105 2.60507Z"
                            fill="#C4986B"
                          />
                          <path
                            id="Vector_9"
                            d="M21.9104 0.999507C21.9104 1.08541 21.8688 1.15488 21.8172 1.15488C21.7657 1.15488 21.724 1.08541 21.724 0.999507C21.724 0.913608 21.7657 0.844131 21.8172 0.844131C21.8688 0.844131 21.9104 0.913608 21.9104 0.999507Z"
                            fill="#2E0B06"
                          />
                          <path
                            id="Vector_10"
                            d="M21.8018 1.29409C21.7263 1.29409 21.6811 1.26983 21.6545 1.24608C21.6139 1.20895 21.5952 1.1521 21.6022 1.0854C21.6035 1.07404 21.6136 1.06545 21.625 1.06696C21.6363 1.06822 21.6447 1.07833 21.6434 1.0897C21.6394 1.12734 21.6429 1.17964 21.6823 1.21526C21.7233 1.2524 21.7935 1.262 21.8854 1.24331C21.8968 1.24103 21.9077 1.24836 21.91 1.25947C21.9122 1.27059 21.9052 1.28171 21.8938 1.28398C21.8589 1.29105 21.8284 1.29409 21.8018 1.29409Z"
                            fill="#2E0B06"
                          />
                          <path
                            id="Vector_11"
                            d="M18.8559 1.73837C18.7854 1.73837 18.7268 1.71234 18.6692 1.68657C18.5926 1.65247 18.5204 1.62038 18.4203 1.6507C18.273 1.69542 18.0674 1.7323 17.9231 1.65348C17.8534 1.61533 17.8064 1.55394 17.7832 1.47082C17.7801 1.4597 17.7865 1.44833 17.7976 1.4453C17.8084 1.44227 17.8201 1.44858 17.8231 1.4597C17.8433 1.5317 17.8837 1.58476 17.9431 1.61735C18.0815 1.69314 18.294 1.64615 18.4082 1.61129C18.5232 1.57642 18.6058 1.61331 18.6859 1.64893C18.7786 1.69011 18.8662 1.72927 19.0052 1.65449C19.204 1.54737 19.2629 1.42357 19.3253 1.2927C19.345 1.25102 19.3655 1.20807 19.3907 1.16512C19.5027 0.974626 19.7624 0.916013 19.8606 0.948856C19.8715 0.952393 19.8773 0.964267 19.8738 0.975131C19.8702 0.985995 19.8586 0.991805 19.8475 0.988268C19.7603 0.959215 19.5226 1.02288 19.4264 1.18634C19.4021 1.22777 19.3819 1.26997 19.3624 1.31064C19.3 1.44202 19.2354 1.57768 19.0247 1.69112C18.96 1.72599 18.9049 1.73862 18.8554 1.73862L18.8559 1.73837Z"
                            fill="#BF905F"
                          />
                          <g id="Vector_12">
                            <path
                              d="M20.7243 2.66747C20.7243 2.66747 20.7228 2.66747 20.722 2.66747C19.6094 2.54595 19.5846 2.1301 19.5563 1.64856C19.5528 1.58969 19.5492 1.52881 19.5434 1.46792C19.5424 1.45655 19.5507 1.44645 19.5621 1.44544C19.5737 1.44417 19.5836 1.45276 19.5846 1.46413C19.5904 1.52578 19.5939 1.58692 19.5975 1.64629C19.6248 2.10913 19.6485 2.50881 20.7265 2.62654C20.7379 2.6278 20.7462 2.63791 20.745 2.64928C20.7437 2.65989 20.7349 2.66772 20.7245 2.66772L20.7243 2.66747Z"
                              fill="#B8B8B8"
                            />
                          </g>
                          <path
                            id="Vector_13"
                            d="M23.9495 1.41704C23.7216 1.40315 23.4937 1.53452 23.473 1.56206C23.4869 1.68636 23.6734 1.68636 23.6734 1.68636C23.6458 1.62421 23.7494 1.60349 23.7701 1.65175C23.7908 1.7 23.7355 1.7139 23.7355 1.7139C23.8184 1.76923 23.7562 1.88645 23.7562 1.88645C23.8252 1.8382 24.1152 1.56888 23.9495 1.41679V1.41704Z"
                            fill="#2E0B06"
                          />
                          <path
                            id="Vector_14"
                            d="M22.954 2.46161C22.8684 2.46161 22.7648 2.44721 22.6506 2.41259C22.5523 2.38303 22.4778 2.35272 22.4179 2.32846C22.2742 2.2701 22.2022 2.24105 22.02 2.2936C21.83 2.34842 21.4723 2.39996 21.3215 2.30547C21.2828 2.28122 21.2601 2.24913 21.2533 2.20997C21.2424 2.14732 21.2623 2.08618 21.3109 2.03312C21.4228 1.91084 21.663 1.85173 21.9538 1.87522C22.1201 1.88861 22.2699 1.9068 22.4144 1.92423C22.6627 1.9543 22.8772 1.98007 23.1013 1.97375L23.1228 1.97325C23.453 1.96365 23.6918 1.95683 23.7385 1.87699C23.7443 1.86714 23.7569 1.86385 23.7668 1.86966C23.7766 1.87547 23.7799 1.88811 23.7741 1.89796C23.716 1.9975 23.4803 2.00432 23.1238 2.01468L23.1023 2.01519C22.8752 2.02175 22.6592 1.99573 22.4091 1.96542C22.2648 1.94798 22.1158 1.93005 21.95 1.91666C21.6719 1.89417 21.4442 1.94824 21.3409 2.06142C21.3013 2.10462 21.2848 2.15389 21.2934 2.20341C21.2982 2.23094 21.3144 2.25292 21.3427 2.27086C21.4627 2.34615 21.775 2.32164 22.0079 2.25444C22.2037 2.19785 22.2901 2.23296 22.4328 2.29082C22.495 2.31608 22.5655 2.34463 22.662 2.37369C22.9255 2.45302 23.0973 2.4179 23.1435 2.37722C23.1506 2.37091 23.1541 2.36484 23.1534 2.36055C23.1516 2.34918 23.1592 2.33857 23.1703 2.3368C23.1817 2.33478 23.1923 2.34261 23.1941 2.35373C23.1973 2.37268 23.189 2.39213 23.1706 2.4083C23.1332 2.44114 23.0564 2.46236 22.953 2.46236L22.954 2.46161Z"
                            fill="#2E0B06"
                          />
                          <path
                            id="Vector_15"
                            d="M11.1246 1.12682C10.5582 1.92795 10.0474 4.11028 10.0474 4.31745C10.6552 4.52461 11.1939 4.52461 11.332 4.77321C11.4702 5.02182 12.0089 4.86998 12.1746 6.09934C12.3403 7.3287 12.2989 8.98628 13.2933 9.87028C14.2877 10.7543 16.0974 11.0168 16.5532 10.8925C16.8157 10.9892 16.8985 11.4864 16.8985 11.5279C16.8985 11.5693 16.7189 11.6107 16.7189 11.6107C16.6221 11.7765 16.2078 11.9147 15.5588 11.5279C14.9095 11.1411 13.5144 10.63 13.1415 10.5885C12.7686 10.5471 12.1746 10.6575 12.2299 10.2017C11.9674 9.04136 11.4563 8.10229 10.4481 7.67406C9.43976 7.24583 7.18821 7.30116 5.86234 6.0579C4.53622 4.81465 5.29591 2.70154 5.35124 2.60478C5.73804 2.14901 6.92596 1.03006 8.459 0.988627C9.99203 0.947194 11.1249 1.12682 11.1249 1.12682H11.1246Z"
                            fill="#E4B17C"
                          />
                          <path
                            id="Vector_16"
                            d="M16.7047 11.5348C16.6953 11.5348 16.687 11.5285 16.6847 11.5191C16.6557 11.4029 16.6044 11.2097 16.5902 11.1864C16.5814 11.1715 16.5013 11.1376 16.4157 11.1126C16.4048 11.1094 16.3985 11.098 16.4015 11.0869C16.4048 11.076 16.4159 11.0694 16.4273 11.0727C16.468 11.0846 16.6026 11.1263 16.6256 11.1649C16.6468 11.2003 16.7118 11.4577 16.7246 11.509C16.7274 11.5201 16.7206 11.5313 16.7095 11.534C16.7077 11.5345 16.7062 11.5345 16.7044 11.5345L16.7047 11.5348Z"
                            fill="#2E0B06"
                          />
                          <g id="Vector_17">
                            <path
                              d="M12.558 10.4455C12.4534 10.4455 12.3965 10.4091 12.3662 10.3742C12.3205 10.3219 12.3086 10.2421 12.3341 10.1613C12.3377 10.1504 12.3493 10.1443 12.3601 10.1479C12.371 10.1514 12.3771 10.163 12.3738 10.1739C12.3526 10.2408 12.3617 10.3058 12.3975 10.3472C12.443 10.3993 12.5294 10.4162 12.6474 10.396C12.6588 10.3942 12.6694 10.4015 12.6714 10.4129C12.6734 10.4243 12.6658 10.4349 12.6545 10.4369C12.6186 10.443 12.5865 10.4457 12.5582 10.4457L12.558 10.4455Z"
                              fill="#B8B8B8"
                            />
                          </g>
                          <path
                            id="Vector_18"
                            d="M11.3594 4.85297C11.3511 4.85297 11.343 4.84792 11.3399 4.83933C11.277 4.66829 11.1047 4.62231 10.2773 4.40074L10.0416 4.33758C9.62703 4.22616 9.39005 4.07584 9.31703 3.87802C9.24124 3.67262 9.3663 3.45434 9.4671 3.30781C9.47367 3.29846 9.48656 3.29593 9.4959 3.3025C9.50525 3.30907 9.50778 3.32195 9.50121 3.3313C9.39763 3.48188 9.28773 3.67843 9.35594 3.86362C9.42289 4.04527 9.65709 4.1913 10.0522 4.29741L10.2877 4.36057C11.1522 4.59199 11.3079 4.63368 11.3783 4.82493C11.3824 4.83579 11.3768 4.84766 11.366 4.85145C11.3637 4.85221 11.3612 4.85272 11.3589 4.85272L11.3594 4.85297Z"
                            fill="#BA8C5D"
                          />
                          <g id="Vector_19">
                            <path
                              d="M14.6052 7.30829C14.5963 7.30829 14.588 7.30247 14.5852 7.29338C14.5819 7.28252 14.5883 7.2709 14.5991 7.26761C14.9394 7.16681 16.1034 6.55491 15.9796 5.74367C15.9778 5.7323 15.9856 5.72169 15.997 5.72017C16.0084 5.71841 16.019 5.72624 16.0205 5.73761C16.1483 6.57613 14.9589 7.20445 14.6107 7.30753C14.6087 7.30803 14.6067 7.30829 14.6049 7.30829H14.6052Z"
                              fill="#B8B8B8"
                            />
                          </g>
                          <g id="Vector_20">
                            <path
                              d="M9.20468 8.69659C9.19735 8.69659 9.19028 8.6928 9.18649 8.68573C9.13344 8.58821 9.12636 8.48412 9.16881 8.42046C9.1966 8.37902 9.24157 8.35906 9.29664 8.36513C9.30801 8.36639 9.31635 8.3765 9.31509 8.38786C9.31382 8.39923 9.30346 8.40757 9.29235 8.40631C9.25319 8.40226 9.22237 8.41515 9.20342 8.44345C9.17007 8.49372 9.1779 8.5829 9.22287 8.66577C9.22843 8.67588 9.22464 8.68851 9.21453 8.69381C9.2115 8.69558 9.20797 8.69634 9.20468 8.69634V8.69659Z"
                              fill="#B8B8B8"
                            />
                          </g>
                          <path
                            id="Vector_21"
                            d="M7.30551 10.6369C7.29414 10.6369 7.28479 10.6275 7.28479 10.6162C7.28479 10.6048 7.29313 10.5965 7.30374 10.5955C7.33406 10.5889 7.72464 10.4242 7.80321 10.3585L8.01038 10.1859L8.03691 10.2178L7.82974 10.3903C7.74536 10.4606 7.33557 10.6369 7.30551 10.6369Z"
                            fill="#2E0B06"
                          />
                          <path
                            id="Vector_22"
                            d="M7.38143 10.2573C7.37007 10.2573 7.36072 10.2479 7.36072 10.2365C7.36072 10.2252 7.37007 10.2158 7.38143 10.2158C7.38396 10.2158 7.63964 10.2146 7.78465 10.1223C7.79425 10.1163 7.80714 10.1191 7.8132 10.1287C7.81926 10.1383 7.81649 10.1511 7.80688 10.1572C7.65151 10.256 7.3923 10.257 7.38143 10.257V10.2573Z"
                            fill="#2E0B06"
                          />
                          <path
                            id="Vector_23"
                            d="M13.2663 2.44911C13.217 2.42788 13.1516 2.40691 13.0773 2.39277C12.6673 2.31546 12.3593 2.52338 12.2075 2.80761L12.2158 2.81064C12.3447 2.72777 12.5309 2.68785 12.7325 2.76188C13.0543 2.87986 13.1961 3.19541 13.0657 3.55088C12.9437 3.88412 12.6039 4.10897 12.2259 3.97052C11.8366 3.82778 11.6928 3.43214 11.8662 2.95894C11.9975 2.60044 12.23 2.36498 12.4748 2.25154C12.6804 2.15857 12.9159 2.13987 13.1556 2.19621C13.2327 2.21162 13.2951 2.23133 13.3401 2.24775L13.2663 2.44936V2.44911ZM12.8116 3.47332C12.907 3.2131 12.8161 3.00164 12.5892 2.91877C12.4409 2.86445 12.2696 2.90664 12.1544 3.01351C12.1274 3.03549 12.1029 3.06757 12.0865 3.11255C11.9821 3.4142 12.0385 3.68579 12.2959 3.78003C12.5086 3.85809 12.7161 3.73379 12.8116 3.47357V3.47332Z"
                            fill="white"
                          />
                          <g id="Vector_24">
                            <path
                              d="M17.2022 4.66998C17.1992 4.66998 17.1961 4.66922 17.1934 4.66796C17.183 4.6629 17.1787 4.65052 17.1838 4.64042C17.5132 3.95399 18.3522 3.09753 19.0761 2.91664C19.0869 2.91386 19.0983 2.92068 19.1011 2.93179C19.1038 2.94291 19.097 2.95403 19.0859 2.95681C18.3735 3.13492 17.5466 3.98051 17.2212 4.65835C17.2176 4.66568 17.2103 4.67023 17.2025 4.67023L17.2022 4.66998Z"
                              fill="#B8B8B8"
                            />
                          </g>
                          <g id="Vector_25">
                            <path
                              d="M16.843 3.82751C16.8331 3.82751 16.8243 3.82043 16.8225 3.81007C16.8208 3.7987 16.8283 3.78809 16.8394 3.78633C17.2851 3.71205 17.6017 3.5016 17.6047 3.49958C17.6141 3.49326 17.6269 3.49579 17.6335 3.50513C17.6398 3.51473 17.6373 3.52737 17.6279 3.53394C17.6247 3.53621 17.3013 3.75146 16.8463 3.82725C16.845 3.82725 16.844 3.82751 16.8427 3.82751H16.843Z"
                              fill="#B8B8B8"
                            />
                          </g>
                          <g id="Vector_26">
                            <path
                              d="M7.61925 2.51468C5.9604 2.92194 4.58829 5.31245 6.59327 5.54564C8.59849 5.77883 10.4792 6.58703 10.9299 7.13097C11.3806 7.67491 11.9869 4.86173 9.87282 4.62854C7.75896 4.39536 9.32913 2.09504 7.61925 2.51468Z"
                              fill="#1C1C1C"
                            />
                          </g>
                          <g id="Vector_27">
                            <path
                              d="M15.2357 4.13119C14.2496 3.98466 14.9403 5.46792 14.2408 6.32287C13.5412 7.17781 14.1475 7.20888 14.9714 6.6182C15.7953 6.02753 16.3859 4.30223 15.2357 4.13119Z"
                              fill="#1C1C1C"
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </p>
                <span className="text-text_secondary  text-x1 font-normal not-italic leading-120 text-center flex items-end justify-end w-auto">
                  Greyhound Racing
                </span>
              </div>
              <div className="flex items-center justify-between px-2 flex-col bg-bg_sportGameCard rounded border border-solid border-border_secondary w-full sm:w-[68px] gap-y-0.5 pt-2.5 pb-1 active:scale-95 transition-all duration-300 active:opacity-90 aspect-2">
                <p className=" w-7 h-auto flex items-center justify-center">
                  <span>🏀</span>
                </p>
                <span className="text-text_secondary  text-x1 font-normal not-italic leading-120 text-center flex items-end justify-end w-auto">
                  Basket Ball
                </span>
              </div>
              <div className="flex items-center justify-between px-2 flex-col bg-bg_sportGameCard rounded border border-solid border-border_secondary w-full sm:w-[68px] gap-y-0.5 pt-2.5 pb-1 active:scale-95 transition-all duration-300 active:opacity-90 aspect-2">
                <p className=" w-7 h-auto flex items-center justify-center">
                  <span>🏓</span>
                </p>
                <span className="text-text_secondary  text-x1 font-normal not-italic leading-120 text-center flex items-end justify-end w-auto">
                  Table Tennis
                </span>
              </div>
              <div className="flex items-center justify-between px-2 flex-col bg-bg_sportGameCard rounded border border-solid border-border_secondary w-full sm:w-[68px] gap-y-0.5 pt-2.5 pb-1 active:scale-95 transition-all duration-300 active:opacity-90 aspect-2">
                <p className=" w-7 h-auto flex items-center justify-center" />
                <div
                  className="relative overflow-hidden w-7 h-7"
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="/assets/menu-kabaddi.png?q=65&w=625&ar=0.75&px=auto&auto=format&fit=fill&blur=0"
                    alt="Kabaddi"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className="  w-full h-full"
                    title="Kabaddi"
                    loading="eager"
                  />
                </div>
                <p />
                <span className="text-text_secondary  text-x1 font-normal not-italic leading-120 text-center flex items-end justify-end w-auto">
                  Kabaddi
                </span>
              </div>
              <div className="flex items-center justify-between px-2 flex-col bg-bg_sportGameCard rounded border border-solid border-border_secondary w-full sm:w-[68px] gap-y-0.5 pt-2.5 pb-1 active:scale-95 transition-all duration-300 active:opacity-90 aspect-2">
                <p className=" w-7 h-auto flex items-center justify-center">
                  <span>🏉</span>
                </p>
                <span className="text-text_secondary  text-x1 font-normal not-italic leading-120 text-center flex items-end justify-end w-auto">
                  Rugby
                </span>
              </div>
              <div className="flex items-center justify-between px-2 flex-col bg-bg_sportGameCard rounded border border-solid border-border_secondary w-full sm:w-[68px] gap-y-0.5 pt-2.5 pb-1 active:scale-95 transition-all duration-300 active:opacity-90 aspect-2">
                <p className=" w-7 h-auto flex items-center justify-center">
                  <span>🥊</span>
                </p>
                <span className="text-text_secondary  text-x1 font-normal not-italic leading-120 text-center flex items-end justify-end w-auto">
                  Boxing
                </span>
              </div>
            </div>
          </div>
          <div className="w-full py-2">
            <div className="w-[100%] flex flex-row justify-between py-1.5">
              <div className="max-w-[85%] text-text_color_primary1 font-semibold capitalize">
                <div className="flex items-center gap-1.5 ">
                  <span className=" text-base text-text_secondary font-extrabold font-medium font-extrabold">
                    Game Providers
                  </span>
                </div>
              </div>
              <div className="flex w-[108.75px] items-center justify-end gap-[5px]">
                <button
                  className="relative overflow-hidden font-lato text-text_secondary min-w-max rounded-md px-1 py-0.5 font-semibold text-[12px] leading-[18px] transition-all ease-in-out duration-200"
                  type="button"
                >
                  See More
                </button>
                <button
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
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M15 6l-6 6l6 6" />
                  </svg>
                </button>
                <button
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
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 6l6 6l-6 6" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="w-full  gap-y-2 gap-x-2   grid grid-rows-3 grid-flow-col overflow-x-auto no-scrollbar scroll-smooth">
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/aug/logo_3_2_bw_white.svg"
                  alt="Aura gaming"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Aura gaming"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/evo/logo_3_2_bw_white.svg"
                  alt="Evolution Gaming"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Evolution Gaming"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/rtg/logo_3_2_bw_white.svg"
                  alt="Red Tiger"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Red Tiger"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/ntn/logo_3_2_bw_white.svg"
                  alt="NetEnt"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="NetEnt"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/spb/logo_3_2_bw_white.svg"
                  alt="Spribe"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Spribe"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/sms/logo_3_2_bw_white.svg"
                  alt="Smartsoft Gaming"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Smartsoft Gaming"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/ezg/logo_3_2_bw_white.svg"
                  alt="Ezugi"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Ezugi"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/png/logo_3_2_bw_white.svg"
                  alt="Play'n Go"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Play'n Go"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/btsl/logo_3_2_bw_white.svg"
                  alt="Betsolutions"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Betsolutions"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/crc/logo_3_2_bw_white.svg"
                  alt="Charismatic"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Charismatic"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/hbn/logo_3_2_bw_white.svg"
                  alt="Habanero"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Habanero"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/qps/logo_3_2_bw_white.svg"
                  alt="Quickspin"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Quickspin"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/gmz/logo_3_2_bw_white.svg"
                  alt="Gamzix"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Gamzix"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/ygg/logo_3_2_bw_white.svg"
                  alt="Yggdrasil"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Yggdrasil"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/nrl/logo_3_2_bw_white.svg"
                  alt="Northern Lights Gaming"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Northern Lights Gaming"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/ftp/logo_3_2_bw_white.svg"
                  alt="4ThePlayer"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="4ThePlayer"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/rfg/logo_3_2_bw_white.svg"
                  alt="Reflex Gaming"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Reflex Gaming"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/rpl/logo_3_2_bw_white.svg"
                  alt="ReelPlay"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="ReelPlay"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/pas/logo_3_2_bw_white.svg"
                  alt="Peter & Sons"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Peter & Sons"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/bbg/logo_3_2_bw_white.svg"
                  alt="Bang Bang Games"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Bang Bang Games"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/hrg/logo_3_2_bw_white.svg"
                  alt="Hot Rise Games"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Hot Rise Games"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/bpg/logo_3_2_bw_white.svg"
                  alt="Bulletproof Games"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Bulletproof Games"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/jdr/logo_3_2_bw_white.svg"
                  alt="Jade Rabbit Studio"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Jade Rabbit Studio"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/rlg/logo_3_2_bw_white.svg"
                  alt="Reel Life Games"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Reel Life Games"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/gmv/logo_3_2_bw_white.svg"
                  alt="GameVy"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="GameVy"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/jly/logo_3_2_bw_white.svg"
                  alt="Jelly"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Jelly"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/brg/logo_3_2_bw_white.svg"
                  alt="Boomerang Studios"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Boomerang Studios"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/ngg/logo_3_2_bw_white.svg"
                  alt="Naga Games"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Naga Games"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/onegame/logo_3_2_bw_white.svg"
                  alt="OneGame"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="OneGame"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/plt/logo_3_2_bw_white.svg"
                  alt="Playtech"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Playtech"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/pltl/logo_3_2_bw_white.svg"
                  alt="Playtech Live"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Playtech Live"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/nlc/logo_3_2_bw_white.svg"
                  alt="Nolimit City"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Nolimit City"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/btg/logo_3_2_bw_white.svg"
                  alt="Big Time Gaming"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Big Time Gaming"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/reg/logo_3_2_bw_white.svg"
                  alt="Relax Gaming"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Relax Gaming"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/pgs/logo_3_2_bw_white.svg"
                  alt="PGSoft"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="PGSoft"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/jil/logo_3_2_bw_white.svg"
                  alt="Jili Games"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Jili Games"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/mnc/logo_3_2_bw_white.svg"
                  alt="Mancala Gaming"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Mancala Gaming"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/oak/logo_3_2_bw_white.svg"
                  alt="3 Oaks Gaming"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="3 Oaks Gaming"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/kng/logo_3_2_bw_white.svg"
                  alt="Kingmidas"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Kingmidas"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/aes/logo_3_2_bw_white.svg"
                  alt="AE Sexy"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="AE Sexy"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/spn/logo_3_2_bw_white.svg"
                  alt="Spinomenal"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Spinomenal"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/tvb/logo_3_2_bw_white.svg"
                  alt="TVBet"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="TVBet"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/fnt/logo_3_2_bw_white.svg"
                  alt="Fantasma Games"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Fantasma Games"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/wzd/logo_3_2_bw_white.svg"
                  alt="Wazdan"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Wazdan"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/btr/logo_3_2_bw_white.svg"
                  alt="Beter Live"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Beter Live"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/fgs/logo_3_2_bw_white.svg"
                  alt="Fugaso"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Fugaso"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/sml/logo_3_2_bw_white.svg"
                  alt="Slotmill"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Slotmill"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/jdb/logo_3_2_bw_white.svg"
                  alt="JDB"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="JDB"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/tmh/logo_3_2_bw_white.svg"
                  alt="Tom Horn Gaming"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Tom Horn Gaming"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/end/logo_3_2_bw_white.svg"
                  alt="Endorphina"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Endorphina"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/ntg/logo_3_2_bw_white.svg"
                  alt="NetGaming"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="NetGaming"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/hcw/logo_3_2_bw_white.svg"
                  alt="Hacksaw Gaming"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Hacksaw Gaming"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/bgm/logo_3_2_bw_white.svg"
                  alt="BGaming"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="BGaming"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/gmb/logo_3_2_bw_white.svg"
                  alt="Gamebeat"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Gamebeat"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/aux/logo_3_2_bw_white.svg"
                  alt="AvatarUX"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="AvatarUX"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/blg/logo_3_2_bw_white.svg"
                  alt="Blueprint Gaming"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Blueprint Gaming"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/mnn/logo_3_2_bw_white.svg"
                  alt="Manna Play"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Manna Play"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/mbl/logo_3_2_bw_white.svg"
                  alt="Mobilots"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Mobilots"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/rts/logo_3_2_bw_white.svg"
                  alt="RTG Slots"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="RTG Slots"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/tdk/logo_3_2_bw_white.svg"
                  alt="Thunderkick"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Thunderkick"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/kir/logo_3_2_bw_white.svg"
                  alt="Kiron Interactive"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Kiron Interactive"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/bfg/logo_3_2_bw_white.svg"
                  alt="BF Games"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="BF Games"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/rbp/logo_3_2_bw_white.svg"
                  alt="RubyPlay"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="RubyPlay"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/bmg/logo_3_2_bw_white.svg"
                  alt="Booming Games"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Booming Games"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/raw/logo_3_2_bw_white.svg"
                  alt="Raw iGaming"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Raw iGaming"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/lea/logo_3_2_bw_white.svg"
                  alt="Leander Games"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Leander Games"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/cqc/logo_3_2_bw_white.svg"
                  alt="CQ9"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="CQ9"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/nvm/logo_3_2_bw_white.svg"
                  alt="Novomatic"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Novomatic"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/onl/logo_3_2_bw_white.svg"
                  alt="Onlyplay"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Onlyplay"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/dwg/logo_3_2_bw_white.svg"
                  alt="Darwin Gaming"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Darwin Gaming"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/bng/logo_3_2_bw_white.svg"
                  alt="Booongo"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Booongo"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/ply/logo_3_2_bw_white.svg"
                  alt="Playson"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Playson"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/ylt/logo_3_2_bw_white.svg"
                  alt="Yolted"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Yolted"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/imn/logo_3_2_bw_white.svg"
                  alt="iMoon Games"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="iMoon Games"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/iog/logo_3_2_bw_white.svg"
                  alt="InOut Games"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="InOut Games"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/pnt/logo_3_2_bw_white.svg"
                  alt="Print Studios"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Print Studios"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/bcs/logo_3_2_bw_white.svg"
                  alt="Backseat Gaming"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Backseat Gaming"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/spi/logo_3_2_bw_white.svg"
                  alt="SpinOro"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="SpinOro"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/phx/logo_3_2_bw_white.svg"
                  alt="PHOENIX 7"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="PHOENIX 7"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/bls/logo_3_2_bw_white.svg"
                  alt="Bullshark Games"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Bullshark Games"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/qbt/logo_3_2_bw_white.svg"
                  alt="Qubit Games"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Qubit Games"
                />
              </div>
              <div
                className="relative overflow-hidden min-w-[124px] md:min-w-[150px] aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_provioderGameCardBg shadow-md"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://luckmedia.link/providers/hbg/logo_3_2_bw_white.svg"
                  alt="Hungry Bear Gaming"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="  w-full max-h-[94%] [@supports(-webkit-touch-callout:none)]:h-full"
                  title="Hungry Bear Gaming"
                />
              </div>
            </div>
          </div>
          <InPlay />
          <div className="w-full py-2">
            <div
              title="Game Shows"
              className="flex items-start flex-col gap-0.5 w-full uppercase"
            >
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center justify-center gap-1">
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      width={16}
                      height={16}
                      x={0}
                      y={0}
                      viewBox="0 0 511.643 511.643"
                    >
                      <g>
                        <path
                          d="M453.209 184.081C373.725 121.725 300.804 41.437 270.565 6.713c-7.795-8.951-21.691-8.951-29.486 0-30.24 34.723-103.16 115.011-182.644 177.368C22.372 212.373 1.267 254.915 1.267 299.99c0 80 66.652 144.853 148.871 144.853 27.807 0 53.101-10.455 71.97-27.539v28.247c0 34.386-24.644 38.65-43.766 54.707-4.599 3.862-1.775 11.384 4.23 11.384h145.994c5.984 0 8.811-7.47 4.262-11.358-18.926-16.176-43.294-19.786-43.294-54.478v-28.503c18.869 17.084 44.163 27.539 71.97 27.539 82.219 0 148.871-64.853 148.871-144.853.001-45.074-21.104-87.616-57.166-115.908z"
                          fill="#d6035e"
                          opacity={1}
                        />
                      </g>
                    </svg>
                  </p>
                  <span className="text-text_secondary text-sm not-italic font-bold uppercase">
                    Indian Card Games
                  </span>
                </div>
                <div className="flex items-center justify-center gap-1.5">
                  <button
                    className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out text-text_secondary text-x not-italic mr-[8px] 
      cursor-pointer
      
      "
                    type="button"
                  >
                    View All
                  </button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="var(--color-icon_secondary)"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-text_secondary bg-bg_secondary4 rounded flex items-center justify-center active:scale-[98%] transition-all duration-300 active:opacity-80"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M15 6l-6 6l6 6" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="var(--color-icon_secondary)"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-text_secondary bg-bg_secondary4 rounded flex items-center justify-center active:scale-[98%] transition-all duration-300 active:opacity-80"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 6l6 6l-6 6" />
                  </svg>
                </div>
              </div>
              <div className=" w-full h-max scroll-smooth no-scrollbar  gap-x-2 pt-1 pb-2 flex items-start justify-start overflow-x-auto">
                <div
                  className="relative overflow-hidden min-w-[150px] w-[150px] sm:min-w-[170px] sm:w-[170px] md:min-w-[190px] md:w-[190px] aspect-1 object-cover rounded-md cursor-pointer  "
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="https://auraimgs.imgix.net/indiangamesposters-04.webp"
                    alt="Live Teenpatti"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className=" bg-bg_skeletonLoaderBg transition-all duration-500 ease-in-out active:scale-105 w-full h-full"
                    title="Live Teenpatti - exch11"
                  />
                </div>
                <div
                  className="relative overflow-hidden min-w-[150px] w-[150px] sm:min-w-[170px] sm:w-[170px] md:min-w-[190px] md:w-[190px] aspect-1 object-cover rounded-md cursor-pointer  "
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="https://auraimgs.imgix.net/indian%20games%20posters-26.webp"
                    alt="2 Cards Teenpatti"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className=" bg-bg_skeletonLoaderBg transition-all duration-500 ease-in-out active:scale-105 w-full h-full"
                    title="2 Cards Teenpatti - exch11"
                  />
                </div>
                <div
                  className="relative overflow-hidden min-w-[150px] w-[150px] sm:min-w-[170px] sm:w-[170px] md:min-w-[190px] md:w-[190px] aspect-1 object-cover rounded-md cursor-pointer  "
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="https://auraimgs.imgix.net/indian%20games%20posters-02.webp"
                    alt="TENNPATTI T20"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className=" bg-bg_skeletonLoaderBg transition-all duration-500 ease-in-out active:scale-105 w-full h-full"
                    title="TENNPATTI T20 - exch11"
                  />
                </div>
                <div
                  className="relative overflow-hidden min-w-[150px] w-[150px] sm:min-w-[170px] sm:w-[170px] md:min-w-[190px] md:w-[190px] aspect-1 object-cover rounded-md cursor-pointer  "
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="https://auraimgs.imgix.net/indian%20games%20posters-07.webp"
                    alt="Hi-Low"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className=" bg-bg_skeletonLoaderBg transition-all duration-500 ease-in-out active:scale-105 w-full h-full"
                    title="Hi-Low - exch11"
                  />
                </div>
                <div
                  className="relative overflow-hidden min-w-[150px] w-[150px] sm:min-w-[170px] sm:w-[170px] md:min-w-[190px] md:w-[190px] aspect-1 object-cover rounded-md cursor-pointer  "
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="https://auraimgs.imgix.net/indian%20games%20posters-24.webp"
                    alt="Dragon Tiger"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className=" bg-bg_skeletonLoaderBg transition-all duration-500 ease-in-out active:scale-105 w-full h-full"
                    title="Dragon Tiger - exch11"
                  />
                </div>
                <div
                  className="relative overflow-hidden min-w-[150px] w-[150px] sm:min-w-[170px] sm:w-[170px] md:min-w-[190px] md:w-[190px] aspect-1 object-cover rounded-md cursor-pointer  "
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="https://auraimgs.imgix.net/indian%20games%20posters-25.webp"
                    alt="Teenpatti Test"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className="  transition-all duration-500 ease-in-out active:scale-105 w-full h-full"
                    title="Teenpatti Test - exch11"
                  />
                </div>
                <div
                  className="relative overflow-hidden min-w-[150px] w-[150px] sm:min-w-[170px] sm:w-[170px] md:min-w-[190px] md:w-[190px] aspect-1 object-cover rounded-md cursor-pointer  "
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="https://auraimgs.imgix.net/indian%20games%20posters-01.webp"
                    alt="7UP 7DOWN"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className=" bg-bg_skeletonLoaderBg transition-all duration-500 ease-in-out active:scale-105 w-full h-full"
                    title="7UP 7DOWN - exch11"
                  />
                </div>
                <div
                  className="relative overflow-hidden min-w-[150px] w-[150px] sm:min-w-[170px] sm:w-[170px] md:min-w-[190px] md:w-[190px] aspect-1 object-cover rounded-md cursor-pointer  "
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="https://auraimgs.imgix.net/indian%20games%20posters-20.webp"
                    alt="Queen Race"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className="  transition-all duration-500 ease-in-out active:scale-105 w-full h-full"
                    title="Queen Race - exch11"
                  />
                </div>
                <div
                  className="relative overflow-hidden min-w-[150px] w-[150px] sm:min-w-[170px] sm:w-[170px] md:min-w-[190px] md:w-[190px] aspect-1 object-cover rounded-md cursor-pointer  "
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="https://auraimgs.imgix.net/indian%20games%20posters-18.webp"
                    alt="Roulette"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className=" bg-bg_skeletonLoaderBg transition-all duration-500 ease-in-out active:scale-105 w-full h-full"
                    title="Roulette - exch11"
                  />
                </div>
                <div
                  className="relative overflow-hidden min-w-[150px] w-[150px] sm:min-w-[170px] sm:w-[170px] md:min-w-[190px] md:w-[190px] aspect-1 object-cover rounded-md cursor-pointer  "
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="https://auraimgs.imgix.net/indian%20games%20posters-16.webp"
                    alt="The Trio"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className=" bg-bg_skeletonLoaderBg transition-all duration-500 ease-in-out active:scale-105 w-full h-full"
                    title="The Trio - exch11"
                  />
                </div>
                <div
                  className="relative overflow-hidden min-w-[150px] w-[150px] sm:min-w-[170px] sm:w-[170px] md:min-w-[190px] md:w-[190px] aspect-1 object-cover rounded-md cursor-pointer  "
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="https://auraimgs.imgix.net/indian%20games%20posters-10.webp"
                    alt="Poker 20-20"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className=" bg-bg_skeletonLoaderBg transition-all duration-500 ease-in-out active:scale-105 w-full h-full"
                    title="Poker 20-20 - exch11"
                  />
                </div>
                <div
                  className="relative overflow-hidden min-w-[150px] w-[150px] sm:min-w-[170px] sm:w-[170px] md:min-w-[190px] md:w-[190px] aspect-1 object-cover rounded-md cursor-pointer  "
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="https://auraimgs.imgix.net/indian%20games%20posters-15.webp"
                    alt="Muflis Teenpatti"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className=" bg-bg_skeletonLoaderBg transition-all duration-500 ease-in-out active:scale-105 w-full h-full"
                    title="Muflis Teenpatti - exch11"
                  />
                </div>
                <div
                  className="relative overflow-hidden min-w-[150px] w-[150px] sm:min-w-[170px] sm:w-[170px] md:min-w-[190px] md:w-[190px] aspect-1 object-cover rounded-md cursor-pointer  "
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="https://auraimgs.imgix.net/indian%20games%20posters-13.webp"
                    alt="Baccarat"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className=" bg-bg_skeletonLoaderBg transition-all duration-500 ease-in-out active:scale-105 w-full h-full"
                    title="Baccarat - exch11"
                  />
                </div>
                <div
                  className="relative overflow-hidden min-w-[150px] w-[150px] sm:min-w-[170px] sm:w-[170px] md:min-w-[190px] md:w-[190px] aspect-1 object-cover rounded-md cursor-pointer  "
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="https://auraimgs.imgix.net/indian%20games%20posters-12.webp"
                    alt="Bollywood Casino"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className=" bg-bg_skeletonLoaderBg transition-all duration-500 ease-in-out active:scale-105 w-full h-full"
                    title="Bollywood Casino - exch11"
                  />
                </div>
                <div
                  className="relative overflow-hidden min-w-[150px] w-[150px] sm:min-w-[170px] sm:w-[170px] md:min-w-[190px] md:w-[190px] aspect-1 object-cover rounded-md cursor-pointer  "
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="https://auraimgs.imgix.net/indian%20games%20posters-03.webp"
                    alt="Matka"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className="  transition-all duration-500 ease-in-out active:scale-105 w-full h-full"
                    title="Matka - exch11"
                  />
                </div>
                <div
                  className="relative overflow-hidden min-w-[150px] w-[150px] sm:min-w-[170px] sm:w-[170px] md:min-w-[190px] md:w-[190px] aspect-1 object-cover rounded-md cursor-pointer  "
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="https://auraimgs.imgix.net/indian%20games%20posters-08.webp"
                    alt="Poker"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className=" bg-bg_skeletonLoaderBg transition-all duration-500 ease-in-out active:scale-105 w-full h-full"
                    title="Poker - exch11"
                  />
                </div>
                <div
                  className="relative overflow-hidden min-w-[150px] w-[150px] sm:min-w-[170px] sm:w-[170px] md:min-w-[190px] md:w-[190px] aspect-1 object-cover rounded-md cursor-pointer  "
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="https://auraimgs.imgix.net/indian%20games%20posters-09.webp"
                    alt="32 Cards Casino"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className=" bg-bg_skeletonLoaderBg transition-all duration-500 ease-in-out active:scale-105 w-full h-full"
                    title="32 Cards Casino - exch11"
                  />
                </div>
                <div
                  className="relative overflow-hidden min-w-[150px] w-[150px] sm:min-w-[170px] sm:w-[170px] md:min-w-[190px] md:w-[190px] aspect-1 object-cover rounded-md cursor-pointer  "
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="https://auraimgs.imgix.net/indian%20games%20posters-19.webp"
                    alt="Sicbo"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className=" bg-bg_skeletonLoaderBg transition-all duration-500 ease-in-out active:scale-105 w-full h-full"
                    title="Sicbo - exch11"
                  />
                </div>
                <div
                  className="relative overflow-hidden min-w-[150px] w-[150px] sm:min-w-[170px] sm:w-[170px] md:min-w-[190px] md:w-[190px] aspect-1 object-cover rounded-md cursor-pointer  "
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="https://auraimgs.imgix.net/indian%20games%20posters-05.webp"
                    alt="Andar Bahar"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className=" bg-bg_skeletonLoaderBg transition-all duration-500 ease-in-out active:scale-105 w-full h-full"
                    title="Andar Bahar - exch11"
                  />
                </div>
                <div
                  className="relative overflow-hidden min-w-[150px] w-[150px] sm:min-w-[170px] sm:w-[170px] md:min-w-[190px] md:w-[190px] aspect-1 object-cover rounded-md cursor-pointer  "
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="https://auraimgs.imgix.net/indian%20games%20posters-11.webp"
                    alt="Amar Akbar Anthony"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className=" bg-bg_skeletonLoaderBg transition-all duration-500 ease-in-out active:scale-105 w-full h-full"
                    title="Amar Akbar Anthony - exch11"
                  />
                </div>
                <div
                  className="relative overflow-hidden min-w-[150px] w-[150px] sm:min-w-[170px] sm:w-[170px] md:min-w-[190px] md:w-[190px] aspect-1 object-cover rounded-md cursor-pointer  "
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="https://auraimgs.imgix.net/indian%20games%20posters-31.webp"
                    alt="super over"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className=" bg-bg_skeletonLoaderBg transition-all duration-500 ease-in-out active:scale-105 w-full h-full"
                    title="super over - exch11"
                  />
                </div>
                <div
                  className="relative overflow-hidden min-w-[150px] w-[150px] sm:min-w-[170px] sm:w-[170px] md:min-w-[190px] md:w-[190px] aspect-1 object-cover rounded-md cursor-pointer  "
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="https://auraimgs.imgix.net/indian%20games%20posters-23.webp"
                    alt="Teenaptti open"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className=" bg-bg_skeletonLoaderBg transition-all duration-500 ease-in-out active:scale-105 w-full h-full"
                    title="Teenaptti open - exch11"
                  />
                </div>
                <div
                  className="relative overflow-hidden min-w-[150px] w-[150px] sm:min-w-[170px] sm:w-[170px] md:min-w-[190px] md:w-[190px] aspect-1 object-cover rounded-md cursor-pointer  "
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="https://auraimgs.imgix.net/indian%20games%20posters-27.webp"
                    alt="3 card judgement"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className=" bg-bg_skeletonLoaderBg transition-all duration-500 ease-in-out active:scale-105 w-full h-full"
                    title="3 card judgement - exch11"
                  />
                </div>
                <div
                  className="relative overflow-hidden min-w-[150px] w-[150px] sm:min-w-[170px] sm:w-[170px] md:min-w-[190px] md:w-[190px] aspect-1 object-cover rounded-md cursor-pointer  "
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="https://auraimgs.imgix.net/indian%20games%20posters-29.webp"
                    alt="29 card baccarat"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className=" bg-bg_skeletonLoaderBg transition-all duration-500 ease-in-out active:scale-105 w-full h-full"
                    title="29 card baccarat - exch11"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full py-2 mt-0.5">
            <div
              title="Game Shows"
              className="flex items-start flex-col gap-0.5 w-full"
            >
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center justify-center gap-1">
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={18}
                      viewBox="0 0 16 18"
                      fill="#d6035e"
                    >
                      <path
                        d="M11.9802 5.61846C8.76732 3.66374 10.274 0.904781 10.3386 0.790102C10.4324 0.626906 10.4321 0.426129 10.3379 0.263215C10.2436 0.100301 10.0697 0 9.88143 0C8.22757 0 6.93248 0.469898 6.03217 1.39669C4.49377 2.9803 4.56513 5.445 4.59558 6.49751C4.59895 6.61409 4.60187 6.71484 4.60187 6.78966C4.60187 7.57111 4.72724 8.29255 4.83787 8.92905C4.90917 9.33922 4.97073 9.69346 4.98166 9.97196C4.99337 10.2701 4.93895 10.3384 4.93663 10.3412C4.92886 10.3504 4.86417 10.3848 4.68927 10.3848C4.48979 10.3848 4.34273 10.3196 4.21245 10.1736C3.70352 9.60289 3.66833 8.0447 3.76564 7.19698C3.78305 7.04749 3.73576 6.89773 3.63567 6.78537C3.53562 6.67301 3.39232 6.60874 3.24185 6.60874C1.87269 6.60874 0.849609 8.84777 0.849609 10.8497C0.849609 11.7908 1.03889 12.7127 1.41221 13.5898C1.77313 14.4377 2.28778 15.203 2.94193 15.8643C4.30431 17.2415 6.10055 18 7.99983 18C9.90674 18 11.7025 17.2522 13.0564 15.8945C14.4067 14.5403 15.1504 12.7486 15.1504 10.8496C15.1504 8.4266 13.2545 6.39369 11.9802 5.61846ZM7.99983 16.9453C4.69574 16.9453 1.90433 14.1539 1.90433 10.8496C1.90433 10.0461 2.09607 9.20257 2.43037 8.53548C2.50846 8.37963 2.58858 8.24593 2.66764 8.13329C2.67647 9.0033 2.81428 10.1893 3.42442 10.8745C3.75355 11.2441 4.19093 11.4395 4.6893 11.4395C5.15488 11.4395 5.50968 11.2983 5.74375 11.02C6.18137 10.4998 6.04704 9.72693 5.87702 8.74842C5.7737 8.15393 5.65659 7.48009 5.65659 6.78962C5.65659 6.69952 5.65346 6.59176 5.64988 6.46692C5.62102 5.46996 5.56093 3.39543 6.78869 2.13159C7.33984 1.56421 8.10934 1.2189 9.08282 1.10074C8.97292 1.46566 8.87817 1.92892 8.87452 2.44761C8.86643 3.59047 9.30356 5.22457 11.4321 6.51952C12.4619 7.14604 14.0957 8.87562 14.0957 10.8497C14.0957 14.2108 11.3611 16.9453 7.99983 16.9453Z"
                        fill="#d6035e"
                      />
                    </svg>
                  </p>
                  <span className="text-text_secondary text-sm not-italic font-bold uppercase">
                    GAME SHOWS
                  </span>
                </div>
                <div className="flex items-center justify-center gap-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="var(--color-icon_secondary)"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-text_secondary bg-bg_secondary4 rounded flex items-center justify-center active:scale-[98%] transition-all duration-300 active:opacity-80"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M15 6l-6 6l6 6" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="var(--color-icon_secondary)"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-text_secondary bg-bg_secondary4 rounded flex items-center justify-center active:scale-[98%] transition-all duration-300 active:opacity-80"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 6l6 6l-6 6" />
                  </svg>
                </div>
              </div>
              <div className=" w-full h-max scroll-smooth no-scrollbar flex items-start justify-start overflow-x-auto gap-x-2 pt-1 pb-2">
                <div
                  className="relative overflow-hidden min-w-[160px] w-[160px] sm:min-w-[170px] sm:w-[170px] md:min-w-[190px] md:w-[190px] aspect-[4/5] object-cover rounded-md cursor-pointer  "
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/popularBanners/FUNKYTIME-1691760822997"
                    alt="FUNKY TIME"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className="  transition-all duration-500 ease-in-out active:scale-105 w-full h-full"
                    title="FUNKY TIME - exch11"
                  />
                </div>
                <div
                  className="relative overflow-hidden min-w-[160px] w-[160px] sm:min-w-[170px] sm:w-[170px] md:min-w-[190px] md:w-[190px] aspect-[4/5] object-cover rounded-md cursor-pointer  "
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src='https://promotions-material.s3.ap-south-1.amazonaws.com/popularBanners/"XXXTREMELIGHTINGROULETTE"-1691760908430'
                    alt='"XXXTREME LIGHTING ROULETTE"'
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className="  transition-all duration-500 ease-in-out active:scale-105 w-full h-full"
                    title='"XXXTREME LIGHTING ROULETTE" - exch11'
                  />
                </div>
                <div
                  className="relative overflow-hidden min-w-[160px] w-[160px] sm:min-w-[170px] sm:w-[170px] md:min-w-[190px] md:w-[190px] aspect-[4/5] object-cover rounded-md cursor-pointer  "
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/popularBanners/CRAZYTIME-1691760949698"
                    alt="CRAZY TIME"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className="  transition-all duration-500 ease-in-out active:scale-105 w-full h-full"
                    title="CRAZY TIME - exch11"
                  />
                </div>
                <div
                  className="relative overflow-hidden min-w-[160px] w-[160px] sm:min-w-[170px] sm:w-[170px] md:min-w-[190px] md:w-[190px] aspect-[4/5] object-cover rounded-md cursor-pointer  "
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/popularBanners/IMPERIALQUEST-1691760989037"
                    alt="IMPERIAL QUEST"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className="  transition-all duration-500 ease-in-out active:scale-105 w-full h-full"
                    title="IMPERIAL QUEST - exch11"
                  />
                </div>
                <div
                  className="relative overflow-hidden min-w-[160px] w-[160px] sm:min-w-[170px] sm:w-[170px] md:min-w-[190px] md:w-[190px] aspect-[4/5] object-cover rounded-md cursor-pointer  "
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/popularBanners/DEALNODEAL-1691761036177"
                    alt="DEAL NO DEAL"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className="  transition-all duration-500 ease-in-out active:scale-105 w-full h-full"
                    title="DEAL NO DEAL - exch11"
                  />
                </div>
                <div
                  className="relative overflow-hidden min-w-[160px] w-[160px] sm:min-w-[170px] sm:w-[170px] md:min-w-[190px] md:w-[190px] aspect-[4/5] object-cover rounded-md cursor-pointer  "
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/popularBanners/EXTRACHILLIEPICSPINS-1691761099184"
                    alt="EXTRA CHILLI EPIC SPINS"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className="  transition-all duration-500 ease-in-out active:scale-105 w-full h-full"
                    title="EXTRA CHILLI EPIC SPINS - exch11"
                  />
                </div>
                <div
                  className="relative overflow-hidden min-w-[160px] w-[160px] sm:min-w-[170px] sm:w-[170px] md:min-w-[190px] md:w-[190px] aspect-[4/5] object-cover rounded-md cursor-pointer  "
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/popularBanners/DREAMCATCHER-1691761147220"
                    alt="DREAM CATCHER"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className="  transition-all duration-500 ease-in-out active:scale-105 w-full h-full"
                    title="DREAM CATCHER - exch11"
                  />
                </div>
                <div
                  className="relative overflow-hidden min-w-[160px] w-[160px] sm:min-w-[170px] sm:w-[170px] md:min-w-[190px] md:w-[190px] aspect-[4/5] object-cover rounded-md cursor-pointer  "
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/popularBanners/FOOTBALLSTUDIO-1691761185312"
                    alt="FOOTBALL STUDIO"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className="  transition-all duration-500 ease-in-out active:scale-105 w-full h-full"
                    title="FOOTBALL STUDIO - exch11"
                  />
                </div>
                <div
                  className="relative overflow-hidden min-w-[160px] w-[160px] sm:min-w-[170px] sm:w-[170px] md:min-w-[190px] md:w-[190px] aspect-[4/5] object-cover rounded-md cursor-pointer  "
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/popularBanners/LIGHTNINGDICE-1691761232968"
                    alt="LIGHTNING DICE"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className="  transition-all duration-500 ease-in-out active:scale-105 w-full h-full"
                    title="LIGHTNING DICE - exch11"
                  />
                </div>
                <div
                  className="relative overflow-hidden min-w-[160px] w-[160px] sm:min-w-[170px] sm:w-[170px] md:min-w-[190px] md:w-[190px] aspect-[4/5] object-cover rounded-md cursor-pointer  "
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/popularBanners/MONOPOLYLIVE-1691761266790"
                    alt="MONOPOLY LIVE"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className="  transition-all duration-500 ease-in-out active:scale-105 w-full h-full"
                    title="MONOPOLY LIVE - exch11"
                  />
                </div>
                <div
                  className="relative overflow-hidden min-w-[160px] w-[160px] sm:min-w-[170px] sm:w-[170px] md:min-w-[190px] md:w-[190px] aspect-[4/5] object-cover rounded-md cursor-pointer  "
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/popularBanners/MEGABALL-1691761311219"
                    alt="MEGA BALL"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className="  transition-all duration-500 ease-in-out active:scale-105 w-full h-full"
                    title="MEGA BALL - exch11"
                  />
                </div>
                <div
                  className="relative overflow-hidden min-w-[160px] w-[160px] sm:min-w-[170px] sm:w-[170px] md:min-w-[190px] md:w-[190px] aspect-[4/5] object-cover rounded-md cursor-pointer  "
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/popularBanners/CASHORCRASH-1691761356630"
                    alt="CASH OR CRASH"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className="  transition-all duration-500 ease-in-out active:scale-105 w-full h-full"
                    title="CASH OR CRASH - exch11"
                  />
                </div>
                <div
                  className="relative overflow-hidden min-w-[160px] w-[160px] sm:min-w-[170px] sm:w-[170px] md:min-w-[190px] md:w-[190px] aspect-[4/5] object-cover rounded-md cursor-pointer  mr-1.5"
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/popularBanners/GONZO’STREASUREHUNT-1691761393356"
                    alt="GONZO’S TREASURE HUNT"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className="  transition-all duration-500 ease-in-out active:scale-105 w-full h-full"
                    title="GONZO’S TREASURE HUNT - exch11"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex items-center justify-center flex-col gap-3 pb-[8rem] px-2">
          <div className="font-roboto text-center text-x1 text-text_secondary7 font-medium leading-120 w-full">
            Social Networks
          </div>
          <div className="flex items-center justify-center w-full pb-5 gap-x-2.5 border-b border-solid border-b-border_secondary4">
            <a
              className=" min-w-max flex items-center justify-center bg-bg_telegram rounded-lg w-10 h-10"
              href="https://t.me/11exch"
              target="_blank"
              rel="noopener noreferrer"
              title="11Exch-Telegram"
            >
              <svg
                width={21}
                height={21}
                viewBox="0 0 21 21"
                fill="var(--color-icon_secondary)"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Fill Ion Icons" clipPath="url(#clip0_685_228075)">
                  <path
                    id="Vector"
                    d="M8.74755 12.9357L8.41672 17.589C8.89005 17.589 9.09505 17.3857 9.34088 17.1415L11.5601 15.0207L16.1584 18.3882C17.0017 18.8582 17.5959 18.6107 17.8234 17.6123L20.8417 3.46901L20.8426 3.46818C21.1101 2.22151 20.3917 1.73401 19.5701 2.03984L1.82838 8.83234C0.617551 9.30234 0.635884 9.97734 1.62255 10.2832L6.15838 11.694L16.6942 5.10151C17.1901 4.77318 17.6409 4.95484 17.2701 5.28318L8.74755 12.9357Z"
                    fill="var(--color-icon_secondary)"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_685_228075">
                    <rect
                      width={20}
                      height={20}
                      fill="var(--color-icon_secondary)"
                      transform="translate(0.899902 0.284668)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a
              className=" min-w-max flex items-center justify-center bg-instagramGradient rounded-lg w-10 h-10"
              href="https://www.instagram.com/11exchindia_"
              target="_blank"
              rel="noopener noreferrer"
              title="11Exch-Instagram"
            >
              <svg
                width={21}
                height={21}
                viewBox="0 0 21 21"
                fill="var(--color-icon_secondary)"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Fill Ion Icons" clipPath="url(#clip0_685_228077)">
                  <path
                    id="Vector"
                    d="M20.7017 6.16472C20.6548 5.10205 20.483 4.37146 20.2368 3.73841C19.9828 3.06643 19.5921 2.46481 19.0802 1.96468C18.5801 1.45677 17.9745 1.0621 17.3103 0.812115C16.6736 0.565942 15.9468 0.394095 14.8842 0.347241C13.8136 0.29642 13.4737 0.284668 10.7583 0.284668C8.04293 0.284668 7.70305 0.29642 6.6364 0.343273C5.57373 0.390127 4.84314 0.562127 4.21024 0.808147C3.53811 1.0621 2.93649 1.4528 2.43636 1.96468C1.92845 2.46481 1.53393 3.0704 1.28379 3.73459C1.03762 4.37146 0.865775 5.09808 0.818921 6.16075C0.768099 7.23137 0.756348 7.57125 0.756348 10.2866C0.756348 13.002 0.768099 13.3419 0.814953 14.4085C0.861807 15.4712 1.03381 16.2018 1.27998 16.8348C1.53393 17.5068 1.92845 18.1084 2.43636 18.6086C2.93649 19.1165 3.54208 19.5111 4.20627 19.7611C4.84314 20.0073 5.56976 20.1791 6.63259 20.226C7.69908 20.273 8.03911 20.2846 10.7545 20.2846C13.4699 20.2846 13.8097 20.273 14.8764 20.226C15.9391 20.1791 16.6696 20.0073 17.3025 19.7611C18.6467 19.2415 19.7093 18.1788 20.229 16.8348C20.475 16.198 20.647 15.4712 20.6939 14.4085C20.7407 13.3419 20.7525 13.002 20.7525 10.2866C20.7525 7.57125 20.7485 7.23137 20.7017 6.16472ZM18.9006 14.3304C18.8576 15.3071 18.6935 15.8346 18.5568 16.1862C18.2207 17.0575 17.5292 17.749 16.6579 18.0851C16.3063 18.2218 15.775 18.3859 14.8021 18.4288C13.7472 18.4758 13.4308 18.4874 10.7623 18.4874C8.09375 18.4874 7.7734 18.4758 6.72233 18.4288C5.74557 18.3859 5.21813 18.2218 4.8665 18.0851C4.43291 17.9248 4.03824 17.6709 3.71789 17.3388C3.3858 17.0145 3.13184 16.6238 2.97159 16.1902C2.83485 15.8385 2.67078 15.3071 2.6279 14.3343C2.58089 13.2795 2.56929 12.9629 2.56929 10.2944C2.56929 7.62588 2.58089 7.30554 2.6279 6.25461C2.67078 5.27786 2.83485 4.75041 2.97159 4.39878C3.13184 3.96504 3.3858 3.57053 3.72186 3.25003C4.04602 2.91793 4.43672 2.66398 4.87046 2.50388C5.22209 2.36714 5.75351 2.20307 6.72629 2.16003C7.78119 2.11318 8.09772 2.10143 10.7661 2.10143C13.4386 2.10143 13.755 2.11318 14.806 2.16003C15.7828 2.20307 16.3102 2.36714 16.6619 2.50388C17.0954 2.66398 17.4901 2.91793 17.8105 3.25003C18.1426 3.57434 18.3965 3.96504 18.5568 4.39878C18.6935 4.75041 18.8576 5.28168 18.9006 6.25461C18.9475 7.30951 18.9592 7.62588 18.9592 10.2944C18.9592 12.9629 18.9475 13.2755 18.9006 14.3304Z"
                    fill="var(--color-icon_secondary)"
                  />
                  <path
                    id="Vector_2"
                    d="M10.7583 5.14893C7.92193 5.14893 5.62061 7.4501 5.62061 10.2866C5.62061 13.1232 7.92193 15.4244 10.7583 15.4244C13.5949 15.4244 15.896 13.1232 15.896 10.2866C15.896 7.4501 13.5949 5.14893 10.7583 5.14893ZM10.7583 13.6194C8.91822 13.6194 7.42561 12.1269 7.42561 10.2866C7.42561 8.44638 8.91822 6.95394 10.7583 6.95394C12.5986 6.95394 14.091 8.44638 14.091 10.2866C14.091 12.1269 12.5986 13.6194 10.7583 13.6194Z"
                    fill="var(--color-icon_secondary)"
                  />
                  <path
                    id="Vector_3"
                    d="M17.2989 4.946C17.2989 5.60837 16.7618 6.14543 16.0993 6.14543C15.437 6.14543 14.8999 5.60837 14.8999 4.946C14.8999 4.28349 15.437 3.74658 16.0993 3.74658C16.7618 3.74658 17.2989 4.28349 17.2989 4.946Z"
                    fill="var(--color-icon_secondary)"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_685_228077">
                    <rect
                      width={20}
                      height={20}
                      fill="white"
                      transform="translate(0.721191 0.284668)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a
              className=" min-w-max flex items-center justify-center bg-bg_facebook rounded-lg w-10 h-10"
              href="https://www.facebook.com/11exch"
              target="_blank"
              rel="noopener noreferrer"
              title="11Exch-Facebook"
            >
              <svg
                width={11}
                height={21}
                viewBox="0 0 11 21"
                fill="var(--color-icon_secondary)"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Group">
                  <path
                    id="f_1_"
                    d="M7.09118 20.2847V11.1624H10.1519L10.6111 7.60623H7.09118V5.33614C7.09118 4.30687 7.37582 3.60543 8.85347 3.60543L10.735 3.60466V0.423898C10.4096 0.381613 9.29269 0.284668 7.99269 0.284668C5.27809 0.284668 3.41963 1.94163 3.41963 4.98394V7.60623H0.349609V11.1624H3.41963V20.2847H7.09118Z"
                    fill="var(--color-icon_secondary)"
                  />
                </g>
              </svg>
            </a>
          </div>
          <div
            id="footerTopDownlodApp"
            className="px-2 rounded gap-2 w-full grid grid-cols-1  items-center justify-center"
          >
            <div className="flex w-full items-center justify-center">
              <button
                title="Android App"
                className="w-full max-w-[250px] flex shadow-lg border border-solid border-border_primary gap-2 items-center justify-between p-1 pr-3 rounded-lg bg-bg_apksGradient active:scale-95 active:opacity-80 transition-all duration-300 cursor-pointer"
              >
                <div className="flex justify-center items-center gap-x-2">
                  <svg
                    width={30}
                    height={30}
                    viewBox="0 0 45 45"
                    fill="var(--color-icon_primary)"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width={45}
                      height={45}
                      rx={6}
                      fill="white"
                      fillOpacity="0.2"
                    />
                    <path
                      d="M29.1091 19.4758L31.1164 16.0067C31.2909 15.6685 31.16 15.2539 30.8327 15.0794C30.5164 14.9158 30.1236 15.0139 29.9273 15.3194L27.8764 18.8539C24.7564 17.5339 21.2436 17.5339 18.1236 18.8539L16.0727 15.3194C15.8655 15.003 15.44 14.9048 15.1236 15.1012C14.8182 15.2976 14.72 15.6903 14.8836 16.0067L16.8909 19.4758C13.5091 21.4067 11.3055 24.8867 11 28.7703H35C34.6945 24.8867 32.4909 21.4067 29.1091 19.4758ZM17.5455 25.7703C16.7927 25.7703 16.1818 25.1594 16.1818 24.4067C16.1818 23.6539 16.7927 23.043 17.5455 23.043C18.2982 23.043 18.9091 23.6539 18.9091 24.4067C18.9091 25.1594 18.2982 25.7703 17.5455 25.7703ZM28.4545 25.7703C27.7018 25.7703 27.0909 25.1594 27.0909 24.4067C27.0909 23.6539 27.7018 23.043 28.4545 23.043C29.2073 23.043 29.8182 23.6539 29.8182 24.4067C29.8182 25.1594 29.2073 25.7703 28.4545 25.7703Z"
                      fill="var(--color-icon_primary)"
                    />
                  </svg>
                  <div className="flex rounded flex-col items-start justify-center text-xs">
                    <span className="w-full flex flex-row xxs:text-x sm:text-xs md:text-sm justify-between text-text_secondary font-normal">
                      <span>Download</span>
                    </span>
                    <span className="text-text_secondary xxs:text-x sm:text-xs md:text-sm font-semibold whitespace-nowrap flex-nowrap uppercase">
                      Android App
                    </span>
                  </div>
                </div>
                <div className="flex rounded flex-col items-start justify-center text-xs" />
              </button>
              <button className="w-5 h-5 flex items-center justify-center -rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={7}
                  height={12}
                  viewBox="0 0 7 12"
                  fill="var(--color-icon_secondary)"
                >
                  <path
                    d="M5.3673 11.2346L0 5.8673L5.3673 0.5L6.32 1.4527L1.90539 5.8673L6.32 10.2819L5.3673 11.2346Z"
                    fill="var(--color-icon_secondary)"
                  />
                </svg>
              </button>
            </div>
          </div>
        </footer>
      </div>

      <Footer />
    </main>
  );
};

export default Home;

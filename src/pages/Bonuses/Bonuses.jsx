const Bonuses = () => {
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
        <span className="text-text_secondary">Bonuses</span>
      </nav>
      <div className="relative flex flex-wrap w-full items-center justify-center  z-[1] pb-[3.5rem] pt-2">
        <div className="w-full lg:w-[475px] px-2 flex flex-col gap-y-2">
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
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="/assets/images/cash-bundle.webp"
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
                      Click See All to view available claims
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
        </div>
        <div className=" w-full mt-4 px-3">
          <div className=" flex flex-row font-manorape items-center justify-start gap-2.5 relative">
            <div className="cursor-pointer w-full flex flex-row items-center justify-center">
              <span className="text-text_secondary items-center justify-center text-center     px-4 xs:px-8 py-2 text-[13px] md:text-sm lg:text-base font-bold  leading-4 active:scale-95 w-full block z-10 ">
                All
              </span>
            </div>
            <div className="cursor-pointer w-full flex flex-row items-center justify-center">
              <span className="text-text_secondary  border border-solid items-center justify-center text-center border-border_tertiary22 rounded-full  px-4 xs:px-8 py-2 text-[13px] md:text-sm lg:text-base font-bold  leading-4 active:scale-95 w-full block z-10 ">
                Active
              </span>
            </div>
            <div className="cursor-pointer w-full flex flex-row items-center justify-center">
              <span className="text-text_secondary  border border-solid items-center justify-center text-center border-border_tertiary22 rounded-full  px-4 xs:px-8 py-2 text-[13px] md:text-sm lg:text-base font-bold  leading-4 active:scale-95 w-full block z-10 ">
                Expired
              </span>
            </div>
            <div
              className="absolute z-1 w-full h-full transition-all ease-in-out duration-150 bg-exchLoginGradient bg-bg_primary items-center justify-center text-center rounded-full"
              style={{
                width: "145.508px",
                top: "1px",
                left: "0px",
                height: "27.9818px",
              }}
            />
          </div>
        </div>
        <div className="p-2 mt-1 w-full  ">
          <div className=" w-full  px-[9px]   flex flex-col justify-center relative overflow-hidden rounded-lg  bg-giftBonusBgColor gap-y-1.5 pb-[9px]">
            <div className="flex justify-between gap-[9px] items-center h-full">
              <div className="flex flex-col items-start text-text_secondary gap-2 pt-[12px]">
                <div className="text-[14px] md:text-[24px] font-bold  text-text_secondary ">
                  GIFT CARD
                </div>
                <div className="leading-4 text-[11px] sm:text-xs md:text-sm  tracking-wide font-normal  text-text_secondary">
                  Type or Paste your promocode and get rewards in your wallet.
                </div>
              </div>
            </div>
            <div className="flex  items-center justify-center">
              <div className=" flex  gap-2.5 items-center w-[80%] border rounded-[4px] border-[#112856] flex-grow">
                <input
                  className="block w-full focus:outline-none  text-sm text-text_secondary placeholder:text-text_secondary-500 font-normal  h-8 bg-bg_inputBgColor pl-2"
                  placeholder="ENTER PROMO CODE"
                  autoComplete="off"
                  type="text"
                  defaultValue
                />
              </div>
              <button
                className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out w-max px-4 py-1 min-h-[32px]  text-text_secondary    bg-bonusLineGradient text-sm font-bold leading-4 rounded-md ml-[12px] flex items-center  justify-center min-w-[90px] 
      cursor-pointer
      
      "
                disabled
                type="button"
              >
                <span>Redeem</span>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full px-2">
          <div className="w-full max-w-md  bg-appBackgroundGradient rounded-xl shadow-xl overflow-hidden">
            <div className="p-6 space-y-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
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
                  className="w-20 h-20 text-[#4fd1c5]"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                  <path d="M15 17m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  <path d="M9 17m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  <path d="M9 17l6 -6" />
                  <path d="M15 17l-6 -6" />
                </svg>
                <h2 className="text-xl font-semibold text-text_secondary">
                  No Bonuses Available
                </h2>
                <p className="text-text_secondary1 text-sm text-justify">
                  No Bonuses Available
                </p>
              </div>
              <button className="w-full active:scale-95 py-2 bg-bg_Primary text-text_secondary font-semibold rounded-lg transition duration-200 ease-in-out">
                Refresh Data
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Bonuses;

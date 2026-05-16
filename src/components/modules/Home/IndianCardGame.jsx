const IndianCardGame = () => {
  return (
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
  );
};

export default IndianCardGame;

const GameShow = () => {
  return (
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
  );
};

export default GameShow;

const GameProvider = () => {
  return (
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
            className="relative overflow-hidden  text-text_secondary min-w-max rounded-md px-1 py-0.5 font-semibold text-[12px] leading-[18px] transition-all ease-in-out duration-200"
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
  );
};

export default GameProvider;

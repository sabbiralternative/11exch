const HomeFooter = () => {
  return (
    <footer className="flex items-center justify-center flex-col gap-3 pb-[8rem] px-2">
      {/* <div className="font-roboto text-center text-x1 text-text_secondary7 font-medium leading-120 w-full">
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
      </div> */}
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
  );
};

export default HomeFooter;

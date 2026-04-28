import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useCurrentBets } from "../../hooks/currentBets";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

const OpenBets = () => {
  const navigate = useNavigate();
  const { data: myBets } = useCurrentBets();
  const [openBets, setOpenBets] = useState(true);
  const orderedBets = [
    ...myBets.filter((bet) => bet.betType === "Back"),
    ...myBets.filter((bet) => bet.betType === "Lay"),
  ];

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
        <span className="text-text_secondary">Open Bets</span>
      </nav>
      <div className=" w-full h-max mb-[60px] overflow-y-auto">
        <div className=" w-full flex items-center justify-center mt-4 flex-col px-3 pb-4">
          <div className=" w-max py-1.5 px-3 bg-bg_primary5 rounded-md">
            <div className=" flex flex-row font-manorape items-center justify-start gap-2.5 relative">
              <div className="cursor-pointer w-full flex flex-row items-center justify-center">
                <span className="text-text_secondary items-center justify-center text-center  whitespace-nowrap  font-bold text-xs px-4 py-1.5 font-lato leading-4 active:scale-95 w-full flex items-center justify-center gap-x-1 block z-10 ">
                  Matched Bets
                </span>
              </div>
              <div className="cursor-pointer w-full flex flex-row items-center justify-center">
                <span className="text-text_secondary whitespace-nowrap rounded-md font-bold text-xs px-4 py-1.5 font-lato leading-4 active:scale-95 w-full flex items-center justify-center gap-x-1 block z-10 ">
                  Unmatched Bets
                </span>
              </div>
              <div
                className="absolute z-1 w-full h-full transition-all ease-in-out duration-150 bg-exchLoginGradient rounded-md bg-exchLoginGradient"
                style={{
                  width: "95.2995px",
                  top: "1px",
                  left: "0px",
                  height: "24.4922px",
                }}
              />
            </div>
          </div>
          <div className="w-full h-full">
            <div className=" w-full bg-bg_secondary3 rounded-md mt-2 h-max border border-dashed border-current flex items-center justify-center p-6 flex-col gap-y-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={48}
                height={50}
                viewBox="0 0 49 50"
                fill="none"
              >
                <g id="OBJECTS" clipPath="url(#clip0_274_15659)">
                  <path
                    id="Vector"
                    d="M49 25C49 27.3641 48.6768 29.6517 48.0743 31.8206C47.7277 33.058 47.2933 34.2559 46.7761 35.4063C42.8999 44.0106 34.3742 50 24.5013 50C10.99 50 0 38.7836 0 25C0 11.2164 10.99 0 24.5013 0C38.0126 0 49 11.2164 49 25Z"
                    fill="url(#paint0_linear_274_15659)"
                  />
                  <path
                    id="Vector_2"
                    d="M40.2165 41.0358C48.8961 32.1795 48.8961 17.8205 40.2165 8.96416C31.5368 0.107812 17.4642 0.107813 8.78455 8.96416C0.104873 17.8205 0.104873 32.1795 8.78455 41.0358C17.4642 49.8922 31.5368 49.8922 40.2165 41.0358Z"
                    fill="#878CF0"
                  />
                  <path
                    id="Vector_3"
                    d="M24.5012 46.7177C36.2563 46.7177 45.7857 36.9944 45.7857 25C45.7857 13.0057 36.2563 3.28235 24.5012 3.28235C12.7462 3.28235 3.2168 13.0057 3.2168 25C3.2168 36.9944 12.7462 46.7177 24.5012 46.7177Z"
                    fill="#F9FBFC"
                  />
                  <path
                    id="Vector_4"
                    d="M25.9054 25.0001C25.9054 25.7917 25.2771 26.4328 24.5013 26.4328C23.7255 26.4328 23.0972 25.7917 23.0972 25.0001C23.0972 24.2085 23.7255 23.5674 24.5013 23.5674C25.2771 23.5674 25.9054 24.2085 25.9054 25.0001Z"
                    fill="#3D348B"
                  />
                  <path
                    id="Vector_5"
                    d="M24.7392 25.6596C24.3824 25.6596 24.0928 25.3641 24.0928 25V9.56991C24.0928 9.20579 24.3824 8.91028 24.7392 8.91028C25.0961 8.91028 25.3857 9.20579 25.3857 9.56991V25C25.3857 25.3641 25.0961 25.6596 24.7392 25.6596Z"
                    fill="#3D348B"
                  />
                  <path
                    id="Vector_6"
                    d="M24.7392 25.6596H13.064C12.7071 25.6596 12.4175 25.3641 12.4175 25C12.4175 24.6358 12.7071 24.3403 13.064 24.3403H24.7392C25.0961 24.3403 25.3857 24.6358 25.3857 25C25.3857 25.3641 25.0961 25.6596 24.7392 25.6596Z"
                    fill="#3D348B"
                  />
                  <g id="Group">
                    <path
                      id="Vector_7"
                      d="M24.7391 6.67546C24.5968 6.67546 24.4805 6.55672 24.4805 6.4116V4.70184C24.4805 4.55672 24.5968 4.43799 24.7391 4.43799C24.8813 4.43799 24.9976 4.55672 24.9976 4.70184V6.4116C24.9976 6.55672 24.8813 6.67546 24.7391 6.67546Z"
                      fill="#7678ED"
                    />
                    <path
                      id="Vector_8"
                      d="M15.598 9.04482C15.5075 9.04482 15.4222 8.99732 15.373 8.91289L14.5352 7.43268C14.4628 7.30603 14.5068 7.14508 14.6309 7.0712C14.755 6.99732 14.9128 7.04218 14.9852 7.16883L15.823 8.64904C15.8954 8.77569 15.8514 8.93664 15.7273 9.01052C15.6859 9.03426 15.642 9.04482 15.598 9.04482Z"
                      fill="#7678ED"
                    />
                    <path
                      id="Vector_9"
                      d="M8.84375 15.7599C8.79979 15.7599 8.75583 15.7493 8.71446 15.7256L7.26377 14.8707C7.13965 14.7968 7.09828 14.6359 7.1681 14.5092C7.23791 14.3826 7.39824 14.3403 7.52236 14.4116L8.97305 15.2665C9.09717 15.3403 9.13854 15.5013 9.06872 15.6279C9.01959 15.7124 8.93426 15.7599 8.84375 15.7599Z"
                      fill="#7678ED"
                    />
                    <path
                      id="Vector_10"
                      d="M6.28361 25.0211H4.60795C4.46573 25.0211 4.34937 24.9024 4.34937 24.7573C4.34937 24.6121 4.46573 24.4934 4.60795 24.4934H6.28361C6.42583 24.4934 6.5422 24.6121 6.5422 24.7573C6.5422 24.9024 6.42583 25.0211 6.28361 25.0211Z"
                      fill="#7678ED"
                    />
                    <path
                      id="Vector_11"
                      d="M7.15496 35.2031C7.06445 35.2031 6.97912 35.1556 6.92999 35.0711C6.85758 34.9445 6.90154 34.7835 7.02566 34.7097L8.47635 33.8548C8.60047 33.7809 8.75821 33.8257 8.83061 33.9524C8.90302 34.079 8.85906 34.24 8.73494 34.3139L7.28425 35.1688C7.24288 35.1925 7.19892 35.2031 7.15496 35.2031Z"
                      fill="#7678ED"
                    />
                    <path
                      id="Vector_12"
                      d="M14.3489 42.7203C14.3049 42.7203 14.261 42.7097 14.2196 42.686C14.0955 42.6121 14.0541 42.4512 14.1239 42.3245L14.9617 40.8443C15.0341 40.7176 15.1919 40.6754 15.316 40.7467C15.4401 40.8205 15.4815 40.9815 15.4117 41.1081L14.5739 42.5884C14.5247 42.6728 14.4394 42.7203 14.3489 42.7203Z"
                      fill="#7678ED"
                    />
                    <path
                      id="Vector_13"
                      d="M24.2632 45.5619C24.121 45.5619 24.0046 45.4432 24.0046 45.2981V43.5883C24.0046 43.4432 24.121 43.3245 24.2632 43.3245C24.4055 43.3245 24.5218 43.4432 24.5218 43.5883V45.2981C24.5218 45.4432 24.4055 45.5619 24.2632 45.5619Z"
                      fill="#7678ED"
                    />
                    <path
                      id="Vector_14"
                      d="M34.2396 42.9632C34.1491 42.9632 34.0638 42.9157 34.0146 42.8312L33.1768 41.351C33.1044 41.2244 33.1484 41.0634 33.2725 40.9895C33.3966 40.9157 33.5544 40.9605 33.6268 41.0872L34.4646 42.5674C34.537 42.694 34.493 42.855 34.3689 42.9288C34.3275 42.9526 34.2836 42.9632 34.2396 42.9632Z"
                      fill="#7678ED"
                    />
                    <path
                      id="Vector_15"
                      d="M41.6094 35.6228C41.5654 35.6228 41.5215 35.6122 41.4801 35.5885L40.0294 34.7336C39.9053 34.6597 39.8639 34.4988 39.9337 34.3721C40.0061 34.2455 40.1639 34.2033 40.288 34.2745L41.7387 35.1294C41.8628 35.2033 41.9042 35.3642 41.8343 35.4909C41.7852 35.5753 41.6999 35.6228 41.6094 35.6228Z"
                      fill="#7678ED"
                    />
                    <path
                      id="Vector_16"
                      d="M44.3918 25.5067H42.7161C42.5739 25.5067 42.4575 25.388 42.4575 25.2429C42.4575 25.0977 42.5739 24.979 42.7161 24.979H44.3918C44.534 24.979 44.6504 25.0977 44.6504 25.2429C44.6504 25.388 44.534 25.5067 44.3918 25.5067Z"
                      fill="#7678ED"
                    />
                    <path
                      id="Vector_17"
                      d="M40.3967 16.1794C40.3062 16.1794 40.2208 16.1319 40.1717 16.0474C40.0993 15.9208 40.1432 15.7598 40.2674 15.686L41.718 14.8311C41.8422 14.7572 41.9999 14.8021 42.0723 14.9287C42.1447 15.0554 42.1008 15.2163 41.9766 15.2902L40.526 16.1451C40.4846 16.1688 40.4406 16.1794 40.3967 16.1794Z"
                      fill="#7678ED"
                    />
                    <path
                      id="Vector_18"
                      d="M33.8157 9.28754C33.7717 9.28754 33.7278 9.27699 33.6864 9.25324C33.5623 9.17936 33.5209 9.01841 33.5907 8.89176L34.4285 7.41155C34.5009 7.2849 34.6587 7.24268 34.7828 7.31393C34.9069 7.3878 34.9483 7.54875 34.8785 7.6754L34.0406 9.15561C33.9915 9.24005 33.9062 9.28754 33.8157 9.28754Z"
                      fill="#7678ED"
                    />
                  </g>
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_274_15659"
                    x1="24.4987"
                    y1={0}
                    x2="24.4987"
                    y2={50}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#3478FF" />
                    <stop offset={1} stopColor="#482EBD" />
                  </linearGradient>
                  <clipPath id="clip0_274_15659">
                    <rect width={49} height={50} fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span className=" text-text_secondary5 text-sm font-bold">
                You don't have any Matched Bets.
              </span>
              <button
                title="Login"
                className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out flex items-center justify-center h-[2.5rem] bg-submitLoginBtnGradient rounded-lg shadow-submitLoginBtnBoxShadow text-text_secondary font-roboto text-sm not-italic font-semibold leading-150 tracking-widest w-max px-3 
      cursor-pointer
      
      "
                id="Bet Now"
                type="button"
              >
                Bet Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OpenBets;

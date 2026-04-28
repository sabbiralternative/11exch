import { useSelector } from "react-redux";
import { Settings } from "../../../api";
import { useNavigate } from "react-router-dom";

const Menu = ({ setShowMenuModal }) => {
  const navigate = useNavigate();
  const { token, user } = useSelector((state) => state.auth);

  const handleNavigate = (link) => {
    navigate(link);
    setShowMenuModal(false);
  };
  const handleDownloadAPK = (e) => {
    e.preventDefault();
    if (Settings.apk_link) {
      const fileUrl = Settings.apk_link;
      const link = document.createElement("a");
      link.href = fileUrl;
      link.setAttribute("download", "site.apk");
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    }
  };
  return (
    <div className="flex items-center justify-center">
      <div className="w-full lg:max-w-[475px] mx-auto fixed bottom-0 transition-all ease-in-out -translate-x-1/2 top-0 z-[100] bg-bg_primary3 overflow-y-scroll no-scrollbar scroll-smooth duration-300 bottom-slide-in1">
        <div className="py-[11px] px-[18px] h-[59px] border-b border-solid border-border_secondary sticky top-0 bg-bg_primary3 z-10">
          <div className=" w-full h-full flex items-center justify-between text-text_secondary font-roboto">
            <div className="flex items-center justify-center gap-[0.6875rem]">
              <div className=" bg-bg_sportGameCard border border-solid border-border_secondary rounded-[0.375rem] p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16.5"
                  height="16.5"
                  viewBox="0 0 16 16"
                  fill="white"
                >
                  <g id="fi_1077114" clipPath="url(#clip0_2960_5897)">
                    <path
                      id="Vector"
                      d="M7.88597 7.70724C8.9448 7.70724 9.86167 7.32749 10.6108 6.57822C11.36 5.82908 11.7397 4.91246 11.7397 3.8535C11.7397 2.79491 11.36 1.87817 10.6107 1.12878C9.86143 0.379759 8.94468 0 7.88597 0C6.82702 0 5.91039 0.379759 5.16125 1.1289C4.41211 1.87804 4.03223 2.79479 4.03223 3.8535C4.03223 4.91246 4.41211 5.8292 5.16137 6.57834C5.91064 7.32736 6.82738 7.70724 7.88597 7.70724Z"
                      fill="white"
                    />
                    <path
                      id="Vector_2"
                      d="M14.629 12.3032C14.6074 11.9914 14.5637 11.6514 14.4993 11.2922C14.4344 10.9304 14.3508 10.5884 14.2507 10.2757C14.1473 9.95263 14.0067 9.63354 13.8328 9.32775C13.6524 9.01037 13.4405 8.734 13.2027 8.50659C12.9541 8.26867 12.6496 8.07739 12.2976 7.93787C11.9467 7.79907 11.5579 7.72876 11.1421 7.72876C10.9787 7.72876 10.8208 7.79578 10.5157 7.99438C10.328 8.11682 10.1084 8.25842 9.86325 8.41504C9.65365 8.54858 9.36972 8.6737 9.01901 8.78698C8.67685 8.8977 8.32944 8.95385 7.98655 8.95385C7.64365 8.95385 7.29636 8.8977 6.95384 8.78698C6.60349 8.67382 6.31956 8.5487 6.11021 8.41516C5.86741 8.26001 5.64769 8.11841 5.45714 7.99426C5.15245 7.79565 4.99437 7.72864 4.83104 7.72864C4.41503 7.72864 4.02636 7.79907 3.67565 7.93799C3.32384 8.07727 3.01928 8.26855 2.77038 8.50671C2.53271 8.73425 2.32067 9.01049 2.1405 9.32775C1.96679 9.63354 1.82617 9.95251 1.72265 10.2759C1.62268 10.5885 1.53906 10.9304 1.47412 11.2922C1.40979 11.6509 1.36609 11.9911 1.34448 12.3036C1.32324 12.6097 1.3125 12.9275 1.3125 13.2484C1.3125 14.0836 1.578 14.7597 2.10156 15.2584C2.61865 15.7505 3.30285 16.0001 4.13488 16.0001H11.8389C12.671 16.0001 13.3549 15.7506 13.8721 15.2584C14.3958 14.7601 14.6613 14.0838 14.6613 13.2483C14.6612 12.9259 14.6503 12.6079 14.629 12.3032Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2960_5897">
                      <rect width="15.9999" height={16} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className=" flex flex-col gap-[0.125rem] items-start justify-start">
                <p className=" text-text_secondary text-[0.875rem] font-normal leading-[1.25rem]">
                  Hii, There
                </p>
                <p className=" text-text_tertiary6 text-[0.75rem] font-normal leading-[1.25rem]">
                  {token ? user : `Welcome to ${Settings.site_name}`}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-[0.6875rem]">
              {token ? (
                <a onClick={() => handleNavigate("/deposit")}>
                  <button
                    className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out flex items-center active:opacity-80 justify-center gap-1 py-[0.3125rem] px-2 rounded-md bg-exchRegisterGradient text-text_secondary font-roboto text-xs not-italic font-semibold leading-150 tracking-widest h-8 
      cursor-pointer
      
      "
                    type="button"
                  >
                    <svg
                      width={12}
                      height={11}
                      viewBox="0 0 12 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.5 9.25V9.82422C10.5 10.1523 10.3815 10.4349 10.1445 10.6719C9.92578 10.8906 9.65234 11 9.32422 11H1.17578C0.847656 11 0.565104 10.8906 0.328125 10.6719C0.109375 10.4349 0 10.1523 0 9.82422V1.67578C0 1.34766 0.109375 1.07422 0.328125 0.855469C0.565104 0.61849 0.847656 0.5 1.17578 0.5H9.32422C9.65234 0.5 9.92578 0.61849 10.1445 0.855469C10.3815 1.07422 10.5 1.34766 10.5 1.67578V2.25H5.25C4.92188 2.25 4.63932 2.36849 4.40234 2.60547C4.18359 2.82422 4.07422 3.09766 4.07422 3.42578V8.07422C4.07422 8.40234 4.18359 8.6849 4.40234 8.92188C4.63932 9.14062 4.92188 9.25 5.25 9.25H10.5ZM5.25 8.07422V3.42578H11.0742V8.07422H5.25ZM6.94531 6.37891C7.1276 6.54297 7.33724 6.625 7.57422 6.625C7.82943 6.625 8.03906 6.54297 8.20312 6.37891C8.36719 6.19661 8.44922 5.98698 8.44922 5.75C8.44922 5.51302 8.36719 5.3125 8.20312 5.14844C8.03906 4.96615 7.82943 4.875 7.57422 4.875C7.33724 4.875 7.1276 4.96615 6.94531 5.14844C6.78125 5.3125 6.69922 5.51302 6.69922 5.75C6.69922 5.98698 6.78125 6.19661 6.94531 6.37891Z"
                        fill="#fff"
                      />
                    </svg>
                    <span className="text-text_secondary font-roboto not-italic font-semibold leading-150 tracking-widest text-xs">
                      Deposit
                    </span>
                  </button>{" "}
                </a>
              ) : (
                <a onClick={() => handleNavigate("/register")}>
                  <button
                    title="Register"
                    className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out flex items-center justify-center py-[0.3125rem] px-2 rounded-md bg-exchRegisterGradient text-text_secondary font-roboto text-xs not-italic font-semibold leading-150 tracking-widest h-8 
      cursor-pointer
      
      "
                    type="button"
                  >
                    Register Now
                  </button>
                </a>
              )}

              <button
                onClick={() => setShowMenuModal(false)}
                type="button"
                className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out undefined 
      cursor-pointer
      
      "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={22}
                  height={22}
                  viewBox="0 0 14 15"
                  fill="var(--color-icon_secondary3)"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.91728 10.7587C2.68949 10.9866 2.68952 11.3559 2.91735 11.5837C3.14517 11.8115 3.51452 11.8115 3.7423 11.5836L7.00036 8.32499L10.2587 11.5833C10.4865 11.8111 10.8558 11.8111 11.0836 11.5833C11.3114 11.3555 11.3114 10.9862 11.0836 10.7584L7.82525 7.49998L11.0834 4.24126C11.3111 4.01343 11.3111 3.64409 11.0833 3.41631C10.8555 3.18851 10.4861 3.18855 10.2583 3.41638L7.00024 6.67503L3.74191 3.41666C3.5141 3.18885 3.14475 3.18885 2.91695 3.41666C2.68914 3.64446 2.68914 4.01381 2.91695 4.24162L6.17541 7.50004L2.91728 10.7587Z"
                    fill="var(--color-icon_secondary3)"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 w-full gap-4 px-[1.06rem] mt-2">
          <div title="Sports" className=" w-full">
            <span className=" w-full text-text_secondary1 text-xs font-medium leading-120 not-italic ml uppercase">
              Sports
            </span>
            <div className="flex items-start justify-start gap-3 flex-col mt-1">
              <div
                title="Live"
                className="rounded-md bg-bg_sportGameCard border border-solid border-border_secondary7  relative min-h-9 flex items-center justify-start pl-2 active:scale-95 transition-all ease-in-out duration-300 active:opacity-80 w-full"
              >
                <div className="flex w-[0.125rem] h-5 absolute left-0 top-[50%] transform -translate-y-1/2 bg-bg_exchorange" />
                <div className="w-full grid grid-cols-6 gap-1.5 items-center h-full">
                  <span className="col-span-1">
                    <span className=" h-[18px] w-[18px]">
                      <svg
                        width={18}
                        height={18}
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="Group">
                          <g id="OBJECTS">
                            <g id="Group_2">
                              <path
                                id="Vector"
                                d="M11 21.8C16.9647 21.8 21.8 16.9647 21.8 11C21.8 5.03532 16.9647 0.199997 11 0.199997C5.03534 0.199997 0.200012 5.03532 0.200012 11C0.200012 16.9647 5.03534 21.8 11 21.8Z"
                                fill="#BD2846"
                              />
                              <g id="Vector_2" opacity="0.5">
                                <path
                                  d="M11 0.199997C5.0353 0.199997 0.200012 5.03528 0.200012 11C0.200012 16.9647 5.0353 21.8 11 21.8C16.9647 21.8 21.8 16.9647 21.8 11C21.8 5.03528 16.9647 0.199997 11 0.199997ZM11 21.6201C5.13498 21.6201 0.379858 16.865 0.379858 11C0.379858 5.13497 5.13498 0.379843 11 0.379843C16.865 0.379843 21.6202 5.13497 21.6202 11C21.6202 16.865 16.865 21.6201 11 21.6201Z"
                                  fill="#DA3340"
                                />
                              </g>
                              <g id="Vector_3">
                                <path
                                  d="M11 19.8638C15.8954 19.8638 19.8638 15.8954 19.8638 11C19.8638 6.10464 15.8954 2.13617 11 2.13617C6.10464 2.13617 2.13617 6.10464 2.13617 11C2.13617 15.8954 6.10464 19.8638 11 19.8638Z"
                                  fill="#D2A3AA"
                                />
                              </g>
                              <path
                                id="Vector_4"
                                d="M19.4677 12.8047C20.4643 8.12788 17.481 3.52862 12.8041 2.53197C8.12731 1.53532 3.52805 4.51869 2.5314 9.19552C1.53475 13.8723 4.51812 18.4716 9.19495 19.4683C13.8718 20.4649 18.471 17.4815 19.4677 12.8047Z"
                                fill="#FF8299"
                              />
                              <g id="Group_3">
                                <g id="Group_4">
                                  <path
                                    id="Vector_5"
                                    d="M9.61366 15.2012C8.85522 15.639 8.2345 15.2803 8.2345 14.4047V8.93948C8.2345 8.06389 8.85522 7.70523 9.61366 8.14302L14.3493 10.8757C15.1077 11.3134 15.1077 12.0297 14.3493 12.4675L9.61366 15.2002V15.2012Z"
                                    fill="#FF0E0E"
                                  />
                                  <path
                                    id="Vector_6"
                                    d="M9.61366 15.2012C8.85522 15.639 8.2345 15.2803 8.2345 14.4047V8.93948C8.2345 8.06389 8.85522 7.70523 9.61366 8.14302L14.3493 10.8757C15.1077 11.3134 15.1077 12.0297 14.3493 12.4675L9.61366 15.2002V15.2012Z"
                                    fill="#FF0E0E"
                                  />
                                </g>
                                <path
                                  id="Vector_7"
                                  d="M14.9165 11.1922V11.7153L13.3349 12.7029C13.3349 12.7029 11.4604 12.744 11.5221 12.5282C11.5837 12.3124 11.5211 11.0144 11.5211 11.0144L14.9165 11.1932V11.1922Z"
                                  fill="#FF0E0E"
                                />
                                <g id="Group_5">
                                  <path
                                    id="Vector_8"
                                    d="M9.61366 14.5979C8.85522 15.0357 8.2345 14.6771 8.2345 13.8015V8.33623C8.2345 7.46063 8.85522 7.10197 9.61366 7.53977L14.3493 10.2724C15.1077 10.7102 15.1077 11.4265 14.3493 11.8643L9.61366 14.5969V14.5979Z"
                                    fill="#E59C97"
                                  />
                                  <path
                                    id="Vector_9"
                                    d="M9.61366 14.5979C8.85522 15.0357 8.2345 14.6771 8.2345 13.8015V8.33623C8.2345 7.46063 8.85522 7.10197 9.61366 7.53977L14.3493 10.2724C15.1077 10.7102 15.1077 11.4265 14.3493 11.8643L9.61366 14.5969V14.5979Z"
                                    fill="#fff"
                                  />
                                </g>
                              </g>
                              <path
                                id="Vector_10"
                                opacity="0.2"
                                d="M11 3.13817C6.65802 3.13817 3.13818 6.65801 3.13818 11C3.13818 11.2693 3.15154 11.5365 3.17826 11.7985C5.1987 13.1777 7.95702 14.0286 11 14.0286C14.043 14.0286 16.8013 13.1787 18.8218 11.7985C18.8485 11.5365 18.8618 11.2693 18.8618 11C18.8618 6.65801 15.342 3.13817 11 3.13817Z"
                                fill="#fff"
                              />
                              <path
                                id="Vector_11"
                                opacity="0.3"
                                d="M11 3.79691C15.0871 3.79691 18.4241 7.06908 18.5299 11.1305C18.5299 11.0873 18.533 11.0432 18.533 11C18.533 6.84709 15.1539 3.46805 11.0011 3.46805C6.84815 3.46805 3.46808 6.84709 3.46808 11C3.46808 11.0432 3.47013 11.0873 3.47116 11.1305C3.57701 7.06908 6.91393 3.79691 11.0011 3.79691H11Z"
                                fill="#fff"
                              />
                              <path
                                id="Vector_12"
                                opacity="0.2"
                                d="M11 0.550446C5.22849 0.550446 0.550446 5.22849 0.550446 11C0.550446 11.5077 0.587442 12.0061 0.657325 12.4932C1.14034 12.7656 1.65316 13.0174 2.18961 13.2465C2.00668 12.5282 1.90905 11.7749 1.90905 11C1.90905 5.97973 5.97871 1.90905 11 1.90905C16.0213 1.90905 20.091 5.97871 20.091 11C20.091 11.4265 20.0612 11.8468 20.0036 12.2579C20.5226 11.9424 21.0056 11.6033 21.4465 11.2415C21.4485 11.1614 21.4496 11.0812 21.4496 11C21.4496 5.22849 16.7705 0.550446 11 0.550446Z"
                                fill="#fff"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </span>
                  </span>
                  <span className="text-text_secondary w-full truncate font-roboto text-sm font-medium leading-120 col-span-5">
                    Live
                  </span>
                </div>
              </div>
              <div
                onClick={() => handleNavigate("/sports?eventTypeId=4")}
                title="Sports"
                className="rounded-md bg-bg_sportGameCard border border-solid border-border_secondary7  relative min-h-9 flex items-center justify-start pl-2 active:scale-95 transition-all ease-in-out duration-300 active:opacity-80 w-full"
              >
                <div className="flex w-[0.125rem] h-5 absolute left-0 top-[50%] transform -translate-y-1/2 bg-bg_exchblue" />
                <div className="w-full grid grid-cols-6 gap-1.5 items-center h-full">
                  <span className="col-span-1">
                    <span className=" h-[18px] w-[18px]">
                      <span>⚽</span>
                    </span>
                  </span>
                  <span className="text-text_secondary w-full truncate font-roboto text-sm font-medium leading-120 col-span-5">
                    Sports
                  </span>
                </div>
              </div>
              <div
                title="Sportsbook"
                className="rounded-md bg-bg_sportGameCard border border-solid border-border_secondary7  relative min-h-9 flex items-center justify-start pl-2 active:scale-95 transition-all ease-in-out duration-300 active:opacity-80 w-full"
              >
                <div className="flex w-[0.125rem] h-5 absolute left-0 top-[50%] transform -translate-y-1/2 bg-bg_exchpink" />
                <div className="w-full grid grid-cols-6 gap-1.5 items-center h-full">
                  <span className="col-span-1">
                    <span className=" h-[18px] w-[18px]">
                      <span>🏆</span>
                    </span>
                  </span>
                  <span className="text-text_secondary w-full truncate font-roboto text-sm font-medium leading-120 col-span-5">
                    Sportsbook
                  </span>
                </div>
              </div>
              <div
                title="Esports"
                className="rounded-md bg-bg_sportGameCard border border-solid border-border_secondary7  relative min-h-9 flex items-center justify-start pl-2 active:scale-95 transition-all ease-in-out duration-300 active:opacity-80 w-full"
              >
                <div className="flex w-[0.125rem] h-5 absolute left-0 top-[50%] transform -translate-y-1/2 bg-bg_exchyellow" />
                <div className="w-full grid grid-cols-6 gap-1.5 items-center h-full">
                  <span className="col-span-1">
                    <span className=" h-[18px] w-[18px]">
                      <span>🏏</span>
                    </span>
                  </span>
                  <span className="text-text_secondary w-full truncate font-roboto text-sm font-medium leading-120 col-span-5">
                    Esports
                  </span>
                </div>
              </div>
              <div
                title="Virtual Sports"
                className="rounded-md bg-bg_sportGameCard border border-solid border-border_secondary7  relative min-h-9 flex items-center justify-start pl-2 active:scale-95 transition-all ease-in-out duration-300 active:opacity-80 w-full"
              >
                <div className="flex w-[0.125rem] h-5 absolute left-0 top-[50%] transform -translate-y-1/2 bg-bg_exchgreen" />
                <div className="w-full grid grid-cols-6 gap-1.5 items-center h-full">
                  <span className="col-span-1">
                    <span className=" h-[18px] w-[18px]">
                      <span>🎮</span>
                    </span>
                  </span>
                  <span className="text-text_secondary w-full truncate font-roboto text-sm font-medium leading-120 col-span-5">
                    Virtual Sports
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div title="Casino" className="w-full">
            <span className=" w-full text-text_secondary1 text-xs font-medium leading-120 not-italic ml">
              CASINO
            </span>
            <div className="flex items-start justify-start gap-3 flex-col mt-1">
              <div
                title="Live Casino"
                className="rounded-md bg-bg_sportGameCard border border-solid border-border_secondary7  relative min-h-9 flex items-center justify-start pl-2 active:scale-95 transition-all ease-in-out duration-300 active:opacity-80 w-full"
              >
                <div className="flex w-[0.125rem] h-5 absolute left-0 top-[50%] transform -translate-y-1/2 bg-bg_exchlightGreen" />
                <div className="w-full grid grid-cols-6 gap-1.5 items-center h-full">
                  <span className="col-span-1">
                    <span className=" h-[18px] w-[18px]">
                      <svg
                        height={18}
                        width={18}
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x={0}
                        y={0}
                        viewBox="0 0 64 64"
                        xmlSpace="preserve"
                      >
                        <g>
                          <g data-name="10-Casino chip">
                            <ellipse
                              cx={24}
                              cy={6}
                              fill="#f7f3e1"
                              rx={16}
                              ry={2}
                              opacity={1}
                              data-original="#f7f3e1"
                            />
                            <path
                              fill="#d1013e"
                              d="M8 6c0 1.1 7.16 2 16 2s16-.9 16-2-7.16-2-16-2S8 4.9 8 6zm16-5c12.7 0 23 2.24 23 5 0 2.07-5.77 3.84-14 4.61-2.76.25-5.81.39-9 .39s-6.24-.14-9-.39C6.77 9.84 1 8.07 1 6c0-2.76 10.3-5 23-5z"
                              opacity={1}
                              data-original="#d1013e"
                            />
                            <path
                              fill="#8f0029"
                              d="M33 52.61c8.23-.77 14-2.54 14-4.61v6c0 2.23-6.72 4.12-16 4.77v-6c.68-.05 1.35-.11 2-.16zM15 52.61c.65.05 1.32.11 2 .16v6C7.72 58.12 1 56.23 1 54v-6c0 2.07 5.77 3.84 14 4.61z"
                              opacity={1}
                              data-original="#8f0029"
                            />
                            <path
                              fill="#8f0029"
                              d="M31 46.77c.68-.05 1.35-.11 2-.16v6c-.65.05-1.32.11-2 .16-2.21.15-4.56.23-7 .23s-4.79-.08-7-.23c-.68-.05-1.35-.11-2-.16v-6c.65.05 1.32.11 2 .16 2.21.15 4.56.23 7 .23s4.79-.08 7-.23z"
                              opacity={1}
                              data-original="#8f0029"
                            />
                            <path
                              fill="#8f0029"
                              d="M17 40.77v6c-.68-.05-1.35-.11-2-.16C6.77 45.84 1 44.07 1 42v-6c0 2.07 5.77 3.84 14 4.61.65.05 1.32.11 2 .16zM33 46.61c-.65.05-1.32.11-2 .16v-6c.68-.05 1.35-.11 2-.16 8.23-.77 14-2.54 14-4.61v6c0 2.07-5.77 3.84-14 4.61z"
                              opacity={1}
                              data-original="#8f0029"
                            />
                            <path
                              fill="#8f0029"
                              d="M31 34.77c.68-.05 1.35-.11 2-.16v6c-.65.05-1.32.11-2 .16-2.21.15-4.56.23-7 .23s-4.79-.08-7-.23c-.68-.05-1.35-.11-2-.16v-6c.65.05 1.32.11 2 .16 2.21.15 4.56.23 7 .23s4.79-.08 7-.23z"
                              opacity={1}
                              data-original="#8f0029"
                            />
                            <path
                              fill="#a80132"
                              d="M33 34.61c-.65.05-1.32.11-2 .16v-6c.68-.05 1.35-.11 2-.16 8.23-.77 14-2.54 14-4.61v6c0 2.07-5.77 3.84-14 4.61zM17 28.77v6c-.68-.05-1.35-.11-2-.16C6.77 33.84 1 32.07 1 30v-6c0 2.07 5.77 3.84 14 4.61.65.05 1.32.11 2 .16z"
                              opacity={1}
                              data-original="#a80132"
                            />
                            <path
                              fill="#a80132"
                              d="M31 22.77c.68-.05 1.35-.11 2-.16v6c-.65.05-1.32.11-2 .16-2.21.15-4.56.23-7 .23s-4.79-.08-7-.23c-.68-.05-1.35-.11-2-.16v-6c.65.05 1.32.11 2 .16 2.21.15 4.56.23 7 .23s4.79-.08 7-.23z"
                              opacity={1}
                              data-original="#a80132"
                            />
                            <path
                              fill="#a80132"
                              d="M17 16.77v6c-.68-.05-1.35-.11-2-.16C6.77 21.84 1 20.07 1 18v-6c0 2.07 5.77 3.84 14 4.61.65.05 1.32.11 2 .16zM33 22.61c-.65.05-1.32.11-2 .16v-6c.68-.05 1.35-.11 2-.16 8.23-.77 14-2.54 14-4.61v6c0 2.07-5.77 3.84-14 4.61z"
                              opacity={1}
                              data-original="#a80132"
                            />
                            <path
                              fill="#a80132"
                              d="M31 16.77c-2.21.15-4.56.23-7 .23s-4.79-.08-7-.23c-.68-.05-1.35-.11-2-.16v-6c2.76.25 5.81.39 9 .39s6.24-.14 9-.39v6c-.65.05-1.32.11-2 .16z"
                              opacity={1}
                              data-original="#a80132"
                            />
                            <path
                              fill="#e3decb"
                              d="M31 52.77v6c-2.21.15-4.56.23-7 .23s-4.79-.08-7-.23v-6c2.21.15 4.56.23 7 .23s4.79-.08 7-.23z"
                              opacity={1}
                              data-original="#e3decb"
                            />
                            <g fill="#f7f3e1">
                              <path
                                d="M47 42v6c0 2.07-5.77 3.84-14 4.61v-6c8.23-.77 14-2.54 14-4.61zM15 46.61v6C6.77 51.84 1 50.07 1 48v-6c0 2.07 5.77 3.84 14 4.61zM31 40.77v6c-2.21.15-4.56.23-7 .23s-4.79-.08-7-.23v-6c2.21.15 4.56.23 7 .23s4.79-.08 7-.23zM47 30v6c0 2.07-5.77 3.84-14 4.61v-6c8.23-.77 14-2.54 14-4.61zM15 34.61v6C6.77 39.84 1 38.07 1 36v-6c0 2.07 5.77 3.84 14 4.61zM31 28.77v6c-2.21.15-4.56.23-7 .23s-4.79-.08-7-.23v-6c2.21.15 4.56.23 7 .23s4.79-.08 7-.23zM47 18v6c0 2.07-5.77 3.84-14 4.61v-6c8.23-.77 14-2.54 14-4.61zM15 22.61v6C6.77 27.84 1 26.07 1 24v-6c0 2.07 5.77 3.84 14 4.61zM31 16.77v6c-2.21.15-4.56.23-7 .23s-4.79-.08-7-.23v-6c2.21.15 4.56.23 7 .23s4.79-.08 7-.23zM33 10.61C41.23 9.84 47 8.07 47 6v6c0 2.07-5.77 3.84-14 4.61zM15 10.61v6C6.77 15.84 1 14.07 1 12V6c0 2.07 5.77 3.84 14 4.61z"
                                fill="#f7f3e1"
                                opacity={1}
                                data-original="#f7f3e1"
                              />
                            </g>
                            <path
                              fill="#c7c3b2"
                              d="M40 6c0 .17-.17.34-.5.5C37.72 5.64 31.46 5 24 5s-13.72.64-15.5 1.5C8.17 6.34 8 6.17 8 6c0-1.1 7.16-2 16-2s16 .9 16 2z"
                              opacity={1}
                              data-original="#c7c3b2"
                            />
                            <path
                              fill="#e3decb"
                              d="M31 20.77v2c-2.21.15-4.56.23-7 .23s-4.79-.08-7-.23v-2c2.21.15 4.56.23 7 .23s4.79-.08 7-.23z"
                              opacity={1}
                              data-original="#e3decb"
                            />
                            <path
                              fill="#7d0126"
                              d="M47 16v2c0 2.07-5.77 3.84-14 4.61-.65.05-1.32.11-2 .16v-2c.68-.05 1.35-.11 2-.16 8.23-.77 14-2.54 14-4.61z"
                              opacity={1}
                              data-original="#7d0126"
                            />
                            <path
                              fill="#e3decb"
                              d="M31 32.77v2c-2.21.15-4.56.23-7 .23s-4.79-.08-7-.23v-2c2.21.15 4.56.23 7 .23s4.79-.08 7-.23z"
                              opacity={1}
                              data-original="#e3decb"
                            />
                            <path
                              fill="#7d0126"
                              d="M47 28v2c0 2.07-5.77 3.84-14 4.61-.65.05-1.32.11-2 .16v-2c.68-.05 1.35-.11 2-.16 8.23-.77 14-2.54 14-4.61z"
                              opacity={1}
                              data-original="#7d0126"
                            />
                            <path
                              fill="#e3decb"
                              d="M31 44.77v2c-2.21.15-4.56.23-7 .23s-4.79-.08-7-.23v-2c2.21.15 4.56.23 7 .23s4.79-.08 7-.23z"
                              opacity={1}
                              data-original="#e3decb"
                            />
                            <path
                              fill="#7d0126"
                              d="M47 40v2c0 2.07-5.77 3.84-14 4.61-.65.05-1.32.11-2 .16v-2c.68-.05 1.35-.11 2-.16 8.23-.77 14-2.54 14-4.61zM33 14.61v2c-.65.05-1.32.11-2 .16-2.21.15-4.56.23-7 .23s-4.79-.08-7-.23c-.68-.05-1.35-.11-2-.16v-2c2.76.25 5.81.39 9 .39s6.24-.14 9-.39z"
                              opacity={1}
                              data-original="#7d0126"
                            />
                            <path
                              fill="#e3decb"
                              d="M47 10v2c0 2.07-5.77 3.84-14 4.61v-2c8.23-.77 14-2.54 14-4.61z"
                              opacity={1}
                              data-original="#e3decb"
                            />
                            <path
                              fill="#7d0126"
                              d="M33 26.61v2c-.65.05-1.32.11-2 .16-2.21.15-4.56.23-7 .23s-4.79-.08-7-.23c-.68-.05-1.35-.11-2-.16v-2c2.76.25 5.81.39 9 .39s6.24-.14 9-.39z"
                              opacity={1}
                              data-original="#7d0126"
                            />
                            <path
                              fill="#e3decb"
                              d="M47 22v2c0 2.07-5.77 3.84-14 4.61v-2c8.23-.77 14-2.54 14-4.61z"
                              opacity={1}
                              data-original="#e3decb"
                            />
                            <path
                              fill="#7d0126"
                              d="M33 38.61v2c-.65.05-1.32.11-2 .16-2.21.15-4.56.23-7 .23s-4.79-.08-7-.23c-.68-.05-1.35-.11-2-.16v-2c2.76.25 5.81.39 9 .39s6.24-.14 9-.39z"
                              opacity={1}
                              data-original="#7d0126"
                            />
                            <path
                              fill="#e3decb"
                              d="M47 34v2c0 2.07-5.77 3.84-14 4.61v-2c8.23-.77 14-2.54 14-4.61zM47 46v2c0 2.07-5.77 3.84-14 4.61v-2c8.23-.77 14-2.54 14-4.61z"
                              opacity={1}
                              data-original="#e3decb"
                            />
                            <path
                              fill="#7d0126"
                              d="M47 48v6c0 2.23-6.72 4.12-16 4.77v-6c.68-.05 1.35-.11 2-.16 1.73-.16 3.34-.37 4.82-.61H43a4 4 0 0 0 4-4zM15 52.61c.65.05 1.32.11 2 .16v6C7.72 58.12 1 56.23 1 54v-6c0 2.07 5.77 3.84 14 4.61z"
                              opacity={1}
                              data-original="#7d0126"
                            />
                            <path
                              fill="#7d0126"
                              d="M28.038 50.919a29.6 29.6 0 0 1-8.778-4.029h-.01q-1.15-.045-2.25-.12c-.68-.05-1.35-.11-2-.16v6c.65.05 1.32.11 2 .16 2.21.15 4.56.23 7 .23s4.79-.08 7-.23c.68-.05 1.35-.11 2-.16v-2a94.888 94.888 0 0 1-4.962.309z"
                              opacity={1}
                              data-original="#7d0126"
                            />
                            <path
                              fill="#7d0126"
                              d="M16.429 44.724a30.06 30.06 0 0 1-4.2-4.424C5.51 39.42 1 37.83 1 36v6c0 2.07 5.77 3.84 14 4.61.65.05 1.32.11 2 .16v-2c-.194-.014-.379-.03-.571-.046zM15 32.61a60.967 60.967 0 0 1-7.452-1.118A28.471 28.471 0 0 1 6.47 27.23C3.06 26.37 1 25.24 1 24v6c0 2.07 5.77 3.84 14 4.61.65.05 1.32.11 2 .16v-2c-.68-.05-1.35-.11-2-.16zM15 20.61a54.671 54.671 0 0 1-9-1.5v-4c-3.13-.85-5-1.93-5-3.11v6c0 2.07 5.77 3.84 14 4.61.65.05 1.32.11 2 .16v-2c-.68-.05-1.35-.11-2-.16z"
                              opacity={1}
                              data-original="#7d0126"
                            />
                            <path
                              fill="#d9d4c2"
                              d="M31 52.77v6c-2.21.15-4.56.23-7 .23s-4.79-.08-7-.23v-6c2.21.15 4.56.23 7 .23s4.79-.08 7-.23z"
                              opacity={1}
                              data-original="#d9d4c2"
                            />
                            <path
                              fill="#e3decb"
                              d="M15 46.61v6C6.77 51.84 1 50.07 1 48v-6c0 2.07 5.77 3.84 14 4.61zM15 38.61a72.32 72.32 0 0 1-4.308-.528A30.335 30.335 0 0 1 8.36 33.67v-.01C3.83 32.75 1 31.45 1 30v6c0 1.828 4.506 3.422 11.228 4.3q1.331.172 2.77.31zM6.177 25.158A29.2 29.2 0 0 1 6 22v-.89c-3.13-.85-5-1.93-5-3.11v6c0 2.07 5.77 3.84 14 4.61v-2a55.273 55.273 0 0 1-8.823-1.452zM6 13.113v-4C2.87 8.26 1 7.18 1 6v6c0 2.07 5.77 3.84 14 4.61v-2a54.671 54.671 0 0 1-9-1.497z"
                              opacity={1}
                              data-original="#e3decb"
                            />
                            <path
                              fill="#d1013e"
                              d="M62.5 35.23a23 23 0 0 1 0 9.54l-1.36-.59c-.7-.45-1.68-.02-2.18.95l-3.66 7.06a2 2 0 0 0 .35 2.58l1.1.98A22.9 22.9 0 0 1 46 62.2v-1.6a1.839 1.839 0 0 0-2-1.6h-8a1.839 1.839 0 0 0-2 1.6v1.6a22.849 22.849 0 0 1-10.74-6.44l1.11-.99a2.017 2.017 0 0 0 .35-2.58l-3.66-7.06c-.51-.97-1.48-1.4-2.18-.95l-1.38.59A22.7 22.7 0 0 1 17 40a22.154 22.154 0 0 1 .51-4.78l1.37.59c.7.45 1.67.03 2.18-.95l3.66-7.05a2.014 2.014 0 0 0-.35-2.58l-1.1-.99A22.769 22.769 0 0 1 34 17.8v1.6a1.839 1.839 0 0 0 2 1.6h8a1.839 1.839 0 0 0 2-1.6v-1.6a22.818 22.818 0 0 1 10.74 6.45l-1.09.98a2 2 0 0 0-.35 2.58l3.66 7.05c.5.98 1.48 1.4 2.18.95zM55 40a15 15 0 1 0-15 15 15.005 15.005 0 0 0 15-15z"
                              opacity={1}
                              data-original="#d1013e"
                            />
                            <path
                              fill="#fffced"
                              d="M40 25a15 15 0 1 1-15 15 15.005 15.005 0 0 1 15-15zm8 15c-4.57-1.29-8-9-8-9s-3.43 7.71-8 9c4.57 1.29 8 9 8 9s3.43-7.71 8-9z"
                              opacity={1}
                              data-original="#fffced"
                            />
                            <path
                              fill="#d1013e"
                              d="M40 31s3.43 7.71 8 9c-4.57 1.29-8 9-8 9s-3.43-7.71-8-9c4.57-1.29 8-9 8-9z"
                              opacity={1}
                              data-original="#d1013e"
                            />
                            <path
                              fill="#f7f3e1"
                              d="M46 60.6v1.6a22.9 22.9 0 0 1-12 0v-1.6a1.839 1.839 0 0 1 2-1.6h8a1.839 1.839 0 0 1 2 1.6zM18.88 44.18c.7-.45 1.67-.02 2.18.95l3.66 7.06a2.017 2.017 0 0 1-.35 2.58l-1.11.99a22.938 22.938 0 0 1-5.76-10.99zM21.06 34.86c-.51.98-1.48 1.4-2.18.95l-1.37-.59a22.736 22.736 0 0 1 5.76-10.98l1.1.99a2.014 2.014 0 0 1 .35 2.58zM46 17.8v1.6a1.839 1.839 0 0 1-2 1.6h-8a1.839 1.839 0 0 1-2-1.6v-1.6a22.9 22.9 0 0 1 12 0zM61.14 35.81c-.7.45-1.68.03-2.18-.95l-3.66-7.05a2 2 0 0 1 .35-2.58l1.09-.98a22.82 22.82 0 0 1 5.76 10.98zM58.96 45.13c.5-.97 1.48-1.4 2.18-.95l1.36.59a22.89 22.89 0 0 1-5.75 10.98l-1.1-.98a2 2 0 0 1-.35-2.58z"
                              opacity={1}
                              data-original="#f7f3e1"
                            />
                            <path
                              fill="#a80132"
                              d="M40 24a16 16 0 1 0 16 16 16 16 0 0 0-16-16zm0 31a15 15 0 1 1 15-15 15.005 15.005 0 0 1-15 15z"
                              opacity={1}
                              data-original="#a80132"
                            />
                            <path
                              fill="#e3decb"
                              d="M40 25a15 15 0 1 0 15 15 15.005 15.005 0 0 0-15-15zm0 29a14 14 0 1 1 14-14 14 14 0 0 1-14 14zM46 60.6v1.6a22.9 22.9 0 0 1-12 0v-1.6a1.839 1.839 0 0 1 2-1.6h8a1.839 1.839 0 0 1 2 1.6zM24.37 54.77l-1.11.99a22.938 22.938 0 0 1-5.76-10.99l1.38-.59c.7-.45 1.67-.02 2.18.95l3.66 7.06a2.017 2.017 0 0 1-.35 2.58zM62.5 44.77a22.89 22.89 0 0 1-5.75 10.98l-1.1-.98a2 2 0 0 1-.35-2.58l3.66-7.06c.5-.97 1.48-1.4 2.18-.95z"
                              opacity={1}
                              data-original="#e3decb"
                            />
                            <path
                              fill="#8f0029"
                              d="M18 40a22.111 22.111 0 0 1 .437-4.381l-.927-.4A22.154 22.154 0 0 0 17 40a22.7 22.7 0 0 0 .5 4.77l.936-.4A22.083 22.083 0 0 1 18 40zM34 18.835V17.8a22.769 22.769 0 0 0-10.73 6.44l.736.663A21.987 21.987 0 0 1 34 18.835zM24.005 55.1l-.745.664A22.849 22.849 0 0 0 34 62.2v-1.035a21.987 21.987 0 0 1-9.995-6.065zM56 24.912l.737-.662A22.818 22.818 0 0 0 46 17.8v1.035a21.986 21.986 0 0 1 10 6.077zM62.5 35.23l-.936.4a22.123 22.123 0 0 1 0 8.736l.935.405a23 23 0 0 0 0-9.54zM46 61.165V62.2a22.9 22.9 0 0 0 10.75-6.45l-.745-.664A21.987 21.987 0 0 1 46 61.165z"
                              opacity={1}
                              data-original="#8f0029"
                            />
                            <path
                              fill="#c7c3b2"
                              d="M40 62a22 22 0 0 1-6-.835V62.2a22.9 22.9 0 0 0 12 0v-1.035A22 22 0 0 1 40 62zM18.436 44.37l-.936.4a22.938 22.938 0 0 0 5.76 10.99l.745-.664a21.931 21.931 0 0 1-5.569-10.726z"
                              opacity={1}
                              data-original="#c7c3b2"
                            />
                            <path
                              fill="#e3decb"
                              d="m24.006 24.9-.736-.663a22.736 22.736 0 0 0-5.76 10.98l.927.4A21.936 21.936 0 0 1 24.006 24.9zM40 18a22 22 0 0 1 6 .835V17.8a22.9 22.9 0 0 0-12 0v1.035A22 22 0 0 1 40 18zM61.564 35.629l.936-.4a22.82 22.82 0 0 0-5.76-10.98l-.74.663a21.932 21.932 0 0 1 5.564 10.717z"
                              opacity={1}
                              data-original="#e3decb"
                            />
                            <path
                              fill="#c7c3b2"
                              d="m56.005 55.086.745.664a22.89 22.89 0 0 0 5.75-10.98l-.935-.405a21.935 21.935 0 0 1-5.56 10.721z"
                              opacity={1}
                              data-original="#c7c3b2"
                            />
                            <circle
                              cx={59}
                              cy={40}
                              r={1}
                              fill="#fffced"
                              opacity={1}
                              data-original="#fffced"
                            />
                            <circle
                              cx={21}
                              cy={40}
                              r={1}
                              fill="#fffced"
                              opacity={1}
                              data-original="#fffced"
                            />
                            <circle
                              cx={30}
                              cy={56}
                              r={1}
                              fill="#fffced"
                              opacity={1}
                              data-original="#fffced"
                            />
                            <circle
                              cx={50}
                              cy={56}
                              r={1}
                              fill="#fffced"
                              opacity={1}
                              data-original="#fffced"
                            />
                            <circle
                              cx={30}
                              cy={24}
                              r={1}
                              fill="#fffced"
                              opacity={1}
                              data-original="#fffced"
                            />
                            <circle
                              cx={50}
                              cy={24}
                              r={1}
                              fill="#fffced"
                              opacity={1}
                              data-original="#fffced"
                            />
                          </g>
                        </g>
                      </svg>
                    </span>
                  </span>
                  <span className="text-text_secondary w-full truncate font-roboto text-sm font-medium leading-120 col-span-5">
                    Live Casino
                  </span>
                </div>
              </div>
              <div
                title="Poker"
                className="rounded-md bg-bg_sportGameCard border border-solid border-border_secondary7  relative min-h-9 flex items-center justify-start pl-2 active:scale-95 transition-all ease-in-out duration-300 active:opacity-80 w-full"
              >
                <div className="flex w-[0.125rem] h-5 absolute left-0 top-[50%] transform -translate-y-1/2 bg-bg_exchgray" />
                <div className="w-full grid grid-cols-6 gap-1.5 items-center h-full">
                  <span className="col-span-1">
                    <span className=" h-[18px] w-[18px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width={18}
                        height={18}
                        x={0}
                        y={0}
                        viewBox="0 0 512 512"
                        xmlSpace="preserve"
                        className
                      >
                        <g>
                          <path
                            d="m24.9 46.7 272.2-29.5c15.3-1.7 29 9.4 30.7 24.7l41.6 384.5c1.7 15.3-9.4 29-24.7 30.7L72.5 486.7c-15.3 1.7-29-9.4-30.7-24.7L.2 77.4c-1.7-15.3 9.4-29 24.7-30.7z"
                            fill="#000000"
                            opacity={1}
                            data-original="#000000"
                          />
                          <path
                            fill="#ffffff"
                            d="m25.5 52.8 272.2-29.5c12-1.3 22.7 7.4 24 19.3l41.6 384.5c1.3 12-7.4 22.7-19.3 24L71.8 480.7c-12 1.3-22.7-7.4-24-19.3L6.2 76.8c-1.3-12 7.3-22.7 19.3-24z"
                            opacity={1}
                            data-original="#ffffff"
                          />
                          <path
                            d="M237 273.1c-1.8-10-12.8-15.7-21.8-11.6-.4 12.5-6.8 23.1-14.1 24.8 1-2.5.3-5.3-1.7-7 6.2-3.4 9.5-8.6 10.1-15.6.1-1.9-.3-3.6-2.5-3.6s-2.4 1.5-2.6 3.3c-.6 6.9-5.1 11.9-11.3 12.8-6.4 1-12-2.3-14.7-8.6-.7-1.6-1.5-3-3.5-2.3s-1.9 2.6-1.2 4.2c2.4 6.1 7.8 10.5 14.3 11.6.5.1 1 .2 1.4.3-.5 1.2-.7 2.5-.4 3.7.2 1 .6 2 1.2 2.8-11.4-1.6-18.2-8.1-21.1-18.9-11.9.5-18.5 8.6-16.6 20l6.9 41.7.5 3 17.5-2.9-3.5-21.5 5.1-.8 3.5 21.5 39.9-6.6-3.6-21.6 5-.8 3.6 21.6 17.5-2.9c-.7-4-1.3-8-1.9-11.8-2.1-11.7-3.9-23.3-6-34.8zM159.3 257.4c4-.6 8-1.4 12-1.9 1.4-.2 2.8.1 4 .7 10 5.5 22.5 3.4 30-5.2.8-.8 1.9-1.4 3-1.6 4.3-.8 8.6-1.4 13-2.2 3.4-.4 5.8-3.5 5.3-6.9 0-.2-.1-.4-.1-.7-.8-3.6-4-5.6-7.9-4.7-2.5.6-4.4 0-5.5-2.3-1.6-3.6-3.2-7.2-4.8-10.9.7-1.2 1.1-2.4 1.2-3.8-.1-1-.2-2-.5-3-.8-4.8-.9-4-4.5-3.6l-.6.1s.5-5.8.8-8.8l-18.6 3.1 1.4 8.4-7.4 1.2-1.4-8.3-18.5 3 3.5 7.8c-4.1 1.5-4.1 1.5-3.4 5.9.1.9.2 1.8.5 2.7.5 1 1.3 2 2.2 2.7-.3 3.6-.7 7.2-1 10.8s-1.1 4.4-4.6 4.9c-4.1.6-6.5 3.6-5.9 7.4s3.7 5.9 7.8 5.2zm45.1-26.6c1.4 7-.3 12.9-5.4 17.5-5.5 4.9-11.9 6-18.6 3.2-6.5-2.6-9.9-7.8-10.9-14.9zM142.6 280c-2.5 15.3-4.9 30.6-7.4 46-.6 3.7.9 6.8 3.4 9.4.7.8 1.8 1.3 2.8 1.3 2.6-.3 5.1-.7 7.8-1.2l4.2-.7-.4-2.7c-.1-.4-.1-.8-.2-1.2l-.7-4.2c-2.1-12.5-4.2-25-6.1-37.6-.5-2.6-.5-5.2 0-7.8 1.1-4 2.9-7.8 4.5-11.7-4.1 2-7.1 5.8-7.9 10.4z"
                            fill="#000000"
                            opacity={1}
                            data-original="#000000"
                          />
                          <path
                            d="M256.9 288.2c-4.4-8.3-8.7-16.6-13.1-24.8-2.1-4.3-6.5-7-11.3-7 8.3 4.9 10.6 12.9 11.9 21.6 1.8 12.5 4.1 25 6.1 37.5l.5 3.1c3.4-.5 6.3-1 9.3-1.5 4.2-.7 5.8-2.1 5.9-6.4.1-2.6-.5-5.1-1.5-7.5-2.3-5.1-5.1-10-7.8-15zM157.9 202.4l6.9-1.1 12.7-2.1-1-6.1v-.2l-.1-.3c-.2-1.5-.5-3-.8-4.5-5.6.9-11 1.4-16.1 2.8-4.4 1.1-5.9 7.3-3.1 10.9.4.3.9.6 1.5.6zM185.2 198c6.6-1.1 12.9-2.1 19.2-3.2.6-.2 1.1-.6 1.4-1.2 1.6-4.6-2.2-9.8-6.9-9.3-5.1.5-10.1 1.6-15.4 2.5zM188.3 180.6c-.3-6-1.9-7.3-7.5-6.3l-7.5 1.2c-5.2.9-6.4 3-4.5 8.3zM43.4 127.6c.6 3.3 2.6 6.1 5.4 7.8 2.7 1.9 6.1 2.6 9.3 2.1 3.1-.5 5.8-2.1 7.8-4.5 1.2.6 2.5 1 3.8 1.1 1.7 0 3.5-.2 5.2-.5l-1-6.1-3.4.6c-.6-.1-1.2-.2-1.7-.5.3-1.4.4-2.8.2-4.2L64.4 95c-.5-3.3-2.5-6.2-5.4-7.8-2.8-1.9-6.1-2.6-9.4-2.1s-6.2 2.3-8.2 4.9c-2.2 2.5-3.2 5.9-2.7 9.2l3 17.9c-2.1.5-3.2.7-3.3.8l1 5.8 3.3-.6zm1.5-29.4c-.2-1.6.3-3.2 1.5-4.3 1.1-1.3 2.6-2.2 4.2-2.5 1.7-.3 3.4.1 4.8 1 1.4.7 2.4 2.1 2.7 3.6l4.5 27.1c-2.1-1.8-4.4-3.4-6.8-4.8-2.4-1.5-5.1-2.2-7.9-2.2zm4 24c1 0 1.9.3 2.7.8l9.1 6.4c-.9.9-2.1 1.5-3.4 1.8-1.7.3-3.4-.1-4.8-1-1.4-.7-2.4-2-2.8-3.6zM72 165.1c-.9 1.3-1.9 2.6-2.9 3.7-.2.3-.7 0-.5-.3 1.8-2.9 2.9-6.2 3.1-9.6.1-1.1-.1-2.2-.4-3.3-2.4-8.8-9.8-6.8-9.8-6.8s-7.5.5-7 9.6c.1 1.1.3 2.2.7 3.2 1.3 3.2 3.4 6 6 8.1.3.2-.1.6-.4.4-1.4-.8-2.7-1.6-4-2.6-4.3-3.2-13 2-10.7 10.9 1.6 6.3 3.2 8.8 5.9 9.8 3.2 1.2 6.7.3 9-2.3 1.1-1.3 2.1-2.8 2.8-4.4.1-.3.6-.2.6.1.2 3.5.5 13.6-.5 20.8 2.1-.7 4.2-1.3 6.3-1.8 2.2-.2 4.4-.4 6.5-.3-3.3-6.4-6.2-16.1-7.2-19.5-.1-.3.3-.5.5-.2 1.2 1.3 2.5 2.4 4 3.3 2.9 1.7 6.5 1.4 9.2-.7 2.2-1.8 3-4.7 2.4-11.2-.6-9.2-10.6-11.4-13.6-6.9zM335.8 374.8c-.6-3.3-2.6-6.1-5.4-7.8-2.7-1.9-6.1-2.6-9.3-2.1-3.1.5-5.8 2.1-7.8 4.5-1.2-.6-2.5-1-3.8-1.1-1.7 0-3.5.2-5.2.5l1 6.1 3.5-.6c.6.1 1.2.2 1.7.5-.3 1.4-.4 2.8-.2 4.2l4.7 28.5c.5 3.3 2.5 6.1 5.4 7.8 2.8 1.9 6.1 2.6 9.4 2.1s6.2-2.3 8.2-4.9c2.2-2.5 3.2-5.9 2.6-9.2l-3-17.9c2.1-.5 3.2-.7 3.3-.8l-1-5.8-3.3.5zm-1.4 29.4c.2 1.6-.3 3.2-1.5 4.3-1.1 1.3-2.6 2.2-4.2 2.5-1.7.3-3.4-.1-4.8-1-1.4-.7-2.4-2-2.7-3.6l-4.5-27.1c2.1 1.8 4.4 3.4 6.8 4.8 2.4 1.5 5.1 2.2 7.9 2.2zm-4-24c-1 0-1.9-.3-2.7-.8l-9.1-6.4c.9-.9 2.1-1.5 3.4-1.8 1.7-.3 3.4.1 4.8 1 1.4.7 2.4 2 2.8 3.6zM307.1 336.6c.9-1.3 1.8-2.6 2.9-3.8.2-.3.7 0 .5.3-1.8 2.9-2.9 6.2-3.1 9.6 0 1.1.1 2.2.4 3.3 2.5 8.8 9.8 6.8 9.8 6.8s7.5-.5 7.1-9.6c-.1-1.1-.3-2.2-.7-3.2-1.3-3.2-3.4-6-6-8.1-.3-.2 0-.6.4-.5 1.4.8 2.7 1.7 4 2.6 4.3 3.2 13-2 10.7-10.9-1.6-6.3-3.2-8.8-5.9-9.8-3.2-1.1-6.7-.2-8.9 2.3-1.1 1.3-2.1 2.8-2.8 4.4-.1.3-.6.2-.6-.1-.2-3.5-.5-13.6.5-20.8-2.1.7-4.2 1.3-6.3 1.8-2.2.2-4.4.4-6.5.3 3.3 6.4 6.2 16.1 7.2 19.5.1.3-.3.5-.5.3-1.2-1.3-2.6-2.4-4-3.3-2.9-1.7-6.6-1.4-9.2.7-2.2 1.8-2.9 4.7-2.4 11.2.5 9.3 10.4 11.4 13.4 7z"
                            fill="#000000"
                            opacity={1}
                            data-original="#000000"
                          />
                          <path
                            fill="#f11f20"
                            d="M107.8 34.7h273.8c15.4 0 27.9 12.5 27.9 27.9v386.8c0 15.4-12.5 27.9-27.9 27.9H107.8c-15.4 0-27.9-12.5-27.9-27.9V62.6c.1-15.4 12.6-27.9 27.9-27.9z"
                            opacity={1}
                            data-original="#f11f20"
                          />
                          <path
                            fill="#ffffff"
                            d="M107.8 40.8h273.8c12 0 21.8 9.8 21.8 21.8v386.8c0 12-9.8 21.8-21.8 21.8H107.8c-12 0-21.8-9.8-21.8-21.8V62.6c0-12 9.8-21.8 21.8-21.8z"
                            opacity={1}
                            data-original="#ffffff"
                          />
                          <g fill="#f11f20">
                            <path
                              d="M136.1 115.2h-4v-10.8l4.9-7.6 7.9 18.4h-5.1v5.6h15.7v-5.6h-4.3l-10.4-24.4L151 75h4.5v-5.7h-15.7V75h4.9l-12.6 19.5V75h4v-5.7h-14.3V75h4.7v40.2h-4.7v5.6h14.3zM142.5 138.4c-1.3 1.8-2.2 3.8-2.6 6 0 .1-.1.2-.2.2s-.1-.1-.2-.2c-.3-1.8-1-3.6-2-5.1-4-6.3-13.7-6.6-18.3-.7-1.9 2.4-3.1 6.1-2.3 11.8 2.2 15.8 22.8 37.4 22.8 37.4s20.6-21.6 22.8-37.4c.9-6.4-.8-10.3-3.1-12.6-4.6-4.9-12.9-4.6-16.9.6zM363.3 396.8h4v10.8l-4.9 7.6-7.9-18.4h5v-5.7h-15.7v5.7h4.3l10.4 24.3-10.2 15.9h-4.5v5.7h15.7V437h-4.8l12.6-19.5V437h-4v5.7h14.3V437h-4.8v-40.2h4.8v-5.7h-14.3zM382.4 361.7c-2.2-15.8-22.8-37.4-22.8-37.4S339 346 336.8 361.7c-.9 6.4.8 10.3 3.1 12.6 4.6 4.7 13 4.5 17-.7 1.3-1.8 2.2-3.8 2.6-6 0-.1.1-.2.2-.2s.1.1.2.2c.3 1.8 1 3.6 2 5.1 4 6.3 13.7 6.6 18.3.7 1.8-2.3 3-6 2.2-11.7zM300.5 305.4c-5.9-3.4-13.4-2.7-18.5 1.8-.7.6-1.3 1.1-2.1 1.9-1.6-3.5-3-6.8-4.6-10-.3-.6-1-1.5-1.5-1.5-2.4-.1-4.7-.1-7.3-.1-.5 0-.9.4-.9.9 0 .1 0 .3.1.4 4.1 9.1 8 17.9 11.8 26.6.1.3 0 .6-.2.7-.3.2-.6.1-.8-.1-1.2-1.3-2.3-2.7-3.1-4.2-3.5-7.4-6.7-14.9-10.1-22.3-.3-.7-1-1.8-1.6-1.9-2.4-.2-4.9-.1-7.5-.1-.5 0-.9.4-.9.9 0 .1 0 .2.1.4 4.1 9.1 8 17.9 11.8 26.6.1.3 0 .6-.2.8-.3.2-.6.1-.8-.1-1.2-1.3-2.3-2.7-3.1-4.2-3-6.4-6.1-12.9-8.7-19.5-1.4-3.5-2.9-5.8-7-4.9-.1 0-.2-.2-.4-.3 10.4-11 3.4-27.8-11.9-28.3l14.7-33.1c.4-1 0-2.1-1-2.5-.2-.1-.5-.2-.8-.2-1.6 0-3 0-4.4-.1-1.4-.2-2.7.6-3.1 2-6.4 14.5-12.9 29-19.3 43.4-1.6 3.5-2 7.4-.9 11.1.1.3.1.6.1.9 0 .2-.1.4-.3.4-.1 0-.2 0-.2-.1-.2-.1-.3-.3-.5-.5-2.9-4.1-2.4-8.4-.5-12.6 6.2-14 12.4-27.9 18.7-41.9.5-.9.1-2-.8-2.5-.3-.1-.6-.2-1-.2-1.6 0-3.1 0-4.5-.1-1.7-.1-2.4.6-3.1 2-6.4 14.5-12.9 29-19.3 43.4-.6 1.3-1 2.7-1.2 4.2-.1 2.4-.1 4.8-.1 7 0 .2-.2.4-.4.5-.1 0-.3-.1-.4-.2-2.3-2.8-2.6-7.2-.5-12 4.7-10.5 9.3-21 14-31.4 1.6-3.5 3.1-7 4.8-10.7.4-.9 0-2-.9-2.5-.2-.1-.5-.2-.8-.2-1.5 0-2.9 0-4.2-.1-1.4-.1-2.8.7-3.4 2-6.3 14.4-12.8 28.8-19.2 43.1-1.6 3.6-2 7.6-.9 11.4l.3 1.2c0 .2-.1.3-.2.4-.2.1-.4 0-.5-.2-.8-1.4-1.5-2.8-2.1-4.2-1.1-3.2-.2-6.2 1.1-9.2 4.7-10.6 9.4-21.1 14.1-31.7 1.5-3.4 3-6.7 4.6-10.2.4-.9 0-2-.9-2.5-.2-.1-.5-.2-.8-.2-1.5 0-2.8 0-4.2-.1-1.8-.1-2.7.5-3.4 2.2-6.2 14.1-12.6 28.2-18.8 42.3-5.5 12.3 2.1 23.8 15.6 23.9 9.7 0 19.4.1 29.1 0 1.5-.2 3 .7 3.4 2.2 3.2 7.5 6.6 15 10 22.4 2.8 6.1 7.8 9.6 14.5 9.7 12.3.2 24.6.1 36.9 0 .7 0 1.4 0 2-.1 7.3-.9 13.1-6.5 14.1-13.8 1.1-6-2.3-12.9-8-16.1zm-66.7-13c-4 .1-7.3-3.1-7.3-7v-.3c0-4 3.2-7.3 7.1-7.3 4.1-.1 7.4 3.2 7.5 7.2s-3.2 7.4-7.2 7.4h-.1zm19 33.5c-.2.2-.4.2-.6 0-1-.9-2.3-1.8-2.8-2.9-3.5-7.4-6.8-14.9-10.2-22.5l2.2-1 11.6 25.9c.1.2 0 .4-.2.5zm39.6.8c-4.1-.1-7.3-3.4-7.2-7.5s3.4-7.3 7.5-7.2c4 .1 7.3 3.4 7.2 7.5-.1 4-3.4 7.3-7.5 7.2z"
                              fill="#f11f20"
                              opacity={1}
                              data-original="#f11f20"
                            />
                            <path
                              d="M296.7 273.2h1.8c1.1 0 2-.8 2.1-1.9 0-.3-.1-.6-.2-.9l-9-20.1c-1.3-2.9-.8-5 1.9-6.8.8-.5 1.8-.9 2.7-1.2.8-.3 1.3-1.1 1.3-1.9v-4.6c0-1.1-.9-2-2-2h-.2c-5.6.5-11.3 5.2-13 11.2-.8 2.4-.7 5 .5 7.2 1.7 3.3 3.1 6.8 4.6 10.2 1.6 3.7 3.2 7.3 5 11.3-3.8.6-7 3-8.5 6.5-2.4-2.3-4.7-4.5-7-6.6 1-.2 1.8-1.1 1.8-2.1v-3.7c0-1.2-1-2.2-2.2-2.2-.2 0-.4 0-.6.1-2.8.8-4.8 3.2-5.5 6.7-.2.8-.7 1.5-1.3 2-1.7 1.5-3.7 2.6-5.2 4.2-4 4.4-7.8 9-11.7 13.6-.6.6-1.1 1.3-1.7 2-.2.2-.2.6.1.8.1.1.2.1.3.1 7.5 0 15 .1 22.6 0 3.7 0 7-2 8.8-5.2l1.3-2.2c2.5 5.9 7 7.6 12.6 7.5s11.5 0 17.2 0h2.8c.3 0 .6-.2.6-.5 0-.2-.1-.3-.2-.5-6.7-6.9-11.3-15.5-19.7-21zM305 208.9c.6-1.2 0-2.7-1.2-3.3-.3-.2-.7-.2-1.1-.2H197.4c-1.4 0-2.5 1.1-2.5 2.5 0 .4.1.7.2 1 2.6 5.4 7.6 9.1 13.5 10.2 9.3 1.5 16-1.9 20.5-9.2.7-1.2 2.2-1.6 3.4-.9.4.2.6.5.9.9 3.6 6.1 9.1 9.5 16.8 9.5s13.1-3.6 16.7-9.7c.7-1.2 2.2-1.6 3.4-.9.3.2.6.5.8.8 4.9 7.6 11.4 10.8 19.2 9.7 6.3-1 11.8-4.8 14.7-10.4zM297.3 226.3c0-2.3-1.9-4.2-4.2-4.2h-86.2c-2.3-.1-4.3 1.7-4.4 4s1.7 4.3 4 4.4H293.1c2.3-.1 4.2-1.9 4.2-4.2z"
                              fill="#f11f20"
                              opacity={1}
                              data-original="#f11f20"
                            />
                            <path
                              d="M276.7 250.5c1.7-.3 2-1.2 1.8-2.7-.8-8.9-8.7-15.4-17.5-14.6-5.5.5-10.4 3.8-12.9 8.7-.4 1-.8 2-1.1 3-.2.6.1 1.2.7 1.4.1 0 .2.1.4.1h4.3c1.8.3 3.7-.5 4.7-2 2.2-2.9 6.2-3.4 9.1-1.2.3.2.6.5.9.8-.1.1-.2.3-.4.3-4.2 1.3-8.4 2.5-12.5 3.9-2.5.8-6.1 1-7.2 2.8-1.3 1.9-.4 5.3-.4 8v.1c.2.4.6.6 1 .4h.1c7.2-3.7 15-2.9 22.8-2.9.8 0 1.5-.6 1.5-1.4 0-1.2 0-2.2.5-2.9.9-1.2 2.7-1.5 4.2-1.8zM225.4 202.5c3 0 5.5-2.2 5.8-5.2.3 3.2 3.2 5.5 6.4 5.2s5.5-3.2 5.2-6.4-3.2-5.5-6.4-5.2c-.4 0-.8.1-1.2.3 2.4-2.2 2.5-5.9.3-8.2s-5.9-2.5-8.2-.3c-2.4 2.2-2.5 5.9-.3 8.2l.3.3c-.6-.2-1.3-.3-1.9-.3-3.2.1-5.7 2.8-5.6 6.1.2 2.9 2.6 5.4 5.6 5.5zM263.1 202.5c3 0 5.5-2.2 5.8-5.2.3 3.2 3.2 5.5 6.4 5.2s5.5-3.2 5.2-6.4-3.2-5.5-6.4-5.2c-.4 0-.8.1-1.2.3 2.4-2.2 2.5-5.9.3-8.2-2.2-2.4-5.9-2.5-8.2-.3-2.4 2.2-2.5 5.9-.3 8.2l.3.3c-.6-.2-1.3-.3-1.9-.3-3.2.1-5.7 2.8-5.6 6.1.1 2.9 2.5 5.4 5.6 5.5zM192.1 200.3c1.4 2 4 2.7 6.3 1.8 2.2-.7 3.8-2.8 3.8-5.1.3-2.3-1.1-4.6-3.3-5.4-1.3-.4-2.6-.7-4-.8.4-.7.8-1.4 1.1-2.1 1-2.4.2-5.2-1.9-6.7-2-1.4-4.8-1.4-6.8 0-2.2 1.4-3.1 4.3-2 6.7 2.1 3.9 4.4 7.8 6.8 11.6zM301.2 202c2.4 1.2 5.4.5 6.9-1.8 2.4-3.7 4.6-7.6 6.7-11.5 1.1-2.2.5-4.5-1.4-6.2-1.6-1.7-4.2-2.1-6.3-1.1-2.2.8-3.6 3-3.4 5.4.3 1.4.7 2.8 1.2 4.2h-1.7c-2.6.1-4.8 2-5.3 4.5-.5 2.6.8 5.4 3.3 6.5zM283.9 302.4c2.1-.1 3.8-1.6 4.1-3.7.1-.5-.3-1.1-.8-1.1h-7.7c-.6 0-1 .4-1 1v.3c.6 2.3 3 3.9 5.4 3.5zM233.6 280c-2.8.1-5.1 2.4-5 5.3.1 2.8 2.4 5.1 5.3 5 2.8-.1 5-2.4 5-5.2 0-2.9-2.3-5.2-5.2-5.2 0 .1 0 .1-.1.1zM292.4 314.2c-2.8 0-5.1 2.4-5.1 5.2s2.4 5.1 5.2 5.1 5.1-2.4 5.1-5.2-2.3-5.1-5.2-5.1z"
                              fill="#f11f20"
                              opacity={1}
                              data-original="#f11f20"
                            />
                          </g>
                          <path
                            d="M89 397.2 194.1 25.3c4.2-14.8 19.6-23.4 34.4-19.2l263.3 74.4c14.8 4.2 23.4 19.6 19.2 34.4L405.9 486.7c-4.2 14.8-19.6 23.4-34.4 19.2l-263.3-74.4C93.4 427.4 84.8 412 89 397.2z"
                            fill="#000000"
                            opacity={1}
                            data-original="#000000"
                          />
                          <path
                            fill="#ffffff"
                            d="M94.8 398.8 199.9 26.9c3.3-11.6 15.3-18.3 26.9-15l263.3 74.4c11.6 3.3 18.3 15.3 15 26.9L400 485.1c-3.3 11.6-15.3 18.3-26.9 15l-263.3-74.4c-11.5-3.2-18.3-15.3-15-26.9z"
                            opacity={1}
                            data-original="#ffffff"
                          />
                          <path
                            d="M261.5 261c-2.1 25.2 18.5 32.2 34.9 8.5-5.1 15-11.8 29.4-20 43 9 .6 17.7 3.1 25.6 7.2.1-15.9 1.9-31.7 5.4-47.1 1.5 28.7 22.8 33.6 34.1 11 13.8-27.3-18.9-86-18.9-86s-58.6 33-61.1 63.4zM233.3 90.3l-2.9-.8 2.4-4.9 9.8 2.8-.5 5.4-2.9-.8-1.7 6 13.2 3.7 1.7-6-4.3-1.2 4.1-45.8-7.4-2.1-20.4 41.2-4.3-1.2-1.7 6 13.2 3.7zm11.9-30.6-1.9 21.4-7.6-2.2zM205.6 137.8c-.9 10.9 8 13.9 15.1 3.7-2.2 6.5-5.1 12.8-8.7 18.6 1.9.1 3.9.5 5.7 1 1.9.5 3.7 1.3 5.4 2.1 0-6.9.8-13.7 2.4-20.4.7 12.4 9.9 14.6 14.8 4.8 6-11.8-8.2-37.3-8.2-37.3s-25.4 14.3-26.5 27.5zM376.1 424.4l2.8.8-2.4 4.9-9.8-2.8.5-5.5 2.9.8 1.7-6-13.2-3.7-1.7 6 4.3 1.2-4.1 45.8 7.4 2.1 20.5-41.2 4.3 1.2 1.7-6-13.2-3.7zM364.2 455l1.9-21.4 7.6 2.2zM403.9 376.9c.9-10.9-8-14-15.1-3.7 2.2-6.5 5.1-12.8 8.7-18.6-3.9-.3-7.7-1.3-11.1-3.1 0 6.9-.8 13.7-2.3 20.4-.6-12.4-9.9-14.5-14.8-4.8-6 11.8 8.2 37.3 8.2 37.3s25.2-14.3 26.4-27.5z"
                            fill="#000000"
                            opacity={1}
                            data-original="#000000"
                          />
                        </g>
                      </svg>
                    </span>
                  </span>
                  <span className="text-text_secondary w-full truncate font-roboto text-sm font-medium leading-120 col-span-5">
                    Poker
                  </span>
                </div>
              </div>
              <div
                title="Game"
                className="rounded-md bg-bg_sportGameCard border border-solid border-border_secondary7  relative min-h-9 flex items-center justify-start pl-2 active:scale-95 transition-all ease-in-out duration-300 active:opacity-80 w-full"
              >
                <div className="flex w-[0.125rem] h-5 absolute left-0 top-[50%] transform -translate-y-1/2 bg-bg_exchskyBlue" />
                <div className="w-full grid grid-cols-6 gap-1.5 items-center h-full">
                  <span className="col-span-1">
                    <span className=" h-[18px] w-[18px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width={18}
                        height={18}
                        x={0}
                        y={0}
                        viewBox="0 0 500 500"
                        xmlSpace="preserve"
                        className
                      >
                        <g>
                          <linearGradient
                            id="b"
                            x1="55.087"
                            x2="444.913"
                            y1="137.833"
                            y2="362.899"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset={0} stopColor="#ff574a" />
                            <stop offset="0.194" stopColor="#f74a4b" />
                            <stop offset="0.55" stopColor="#e3284e" />
                            <stop offset="0.821" stopColor="#d10a51" />
                          </linearGradient>
                          <linearGradient
                            id="c"
                            x1="82.711"
                            x2="417.289"
                            y1="122.717"
                            y2="122.717"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset={0} stopColor="#fe6e4a" />
                            <stop offset={1} stopColor="#ff2b4b" />
                          </linearGradient>
                          <linearGradient
                            id="d"
                            x1="276.272"
                            x2="444.111"
                            y1="265.124"
                            y2="362.026"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0.005" stopColor="#d60946" />
                            <stop offset={1} stopColor="#b8073d" />
                          </linearGradient>
                          <linearGradient
                            id="e"
                            x1="12.742"
                            x2="266.869"
                            y1="240.213"
                            y2="386.934"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset={0} stopColor="#fd5f4a" />
                            <stop offset={1} stopColor="#e0244f" />
                          </linearGradient>
                          <linearGradient id="a">
                            <stop offset={0} stopColor="#d9c5c8" />
                            <stop offset={1} stopColor="#fff" />
                          </linearGradient>
                          <linearGradient
                            xlinkHref="#a"
                            id="f"
                            x1="290.631"
                            x2="319.561"
                            y1="272.995"
                            y2="289.698"
                            gradientUnits="userSpaceOnUse"
                          />
                          <linearGradient
                            xlinkHref="#a"
                            id="g"
                            x1="345.736"
                            x2="374.657"
                            y1="305.22"
                            y2="321.918"
                            gradientUnits="userSpaceOnUse"
                          />
                          <linearGradient
                            xlinkHref="#a"
                            id="h"
                            x1="400.828"
                            x2="429.752"
                            y1="337.447"
                            y2="354.146"
                            gradientUnits="userSpaceOnUse"
                          />
                          <linearGradient
                            xlinkHref="#a"
                            id="i"
                            x1="290.636"
                            x2="319.558"
                            y1="400.65"
                            y2="417.349"
                            gradientUnits="userSpaceOnUse"
                          />
                          <linearGradient
                            xlinkHref="#a"
                            id="j"
                            x1="400.832"
                            x2="429.752"
                            y1="209.795"
                            y2="226.492"
                            gradientUnits="userSpaceOnUse"
                          />
                          <linearGradient
                            xlinkHref="#a"
                            id="k"
                            x1="205.252"
                            x2="184.548"
                            y1="391.071"
                            y2="426.933"
                            gradientUnits="userSpaceOnUse"
                          />
                          <linearGradient
                            xlinkHref="#a"
                            id="l"
                            x1="360.192"
                            x2="360.192"
                            y1="139.246"
                            y2="106.177"
                            gradientUnits="userSpaceOnUse"
                          />
                          <linearGradient
                            xlinkHref="#a"
                            id="m"
                            x1="95.064"
                            x2="74.355"
                            y1="200.21"
                            y2="236.078"
                            gradientUnits="userSpaceOnUse"
                          />
                          <linearGradient
                            xlinkHref="#a"
                            id="n"
                            x1="305.101"
                            x2="305.101"
                            y1="170.85"
                            y2="137.782"
                            gradientUnits="userSpaceOnUse"
                          />
                          <linearGradient
                            xlinkHref="#a"
                            id="o"
                            x1={250}
                            x2={250}
                            y1="202.453"
                            y2="169.385"
                            gradientUnits="userSpaceOnUse"
                          />
                          <linearGradient
                            xlinkHref="#a"
                            id="p"
                            x1="194.975"
                            x2="194.975"
                            y1="107.643"
                            y2="74.542"
                            gradientUnits="userSpaceOnUse"
                          />
                          <linearGradient
                            xlinkHref="#a"
                            id="q"
                            x1="139.808"
                            x2="139.808"
                            y1="139.246"
                            y2="106.177"
                            gradientUnits="userSpaceOnUse"
                          />
                          <linearGradient
                            xlinkHref="#a"
                            id="r"
                            x1="249.998"
                            x2="249.998"
                            y1="76.044"
                            y2="42.978"
                            gradientUnits="userSpaceOnUse"
                          />
                          <path
                            fill="url(#b)"
                            d="m453.576 161.804-3.321-11.738-4.425-10.644-5.694-9.273-6.003-7.674-4.178-4.054-4.168-4.064-7.158-4.632-2.889-2.177-59.485-34.111-6.168-3.538-59.474-34.122-7.427-3.506 4.116 2.062-4.116-2.062-1.723-.867-.381-.134-.691-.226-13.079-4.271L249.995 25l-17.309 1.774-13.078 4.281-.382.124-.154.052-.537.175-9.148 4.373L149.912 69.9l-6.169 3.538-59.485 34.111-10.046 6.808-4.168 4.064-4.177 4.054-6.003 7.674-5.694 9.273-4.424 10.644-3.321 11.738-2.352 12.533-.423 3.558v144.953l.423 3.548 2.352 12.533 3.321 11.738 4.424 10.644 5.694 9.273 6.003 7.674 4.177 4.064 4.168 4.054 10.046 6.808 60.857 34.905 3.424 1.96 60.847 34.905 10.954 5.25 5.591 1.588 5.6 1.6 9.686 1.299 10.861.31 11.418-1.454 11.8-2.96 12.006-4.177 3.311-1.454 60.846-34.905 3.424-1.96 60.857-34.905 2.889-2.177 7.158-4.632 4.168-4.054 4.178-4.064 7.023-10.098 4.673-6.85 4.425-10.644 3.321-11.738 2.351-12.533.424-3.548V177.895l-1.908-11.191zm-221.395 180.59v96.638l-2.269 11.913-6.457 7.499-9.675 1.94-11.408-3.909-60.847-34.905-3.434-1.97-60.847-34.895-11.407-9.181-6.994-7.364 6.994 7.364-2.414-3.249-7.262-9.779-3.053-6.033 3.053 6.033-1.794-4.156-4.662-10.759-1.083-4.012 1.083 4.012-.341-2.156-1.929-12.357V188.105l2.269-11.913 6.457-7.488 9.676-1.939 11.407 3.909 10.387 5.962 11.016 6.323 38.072 21.836 6.168 3.538.31.176 11.016 6.312 44.548 25.549 3.611 2.074 6.312 5.075 5.096 4.095 9.665 13.038 6.468 14.915 2.269 14.513v48.314zm17.814-123.725-16.133-1.846-7.324-2.805-6.353-2.435-4.807-2.754-44.147-25.333-10.521-6.024-.505-.289-5.663-3.249-38.484-22.074-11.016-6.323-9.985-5.724-9.139-7.849-3.208-9.252 3.208-9.252 9.139-7.839L154.542 71.5l6.168-3.538 59.475-34.111 13.677-5.25 16.133-1.836 16.142 1.836 13.677 5.25 59.475 34.111 6.167 3.538 59.485 34.121 9.139 7.839 3.208 9.252-3.208 9.252-9.139 7.849-9.985 5.724-4.466 2.569-6.549 3.754-38.485 22.074-6.167 3.538-54.668 31.357-4.807 2.754-6.354 2.435-7.324 2.805zm202.57 17.762v96.638l-2.011 12.852-.258 1.66 1.083-4.012-1.083 4.012-3.404 8.882 3.404-8.882-1.62 3.745-4.838 11.17-9.675 13.028-11.408 9.181L361.91 419.6l-3.435 1.97-60.846 34.905-11.409 3.909-9.675-1.94-6.457-7.499-2.27-11.913V294.08l2.27-14.513 6.457-14.915 9.675-13.038 5.096-4.095 6.313-5.075 3.61-2.074 55.875-32.037 6.169-3.538 38.071-21.836 11.016-6.323 10.387-5.962 11.408-3.909 9.675 1.939 6.457 7.488 2.269 11.913v48.326z"
                            opacity={1}
                            data-original="url(#b)"
                          />
                          <path
                            fill="url(#c)"
                            d="m279.814 211.583 4.807-2.754 54.668-31.357 6.167-3.538 38.485-22.074 6.549-3.754 4.466-2.569 9.985-5.724 9.139-7.849 3.208-9.252-3.208-9.252-9.139-7.839L345.456 71.5l-6.167-3.538-59.475-34.112-13.677-5.25-16.142-1.836-16.133 1.836-13.677 5.25-59.475 34.111-6.168 3.538-59.485 34.121-9.139 7.839-3.208 9.252 3.208 9.252 9.139 7.849 9.985 5.724 11.016 6.323 38.484 22.074 5.663 3.249.505.289 10.521 6.024 44.147 25.333 4.807 2.754 6.353 2.435 7.324 2.805 16.133 1.846 16.142-1.846 7.324-2.805zm51.554-91.491 2.527-4.456.299-.516 5.363-4.24 6.829-2.847.557-.237 8.685-1.62h9.128l8.685 1.62 7.385 3.084 5.374 4.24 2.816 4.972v5.239l-2.135 3.765-.681 1.217-.413.32-4.962 3.919-7.385 3.074-.918.175-7.767 1.444h-9.128l-8.685-1.62-7.385-3.074-5.363-4.239-.692-1.217-2.135-3.765v-5.238zm-46.912 22.393 7.395-3.084 8.675-1.619h9.139l8.685 1.619 7.385 3.084 5.364 4.229 2.826 4.983v5.24l-2.135 3.764-.691 1.217-5.364 4.239-7.385 3.073-8.685 1.62h-9.139l-8.675-1.62-7.395-3.073-5.364-4.239-.691-1.217-2.124-3.764v-5.24l2.815-4.983zm-63.281-85.592 2.815-4.982 5.375-4.239 7.385-3.074 8.685-1.62h9.129l8.685 1.62 7.385 3.074 5.364 4.239 2.826 4.982v5.24l-2.136 3.755-.69 1.216-5.364 4.239-2.816 1.176-4.569 1.908-8.685 1.619h-9.129l-8.685-1.619-4.569-1.908-2.815-1.176-5.375-4.239-.68-1.206-2.135-3.765v-5.24zm-52.543 68.438-2.135 3.765-.691 1.217-5.364 4.239-7.385 3.074-8.685 1.62h-9.128l-8.686-1.62-7.385-3.074-5.374-4.239-.681-1.217-2.135-3.765v-5.239l2.816-4.972 5.374-4.24 7.385-3.084 8.686-1.62h9.128l8.685 1.62 7.385 3.084 5.364 4.24 2.826 4.972zm46.912-22.382-7.395 3.073-8.675 1.62h-9.139l-8.685-1.62-7.385-3.073-5.363-4.239-.691-1.217-2.136-3.764v-5.23l2.827-4.983 5.363-4.239 7.385-3.074 8.685-1.619h9.139l8.675 1.619 7.395 3.074 5.364 4.239 2.815 4.983v5.23l-2.125 3.764-.69 1.217zm52.274 95.977-4.569 1.908-8.685 1.62h-9.129l-8.685-1.62-4.569-1.908-2.815-1.175-5.375-4.229-.68-1.217-2.135-3.765v-5.24l2.815-4.982 5.375-4.239 2.815-1.166 4.569-1.908 8.685-1.62h9.129l8.685 1.62 7.385 3.074 5.364 4.239 2.826 4.982v5.239l-2.136 3.765-.69 1.217-5.364 4.229z"
                            opacity={1}
                            data-original="url(#c)"
                          />
                          <path
                            fill="url(#d)"
                            d="m443.839 168.705-9.675-1.939-11.408 3.909-10.387 5.962-11.016 6.323-38.071 21.836-6.169 3.538-55.875 32.037-3.61 2.074-6.313 5.075-5.096 4.095-9.675 13.038-6.457 14.915-2.27 14.513v144.952l2.27 11.913 6.457 7.499 9.675 1.94 11.409-3.909 60.846-34.905 3.435-1.97 60.846-34.895 11.408-9.181 9.675-13.028 4.838-11.17 1.62-3.745.258-1.66 2.011-12.852V188.107l-2.269-11.913zM324.725 405.128l-2.929 8.355-4.57 7.901-5.755 6.694-6.374 4.827-6.375 2.485-5.756-.093-4.569-2.672-2.104-3.579-.825-1.402-1.011-6.808 1.011-7.962 2.929-8.345 4.569-7.911 5.756-6.694 6.375-4.828 6.374-2.485 1.403.02 4.353.073 4.57 2.671 2.929 4.983 1.011 6.807zm.433-131.048-.434 3.393-2.929 8.355-4.57 7.901-5.755 6.695-5.178 3.919-1.195.908-6.375 2.496-5.756-.104-4.569-2.671-2.104-3.579-.825-1.403-1.011-6.808.165-1.269.845-6.694 2.929-8.345 4.569-7.912 5.756-6.694 2.517-1.908 3.858-2.92 6.374-2.485 1.403.021 4.353.072 4.57 2.672 2.929 4.982 1.011 6.808zm55.163 31.645-.505 3.981-2.93 8.345-4.559 7.901-5.756 6.694-3.186 2.424-1.527 1.145-1.66 1.269-6.385 2.486-5.745-.104-4.57-2.661-2.104-3.579-.825-1.413-.505-3.404-.506-3.403.238-1.847.773-6.117 2.929-8.345 4.57-7.911 5.745-6.694 2.992-2.259.206-.155 3.187-2.414 6.374-2.485 1.404.02 4.352.073 4.559 2.671 2.93 4.983.505 3.404.505 3.403zm54.596 36.205-2.929 8.344-4.57 7.912-5.755 6.694-6.375 4.827-6.375 2.486-5.755-.093-4.559-2.672-2.104-3.579-.836-1.403-1-6.807.299-2.434.701-5.539 2.94-8.345 4.559-7.911 5.755-6.694 3.456-2.609 2.919-2.218 6.375-2.485 1.403.02 4.352.072 4.57 2.671 2.929 4.982 1.011 6.808zm0-127.655-2.929 8.345-4.57 7.912-5.755 6.694-6.375 4.827-6.375 2.486-5.755-.093-4.559-2.672-2.104-3.579-.836-1.403-1-6.808 1-7.973 2.94-8.344 4.559-7.901 5.755-6.705 6.375-4.827 6.375-2.485 1.403.02 4.352.073 4.57 2.672 2.929 4.982 1.011 6.818z"
                            opacity={1}
                            data-original="url(#d)"
                          />
                          <path
                            fill="url(#e)"
                            d="m223.445 264.652-9.665-13.038-5.096-4.095-6.312-5.075-3.611-2.074-44.548-25.549-11.016-6.312-.31-.176-6.168-3.538-38.072-21.835-11.016-6.323-10.387-5.962-11.407-3.909-9.676 1.939-6.457 7.488-2.269 11.913V333.069l1.929 12.357.341 2.156 4.662 10.759 1.794 4.156 7.262 9.779 2.414 3.249 11.407 9.181L138.09 419.6l3.434 1.97 60.847 34.905 11.408 3.909 9.675-1.94 6.457-7.499 2.269-11.913V294.08l-2.269-14.513zm-119.104-27.86-.835 1.403-2.104 3.579-4.56 2.672-5.755.093-6.375-2.486-6.374-4.827-5.755-6.694-4.57-7.912-2.929-8.345-1.011-7.962 1.011-6.818 2.929-4.982 4.57-2.672 4.352-.073 1.403-.02 6.374 2.485 6.375 4.827 5.755 6.705 4.56 7.901 2.939 8.344 1.001 7.973zm110.191 190.854-.824 1.402-2.105 3.579-4.569 2.672-5.755.093-6.375-2.485-6.375-4.827-5.755-6.694-4.569-7.901-2.929-8.355-1.012-7.963 1.012-6.807 2.929-4.983 4.569-2.671 4.352-.073 1.403-.02 6.375 2.485 6.375 4.828 5.755 6.694 4.569 7.911 2.929 8.345 1.012 7.962z"
                            opacity={1}
                            data-original="url(#e)"
                          />
                          <path
                            fill="url(#f)"
                            d="m321.796 257.721-4.571-2.672-4.347-.072-.001-.002-1.404-.021-6.384 2.486-3.857 2.918-2.518 1.909-5.755 6.695-4.559 7.912-2.928 8.344-.857 6.695-.154 1.268 1.011 6.808.82 1.404 2.104 3.579 4.569 2.671 5.756.104 6.375-2.496 1.196-.908 5.178-3.919 5.755-6.695 4.571-7.901 2.929-8.355.433-3.393.577-4.569-1.01-6.808z"
                            opacity={1}
                            data-original="url(#f)"
                          />
                          <path
                            fill="url(#g)"
                            d="m379.816 294.926-2.93-4.983-4.559-2.671-4.352-.072-1.404-.02-6.374 2.485-3.187 2.414-.206.155-2.992 2.259-5.745 6.694-4.57 7.911-2.929 8.344-.773 6.118-.238 1.846.506 3.404.505 3.404.825 1.413 2.104 3.579 4.57 2.661 5.745.103 6.385-2.486 1.66-1.269 1.527-1.145 3.187-2.423 5.756-6.695 4.559-7.901 2.93-8.344.505-3.982.505-3.992-.505-3.403z"
                            opacity={1}
                            data-original="url(#g)"
                          />
                          <path
                            fill="url(#h)"
                            d="m431.986 322.167-4.57-2.671-4.342-.073.636 1.089-.637-1.082-1.403-.031-6.385 2.486-2.919 2.218-3.456 2.62-5.756 6.695-4.559 7.902-2.929 8.345-.702 5.538-.309 2.436 1.011 6.808.825 1.403 1.403.02 6.374-2.486 6.376-4.828 5.755-6.694 4.57-7.912 2.929-8.345 1.011-7.964-1.01-6.805 1.011 6.808-1.01 7.963-2.93 8.345-4.57 7.912-5.756 6.695-6.373 4.828-6.375 2.485-1.403-.021 2.104 3.581 4.559 2.661 5.756.102 6.375-2.486 6.385-4.837 5.745-6.695 4.569-7.901 2.929-8.345 1.012-7.974-1.012-6.808z"
                            opacity={1}
                            data-original="url(#h)"
                          />
                          <path
                            fill="url(#i)"
                            d="m321.793 385.372-4.569-2.671-4.341-.073.543.934-.553-.93-1.403-.021-6.374 2.486-6.375 4.828-5.756 6.693-4.569 7.912-2.929 8.345-1.011 7.962 1.011 6.809.825 1.402.613.013-.606-.009 2.104 3.58 4.559 2.662 5.755.103 6.375-2.486 6.385-4.837 5.745-6.693 4.57-7.902 2.93-8.344 1.011-7.973-1.011-6.807z"
                            opacity={1}
                            data-original="url(#i)"
                          />
                          <path
                            fill="url(#j)"
                            d="m431.986 194.513-4.569-2.671-4.342-.072.67 1.148-.68-1.15-1.403-.02-6.374 2.485-6.375 4.828-5.755 6.705-4.559 7.901-2.941 8.344-.999 7.973.999 6.808.836 1.403 1.403.02 6.375-2.485 6.374-4.828 5.755-6.693-.001.002-5.756 6.694-6.373 4.827-6.375 2.486-1.403-.021 2.104 3.579 4.559 2.662 5.756.103 6.374-2.486 6.386-4.838 5.745-6.694 4.569-7.902 2.929-8.344 1.012-7.974-1.012-6.808z"
                            opacity={1}
                            data-original="url(#j)"
                          />
                          <path
                            fill="url(#k)"
                            d="m211.603 404.53-4.569-7.912-5.756-6.693-6.374-4.828-6.375-2.486-1.403.021-.384.644.379-.648-4.353.074-4.559 2.671-2.939 4.982-1.001 6.808 1.002 7.972 2.941 8.345 4.559 7.901 5.756 6.693 6.374 4.837 6.375 2.486 5.756-.105 4.569-2.661 2.103-3.579-.527.008.531-.012.824-1.402 1.012-6.809-1.012-7.962z"
                            opacity={1}
                            data-original="url(#k)"
                          />
                          <path
                            fill="url(#l)"
                            d="m380.826 110.88-7.385-3.084-8.685-1.619h-9.128l-8.686 1.619-.556.237-6.829 2.847-5.363 4.24-.3.516-2.526 4.456v5.239l2.134 3.765.692 1.218 5.363 4.238 7.385 3.074 8.686 1.62h9.128l7.767-1.444.918-.176 7.385-3.074 4.962-3.919.412-.319.681-1.218 2.135-3.765v-5.239l-2.816-4.972z"
                            opacity={1}
                            data-original="url(#l)"
                          />
                          <path
                            fill="url(#m)"
                            d="m101.401 213.667-4.56-7.901-5.755-6.705-6.374-4.828-6.374-2.485-1.403.02-.406.686.399-.684-4.352.072-4.56 2.672-2.939 4.983-1.001 6.807 1.001 7.973 2.941 8.345 4.559 7.901 5.756 6.694 6.374 4.838 6.375 2.485 5.756-.103 4.569-2.661 2.104-3.58-1.403.021-.003-.002 1.401-.02.835-1.403 1-6.808-1-7.973z"
                            opacity={1}
                            data-original="url(#m)"
                          />
                          <path
                            fill="url(#n)"
                            d="m325.735 142.485-7.385-3.084-8.685-1.619h-9.138l-8.675 1.619-7.396 3.084-5.364 4.228-2.815 4.983v5.24l2.124 3.764.691 1.218 5.364 4.239 7.396 3.074 8.675 1.619h9.138l8.685-1.619 7.385-3.074 5.364-4.239.691-1.218 2.136-3.764v-5.24l-2.827-4.983z"
                            opacity={1}
                            data-original="url(#n)"
                          />
                          <path
                            fill="url(#o)"
                            d="m270.635 174.079-7.386-3.074-8.684-1.62h-9.13l-8.685 1.62-4.569 1.908-2.816 1.166-5.374 4.239-2.816 4.982v5.239l2.135 3.764-.001.001.692 1.217 5.362 4.24 2.816 1.165 4.569 1.907 8.685 1.62h9.128l8.685-1.62 4.569-1.908 2.816-1.165 5.374-4.239.691-1.217-.003-.006 2.132-3.759V183.3l-2.826-4.982z"
                            opacity={1}
                            data-original="url(#o)"
                          />
                          <path
                            fill="url(#p)"
                            d="m221.685 97.664 2.111-3.804-.035-5.28-2.845-5.033-5.392-4.267-7.401-3.115-8.692-1.623h-9.117l-8.669 1.639-7.37 3.102-5.336 4.277-2.785 5.033.021 5.284 2.04 3.596-.012.02.691 1.216 5.375 4.241 7.386 3.074 8.685 1.619h9.129l8.686-1.619 7.386-3.074 5.363-4.241.687-1.209z"
                            opacity={1}
                            data-original="url(#p)"
                          />
                          <path
                            fill="url(#q)"
                            d="m160.442 110.88-7.385-3.084-8.686-1.619h-9.127l-8.686 1.619-7.385 3.084-5.374 4.24-2.816 4.972v5.239l2.135 3.765.681 1.218 5.374 4.238 7.385 3.074 8.686 1.62h9.127l8.686-1.62 7.385-3.074 5.364-4.238.691-1.218 2.135-3.765v-5.239l-2.826-4.972z"
                            opacity={1}
                            data-original="url(#q)"
                          />
                          <path
                            fill="url(#r)"
                            d="m223.998 67.112 5.364 4.229 2.816 1.176 4.57 1.908 8.685 1.619h9.128l8.686-1.621 4.57-1.907 2.815-1.176 5.374-4.23.692-1.217 2.124-3.763v-5.24l-2.817-4.981-5.374-4.24-7.385-3.073-8.685-1.618h-9.127l-8.686 1.619-7.384 3.072-5.363 4.24-2.827 4.982v5.24l2.134 3.762-.001.002z"
                            opacity={1}
                            data-original="url(#r)"
                          />
                        </g>
                      </svg>
                    </span>
                  </span>
                  <span className="text-text_secondary w-full truncate font-roboto text-sm font-medium leading-120 col-span-5">
                    Game
                  </span>
                </div>
              </div>
              <div
                title="Non-Stop Roulette"
                className="rounded-md bg-bg_sportGameCard border border-solid border-border_secondary7  relative min-h-9 flex items-center justify-start pl-2 active:scale-95 transition-all ease-in-out duration-300 active:opacity-80 w-full"
              >
                <div className="flex w-[0.125rem] h-5 absolute left-0 top-[50%] transform -translate-y-1/2 bg-bg_exchred" />
                <div className="w-full grid grid-cols-6 gap-1.5 items-center h-full">
                  <span className="col-span-1">
                    <span className=" h-[18px] w-[18px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width={18}
                        height={18}
                        x={0}
                        y={0}
                        viewBox="0 0 496.158 496.158"
                        xmlSpace="preserve"
                        className
                      >
                        <g>
                          <path
                            d="M248.082.003C111.07.003 0 111.063 0 248.085c0 137.001 111.07 248.07 248.082 248.07 137.006 0 248.076-111.069 248.076-248.07C496.158 111.062 385.088.003 248.082.003z"
                            fill="#703d2a"
                            data-original="#703d2a"
                            className
                          />
                          <path
                            d="M248.081 46.5c-111.332 0-201.584 90.244-201.584 201.583 0 111.323 90.252 201.575 201.584 201.575 111.327 0 201.579-90.251 201.579-201.575C449.661 136.744 359.408 46.5 248.081 46.5z"
                            fill="#a56c42"
                            data-original="#a56c42"
                          />
                          <path
                            d="M248.081 85.497c-89.793 0-162.585 72.785-162.585 162.585 0 89.787 72.792 162.578 162.585 162.578 89.79 0 162.582-72.792 162.582-162.578-.001-89.799-72.792-162.585-162.582-162.585z"
                            fill="#c6b8af"
                            data-original="#c6b8af"
                          />
                          <path
                            d="M248.081 93.121c-85.583 0-154.961 69.372-154.961 154.961 0 85.576 69.378 154.954 154.961 154.954 85.579 0 154.958-69.378 154.958-154.954-.001-85.588-69.379-154.961-154.958-154.961z"
                            fill="#ba7c49"
                            data-original="#ba7c49"
                          />
                          <path
                            d="M121.184 159.225a153.891 153.891 0 0 0-13.521 23.375l140.417 65.479-126.896-88.854z"
                            fill="#ce2e2e"
                            data-original="#ce2e2e"
                          />
                          <path
                            d="M107.662 182.6a154.303 154.303 0 0 0-9.217 25.384l149.635 40.095L107.662 182.6z"
                            fill="#3a3a3a"
                            data-original="#3a3a3a"
                          />
                          <path
                            d="M138.553 138.551a155.721 155.721 0 0 0-17.369 20.674l126.896 88.854-109.527-109.528z"
                            fill="#3a3a3a"
                            data-original="#3a3a3a"
                          />
                          <path
                            d="M98.445 207.984a154.64 154.64 0 0 0-4.658 26.594l154.293 13.501-149.635-40.095zM159.226 121.185a156.003 156.003 0 0 0-20.673 17.366L248.08 248.079l-88.854-126.894zM121.184 336.933l126.884-88.846-140.397 65.47a153.634 153.634 0 0 0 13.513 23.376zm126.892-88.852-.008.005.012-.005h-.004z"
                            fill="#ce2e2e"
                            data-original="#ce2e2e"
                          />
                          <path
                            d="M93.787 234.578a155.763 155.763 0 0 0-.004 27l154.297-13.499-154.293-13.501zM98.448 288.172a153.319 153.319 0 0 0 9.224 25.385l140.409-65.476-149.633 40.091z"
                            fill="#3a3a3a"
                            data-original="#3a3a3a"
                          />
                          <path
                            d="M93.783 261.578a154.995 154.995 0 0 0 4.665 26.594l149.632-40.091v-.002L93.783 261.578z"
                            fill="#ce2e2e"
                            data-original="#ce2e2e"
                          />
                          <path
                            d="M357.603 138.558 248.08 248.079l126.894-88.854a155.16 155.16 0 0 0-17.371-20.667zM182.599 107.662a153.963 153.963 0 0 0-23.373 13.522l88.854 126.895-65.481-140.417zM261.578 93.785 248.08 248.079l40.093-149.634a154.655 154.655 0 0 0-26.595-4.66zM313.555 107.667 248.08 248.079l88.854-126.896a153.143 153.143 0 0 0-23.379-13.516z"
                            fill="#3a3a3a"
                            data-original="#3a3a3a"
                          />
                          <path
                            d="M336.934 121.183 248.08 248.079l109.523-109.521a156.136 156.136 0 0 0-20.669-17.375zM288.173 98.445 248.08 248.079l65.475-140.412a154.537 154.537 0 0 0-25.382-9.222z"
                            fill="#ce2e2e"
                            data-original="#ce2e2e"
                          />
                          <path
                            d="M121.184 336.933a155.636 155.636 0 0 0 17.374 20.668l109.519-109.52-126.893 88.852z"
                            fill="#3a3a3a"
                            data-original="#3a3a3a"
                          />
                          <path
                            d="m234.58 93.785 13.5 154.294 13.498-154.294a155.246 155.246 0 0 0-26.998 0z"
                            fill="#357157"
                            data-original="#357157"
                          />
                          <path
                            d="M234.58 93.785a154.775 154.775 0 0 0-26.595 4.661l40.095 149.633-13.5-154.294z"
                            fill="#3a3a3a"
                            data-original="#3a3a3a"
                          />
                          <path
                            d="M207.985 98.445a154.374 154.374 0 0 0-25.386 9.217l65.481 140.417-40.095-149.634zM248.08 248.079l149.635 40.092a154.899 154.899 0 0 0 4.655-26.593l-154.29-13.499zM248.08 248.079l126.896 88.854a154.028 154.028 0 0 0 13.521-23.381L248.08 248.079z"
                            fill="#ce2e2e"
                            data-original="#ce2e2e"
                          />
                          <path
                            d="M402.379 234.582 248.08 248.079l154.291 13.499c.781-8.985.783-18.02.008-26.996z"
                            fill="#3a3a3a"
                            data-original="#3a3a3a"
                          />
                          <path
                            d="M397.715 207.99 248.08 248.079l154.299-13.497a155.6 155.6 0 0 0-4.664-26.592zM374.974 159.225 248.08 248.079l140.414-65.476a153.671 153.671 0 0 0-13.52-23.378z"
                            fill="#ce2e2e"
                            data-original="#ce2e2e"
                          />
                          <path
                            d="M388.494 182.603 248.08 248.079l149.635-40.089a154.469 154.469 0 0 0-9.221-25.387zM248.08 248.079l109.525 109.526a155.504 155.504 0 0 0 17.371-20.672L248.08 248.079z"
                            fill="#3a3a3a"
                            data-original="#3a3a3a"
                          />
                          <path
                            d="m248.076 248.081-109.519 109.52a156.178 156.178 0 0 0 20.669 17.38l88.854-126.9h-.004z"
                            fill="#ce2e2e"
                            data-original="#ce2e2e"
                          />
                          <path
                            d="M248.08 248.079v.002l-13.496 154.294c8.98.781 18.017.781 26.998-.004L248.08 248.079z"
                            fill="#ce2e2e"
                            data-original="#ce2e2e"
                          />
                          <path
                            d="M182.603 388.493a153.624 153.624 0 0 0 25.382 9.22l40.095-149.631v-.003l-65.477 140.414z"
                            fill="#ce2e2e"
                            data-original="#ce2e2e"
                          />
                          <path
                            d="M207.985 397.713a155.08 155.08 0 0 0 26.599 4.663l13.496-154.294-40.095 149.631zM182.603 388.493l65.474-140.407-88.85 126.895a154.118 154.118 0 0 0 23.376 13.512zm65.474-140.407.003-.005v-.002l-.003.007zM248.08 248.079l13.502 154.292a154.72 154.72 0 0 0 26.591-4.659L248.08 248.079zM248.08 248.079l65.475 140.414a153.853 153.853 0 0 0 23.377-13.516L248.08 248.079z"
                            fill="#3a3a3a"
                            data-original="#3a3a3a"
                          />
                          <path
                            d="m248.08 248.079 88.852 126.898a155.532 155.532 0 0 0 20.673-17.372L248.08 248.079zM248.08 248.079l40.093 149.634a153.665 153.665 0 0 0 25.382-9.22L248.08 248.079z"
                            fill="#ce2e2e"
                            data-original="#ce2e2e"
                          />
                          <path
                            d="m248.08 248.079 140.418 65.473a154.522 154.522 0 0 0 9.217-25.381L248.08 248.079z"
                            fill="#3a3a3a"
                            data-original="#3a3a3a"
                          />
                          <path
                            d="M248.08 117.105c-72.336 0-130.977 58.635-130.977 130.976 0 72.331 58.64 130.971 130.977 130.971 72.333 0 130.974-58.64 130.974-130.971 0-72.34-58.64-130.976-130.974-130.976z"
                            fill="#bfafa5"
                            data-original="#bfafa5"
                          />
                          <path
                            d="M248.08 123.984c-68.538 0-124.098 55.556-124.098 124.098 0 68.533 55.561 124.093 124.098 124.093 68.535 0 124.095-55.561 124.095-124.093.001-68.543-55.56-124.098-124.095-124.098z"
                            fill="#c6854a"
                            data-original="#c6854a"
                          />
                          <path
                            d="M144.124 175.288a125.998 125.998 0 0 0-11.077 19.149l115.033 53.642-103.956-72.791z"
                            fill="#e03636"
                            data-original="#e03636"
                          />
                          <path
                            d="M133.047 194.438a126.41 126.41 0 0 0-7.551 20.795l122.584 32.846-115.033-53.641zM158.353 158.351a127.556 127.556 0 0 0-14.229 16.937l103.956 72.791-89.727-89.728z"
                            fill="#3a3a3a"
                            data-original="#3a3a3a"
                          />
                          <path
                            d="M125.496 215.233a126.606 126.606 0 0 0-3.815 21.786l126.399 11.06-122.584-32.846zM175.289 144.125a127.813 127.813 0 0 0-16.936 14.226l89.727 89.728-72.791-103.954zM144.124 320.87l103.945-72.784-115.015 53.634a126.011 126.011 0 0 0 11.07 19.15zm103.953-72.789-.007.005.01-.005h-.003z"
                            fill="#e03636"
                            data-original="#e03636"
                          />
                          <path
                            d="M121.681 237.019a127.55 127.55 0 0 0-.004 22.119l126.403-11.059-126.399-11.06zM125.498 280.924a125.697 125.697 0 0 0 7.556 20.796l115.025-53.639-122.581 32.843z"
                            fill="#3a3a3a"
                            data-original="#3a3a3a"
                          />
                          <path
                            d="M121.677 259.138a127.181 127.181 0 0 0 3.821 21.787l122.582-32.843v-.003l-126.403 11.059z"
                            fill="#e03636"
                            data-original="#e03636"
                          />
                          <path
                            d="m337.803 158.357-89.723 89.722 103.954-72.791a127.194 127.194 0 0 0-14.231-16.931z"
                            fill="#3a3a3a"
                            data-original="#3a3a3a"
                          />
                          <path
                            d="M194.436 133.047a126.117 126.117 0 0 0-19.147 11.078l72.791 103.954-53.644-115.032zM259.138 121.678 248.08 248.079l32.845-122.583a126.833 126.833 0 0 0-21.787-3.818zM301.718 133.051 248.08 248.079l72.791-103.956a125.56 125.56 0 0 0-19.153-11.072z"
                            fill="#3a3a3a"
                            data-original="#3a3a3a"
                          />
                          <path
                            d="M320.871 144.123 248.08 248.079l89.723-89.722a128.015 128.015 0 0 0-16.932-14.234zM280.925 125.496 248.08 248.079l53.638-115.028a126.614 126.614 0 0 0-20.793-7.555z"
                            fill="#e03636"
                            data-original="#e03636"
                          />
                          <path
                            d="M144.124 320.87a127.586 127.586 0 0 0 14.233 16.932l89.719-89.72-103.952 72.788z"
                            fill="#3a3a3a"
                            data-original="#3a3a3a"
                          />
                          <path
                            d="m237.02 121.678 11.06 126.401 11.058-126.401a127.439 127.439 0 0 0-22.118 0z"
                            fill="#398764"
                            data-original="#398764"
                          />
                          <path
                            d="M237.02 121.678a126.9 126.9 0 0 0-21.787 3.818l32.847 122.583-11.06-126.401z"
                            fill="#3a3a3a"
                            data-original="#3a3a3a"
                          />
                          <path
                            d="M215.234 125.496a126.514 126.514 0 0 0-20.797 7.551l53.643 115.032-32.846-122.583zM248.08 248.079l122.583 32.844a126.85 126.85 0 0 0 3.813-21.785L248.08 248.079zM248.08 248.079l103.956 72.791a126.306 126.306 0 0 0 11.077-19.154L248.08 248.079z"
                            fill="#e03636"
                            data-original="#e03636"
                          />
                          <path
                            d="M374.484 237.022 248.08 248.079l126.397 11.059c.641-7.361.642-14.763.007-22.116z"
                            fill="#3a3a3a"
                            data-original="#3a3a3a"
                          />
                          <path
                            d="M370.663 215.237 248.08 248.079l126.404-11.057a127.4 127.4 0 0 0-3.821-21.785zM352.034 175.288 248.08 248.079l115.029-53.639a125.917 125.917 0 0 0-11.075-19.152z"
                            fill="#e03636"
                            data-original="#e03636"
                          />
                          <path
                            d="M363.109 194.44 248.08 248.079l122.583-32.842a126.535 126.535 0 0 0-7.554-20.797z"
                            fill="#3a3a3a"
                            data-original="#3a3a3a"
                          />
                          <path
                            d="m248.08 248.079 89.725 89.725a127.318 127.318 0 0 0 14.23-16.935l-103.955-72.79z"
                            fill="#3a3a3a"
                            data-original="#3a3a3a"
                          />
                          <path
                            d="m248.077 248.081-89.719 89.72a127.907 127.907 0 0 0 16.932 14.238l72.791-103.958h-.004z"
                            fill="#e03636"
                            data-original="#e03636"
                          />
                          <path
                            d="M248.08 248.079v.002l-11.056 126.4c7.357.64 14.76.64 22.117-.003L248.08 248.079z"
                            fill="#e03636"
                            data-original="#e03636"
                          />
                          <path
                            d="M194.44 363.109a125.918 125.918 0 0 0 20.794 7.553l32.846-122.581v-.002l-53.64 115.03z"
                            fill="#e03636"
                            data-original="#e03636"
                          />
                          <path
                            d="M215.234 370.662a126.92 126.92 0 0 0 21.79 3.819l11.056-126.4-32.846 122.581zM248.077 248.085l.003-.004v-.002l-.003.006zM194.44 363.109l53.637-115.024-72.788 103.954a126.393 126.393 0 0 0 19.151 11.07zM248.08 248.079l11.061 126.399a126.892 126.892 0 0 0 21.784-3.816L248.08 248.079zM248.08 248.079l53.638 115.03a125.978 125.978 0 0 0 19.151-11.073L248.08 248.079z"
                            fill="#3a3a3a"
                            data-original="#3a3a3a"
                          />
                          <path
                            d="m248.08 248.079 72.789 103.957a127.406 127.406 0 0 0 16.936-14.232l-89.725-89.725zM248.08 248.079l32.845 122.583a125.924 125.924 0 0 0 20.793-7.553l-53.638-115.03z"
                            fill="#e03636"
                            data-original="#e03636"
                          />
                          <path
                            d="m248.08 248.079 115.033 53.636a126.695 126.695 0 0 0 7.551-20.792L248.08 248.079z"
                            fill="#3a3a3a"
                            data-original="#3a3a3a"
                          />
                          <circle
                            cx="248.079"
                            cy="135.049"
                            r={9}
                            fill="#e2e2e2"
                            data-original="#e2e2e2"
                          />
                          <path
                            d="M247.803 126.995a8.058 8.058 0 1 0 0 16.115c4.45 0 4.45-16.115 0-16.115z"
                            fill="#ffffff"
                            data-original="#ffffff"
                          />
                          <path
                            d="M248.08 149.619c-54.379 0-98.462 44.08-98.462 98.462 0 54.375 44.083 98.459 98.462 98.459 54.377 0 98.46-44.083 98.46-98.459 0-54.383-44.083-98.462-98.46-98.462z"
                            fill="#cec0b7"
                            data-original="#cec0b7"
                          />
                          <path
                            d="M248.08 153.744c-52.101 0-94.337 42.233-94.337 94.337 0 52.097 42.236 94.333 94.337 94.333 52.099 0 94.335-42.236 94.335-94.333 0-52.104-42.236-94.337-94.335-94.337z"
                            fill="#d89450"
                            data-original="#d89450"
                          />
                          <path
                            d="M308.69 184.708c-34.237-34.238-89.745-34.24-123.984 0-34.235 34.235-34.235 89.745.002 123.982 17.081 17.08 56.5-5.22 87.464-36.11 31.101-31.025 53.674-70.716 36.518-87.872z"
                            fill="#e09f65"
                            data-original="#e09f65"
                          />
                          <path
                            d="M246.579 153.389h3v189.39h-3z"
                            fill="#685b51"
                            data-original="#685b51"
                          />
                          <path
                            d="M153.389 246.579h189.39v3h-189.39z"
                            fill="#685b51"
                            data-original="#685b51"
                          />
                          <path
                            d="M161.31 243.298H350.7v3H161.31z"
                            transform="rotate(-45.001 255.998 256.006)"
                            fill="#685b51"
                            data-original="#685b51"
                          />
                          <path
                            d="M254.5 150.108h3v189.39h-3z"
                            transform="rotate(-45.001 255.998 256.006)"
                            fill="#685b51"
                            data-original="#685b51"
                          />
                          <circle
                            cx="248.079"
                            cy="248.079"
                            r="30.336"
                            fill="#685b51"
                            data-original="#685b51"
                          />
                          <circle
                            cx="248.079"
                            cy="248.079"
                            r="13.211"
                            fill="#4c4642"
                            data-original="#4c4642"
                          />
                          <path
                            d="M248 49.053c-1.75 0-5.5 7.387-5.5 16.5s3.25 16.5 5.5 16.5 5.5-7.387 5.5-16.5-3.75-16.5-5.5-16.5z"
                            fill="#c1bdbc"
                            data-original="#c1bdbc"
                          />
                          <path
                            d="M248 49.053c-1.75 0-5.5 7.387-5.5 16.5s3.25 16.5 5.5 16.5 1.75-33 0-33z"
                            fill="#d8d8d8"
                            data-original="#d8d8d8"
                          />
                          <path
                            d="M248 414.053c-1.75 0-5.5 7.387-5.5 16.5s3.25 16.5 5.5 16.5 5.5-7.387 5.5-16.5-3.75-16.5-5.5-16.5z"
                            fill="#c1bdbc"
                            data-original="#c1bdbc"
                          />
                          <path
                            d="M248 414.053c-1.75 0-5.5 7.387-5.5 16.5s3.25 16.5 5.5 16.5 1.75-33 0-33z"
                            fill="#d8d8d8"
                            data-original="#d8d8d8"
                          />
                          <path
                            d="M430.5 242.553c-9.113 0-16.5 3.25-16.5 5.5s7.387 5.5 16.5 5.5 16.5-3.75 16.5-5.5-7.387-5.5-16.5-5.5z"
                            fill="#c1bdbc"
                            data-original="#c1bdbc"
                          />
                          <path
                            d="M430.5 242.553c-9.113 0-16.5 3.25-16.5 5.5s33 1.75 33 0-7.387-5.5-16.5-5.5z"
                            fill="#d8d8d8"
                            data-original="#d8d8d8"
                          />
                          <path
                            d="M65.5 242.553c-9.113 0-16.5 3.25-16.5 5.5s7.387 5.5 16.5 5.5 16.5-3.75 16.5-5.5-7.387-5.5-16.5-5.5z"
                            fill="#c1bdbc"
                            data-original="#c1bdbc"
                          />
                          <path
                            d="M65.5 242.553c-9.113 0-16.5 3.25-16.5 5.5s33 1.75 33 0-7.387-5.5-16.5-5.5z"
                            fill="#d8d8d8"
                            data-original="#d8d8d8"
                          />
                          <path
                            d="M388.715 107.339c-1.238-1.237-9.113 1.334-15.557 7.778-6.444 6.444-9.369 13.965-7.778 15.556 1.591 1.591 9.112-1.334 15.556-7.778 6.444-6.443 9.016-14.319 7.779-15.556z"
                            fill="#c1bdbc"
                            data-original="#c1bdbc"
                          />
                          <path
                            d="M388.715 107.339c-1.238-1.237-9.113 1.334-15.557 7.778-6.444 6.444-9.369 13.965-7.778 15.556 1.591 1.591 24.572-22.097 23.335-23.334z"
                            fill="#d8d8d8"
                            data-original="#d8d8d8"
                          />
                          <path
                            d="M130.621 365.433c-1.237-1.238-9.112 1.334-15.556 7.778s-9.369 13.965-7.778 15.557c1.591 1.591 9.113-1.334 15.556-7.778 6.443-6.445 9.015-14.32 7.778-15.557z"
                            fill="#c1bdbc"
                            data-original="#c1bdbc"
                          />
                          <path
                            d="M130.621 365.433c-1.237-1.238-9.112 1.334-15.556 7.778s-9.369 13.965-7.778 15.557c1.59 1.59 24.571-22.098 23.334-23.335z"
                            fill="#d8d8d8"
                            data-original="#d8d8d8"
                          />
                          <path
                            d="M380.936 373.211c-6.444-6.444-13.965-9.369-15.556-7.778s1.334 9.112 7.778 15.556 14.319 9.016 15.557 7.778c1.237-1.237-1.335-9.112-7.779-15.556z"
                            fill="#c1bdbc"
                            data-original="#c1bdbc"
                          />
                          <path
                            d="M380.936 373.211c-6.444-6.444-13.965-9.369-15.556-7.778s22.097 24.572 23.334 23.334c1.238-1.237-1.334-9.112-7.778-15.556z"
                            fill="#d8d8d8"
                            data-original="#d8d8d8"
                          />
                          <path
                            d="M122.842 115.117c-6.443-6.444-13.965-9.369-15.556-7.778s1.334 9.113 7.778 15.556c6.444 6.444 14.319 9.016 15.556 7.778s-1.334-9.112-7.778-15.556z"
                            fill="#c1bdbc"
                            data-original="#c1bdbc"
                          />
                          <path
                            d="M122.842 115.117c-6.443-6.444-13.965-9.369-15.556-7.778s22.097 24.572 23.334 23.334-1.334-9.112-7.778-15.556z"
                            fill="#d8d8d8"
                            data-original="#d8d8d8"
                          />
                          <path
                            d="M320.24 74.578c-8.405-3.521-16.474-3.379-17.344-1.304-.869 2.075 4.688 7.928 13.092 11.449 8.405 3.522 16.667 2.918 17.344 1.305.677-1.615-4.687-7.928-13.092-11.45z"
                            fill="#c1bdbc"
                            data-original="#c1bdbc"
                          />
                          <path
                            d="M320.24 74.578c-8.405-3.521-16.474-3.379-17.344-1.304-.869 2.075 29.76 14.368 30.436 12.754.677-1.615-4.687-7.928-13.092-11.45z"
                            fill="#d8d8d8"
                            data-original="#d8d8d8"
                          />
                          <path
                            d="M180.015 409.219c-8.405-3.522-16.474-3.379-17.343-1.304-.87 2.075 4.688 7.927 13.092 11.45 8.405 3.521 16.667 2.918 17.343 1.304.677-1.614-4.687-7.928-13.092-11.45z"
                            fill="#c1bdbc"
                            data-original="#c1bdbc"
                          />
                          <path
                            d="M180.015 409.219c-8.405-3.522-16.474-3.379-17.343-1.304-.87 2.075 29.759 14.368 30.436 12.753.676-1.613-4.688-7.927-13.093-11.449z"
                            fill="#d8d8d8"
                            data-original="#d8d8d8"
                          />
                          <path
                            d="M421.7 301.866c-2.075-.869-7.927 4.688-11.449 13.092s-2.918 16.667-1.304 17.344c1.614.676 7.928-4.688 11.45-13.092 3.52-8.405 3.378-16.475 1.303-17.344z"
                            fill="#c1bdbc"
                            data-original="#c1bdbc"
                          />
                          <path
                            d="M421.7 301.866c-2.075-.869-14.367 29.76-12.753 30.436s7.928-4.688 11.45-13.092c3.52-8.405 3.378-16.475 1.303-17.344z"
                            fill="#d8d8d8"
                            data-original="#d8d8d8"
                          />
                          <path
                            d="M87.059 161.641c-2.075-.87-7.928 4.688-11.45 13.092-3.521 8.405-2.917 16.667-1.304 17.343 1.614.677 7.927-4.688 11.449-13.092 3.522-8.405 3.38-16.474 1.305-17.343z"
                            fill="#c1bdbc"
                            data-original="#c1bdbc"
                          />
                          <path
                            d="M87.059 161.641c-2.075-.87-14.368 29.759-12.754 30.436 1.614.677 7.927-4.688 11.449-13.092 3.522-8.406 3.38-16.475 1.305-17.344z"
                            fill="#d8d8d8"
                            data-original="#d8d8d8"
                          />
                          <path
                            d="M420.944 176.057c-3.453-8.433-9.26-14.038-11.342-13.186-2.082.853-2.291 8.92 1.162 17.354s9.722 13.85 11.341 13.187c1.62-.665 2.292-8.921-1.161-17.355z"
                            fill="#c1bdbc"
                            data-original="#c1bdbc"
                          />
                          <path
                            d="M420.944 176.057c-3.453-8.433-9.26-14.038-11.342-13.186-2.082.853 10.884 31.203 12.503 30.54 1.62-.664 2.292-8.92-1.161-17.354z"
                            fill="#d8d8d8"
                            data-original="#d8d8d8"
                          />
                          <path
                            d="M85.162 313.53c-3.453-8.434-9.259-14.039-11.341-13.186-2.083.853-2.291 8.92 1.162 17.354 3.453 8.433 9.722 13.849 11.342 13.186 1.619-.663 2.291-8.92-1.163-17.354z"
                            fill="#c1bdbc"
                            data-original="#c1bdbc"
                          />
                          <path
                            d="M85.162 313.53c-3.453-8.434-9.259-14.039-11.341-13.186-2.083.853 10.884 31.203 12.503 30.54 1.62-.663 2.292-8.92-1.162-17.354z"
                            fill="#d8d8d8"
                            data-original="#d8d8d8"
                          />
                          <path
                            d="M331.97 408.517c-.853-2.082-8.92-2.291-17.354 1.162s-13.849 9.723-13.186 11.342c.663 1.62 8.92 2.291 17.354-1.161 8.433-3.454 14.039-9.261 13.186-11.343z"
                            fill="#c1bdbc"
                            data-original="#c1bdbc"
                          />
                          <path
                            d="M331.97 408.517c-.853-2.082-31.203 10.884-30.54 12.503.663 1.62 8.92 2.291 17.354-1.161 8.433-3.453 14.039-9.26 13.186-11.342z"
                            fill="#d8d8d8"
                            data-original="#d8d8d8"
                          />
                          <path
                            d="M194.497 72.736c-.852-2.083-8.92-2.292-17.354 1.161-8.433 3.453-13.849 9.722-13.186 11.341.663 1.62 8.92 2.291 17.353-1.161 8.435-3.453 14.04-9.259 13.187-11.341z"
                            fill="#c1bdbc"
                            data-original="#c1bdbc"
                          />
                          <path
                            d="M194.497 72.736c-.852-2.083-31.203 10.883-30.54 12.502.663 1.62 8.92 2.291 17.353-1.161 8.435-3.453 14.04-9.259 13.187-11.341z"
                            fill="#d8d8d8"
                            data-original="#d8d8d8"
                          />
                        </g>
                      </svg>
                    </span>
                  </span>
                  <span className="text-text_secondary w-full truncate font-roboto text-sm font-medium leading-120 col-span-5">
                    Non-Stop Roulette
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div title="Other Games" className="w-full px-[1.06rem] mt-4">
          <span className=" w-full text-text_secondary1 text-xs font-medium leading-120 not-italic ml uppercase">
            Other Games
          </span>
          <div className="flex items-start justify-start gap-1.5 col-auto flex-wrap mt-3">
            <div
              title="Aviator"
              className="rounded-md bg-bg_sportGameCard border border-solid border-border_secondary7  min-h-9 flex items-center justify-center gap-x-2 active:scale-95 transition-all ease-in-out duration-300 active:opacity-80 w-max pl-1.5 pr-2.5 py-[5px]"
            >
              <div className="flex items-center justify-center h-[18px] w-[18px]">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="3d  Icon">
                    <path
                      id="Vector"
                      d="M6.94234 11.9376C7.54289 11.9649 8.13556 12.069 8.73065 12.1496C10.102 12.3349 11.4716 12.5326 12.8411 12.7296C13.7998 12.8678 14.7579 13.0129 15.716 13.1579C15.922 13.1889 15.9784 13.306 15.8936 13.5012C15.8124 13.689 15.8142 13.6921 16.0026 13.764C16.1917 13.8365 16.3832 13.9041 16.5693 13.9828C16.6995 14.0379 16.8189 14.0342 16.9492 13.9809C17.9224 13.5836 18.8478 13.0897 19.7483 12.5443C19.7829 12.5233 19.8204 12.5059 19.8519 12.4805C20.0604 12.3094 20.2634 12.2481 20.4604 12.4991C20.4779 12.5214 20.5107 12.5326 20.5373 12.5474C20.6046 12.5846 20.664 12.5666 20.7173 12.5164C20.7767 12.46 20.7476 12.4037 20.7149 12.3491C20.4095 11.836 20.1659 11.2918 19.9392 10.7396C19.838 10.4924 19.7435 10.2414 19.6514 9.99036C19.5805 9.79576 19.5114 9.73751 19.3053 9.73193C18.8496 9.71954 18.4145 9.82923 17.9861 9.97425C16.6498 10.4267 15.3785 11.0303 14.1356 11.7002C13.8501 11.8546 13.5605 12.0014 13.2732 12.152C13.2423 12.1681 13.1981 12.1836 13.1866 12.2109C13.1199 12.3702 12.9957 12.3367 12.8708 12.3249C12.3382 12.2747 11.8049 12.2283 11.2716 12.1793C11.0595 12.1595 11.0571 12.1427 11.0886 11.9314C11.1359 11.6141 11.2958 11.3873 11.5534 11.2057C12.2073 10.7446 12.8793 10.3213 13.6192 10.0139C14.0168 9.84906 14.4028 9.83605 14.7712 10.048C15.2712 10.3356 15.7705 10.3176 16.3056 10.1639C17.3158 9.87447 18.3176 9.54663 19.3544 9.36132C19.409 9.35141 19.4641 9.34397 19.5193 9.33963C20.0022 9.30183 20.244 9.44127 20.4416 9.89368C20.6894 10.4589 20.9282 11.0284 21.1682 11.5974C21.25 11.7913 21.3306 11.9853 21.37 12.196C21.4366 12.5542 21.336 12.8492 21.0712 13.0866C20.7925 13.3357 20.4804 13.5384 20.1549 13.715C18.3842 14.6756 16.5305 15.4336 14.6246 16.062C13.3805 16.4723 12.1376 16.8869 10.8904 17.286C8.50643 18.0495 6.11697 18.7938 3.74146 19.5859C3.70328 19.5989 3.6651 19.6119 3.62571 19.6224C3.38331 19.69 3.34089 19.6776 3.23848 19.4402C3.17485 19.2927 3.10273 19.2376 2.95063 19.3175C2.827 19.382 2.71489 19.3429 2.6252 19.237C2.59187 19.1979 2.56036 19.1576 2.52825 19.118C2.3725 18.9265 2.37553 18.9333 2.60642 18.8316C2.92517 18.6916 3.26514 18.6953 3.59965 18.6532C4.39836 18.5534 5.17161 18.3297 5.94426 18.1109C7.7356 17.6039 9.48875 16.9755 11.2383 16.3372C12.7448 15.7875 14.2416 15.2092 15.7312 14.6112C15.7948 14.5858 15.9142 14.5852 15.8966 14.4916C15.882 14.4122 15.7742 14.4544 15.7075 14.4507C15.5215 14.4414 15.3354 14.4476 15.1488 14.4296C14.9009 14.4054 14.6719 14.5052 14.4525 14.6106C13.3047 15.1615 12.12 15.6214 10.9347 16.0787C10.4481 16.2665 9.95901 16.4456 9.46088 16.5999C9.29847 16.6501 9.17969 16.621 9.04516 16.5119C8.48401 16.057 8.69732 16.0911 8.08647 16.3465C6.64783 16.9482 5.21282 17.5612 3.77842 18.1741C3.65056 18.2286 3.60935 18.1722 3.58874 18.0669C3.56269 17.9343 3.63722 17.8512 3.74327 17.7942C3.92204 17.6981 4.10324 17.6064 4.28201 17.5103C4.31958 17.4899 4.38503 17.4806 4.37412 17.4242C4.362 17.3591 4.29352 17.3752 4.24747 17.3734C4.06082 17.3678 3.87417 17.3808 3.68934 17.3387C3.2615 17.2414 2.89306 17.0201 2.54218 16.7629C2.43977 16.6879 2.34099 16.6068 2.23555 16.5361C2.10344 16.4487 1.95861 16.4115 1.80226 16.4586C1.62046 16.5132 1.60046 16.5844 1.72833 16.7245C2.0695 17.0976 2.41189 17.4707 2.75368 17.8438C2.88518 17.9869 3.01304 18.1332 3.14879 18.272C3.24514 18.3706 3.20757 18.4102 3.10031 18.4511C2.9482 18.5088 2.8367 18.4486 2.73186 18.3458C2.23615 17.8599 1.74045 17.374 1.24292 16.89C0.893865 16.5504 1.00173 16.5758 0.581775 16.7747C0.430881 16.8466 0.279382 16.9179 0.1297 16.9929C0.0363758 17.04 -0.00240816 17.0121 0.000621837 16.9092C0.00304583 16.8367 0.00546983 16.7648 0.00546983 16.6923C0.00486383 16.5361 0.0739478 16.4314 0.21151 16.362C0.537537 16.1983 0.862959 16.0316 1.17626 15.8426C1.20232 15.8271 1.22959 15.8129 1.25443 15.7949C1.31988 15.749 1.41745 15.705 1.36594 15.6065C1.30594 15.4918 1.22413 15.5885 1.1605 15.6195C0.955677 15.7205 0.756303 15.8308 0.552081 15.9331C0.502995 15.9579 0.447849 16.0261 0.390279 15.9659C0.341799 15.9145 0.359373 15.8389 0.370887 15.7732C0.381795 15.7125 0.424215 15.6753 0.473301 15.6455C0.745395 15.4776 1.01991 15.3146 1.31322 15.1844C1.67682 15.0239 2.01193 15.0673 2.32645 15.3059C2.75246 15.6288 3.17788 15.9523 3.60389 16.2752C3.84023 16.4543 4.09354 16.6024 4.35836 16.7319C4.62743 16.864 4.89104 16.8609 5.16131 16.7381C5.91336 16.396 6.65268 16.0267 7.38472 15.6418C7.87437 15.3846 8.36099 15.1219 8.84882 14.8622C8.91608 14.8262 8.98153 14.7878 9.03183 14.7277C9.07061 14.6812 9.09546 14.6267 9.06152 14.5721C9.01729 14.5009 8.96275 14.5529 8.91608 14.5759C8.29069 14.8783 7.66651 15.1826 7.04052 15.4838C6.97628 15.5148 6.89568 15.6053 6.83629 15.4838C6.78721 15.3828 6.8169 15.2904 6.91629 15.2328C7.05203 15.1535 7.18899 15.076 7.32776 15.001C7.43805 14.9415 7.44411 14.8783 7.35988 14.7847C7.15747 14.5616 7.15929 14.5585 6.8872 14.6955C6.30302 14.9905 5.72004 15.2861 5.13586 15.5811C5.10071 15.5991 5.06496 15.6406 5.02557 15.6152C4.97769 15.5842 5.00557 15.5309 5.01405 15.4881C5.04375 15.3363 5.07647 15.1857 5.10859 15.0345C5.14798 14.8504 5.25403 14.7265 5.41826 14.6397C5.93881 14.3651 6.45512 14.0832 6.97386 13.8049C7.09506 13.7398 7.2005 13.6636 7.19868 13.5043C7.19686 13.3686 7.13808 13.3271 7.01749 13.381C6.84599 13.4572 6.67449 13.5328 6.50845 13.6202C6.39452 13.6803 6.31453 13.6605 6.22848 13.5663C5.98002 13.2948 5.72732 13.0277 5.47098 12.7643C5.37341 12.6639 5.37705 12.589 5.47764 12.4941C5.89336 12.1062 6.37695 11.9116 6.94234 11.937V11.9376ZM14.8918 13.9053C15.1191 13.8879 15.2924 13.8006 15.4306 13.645C15.4863 13.5818 15.5797 13.5217 15.5536 13.4281C15.5251 13.3258 15.4106 13.3475 15.3312 13.3364C14.2131 13.1765 13.0944 13.0215 11.9758 12.8629C10.4468 12.6466 8.91851 12.4278 7.38957 12.2134C7.31746 12.2035 7.19808 12.1427 7.1799 12.2475C7.16111 12.3559 7.29504 12.3349 7.36473 12.3497C9.58753 12.8139 11.8109 13.2763 14.035 13.7373C14.3264 13.7981 14.6191 13.8526 14.8918 13.9059V13.9053ZM12.4236 11.5112C12.54 11.5472 12.6551 11.492 12.7666 11.4121C12.8405 11.3594 12.923 11.3179 13.0023 11.2739C13.3302 11.091 13.6689 10.933 14.0113 10.783C14.0465 10.7675 14.095 10.7619 14.0974 10.7093C14.0992 10.6715 14.0653 10.6591 14.0368 10.651C13.8241 10.5872 13.6108 10.5048 13.3859 10.545C12.7927 10.6516 12.3 10.9671 11.8394 11.3451C11.8219 11.3594 11.8037 11.3879 11.8049 11.4083C11.8079 11.4449 11.8437 11.4511 11.8746 11.4517C12.0509 11.4579 12.22 11.5273 12.4224 11.5112H12.4236ZM14.1465 10.1118C14.0422 10.1081 13.9519 10.1416 13.8641 10.18C13.8332 10.1936 13.7895 10.2042 13.792 10.2488C13.7944 10.2909 13.8356 10.2996 13.8683 10.3133C14.0744 10.3969 14.2798 10.4824 14.4864 10.5649C14.5495 10.5897 14.6161 10.612 14.6179 10.6938C14.6191 10.7657 14.5634 10.796 14.507 10.8258C14.3901 10.8865 14.2749 10.9503 14.161 11.0167C14.0925 11.0563 14.0289 11.1047 14.078 11.2007C14.1307 11.3036 14.2046 11.2763 14.2828 11.2348C14.5913 11.07 14.9009 10.907 15.2094 10.7427C15.2585 10.7167 15.3221 10.6963 15.3239 10.6312C15.3257 10.5562 15.256 10.5357 15.2009 10.5128C14.9215 10.3938 14.6422 10.2761 14.3616 10.1602C14.2913 10.131 14.2186 10.1081 14.1465 10.1125V10.1118Z"
                      fill="#FF3120"
                    />
                    <path
                      id="Vector_2"
                      d="M24 15.8321C23.9958 15.8848 23.997 15.9064 23.9915 15.9257C23.9576 16.0539 23.9467 16.2145 23.8012 16.2535C23.6503 16.2944 23.6067 16.1351 23.5425 16.0378C23.1892 15.5036 22.8474 14.9613 22.4868 14.4321C22.2614 14.1011 22.1057 13.7435 21.9966 13.3587C21.8336 12.7842 21.6596 12.2134 21.4851 11.6426C21.4542 11.5422 21.4609 11.4846 21.5639 11.435C21.7093 11.365 21.7942 11.2224 21.8942 11.1003C22.0002 10.9708 22.0135 10.972 22.0905 11.1133C22.428 11.73 22.7626 12.3485 23.1031 12.9639C23.2837 13.2905 23.3934 13.6438 23.4964 14.0001C23.6479 14.5244 23.7958 15.0506 23.9437 15.5761C23.9697 15.6697 23.9861 15.7664 24.0006 15.8315L24 15.8321ZM23.8273 15.8085C23.8346 15.6685 23.7643 15.5712 23.6994 15.4732C23.3346 14.9223 22.9286 14.4023 22.5377 13.8706C22.5026 13.8229 22.4711 13.7206 22.3965 13.7658C22.3117 13.8179 22.3541 13.9121 22.3905 13.9877C22.4056 14.0199 22.4274 14.0491 22.4468 14.0794C22.6226 14.3496 22.7989 14.6199 22.9753 14.8901C23.1989 15.2334 23.4219 15.5767 23.6449 15.9201C23.6697 15.9585 23.6867 16.0093 23.7437 15.9976C23.7897 15.9883 23.8012 15.9436 23.8103 15.9034C23.8182 15.868 23.8225 15.8321 23.8261 15.8079L23.8273 15.8085Z"
                      fill="#FF3120"
                    />
                    <path
                      id="Vector_3"
                      d="M19.0823 4.8C19.135 4.81116 19.1684 4.84896 19.1969 4.89296C19.6174 5.53626 20.044 6.17646 20.4567 6.82533C20.6446 7.12033 20.7718 7.44941 20.8712 7.78655C21.053 8.40444 21.2391 9.02046 21.4409 9.63215C21.4948 9.79515 21.4815 9.80444 21.3154 9.81436C21.1403 9.82427 20.9609 9.79515 20.7918 9.86518C20.7434 9.88501 20.7149 9.86518 20.6937 9.82303C20.2907 9.03844 19.7586 8.32263 19.4762 7.47482C19.255 6.81046 19.0787 6.13183 18.8902 5.45755C18.8302 5.2425 18.8617 5.05038 18.9866 4.87065C19.0102 4.83657 19.035 4.80434 19.0817 4.80124L19.0823 4.8ZM19.0332 5.32059C19.0423 5.44392 19.0829 5.54184 19.1447 5.63294C19.5308 6.20125 19.9428 6.74972 20.3525 7.30005C20.3792 7.336 20.404 7.38992 20.4585 7.36327C20.5113 7.33724 20.5155 7.28146 20.4997 7.22816C20.4882 7.18912 20.4731 7.14946 20.4513 7.11537C20.0356 6.47455 19.6192 5.83436 19.2017 5.19416C19.1805 5.16131 19.1623 5.11359 19.112 5.12661C19.0666 5.13838 19.0605 5.18548 19.0514 5.22515C19.0429 5.25985 19.0381 5.2958 19.0338 5.31997L19.0332 5.32059Z"
                      fill="#FF3120"
                    />
                    <path
                      id="Vector_4"
                      d="M14.0477 12.4328C14.4979 12.2462 14.9173 12.0721 15.3372 11.8986C15.8608 11.6829 16.3856 11.4722 16.9068 11.2509C17.0213 11.2026 17.0922 11.223 17.1661 11.3179C17.2952 11.4827 17.4304 11.6432 17.5691 11.7994C17.6382 11.8769 17.6412 11.945 17.5934 12.0349C17.4334 12.333 17.2783 12.6342 17.1249 12.9354C17.0825 13.0184 17.0268 13.0637 16.9322 13.0445C15.9941 12.8523 15.0554 12.6608 14.1174 12.4681C14.1046 12.4656 14.0931 12.4557 14.0477 12.4322V12.4328Z"
                      fill="#FF3120"
                    />
                    <path
                      id="Vector_5"
                      d="M17.4473 13.0017C17.5249 12.8685 17.6012 12.7495 17.6661 12.6243C17.7915 12.3826 17.8909 12.1285 17.9909 11.875C18.0273 11.7827 18.0206 11.7114 17.9576 11.6339C17.8224 11.4672 17.6909 11.2968 17.5637 11.1239C17.531 11.0793 17.4388 11.0384 17.5237 10.9609C17.6243 10.8679 17.7709 10.8456 17.8321 10.9175C17.9012 10.9993 17.963 11.0879 18.0315 11.1704C18.0691 11.215 18.0927 11.3005 18.16 11.2838C18.2212 11.2689 18.2218 11.1834 18.2388 11.1264C18.306 10.8995 18.3672 10.6702 18.4339 10.4428C18.4539 10.3752 18.4581 10.3002 18.5254 10.2178C18.5466 10.4917 18.5181 10.7396 18.4981 10.9863C18.486 11.135 18.4715 11.2856 18.4381 11.43C18.3994 11.5992 18.443 11.73 18.5539 11.8539C18.6527 11.9643 18.7411 12.0839 18.829 12.2035C18.866 12.2543 18.9629 12.3119 18.8757 12.3795C18.7969 12.4408 18.6987 12.5177 18.5878 12.4322C18.523 12.382 18.4775 12.3132 18.4351 12.2419C18.409 12.1973 18.3781 12.1489 18.3188 12.1607C18.2679 12.1712 18.2515 12.2208 18.243 12.2673C18.1636 12.711 17.854 12.8976 17.4473 13.0011V13.0017Z"
                      fill="#FF3120"
                    />
                    <path
                      id="Vector_6"
                      d="M22.2759 10.1775C22.2656 10.2085 22.2529 10.2581 22.2317 10.3046C22.0729 10.6603 21.8554 10.9739 21.5808 11.246C21.4554 11.3699 21.3797 11.3588 21.3051 11.1945C21.156 10.8679 21.0112 10.5388 20.873 10.2066C20.7985 10.0275 20.8385 9.95999 21.0215 9.95813C21.3839 9.95379 21.7475 9.93272 22.1075 9.9978C22.1959 10.0139 22.2765 10.0418 22.2765 10.1775H22.2759ZM21.4942 10.0846C21.3784 10.0846 21.2627 10.0808 21.147 10.0858C21.0718 10.0889 20.9845 10.0895 21.01 10.2122C21.0506 10.4099 21.173 10.5884 21.2542 10.568C21.2591 10.5667 21.2633 10.5642 21.2682 10.5624C21.5166 10.4502 21.7651 10.3387 22.0135 10.2259C22.0408 10.2135 22.0741 10.2011 22.0705 10.1633C22.0656 10.1174 22.0263 10.1143 21.9911 10.1087C21.8263 10.0821 21.6602 10.0815 21.4942 10.0852V10.0846Z"
                      fill="#FF3120"
                    />
                  </g>
                </svg>
              </div>
              <span className="text-text_secondary w-full truncate font-roboto text-sm font-medium leading-120 ">
                Aviator
              </span>
            </div>
            <div
              title="Teenpatti"
              className="rounded-md bg-bg_sportGameCard border border-solid border-border_secondary7  min-h-9 flex items-center justify-center gap-x-2 active:scale-95 transition-all ease-in-out duration-300 active:opacity-80 w-max pl-1.5 pr-2.5 py-[5px]"
            >
              <div className="flex items-center justify-center h-[18px] w-[18px]">
                <span>⚽</span>
              </div>
              <span className="text-text_secondary w-full truncate font-roboto text-sm font-medium leading-120 ">
                Teenpatti
              </span>
            </div>
            <div
              title="Dream Wheel"
              className="rounded-md bg-bg_sportGameCard border border-solid border-border_secondary7  min-h-9 flex items-center justify-center gap-x-2 active:scale-95 transition-all ease-in-out duration-300 active:opacity-80 w-max pl-1.5 pr-2.5 py-[5px]"
            >
              <div className="flex items-center justify-center h-[18px] w-[18px]">
                <span>🏆</span>
              </div>
              <span className="text-text_secondary w-full truncate font-roboto text-sm font-medium leading-120 ">
                Dream Wheel
              </span>
            </div>
            <div
              title="Horse Racing"
              className="rounded-md bg-bg_sportGameCard border border-solid border-border_secondary7  min-h-9 flex items-center justify-center gap-x-2 active:scale-95 transition-all ease-in-out duration-300 active:opacity-80 w-max pl-1.5 pr-2.5 py-[5px]"
            >
              <div className="flex items-center justify-center h-[18px] w-[18px]">
                <span>🏇</span>
              </div>
              <span className="text-text_secondary w-full truncate font-roboto text-sm font-medium leading-120 ">
                Horse Racing
              </span>
            </div>
            <div
              title="Greyhound Racing"
              className="rounded-md bg-bg_sportGameCard border border-solid border-border_secondary7  min-h-9 flex items-center justify-center gap-x-2 active:scale-95 transition-all ease-in-out duration-300 active:opacity-80 w-max pl-1.5 pr-2.5 py-[5px]"
            >
              <div className="flex items-center justify-center h-[18px] w-[18px]">
                <svg
                  width={24}
                  height={12}
                  viewBox="0 0 24 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
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
                          fill="#fff"
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
              </div>
              <span className="text-text_secondary w-full truncate font-roboto text-sm font-medium leading-120 ">
                Greyhound Racing
              </span>
            </div>
          </div>
        </div>
        {Settings.apk_link && (
          <div
            onClick={handleDownloadAPK}
            className="mt-4 px-[1.06rem] w-full active:scale-95 transition-all ease-in-out duration-200"
          >
            <div className="flex items-center justify-center pt-[0.69rem] pr-[0.94rem] pb-[0.56rem] pl-[0.62rem] relative w-full bg-apkBgGradient rounded-lg">
              <div className="flex items-center justify-between flex-1 gap-2">
                <svg
                  width={32}
                  height={32}
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="android 1" clipPath="url(#clip0_472_42660)">
                    <g id="Group">
                      <path
                        id="Vector"
                        d="M7.34543 9.89119V23.7425C7.34543 24.8244 7.99503 25.673 9.10842 25.673H10.5619C10.512 25.673 10.4 26.0401 10.4 26.2203V30.1433C10.4 31.1687 11.383 32 12.4363 32C13.4902 32 14.4727 31.1687 14.4727 30.1433V26.2203C14.4727 26.0401 14.2762 25.673 14.2278 25.673H17.7731C17.7248 25.673 17.5273 26.0401 17.5273 26.2203V30.1433C17.5273 31.1687 18.5083 32 19.5616 32C20.6174 32 21.6 31.1687 21.6 30.1433V26.2203C21.6 26.0401 21.4885 25.673 21.4386 25.673H22.8941C24.0075 25.673 24.6545 24.8244 24.6545 23.7425V9.89119H7.22885H7.34543Z"
                        fill="#57C927"
                      />
                      <path
                        id="Vector_2"
                        d="M3.78179 10.1167C2.72746 10.1167 1.74542 10.9486 1.74542 11.9734V19.9228C1.74542 20.9481 2.72746 21.7795 3.78179 21.7795C4.8356 21.7795 5.81815 20.9481 5.81815 19.9228V11.9739C5.81815 10.9486 4.8356 10.1167 3.78179 10.1167Z"
                        fill="#57C927"
                      />
                      <path
                        id="Vector_3"
                        d="M20.3827 2.67635L20.7381 2.15504L21.0939 1.63984L21.8866 0.481659C21.9859 0.338096 21.9446 0.146677 21.7985 0.0524956C21.6539 -0.0437227 21.4539 -0.00350448 21.3592 0.139041L20.1491 1.90202L19.7851 2.43301C18.635 1.99824 17.3536 1.75591 16 1.75591C14.6494 1.75591 13.3654 1.99875 12.2154 2.43301L11.8534 1.90253L11.4955 1.38173L10.6454 0.140059C10.5471 -0.00299538 10.3496 -0.0406681 10.203 0.0535137C10.0579 0.148205 10.0176 0.339623 10.1144 0.482678L10.9065 1.64137L11.2624 2.15708L11.6198 2.67686C8.91953 3.90122 7.09241 6.32755 7.09241 8.87301H24.908C24.908 6.32755 23.0814 3.90122 20.3827 2.67635ZM12.1823 6.40137C11.6534 6.40137 11.2272 5.98544 11.2272 5.47177C11.2272 4.9581 11.6534 4.54421 12.1823 4.54421C12.7097 4.54421 13.1368 4.9581 13.1368 5.47177C13.1368 5.98544 12.7102 6.40137 12.1823 6.40137ZM19.8187 6.40137C19.2902 6.40137 18.8631 5.98544 18.8631 5.47177C18.8631 4.9581 19.2902 4.54421 19.8187 4.54421C20.3461 4.54421 20.7732 4.9581 20.7732 5.47177C20.7732 5.98544 20.3461 6.40137 19.8187 6.40137Z"
                        fill="#57C927"
                      />
                    </g>
                    <path
                      id="Vector_4"
                      d="M3.8724 14.2668C3.07873 14.2668 2.25451 13.518 1.74542 12.3302V19.9233C1.74542 20.9486 2.72746 21.78 3.78179 21.78C4.8356 21.78 5.81815 20.9486 5.81815 19.9233V12.7263C5.30906 13.6804 4.57291 14.2668 3.8724 14.2668Z"
                      fill="#17AD17"
                    />
                    <path
                      id="Vector_5"
                      d="M28.2182 10.1167C27.1638 10.1167 26.1818 10.9486 26.1818 11.9734V19.9228C26.1818 20.9481 27.1638 21.7795 28.2182 21.7795C29.272 21.7795 30.2545 20.9481 30.2545 19.9228V11.9739C30.2545 10.9486 29.272 10.1167 28.2182 10.1167Z"
                      fill="#57C927"
                    />
                    <g id="Group_2">
                      <path
                        id="Vector_6"
                        d="M28.3088 14.2668C27.5151 14.2668 26.6909 13.518 26.1818 12.3303V19.9234C26.1818 20.9487 27.1638 21.78 28.2182 21.78C29.272 21.78 30.2545 20.9487 30.2545 19.9234V12.7263C29.7454 13.6804 29.0093 14.2668 28.3088 14.2668Z"
                        fill="#17AD17"
                      />
                      <path
                        id="Vector_7"
                        d="M16 11.4124C11.9731 11.4124 8.36361 10.9465 7.34543 10.2852V23.7426C7.34543 24.8244 7.99503 25.673 9.10841 25.673H10.5619C10.512 25.673 10.4 26.0401 10.4 26.2203V30.1434C10.4 31.1687 11.383 32 12.4363 32C13.4902 32 14.4727 31.1687 14.4727 30.1434V26.2203C14.4727 26.0401 14.2762 25.673 14.2278 25.673H17.7731C17.7248 25.673 17.5272 26.0401 17.5272 26.2203V30.1434C17.5272 31.1687 18.5083 32 19.5616 32C20.6174 32 21.6 31.1687 21.6 30.1434V26.2203C21.6 26.0401 21.4885 25.673 21.4386 25.673H22.8941C24.0075 25.673 24.6545 24.8244 24.6545 23.7426V10.2847C23.6363 10.946 20.0274 11.4124 16 11.4124Z"
                        fill="#19AE19"
                      />
                      <path
                        id="Vector_8"
                        d="M20.7732 5.47127C20.7732 5.98494 20.3461 6.40087 19.8187 6.40087C19.2902 6.40087 18.8631 5.98494 18.8631 5.47127C18.8631 5.1928 18.9909 4.94691 19.1899 4.77687C18.1835 4.60887 17.1128 4.51672 16 4.51672C14.8871 4.51672 13.817 4.60887 12.81 4.77687C13.0096 4.9464 13.1374 5.1928 13.1374 5.47127C13.1374 5.98494 12.7102 6.40087 12.1828 6.40087C11.6539 6.40087 11.2278 5.98494 11.2278 5.47127C11.2278 5.33992 11.2568 5.2152 11.3072 5.10167C9.78092 5.50283 8.4695 6.08829 7.47983 6.80763C7.23037 7.46283 7.09241 8.36392 7.09241 8.87302H24.908C24.908 8.36392 24.7701 7.46334 24.5211 6.80865C23.532 6.08829 22.22 5.50182 20.6948 5.10065C20.7447 5.21418 20.7732 5.34043 20.7732 5.47127Z"
                        fill="#17AF17"
                      />
                    </g>
                    <path
                      id="Vector_9"
                      d="M16 16.7247C12.5702 16.7247 9.38179 16.0481 7.34543 14.9393V23.7425C7.34543 24.8244 7.99503 25.673 9.10841 25.673H10.5619C10.512 25.673 10.4 26.0401 10.4 26.2203V30.1434C10.4 31.1687 11.383 32 12.4363 32C13.4902 32 14.4727 31.1687 14.4727 30.1434V26.2203C14.4727 26.0401 14.2762 25.673 14.2278 25.673H17.7731C17.7248 25.673 17.5272 26.0401 17.5272 26.2203V30.1434C17.5272 31.1687 18.5083 32 19.5616 32C20.6174 32 21.6 31.1687 21.6 30.1434V26.2203C21.6 26.0401 21.4885 25.673 21.4386 25.673H22.8941C24.0075 25.673 24.6545 24.8244 24.6545 23.7425V14.9393C22.6182 16.0487 19.4297 16.7247 16 16.7247Z"
                      fill="#0A883D"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_472_42660">
                      <rect width={32} height={32} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div className="flex items-start justify-start flex-col gap-0.125">
                  <span className="font-roboto leading-120 font-bold text-text_secondary text-sm">
                    Android Application
                  </span>
                  <span className="font-roboto leading-120 text-x1 font-normal text-text_tertiary">
                    Instant download on your device
                  </span>
                </div>
                <button
                  className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out flex items-center justify-center py-0 px-3 gap-0.75 bg-bg_secondary rounded-md text-text_primary1 font-roboto text-xs font-semibold leading-120 h-[1.625rem] 
      cursor-pointer
      
      "
                  type="button"
                >
                  Install Now
                </button>
              </div>
            </div>
          </div>
        )}

        <div title="ALL SPORTS" className="w-full px-[1.06rem] mt-4">
          <span className=" w-full text-text_secondary1 text-xs font-medium leading-120 not-italic ml uppercase">
            All Sports
          </span>
          <div className="mt-4 w-full pb-20">
            <div className="grid grid-cols-5 grid-rows-2 gap-[5px] sm:gap-2 sm:grid-cols-8 md:flex md:overflow-x-auto no-scrollbar scroll-smooth w-full font-roboto">
              <div
                onClick={() => handleNavigate("/sports?eventTypeId=4")}
                className="flex items-center justify-between px-2 flex-col bg-bg_sportGameCard rounded border border-solid border-border_secondary w-full sm:w-[68px] gap-y-0.5 pt-2.5 pb-1 active:scale-95 transition-all duration-300 active:opacity-90 aspect-2"
              >
                <p className=" w-7 h-auto flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width={18}
                    height={18}
                    x={0}
                    y={0}
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        fill="#fbbd94"
                        d="m117.482 308.548 29.787 54.759 47.827 22.855 297.442-290.75c11.442-11.452 18.277-28.118 11.117-42.305a32 32 0 0 0-.317-.322L459.215 8.662c-11.559-11.548-30.287-11.548-41.846 0L272.751 153.28l-52.013 75.434-67.463 44.041z"
                        opacity={1}
                        data-original="#fbbd94"
                      />
                      <path
                        fill="#fcd2ac"
                        d="M10.849 503.364c5.357 5.357 10.081 4.981 17.107 4.981a27.356 27.356 0 0 0 19.398-8.035l25.007-21.863L58.5 451.099l-24.947-11.46-25.517 25.518c-10.311 10.311-10.699 26.795-1.164 37.57.373.422 3.574.234 3.977.637z"
                        opacity={1}
                        data-original="#fcd2ac"
                      />
                      <path
                        fill="#6379dd"
                        d="M104.317 368.876a49.806 49.806 0 0 0 14.495-38.168l-1.329-22.159 77.19 77.19c-16.669-.252-34.266-.765-47.871 8.305-32.566 20.724-54.735 50.899-80.087 78.757L33.554 439.64z"
                        opacity={1}
                        data-original="#6379dd"
                      />
                      <path
                        fill="#faad7d"
                        d="m272.752 153.281-119.481 119.47 2.987 2.987.021.01 56.531 56.541a8.24 8.24 0 0 1 0 11.654l-29.963 29.972v12.249l20.604 8.355L503.338 94.633c11.445-11.456 11.548-29.937.309-41.516L345.895 210.859c-4.296 4.295-11.26 4.295-15.555 0z"
                        opacity={1}
                        data-original="#faad7d"
                      />
                      <path
                        fill="#fbbd94"
                        d="M6.871 502.728a26 26 0 0 0 1.164 1.236C13.392 509.321 20.418 512 27.444 512a27.356 27.356 0 0 0 19.398-8.035l25.518-25.518-3.046-16.241-17.558-4.362z"
                        opacity={1}
                        data-original="#fbbd94"
                      />
                      <path
                        fill="#4d5ec6"
                        d="m51.757 457.843 20.604 20.604 70.763-70.763a49.806 49.806 0 0 1 38.168-14.495l22.159 1.329-20.604-20.604-22.159-1.329a49.802 49.802 0 0 0-38.168 14.495z"
                        opacity={1}
                        data-original="#4d5ec6"
                      />
                      <path
                        fill="#fcd2ac"
                        d="m308.549 394.518 54.759-29.787 22.855-47.827L95.412 19.462C83.96 8.02 67.294 1.186 53.107 8.345a32 32 0 0 0-.322.317L8.662 52.785c-11.548 11.559-11.548 30.287 0 41.846l217.231 217.231 23.392 12.728 6.74 17.403zM503.364 501.151c5.357-5.357 4.981-10.081 4.981-17.107a27.356 27.356 0 0 0-8.035-19.398l-21.863-25.007L451.1 453.5l-11.46 24.947 25.518 25.518c10.311 10.311 26.795 10.699 37.57 1.164.421-.373.233-3.575.636-3.978z"
                        opacity={1}
                        data-original="#fcd2ac"
                      />
                      <path
                        fill="#ff738e"
                        d="M368.876 407.684a49.806 49.806 0 0 0-38.168-14.495l-22.159 1.329 77.19-77.19c-.252 16.669-.765 34.266 8.305 47.871 20.724 32.566 50.899 54.735 78.757 80.087l-33.161 33.161z"
                        opacity={1}
                        data-original="#ff738e"
                      />
                      <path
                        fill="#fbbd94"
                        d="M373.914 329.153h12.249l8.355-20.604-52.524-52.524-20.572-8.371-9.561-21.762L94.631 8.662C83.175-2.783 64.694-2.886 53.114 8.353zM502.728 505.129a26 26 0 0 0 1.236-1.164c5.357-5.357 8.035-12.383 8.035-19.409a27.356 27.356 0 0 0-8.035-19.398l-25.518-25.518-16.241 3.046-4.362 17.558z"
                        opacity={1}
                        data-original="#fbbd94"
                      />
                      <path
                        fill="#fc607b"
                        d="m457.843 460.244 20.604-20.604-70.763-70.763a49.806 49.806 0 0 1-14.495-38.168l1.329-22.159-20.604 20.604-1.329 22.159a49.802 49.802 0 0 0 14.495 38.168z"
                        opacity={1}
                        data-original="#fc607b"
                      />
                      <path
                        fill="#fbbd94"
                        d="m337.181 260.893-81.09 81.089-30.126-30.127 81.09-81.09z"
                        opacity={1}
                        data-original="#fbbd94"
                      />
                      <path
                        fill="#faad7d"
                        d="m291.214 246.606 20.595-20.596 30.128 30.128-20.595 20.596z"
                        opacity={1}
                        data-original="#faad7d"
                      />
                      <path
                        fill="#c55b5b"
                        d="M347.333 119.906c0 43.791-31.307 75.098-75.098 75.098-25.887 0-47.051-8.12-61.522-27.31-1.529-2.027-4.786-4.219-6.118-6.391-7.389-12.049-11.647-26.225-11.647-41.394 0-29.316 15.909-54.916 39.564-68.638 2.424-1.406 4.783.566 7.361-.582s5.376-5.411 8.09-6.283a78.955 78.955 0 0 1 16.545-3.411c2.543-.246 5.119 4.168 7.727 4.168 2.606 0 5.185-4.414 7.727-4.168a78.894 78.894 0 0 1 16.545 3.413c2.94.944 5.67 6.595 8.449 7.862 2.351 1.071 4.779-2.292 7-1.004.563.326 1.12.662 1.673 1.002 0 0 6.251 6.59 9.506 9.403 16.826 14.539 24.198 34.253 24.198 58.235z"
                        opacity={1}
                        data-original="#c55b5b"
                      />
                      <path
                        fill="#b24a47"
                        d="M351.528 119.912c0 29.318-15.912 54.925-39.572 68.646l-7.723-.842-7.726 7.698c-5.356 1.736-10.765 2.86-16.552 3.419l-8.594-3.433-6.839 3.428a79.632 79.632 0 0 1-16.625-3.428l-7.659-9.352-7.726 2.505a79.68 79.68 0 0 1-27.916-27.249c12.053 7.386 26.227 11.652 41.401 11.652 43.793 0 79.283-35.5 79.283-79.293 0-15.175-4.253-29.342-11.65-41.395 22.736 13.937 37.898 39.015 37.898 67.644z"
                        opacity={1}
                        data-original="#b24a47"
                      />
                      <path
                        fill="#b24a47"
                        d="m279.954 184.579.007-143.585a76.566 76.566 0 0 0-7.727-.377 76.58 76.58 0 0 0-7.727.377l.012 145.643c5.23 1.227 10.702.215 15.435-2.058z"
                        opacity={1}
                        data-original="#b24a47"
                      />
                      <g fill="#e8effe">
                        <path
                          d="M247.964 104.819v30.174a7.716 7.716 0 0 1-7.726 7.726 7.722 7.722 0 0 1-7.726-7.726v-30.174a7.73 7.73 0 0 1 7.726-7.726 7.722 7.722 0 0 1 7.726 7.726zM311.956 51.265l.003 23.38a7.73 7.73 0 0 1-7.726 7.726 7.729 7.729 0 0 1-7.726-7.726l.001-30.238c5.428 1.731 10.595 4.056 15.448 6.858zM240.237 157.452a7.722 7.722 0 0 0-7.726 7.726v16.491c4.858 1.904 10.259 4.112 15.453 4.379v-20.87a7.715 7.715 0 0 0-7.727-7.726zM311.959 104.819v30.174a7.723 7.723 0 0 1-7.726 7.726 7.722 7.722 0 0 1-7.726-7.726v-30.174a7.729 7.729 0 0 1 7.726-7.726 7.73 7.73 0 0 1 7.726 7.726zM232.512 51.271a77.936 77.936 0 0 1 15.451-6.865l.001 30.239a7.722 7.722 0 0 1-7.726 7.726 7.729 7.729 0 0 1-7.726-7.726z"
                          fill="#e8effe"
                          opacity={1}
                          data-original="#e8effe"
                        />
                      </g>
                      <path
                        fill="#d4dbfb"
                        d="m311.959 165.178-.003 23.38a78.74 78.74 0 0 1-15.45 6.856v-30.236c0-4.275 3.461-7.726 7.726-7.726s7.727 3.45 7.727 7.726zM245.996 172.956c.659 0 1.308-.01 1.968-.031l-.068 22.475c-.031-.01.031 0 0 0-.02-.01.031 0 0 0a80.28 80.28 0 0 1-15.385-6.847v-16.74a79.683 79.683 0 0 0 13.485 1.143z"
                        opacity={1}
                        data-original="#d4dbfb"
                      />
                      <path
                        fill="#9e3c33"
                        d="M264.509 170.782a77.699 77.699 0 0 0 15.453-5.46l-.008 33.502c-.01 0 .01 0 0 .01a79.77 79.77 0 0 1-15.433-.006c-.021-.01.021 0 0 0z"
                        opacity={1}
                        data-original="#9e3c33"
                      />
                    </g>
                  </svg>
                </p>
                <span className="text-text_secondary  text-x1 font-normal not-italic leading-120 text-center flex items-end justify-end w-auto">
                  Cricket
                </span>
              </div>
              <div
                onClick={() => handleNavigate("/sports?eventTypeId=2")}
                className="flex items-center justify-between px-2 flex-col bg-bg_sportGameCard rounded border border-solid border-border_secondary w-full sm:w-[68px] gap-y-0.5 pt-2.5 pb-1 active:scale-95 transition-all duration-300 active:opacity-90 aspect-2"
              >
                <p className=" w-7 h-auto flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={23}
                    height={17}
                    viewBox="0 0 23 17"
                    fill="none"
                    className="w-full h-full"
                  >
                    <g clipPath="url(#clip0_418_19994)">
                      <path
                        d="M20.5636 7.14558L13.9164 2.41769C14.0404 2.33632 14.1672 2.26124 14.2963 2.19215L20.652 6.71273C20.6291 6.85739 20.5998 7.00177 20.5636 7.14558Z"
                        fill="url(#paint0_linear_418_19994)"
                      />
                      <path
                        d="M19.8869 8.68848L12.681 3.56319C12.7643 3.45525 12.8512 3.35178 12.941 3.25241L20.0952 8.34087C20.0308 8.45836 19.9615 8.57432 19.8869 8.68848Z"
                        fill="url(#paint1_linear_418_19994)"
                      />
                      <path
                        d="M19.0834 9.64583C18.9813 9.74147 18.8761 9.83185 18.7678 9.91712L11.8875 5.02346C11.9326 4.89323 11.9834 4.76415 12.0402 4.63635L19.0834 9.64583Z"
                        fill="url(#paint2_linear_418_19994)"
                      />
                      <path
                        d="M17.5911 10.6087C17.4383 10.6722 17.2832 10.7271 17.1263 10.7739L11.6168 6.85518C11.6095 6.69167 11.6105 6.52716 11.6203 6.36193L17.5911 10.6087Z"
                        fill="url(#paint3_linear_418_19994)"
                      />
                      <path
                        d="M16.1803 1.63939L11.7679 7.84306C11.7205 7.66527 11.6838 7.48414 11.658 7.30057L15.6316 1.71384C15.8135 1.67794 15.9968 1.65299 16.1803 1.63939Z"
                        fill="url(#paint4_linear_418_19994)"
                      />
                      <path
                        d="M18.0186 1.90091L12.6181 9.49378C12.5269 9.38497 12.442 9.27202 12.363 9.15539L17.6152 1.77101C17.7513 1.80733 17.8859 1.85048 18.0186 1.90091Z"
                        fill="url(#paint5_linear_418_19994)"
                      />
                      <path
                        d="M19.4128 2.78675L13.9124 10.5201C13.7925 10.4596 13.6747 10.3924 13.5596 10.3191L19.1071 2.51947C19.2141 2.60417 19.3163 2.69335 19.4128 2.78675Z"
                        fill="url(#paint6_linear_418_19994)"
                      />
                      <path
                        d="M20.3921 4.25635L15.6218 10.9633C15.4663 10.9565 15.3118 10.9414 15.1583 10.9179L20.1973 3.83327C20.2699 3.97047 20.3348 4.11151 20.3921 4.25635Z"
                        fill="url(#paint7_linear_418_19994)"
                      />
                      <path
                        d="M20.7034 6.23301L14.7326 1.98623C14.8855 1.92278 15.0406 1.86785 15.1974 1.82109L20.7069 5.73976C20.7142 5.90328 20.7132 6.06779 20.7034 6.23301Z"
                        fill="url(#paint8_linear_418_19994)"
                      />
                      <path
                        d="M20.2835 7.95859L13.2404 2.94912C13.3424 2.85349 13.4477 2.7631 13.5559 2.67784L20.4362 7.5715C20.3912 7.70173 20.3403 7.83081 20.2835 7.95859Z"
                        fill="url(#paint9_linear_418_19994)"
                      />
                      <path
                        d="M19.6429 9.03152C19.5596 9.13946 19.4727 9.24293 19.3829 9.34229L12.2287 4.25384C12.2931 4.13638 12.3624 4.02038 12.437 3.90623L19.6429 9.03152Z"
                        fill="url(#paint10_linear_418_19994)"
                      />
                      <path
                        d="M18.4077 10.1772C18.2835 10.2584 18.1567 10.3335 18.0276 10.4026L11.6718 5.88205C11.6947 5.73739 11.7241 5.59301 11.76 5.44904L18.4077 10.1772Z"
                        fill="url(#paint11_linear_418_19994)"
                      />
                      <path
                        d="M17.1656 1.6769L12.1266 8.7615C12.054 8.62427 11.9891 8.48323 11.9317 8.3386L16.702 1.63173C16.8576 1.6383 17.0121 1.65336 17.1656 1.6769Z"
                        fill="url(#paint12_linear_418_19994)"
                      />
                      <path
                        d="M18.7643 2.27565L13.2168 10.0752C13.1098 9.99055 13.0076 9.90138 12.9111 9.80797L18.4115 2.07463C18.5314 2.13514 18.6492 2.20237 18.7643 2.27565Z"
                        fill="url(#paint13_linear_418_19994)"
                      />
                      <path
                        d="M19.9609 3.43937L14.7087 10.8238C14.5726 10.7874 14.438 10.7443 14.3053 10.6939L19.7058 3.10099C19.797 3.20979 19.8819 3.32272 19.9609 3.43937Z"
                        fill="url(#paint14_linear_418_19994)"
                      />
                      <path
                        d="M20.6657 5.29441L16.6921 10.8812C16.5103 10.9171 16.3271 10.9418 16.1436 10.9553L20.556 4.75168C20.6034 4.92949 20.64 5.11085 20.6657 5.29441Z"
                        fill="url(#paint15_linear_418_19994)"
                      />
                      <path
                        d="M19.9666 9.00358C21.5819 6.73256 21.1893 3.67096 19.0914 2.17878C16.9934 0.686611 13.9725 1.32025 12.3572 3.59128C11.262 5.13104 11.09 7.03413 11.7466 8.56519C11.9061 8.93709 12.0058 9.33314 12.0168 9.73764C12.0286 10.17 11.9661 10.6288 11.8295 11.0888C11.6657 11.6421 11.4037 12.1742 11.0507 12.6704L11.8189 13.2168C12.1718 12.7206 12.5885 12.2984 13.0577 11.9619C13.4473 11.682 13.8601 11.4725 14.2724 11.3418C14.658 11.2195 15.0649 11.1838 15.4685 11.2124C17.1302 11.3303 18.8714 10.5433 19.9666 9.00358ZM12.8311 10.9804C12.8901 10.7169 12.9289 10.4541 12.9474 10.195C13.0386 10.272 13.1336 10.3458 13.2325 10.4161C13.3313 10.4864 13.4322 10.5519 13.5349 10.6128C13.2962 10.7153 13.0606 10.8382 12.8311 10.9804ZM15.2917 10.2472L15.2917 10.2408C15.2768 10.2406 15.2618 10.2408 15.2468 10.2408C14.7273 10.161 14.226 9.96605 13.7788 9.64794C13.3315 9.32984 12.9829 8.92028 12.7371 8.45569C12.7321 8.44155 12.7274 8.42733 12.7223 8.41328L12.7163 8.41544C12.0649 7.14556 12.1723 5.47743 13.1253 4.13761C14.4393 2.29012 16.8705 1.75595 18.5449 2.94688C20.2193 4.13781 20.5125 6.60973 19.1984 8.45722C18.2455 9.79708 16.705 10.4459 15.2917 10.2472Z"
                        fill="url(#paint16_linear_418_19994)"
                      />
                      <path
                        d="M18.8149 2.56745C16.9149 1.21612 14.1791 1.78996 12.7163 3.84665C11.2534 5.90334 11.609 8.67599 13.5089 10.0273C15.4089 11.3787 18.1447 10.8048 19.6075 8.7481C21.0703 6.69139 20.7148 3.91878 18.8149 2.56745ZM13.7788 9.64792C12.1044 8.45699 11.8113 5.98508 13.1253 4.13758C14.4394 2.29009 16.8706 1.75592 18.545 2.94685C20.2194 4.13778 20.5126 6.6097 19.1985 8.45719C17.8845 10.3047 15.4532 10.8389 13.7788 9.64792Z"
                        fill="url(#paint17_linear_418_19994)"
                      />
                      <path
                        d="M13.2325 10.4161C11.1345 8.92389 10.7419 5.86229 12.3572 3.59124C13.9725 1.32018 16.9934 0.686542 19.0913 2.17871C21.1893 3.67089 21.5819 6.73249 19.9666 9.00351C18.3513 11.2745 15.3304 11.9082 13.2325 10.4161ZM18.545 2.94685C16.8706 1.75592 14.4394 2.29009 13.1253 4.13758C11.8113 5.98508 12.1044 8.45702 13.7788 9.64792C15.4532 10.8388 17.8845 10.3047 19.1985 8.45719C20.5125 6.6097 20.2194 4.13779 18.545 2.94685Z"
                        fill="url(#paint18_linear_418_19994)"
                      />
                      <path
                        d="M13.2568 10.4329L13.2567 10.4329C13.3478 10.4968 13.4405 10.5568 13.5348 10.6128C13.2962 10.7153 13.0606 10.8382 12.8311 10.9804L11.4348 12.9436L11.8189 13.2167C12.1718 12.7205 12.5885 12.2984 13.0577 11.9618C13.4473 11.682 13.8601 11.4725 14.2724 11.3418C14.658 11.2194 15.0649 11.1838 15.4685 11.2124C15.4729 11.2127 15.4772 11.2128 15.4816 11.2131C14.6973 11.1597 13.9303 10.9051 13.2568 10.4329Z"
                        fill="url(#paint19_linear_418_19994)"
                      />
                      <path
                        d="M12.8981 10.9397C12.8757 10.9531 12.8534 10.9666 12.8311 10.9804C12.8368 10.9548 12.8422 10.9293 12.8476 10.9037L11.9921 10.2953C11.9628 10.5561 11.9087 10.8222 11.8295 11.0887C11.6657 11.642 11.4037 12.1742 11.0507 12.6704L11.8189 13.2167C12.1718 12.7205 12.5885 12.2984 13.0577 11.9618C13.2834 11.7997 13.5169 11.6614 13.7536 11.5481L12.8981 10.9397Z"
                        fill="url(#paint20_linear_418_19994)"
                      />
                      <path
                        d="M9.38977 16.4375C9.66599 16.3909 9.85212 16.1292 9.80552 15.853C9.75891 15.5767 9.49721 15.3906 9.22099 15.4372C8.94477 15.4838 8.75864 15.7455 8.80524 16.0217C8.85185 16.298 9.11355 16.4841 9.38977 16.4375Z"
                        fill="url(#paint21_linear_418_19994)"
                      />
                      <path
                        d="M9.60548 16.2953L8.86884 15.7713C8.70847 15.6573 8.67093 15.4348 8.785 15.2744L11.0475 12.0934C11.1616 11.9331 11.384 11.8955 11.5444 12.0096L12.281 12.5335C12.4414 12.6476 12.4789 12.87 12.3649 13.0304L10.1024 16.2114C9.98831 16.3718 9.76582 16.4094 9.60548 16.2953Z"
                        fill="url(#paint22_linear_418_19994)"
                      />
                      <path
                        d="M11.5444 12.0096C11.3841 11.8955 11.1616 11.9331 11.0475 12.0934L9.24451 14.6284L9.5149 16.2309L9.60547 16.2953C9.76584 16.4094 9.9883 16.3718 10.1024 16.2115L12.3649 13.0304C12.4789 12.8701 12.4414 12.6476 12.281 12.5335L11.5444 12.0096Z"
                        fill="url(#paint23_linear_418_19994)"
                      />
                      <path
                        d="M11.5444 12.0096C11.384 11.8955 11.1616 11.9331 11.0475 12.0934L9.98542 13.5867L10.3658 15.8411L12.3649 13.0304C12.479 12.87 12.4414 12.6476 12.281 12.5335L11.5444 12.0096Z"
                        fill="url(#paint24_linear_418_19994)"
                      />
                      <path
                        d="M11.5444 12.0096C11.3841 11.8955 11.1616 11.9331 11.0475 12.0934L10.7263 12.545L11.1067 14.7994L12.3649 13.0304C12.479 12.87 12.4414 12.6476 12.2811 12.5335L11.5444 12.0096Z"
                        fill="url(#paint25_linear_418_19994)"
                      />
                      <path
                        d="M11.5538 12.0162L11.8476 13.7577L12.3649 13.0304C12.4789 12.8701 12.4414 12.6476 12.281 12.5335L11.5538 12.0162Z"
                        fill="url(#paint26_linear_418_19994)"
                      />
                      <path
                        d="M20.5096 8.05053C20.306 7.79111 20.0367 7.58977 19.7314 7.46744C19.5997 7.8092 19.4225 8.14226 19.1985 8.45719C18.7019 9.15541 18.0457 9.66588 17.3311 9.96671C17.4678 10.273 17.6828 10.5313 17.947 10.7211C18.7202 10.3463 19.4231 9.7678 19.9667 9.00354C20.1838 8.69826 20.3643 8.37862 20.5096 8.05053Z"
                        fill="url(#paint27_linear_418_19994)"
                      />
                    </g>
                    <g clipPath="url(#clip1_418_19994)">
                      <path
                        d="M9.36 2.43163L2.68234 7.11643C2.6471 6.97238 2.6187 6.82782 2.59674 6.68301L8.98159 2.20363C9.11028 2.27356 9.23655 2.34947 9.36 2.43163Z"
                        fill="url(#paint28_linear_418_19994)"
                      />
                      <path
                        d="M10.588 3.58511L3.34909 8.66369C3.27522 8.54905 3.20673 8.43261 3.1431 8.31473L10.33 3.27266C10.4192 3.3726 10.5054 3.47663 10.588 3.58511Z"
                        fill="url(#paint29_linear_418_19994)"
                      />
                      <path
                        d="M11.2218 4.66239C11.2778 4.79055 11.3278 4.91996 11.372 5.05048L4.4602 9.89954C4.35252 9.81355 4.24784 9.72251 4.14639 9.62622L11.2218 4.66239Z"
                        fill="url(#paint30_linear_418_19994)"
                      />
                      <path
                        d="M11.6305 6.39066C11.6392 6.55594 11.6392 6.72048 11.6308 6.88392L6.09611 10.7669C5.93955 10.7191 5.78484 10.6632 5.63239 10.5987L11.6305 6.39066Z"
                        fill="url(#paint31_linear_418_19994)"
                      />
                      <path
                        d="M2.70547 4.72262L7.07766 10.9547C6.89427 10.9399 6.71127 10.914 6.52965 10.877L2.59225 5.26463C2.61919 5.08124 2.65695 4.90013 2.70547 4.72262Z"
                        fill="url(#paint32_linear_418_19994)"
                      />
                      <path
                        d="M3.56632 3.07744L8.91759 10.7051C8.78457 10.7547 8.64973 10.7969 8.51342 10.8324L3.30908 3.41419C3.38881 3.29803 3.47445 3.18566 3.56632 3.07744Z"
                        fill="url(#paint33_linear_418_19994)"
                      />
                      <path
                        d="M4.86719 2.0595L10.3175 9.82826C10.2204 9.92103 10.1176 10.0096 10.0101 10.0935L4.51314 2.25823C4.62872 2.1857 4.74691 2.11923 4.86719 2.0595Z"
                        fill="url(#paint34_linear_418_19994)"
                      />
                      <path
                        d="M6.5796 1.62766L11.3065 8.36528C11.2481 8.50953 11.1823 8.65015 11.1088 8.78691L6.11573 1.66987C6.26931 1.64729 6.42394 1.63323 6.5796 1.62766Z"
                        fill="url(#paint35_linear_418_19994)"
                      />
                      <path
                        d="M8.54662 1.9949L2.54849 6.20297C2.53977 6.03769 2.53984 5.87315 2.54819 5.70971L8.0829 1.82676C8.23945 1.87453 8.39417 1.93046 8.54662 1.9949Z"
                        fill="url(#paint36_linear_418_19994)"
                      />
                      <path
                        d="M10.0326 2.96744L2.95728 7.93125C2.90125 7.80311 2.85125 7.67367 2.80707 7.54315L9.71885 2.6941C9.82654 2.78008 9.9312 2.87115 10.0326 2.96744Z"
                        fill="url(#paint37_linear_418_19994)"
                      />
                      <path
                        d="M10.8298 3.92972C10.9037 4.04436 10.9722 4.1608 11.0358 4.27868L3.84887 9.32078C3.75968 9.22084 3.67351 9.11678 3.59084 9.00833L10.8298 3.92972Z"
                        fill="url(#paint38_linear_418_19994)"
                      />
                      <path
                        d="M11.4967 5.47684C11.5318 5.62104 11.5602 5.76561 11.5821 5.91041L5.1973 10.3898C5.06861 10.3199 4.94234 10.244 4.81867 10.162L11.4967 5.47684Z"
                        fill="url(#paint39_linear_418_19994)"
                      />
                      <path
                        d="M3.07011 3.80654L8.06316 10.9236C7.90956 10.9461 7.75493 10.9602 7.59943 10.966L2.87259 4.22839C2.93079 4.08392 2.99663 3.9433 3.07011 3.80654Z"
                        fill="url(#paint40_linear_418_19994)"
                      />
                      <path
                        d="M4.16877 2.49986L9.66575 10.3352C9.55016 10.4077 9.43198 10.4742 9.31169 10.5339L3.86142 2.76515C3.95852 2.67237 4.06124 2.58386 4.16877 2.49986Z"
                        fill="url(#paint41_linear_418_19994)"
                      />
                      <path
                        d="M5.66546 1.76103L10.8698 9.17923C10.7901 9.29537 10.7044 9.40777 10.6126 9.51596L5.26129 1.88833C5.39431 1.83876 5.52912 1.79648 5.66546 1.76103Z"
                        fill="url(#paint42_linear_418_19994)"
                      />
                      <path
                        d="M7.64942 1.71671L11.5868 7.32903C11.5599 7.51243 11.522 7.69332 11.4734 7.8708L7.10123 1.63872C7.28465 1.6535 7.46781 1.67964 7.64942 1.71671Z"
                        fill="url(#paint43_linear_418_19994)"
                      />
                      <path
                        d="M10.9117 3.61527C9.31109 1.33385 6.29432 0.680656 4.18679 2.15923C2.07925 3.6378 1.66679 6.69679 3.26735 8.97824C4.35253 10.5251 6.0887 11.3232 7.75115 11.2161C8.15497 11.1901 8.56159 11.2284 8.9465 11.3533C9.35796 11.4867 9.76947 11.6989 10.1574 11.9814C10.6241 12.3207 11.038 12.7455 11.3877 13.244L12.1594 12.7027C11.8097 12.2042 11.5511 11.6703 11.3907 11.1156C11.2571 10.6549 11.1977 10.1959 11.2123 9.76359C11.2259 9.3592 11.3282 8.96384 11.4901 8.59302C12.1565 7.06627 11.9968 5.16211 10.9117 3.61527ZM10.3899 11.0012C10.1613 10.8575 9.92655 10.7331 9.6886 10.6291C9.79166 10.5688 9.89297 10.5039 9.99225 10.4343C10.0915 10.3646 10.187 10.2915 10.2787 10.215C10.2956 10.4742 10.3327 10.7373 10.3899 11.0012ZM10.5213 8.43705L10.5153 8.43485C10.5101 8.44887 10.5053 8.46306 10.5002 8.47716C10.2514 8.94015 9.90014 9.34745 9.45085 9.66266C9.00155 9.97787 8.49903 10.1696 7.97899 10.246C7.96402 10.2459 7.94903 10.2456 7.93408 10.2457L7.93411 10.2521C6.51953 10.4417 4.98324 9.78288 4.03897 8.43693C2.7369 6.58097 3.04603 4.11101 4.72809 2.93093C6.41016 1.75085 8.8379 2.30074 10.14 4.15669C11.0843 5.50262 11.1809 7.17138 10.5213 8.43705Z"
                        fill="url(#paint44_linear_418_19994)"
                      />
                      <path
                        d="M4.46069 2.54975C2.55208 3.88877 2.17855 6.65904 3.62805 8.72517C5.07755 10.7913 7.80961 11.3828 9.71823 10.0438C11.6268 8.70479 12.0004 5.9345 10.5508 3.86839C9.10131 1.80228 6.36931 1.21074 4.46069 2.54975ZM9.45084 9.66265C7.76877 10.8427 5.34103 10.2928 4.03897 8.43689C2.7369 6.58093 3.04602 4.11097 4.72809 2.93089C6.41015 1.75081 8.83789 2.3007 10.14 4.15665C11.442 6.0126 11.1329 8.4826 9.45084 9.66265Z"
                        fill="url(#paint45_linear_418_19994)"
                      />
                      <path
                        d="M9.99221 10.4343C7.88467 11.9129 4.8679 11.2597 3.26731 8.97824C1.66672 6.69681 2.07918 3.63782 4.18671 2.15925C6.29425 0.680672 9.31102 1.33386 10.9116 3.61529C12.5122 5.89672 12.0997 8.95572 9.99221 10.4343ZM4.72809 2.93088C3.04602 4.11095 2.7369 6.58092 4.03897 8.43687C5.34104 10.2928 7.7688 10.8427 9.45084 9.66263C11.1329 8.48255 11.442 6.01259 10.14 4.15664C8.83789 2.30068 6.41015 1.75083 4.72809 2.93088Z"
                        fill="url(#paint46_linear_418_19994)"
                      />
                      <path
                        d="M10.0162 10.417L10.0162 10.4171C10.1069 10.3526 10.1944 10.2853 10.2787 10.2151C10.2956 10.4742 10.3326 10.7373 10.3899 11.0012L11.7735 12.9734L12.1594 12.7027C11.8097 12.2042 11.5511 11.6703 11.3907 11.1156C11.2571 10.6549 11.1977 10.1959 11.2122 9.7636C11.2259 9.35921 11.3282 8.96384 11.4901 8.59303C11.4918 8.58899 11.4934 8.58489 11.4951 8.58085C11.1827 9.30226 10.6863 9.94003 10.0162 10.417Z"
                        fill="url(#paint47_linear_418_19994)"
                      />
                      <path
                        d="M10.374 10.9244C10.3792 10.95 10.3843 10.9756 10.3899 11.0012C10.3678 10.9873 10.3455 10.9737 10.3232 10.9601L9.46386 11.563C9.69987 11.6778 9.93257 11.8177 10.1573 11.9814C10.624 12.3207 11.038 12.7455 11.3877 13.244L12.1594 12.7027C11.8097 12.2042 11.5511 11.6703 11.3907 11.1156C11.3133 10.8487 11.261 10.5825 11.2333 10.3215L10.374 10.9244Z"
                        fill="url(#paint48_linear_418_19994)"
                      />
                      <path
                        d="M14.3831 16.0685C14.4315 15.7926 14.247 15.5297 13.9711 15.4813C13.6952 15.4329 13.4323 15.6174 13.3839 15.8933C13.3355 16.1692 13.52 16.4321 13.7959 16.4805C14.0718 16.5289 14.3347 16.3444 14.3831 16.0685Z"
                        fill="url(#paint49_linear_418_19994)"
                      />
                      <path
                        d="M14.3211 15.8177L13.5811 16.3369C13.42 16.4499 13.1978 16.4109 13.0847 16.2498L10.8428 13.0543C10.7298 12.8931 10.7688 12.6709 10.9299 12.5579L11.6699 12.0388C11.831 11.9257 12.0532 11.9647 12.1662 12.1258L14.4082 15.3214C14.5212 15.4825 14.4822 15.7047 14.3211 15.8177Z"
                        fill="url(#paint50_linear_418_19994)"
                      />
                      <path
                        d="M10.9299 12.5579C10.7688 12.6709 10.7298 12.8931 10.8429 13.0542L12.6295 15.6008L14.2301 15.8816L14.3211 15.8177C14.4822 15.7047 14.5212 15.4825 14.4082 15.3214L12.1663 12.1258C12.0533 11.9647 11.831 11.9257 11.6699 12.0388L10.9299 12.5579Z"
                        fill="url(#paint51_linear_418_19994)"
                      />
                      <path
                        d="M10.9299 12.5579C10.7688 12.6709 10.7298 12.8931 10.8428 13.0542L11.8953 14.5543L14.1471 14.9493L12.1662 12.1258C12.0532 11.9647 11.831 11.9257 11.6699 12.0387L10.9299 12.5579Z"
                        fill="url(#paint52_linear_418_19994)"
                      />
                      <path
                        d="M10.9299 12.5579C10.7688 12.6709 10.7298 12.8931 10.8429 13.0542L11.1611 13.5079L13.413 13.9029L12.1662 12.1258C12.0532 11.9647 11.831 11.9257 11.6699 12.0387L10.9299 12.5579Z"
                        fill="url(#paint53_linear_418_19994)"
                      />
                      <path
                        d="M10.9393 12.5513L12.6788 12.8564L12.1663 12.1258C12.0532 11.9647 11.831 11.9257 11.6699 12.0387L10.9393 12.5513Z"
                        fill="url(#paint54_linear_418_19994)"
                      />
                      <path
                        d="M10.1949 2.78508C9.88231 2.89028 9.60256 3.07674 9.38522 3.32362C9.6633 3.56199 9.91799 3.8403 10.14 4.15665C10.632 4.85806 10.8938 5.64716 10.9385 6.4212C11.2729 6.3947 11.5882 6.27836 11.8554 6.09287C11.7606 5.23887 11.4502 4.38305 10.9116 3.61528C10.6965 3.30863 10.4555 3.03166 10.1949 2.78508Z"
                        fill="url(#paint55_linear_418_19994)"
                      />
                      <path
                        d="M11.6055 12.601C12.617 12.7784 13.5807 12.1023 13.7581 11.0908C13.9355 10.0794 13.2594 9.11566 12.2479 8.93827C11.2365 8.76087 10.2728 9.43699 10.0954 10.4484C9.91797 11.4599 10.5941 12.4236 11.6055 12.601Z"
                        fill="url(#paint56_linear_418_19994)"
                      />
                      <path
                        d="M10.0954 10.4484C9.91797 11.4599 10.5941 12.4236 11.6055 12.601C12.6169 12.7784 13.5807 12.1022 13.7581 11.0908C13.7856 10.9342 13.7925 10.7787 13.7809 10.6271L10.2317 10.0046C10.1692 10.1432 10.1228 10.2918 10.0954 10.4484Z"
                        fill="url(#paint57_linear_418_19994)"
                      />
                      <path
                        d="M12.5844 12.19C12.7516 12.2193 12.9179 12.231 13.0814 12.2265C13.352 12.0122 13.564 11.7225 13.6823 11.3818C13.6081 11.0174 13.4312 10.4631 13.0363 10.3939C13.0323 10.3932 13.0283 10.3925 13.0243 10.3918C12.7662 10.3465 12.5234 10.2493 12.3026 10.1028C11.8977 9.83548 11.6108 9.42412 11.4943 8.96109C11.1275 9.04898 10.7971 9.24695 10.5466 9.52404C10.4287 10.7938 11.3067 11.9659 12.5844 12.19Z"
                        fill="url(#paint58_linear_418_19994)"
                      />
                      <path
                        d="M12.5255 9.76595C12.7022 9.88314 12.8949 9.95933 13.1017 9.99521L13.1064 9.99604C13.3697 10.0422 13.5893 10.1983 13.7597 10.4566C13.6311 9.70367 13.0433 9.07777 12.2479 8.93826C12.1306 8.91768 12.014 8.90907 11.8991 8.91066C11.9983 9.25716 12.2191 9.56359 12.5255 9.76595Z"
                        fill="url(#paint59_linear_418_19994)"
                      />
                      <path
                        d="M10.1638 10.1782C10.1348 10.2652 10.1117 10.3554 10.0954 10.4484C9.91796 11.4599 10.5941 12.4236 11.6055 12.601C11.8806 12.6493 12.152 12.6339 12.4052 12.5663C11.211 12.3095 10.3381 11.3342 10.1638 10.1782Z"
                        fill="url(#paint60_linear_418_19994)"
                      />
                      <path
                        d="M10.1638 10.1782C10.1348 10.2652 10.1117 10.3554 10.0954 10.4484C9.91796 11.4599 10.5941 12.4236 11.6055 12.601C11.8806 12.6493 12.152 12.6339 12.4052 12.5663C11.211 12.3095 10.3381 11.3342 10.1638 10.1782Z"
                        fill="url(#paint61_linear_418_19994)"
                      />
                      <path
                        d="M12.5844 12.19C12.7516 12.2193 12.9179 12.231 13.0815 12.2265C13.352 12.0122 13.564 11.7225 13.6823 11.3818C13.6581 11.2626 13.6227 11.1231 13.5725 10.987L10.6447 10.4735C10.9094 11.3358 11.6367 12.0237 12.5844 12.19Z"
                        fill="url(#paint62_linear_418_19994)"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_418_19994"
                        x1="17.423"
                        y1="4.52256"
                        x2="17.2354"
                        y2="4.78628"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#EAF6FF" />
                        <stop offset={1} stopColor="#B3DAFE" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_418_19994"
                        x1="16.497"
                        y1="5.82451"
                        x2="16.2784"
                        y2="6.1318"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#EAF6FF" />
                        <stop offset={1} stopColor="#B3DAFE" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_418_19994"
                        x1="15.5449"
                        y1="7.16305"
                        x2="15.3206"
                        y2="7.47833"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#EAF6FF" />
                        <stop offset={1} stopColor="#B3DAFE" />
                      </linearGradient>
                      <linearGradient
                        id="paint3_linear_418_19994"
                        x1="14.5928"
                        y1="8.50159"
                        x2="14.3691"
                        y2="8.8162"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#EAF6FF" />
                        <stop offset={1} stopColor="#B3DAFE" />
                      </linearGradient>
                      <linearGradient
                        id="paint4_linear_418_19994"
                        x1="13.6453"
                        y1="4.5066"
                        x2="13.9672"
                        y2="4.73558"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#EAF6FF" />
                        <stop offset={1} stopColor="#B3DAFE" />
                      </linearGradient>
                      <linearGradient
                        id="paint5_linear_418_19994"
                        x1="14.918"
                        y1="5.41185"
                        x2="15.3889"
                        y2="5.7468"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#EAF6FF" />
                        <stop offset={1} stopColor="#B3DAFE" />
                      </linearGradient>
                      <linearGradient
                        id="paint6_linear_418_19994"
                        x1="16.2785"
                        y1="6.37949"
                        x2="16.7037"
                        y2="6.68195"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#EAF6FF" />
                        <stop offset={1} stopColor="#B3DAFE" />
                      </linearGradient>
                      <linearGradient
                        id="paint7_linear_418_19994"
                        x1="17.6609"
                        y1="7.36276"
                        x2="18.0497"
                        y2="7.63928"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#EAF6FF" />
                        <stop offset={1} stopColor="#B3DAFE" />
                      </linearGradient>
                      <linearGradient
                        id="paint8_linear_418_19994"
                        x1="17.8964"
                        y1="3.85694"
                        x2="17.7091"
                        y2="4.12037"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#EAF6FF" />
                        <stop offset={1} stopColor="#B3DAFE" />
                      </linearGradient>
                      <linearGradient
                        id="paint9_linear_418_19994"
                        x1="16.9704"
                        y1="5.15892"
                        x2="16.7779"
                        y2="5.42955"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#EAF6FF" />
                        <stop offset={1} stopColor="#B3DAFE" />
                      </linearGradient>
                      <linearGradient
                        id="paint10_linear_418_19994"
                        x1="16.0235"
                        y1="6.49012"
                        x2="15.7983"
                        y2="6.80676"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#EAF6FF" />
                        <stop offset={1} stopColor="#B3DAFE" />
                      </linearGradient>
                      <linearGradient
                        id="paint11_linear_418_19994"
                        x1="15.0871"
                        y1="7.80674"
                        x2="14.8631"
                        y2="8.1216"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#EAF6FF" />
                        <stop offset={1} stopColor="#B3DAFE" />
                      </linearGradient>
                      <linearGradient
                        id="paint12_linear_418_19994"
                        x1="14.267"
                        y1="4.94882"
                        x2="14.6988"
                        y2="5.25594"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#EAF6FF" />
                        <stop offset={1} stopColor="#B3DAFE" />
                      </linearGradient>
                      <linearGradient
                        id="paint13_linear_418_19994"
                        x1="15.6567"
                        y1="5.93728"
                        x2="16.0163"
                        y2="6.19304"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#EAF6FF" />
                        <stop offset={1} stopColor="#B3DAFE" />
                      </linearGradient>
                      <linearGradient
                        id="paint14_linear_418_19994"
                        x1="17.0026"
                        y1="6.89456"
                        x2="17.3106"
                        y2="7.11362"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#EAF6FF" />
                        <stop offset={1} stopColor="#B3DAFE" />
                      </linearGradient>
                      <linearGradient
                        id="paint15_linear_418_19994"
                        x1="18.2607"
                        y1="7.78937"
                        x2="18.6125"
                        y2="8.03959"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#EAF6FF" />
                        <stop offset={1} stopColor="#B3DAFE" />
                      </linearGradient>
                      <linearGradient
                        id="paint16_linear_418_19994"
                        x1="13.9305"
                        y1="2.60817"
                        x2="17.5303"
                        y2="13.5288"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#3C38FE" />
                        <stop offset={1} stopColor="#EF4424" />
                      </linearGradient>
                      <linearGradient
                        id="paint17_linear_418_19994"
                        x1="16.9057"
                        y1="13.5398"
                        x2="15.1913"
                        y2="-3.14434"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#AA2B10" />
                        <stop offset={1} stopColor="#FF3E1A" />
                      </linearGradient>
                      <linearGradient
                        id="paint18_linear_418_19994"
                        x1="16.6428"
                        y1="8.54824"
                        x2="17.8341"
                        y2="14.1209"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#EF4424" stopOpacity={0} />
                        <stop offset={1} stopColor="#883F2E" />
                      </linearGradient>
                      <linearGradient
                        id="paint19_linear_418_19994"
                        x1="12.6461"
                        y1="11.8186"
                        x2="10.4019"
                        y2="11.9076"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#EF4424" stopOpacity={0} />
                        <stop offset={1} stopColor="#883F2E" />
                      </linearGradient>
                      <linearGradient
                        id="paint20_linear_418_19994"
                        x1="12.361"
                        y1="11.6413"
                        x2="11.6804"
                        y2="12.5982"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#EF4424" stopOpacity={0} />
                        <stop offset={1} stopColor="#883F2E" />
                      </linearGradient>
                      <linearGradient
                        id="paint21_linear_418_19994"
                        x1="8.93943"
                        y1="15.9991"
                        x2="9.81946"
                        y2="15.8506"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#6B2211" />
                        <stop offset={1} stopColor="#862311" />
                      </linearGradient>
                      <linearGradient
                        id="paint22_linear_418_19994"
                        x1="10.249"
                        y1="13.9207"
                        x2="10.8853"
                        y2="14.3732"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#5A5A5A" />
                        <stop offset={1} stopColor="#444444" />
                      </linearGradient>
                      <linearGradient
                        id="paint23_linear_418_19994"
                        x1="9.80031"
                        y1="14.9866"
                        x2="8.70244"
                        y2="16.1687"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#433F43" stopOpacity={0} />
                        <stop offset={1} stopColor="#1A1A1A" />
                      </linearGradient>
                      <linearGradient
                        id="paint24_linear_418_19994"
                        x1="10.6361"
                        y1="14.1461"
                        x2="9.62972"
                        y2="15.7088"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#433F43" stopOpacity={0} />
                        <stop offset={1} stopColor="#1A1A1A" />
                      </linearGradient>
                      <linearGradient
                        id="paint25_linear_418_19994"
                        x1="11.1748"
                        y1="13.4145"
                        x2="10.2393"
                        y2="14.9926"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#433F43" stopOpacity={0} />
                        <stop offset={1} stopColor="#1A1A1A" />
                      </linearGradient>
                      <linearGradient
                        id="paint26_linear_418_19994"
                        x1="12.0592"
                        y1="12.3524"
                        x2="11.0863"
                        y2="14.0324"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#433F43" stopOpacity={0} />
                        <stop offset={1} stopColor="#1A1A1A" />
                      </linearGradient>
                      <linearGradient
                        id="paint27_linear_418_19994"
                        x1="18.9195"
                        y1="9.11717"
                        x2="18.4235"
                        y2="9.79264"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#EF4424" stopOpacity={0} />
                        <stop offset={1} stopColor="#883F2E" />
                      </linearGradient>
                      <linearGradient
                        id="paint28_linear_418_19994"
                        x1="5.83815"
                        y1="4.515"
                        x2="6.02401"
                        y2="4.77993"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#EAF6FF" />
                        <stop offset={1} stopColor="#B3DAFE" />
                      </linearGradient>
                      <linearGradient
                        id="paint29_linear_418_19994"
                        x1="6.75576"
                        y1="5.82292"
                        x2="6.97233"
                        y2="6.13162"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#EAF6FF" />
                        <stop offset={1} stopColor="#B3DAFE" />
                      </linearGradient>
                      <linearGradient
                        id="paint30_linear_418_19994"
                        x1="7.69912"
                        y1="7.16759"
                        x2="7.92132"
                        y2="7.48432"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#EAF6FF" />
                        <stop offset={1} stopColor="#B3DAFE" />
                      </linearGradient>
                      <linearGradient
                        id="paint31_linear_418_19994"
                        x1="8.64248"
                        y1="8.51228"
                        x2="8.86421"
                        y2="8.82832"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#EAF6FF" />
                        <stop offset={1} stopColor="#B3DAFE" />
                      </linearGradient>
                      <linearGradient
                        id="paint32_linear_418_19994"
                        x1="4.56053"
                        y1="8.07017"
                        x2="4.88394"
                        y2="7.84328"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#EAF6FF" />
                        <stop offset={1} stopColor="#B3DAFE" />
                      </linearGradient>
                      <linearGradient
                        id="paint33_linear_418_19994"
                        x1="5.83907"
                        y1="7.17318"
                        x2="6.31215"
                        y2="6.84128"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#EAF6FF" />
                        <stop offset={1} stopColor="#B3DAFE" />
                      </linearGradient>
                      <linearGradient
                        id="paint34_linear_418_19994"
                        x1="7.20578"
                        y1="6.21434"
                        x2="7.63297"
                        y2="5.91464"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#EAF6FF" />
                        <stop offset={1} stopColor="#B3DAFE" />
                      </linearGradient>
                      <linearGradient
                        id="paint35_linear_418_19994"
                        x1="8.59454"
                        y1="5.24004"
                        x2="8.98509"
                        y2="4.96605"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#EAF6FF" />
                        <stop offset={1} stopColor="#B3DAFE" />
                      </linearGradient>
                      <linearGradient
                        id="paint36_linear_418_19994"
                        x1="5.36903"
                        y1="3.84633"
                        x2="5.55469"
                        y2="4.11097"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#EAF6FF" />
                        <stop offset={1} stopColor="#B3DAFE" />
                      </linearGradient>
                      <linearGradient
                        id="paint37_linear_418_19994"
                        x1="6.28665"
                        y1="5.15429"
                        x2="6.47738"
                        y2="5.42616"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#EAF6FF" />
                        <stop offset={1} stopColor="#B3DAFE" />
                      </linearGradient>
                      <linearGradient
                        id="paint38_linear_418_19994"
                        x1="7.22486"
                        y1="6.49159"
                        x2="7.44803"
                        y2="6.80969"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#EAF6FF" />
                        <stop offset={1} stopColor="#B3DAFE" />
                      </linearGradient>
                      <linearGradient
                        id="paint39_linear_418_19994"
                        x1="8.15277"
                        y1="7.81421"
                        x2="8.37468"
                        y2="8.13051"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#EAF6FF" />
                        <stop offset={1} stopColor="#B3DAFE" />
                      </linearGradient>
                      <linearGradient
                        id="paint40_linear_418_19994"
                        x1="5.18509"
                        y1="7.63201"
                        x2="5.61887"
                        y2="7.32769"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#EAF6FF" />
                        <stop offset={1} stopColor="#B3DAFE" />
                      </linearGradient>
                      <linearGradient
                        id="paint41_linear_418_19994"
                        x1="6.58122"
                        y1="6.65254"
                        x2="6.94245"
                        y2="6.39911"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#EAF6FF" />
                        <stop offset={1} stopColor="#B3DAFE" />
                      </linearGradient>
                      <linearGradient
                        id="paint42_linear_418_19994"
                        x1="7.93323"
                        y1="5.70401"
                        x2="8.24263"
                        y2="5.48694"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#EAF6FF" />
                        <stop offset={1} stopColor="#B3DAFE" />
                      </linearGradient>
                      <linearGradient
                        id="paint43_linear_418_19994"
                        x1="9.19708"
                        y1="4.81735"
                        x2="9.55049"
                        y2="4.56941"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#EAF6FF" />
                        <stop offset={1} stopColor="#B3DAFE" />
                      </linearGradient>
                      <linearGradient
                        id="paint44_linear_418_19994"
                        x1="2.86659"
                        y1="7.16686"
                        x2="14.3624"
                        y2="7.42394"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#3C38FE" />
                        <stop offset={1} stopColor="#EF4424" />
                      </linearGradient>
                      <linearGradient
                        id="paint45_linear_418_19994"
                        x1="14.164"
                        y1="8.01632"
                        x2="-2.13371"
                        y2="4.05596"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#AA2B10" />
                        <stop offset={1} stopColor="#FF3E1A" />
                      </linearGradient>
                      <linearGradient
                        id="paint46_linear_418_19994"
                        x1="9.37161"
                        y1="6.59581"
                        x2="15.022"
                        y2="7.33551"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#EF4424" stopOpacity={0} />
                        <stop offset={1} stopColor="#883F2E" />
                      </linearGradient>
                      <linearGradient
                        id="paint47_linear_418_19994"
                        x1="11.1181"
                        y1="11.4557"
                        x2="10.4519"
                        y2="13.6006"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#EF4424" stopOpacity={0} />
                        <stop offset={1} stopColor="#883F2E" />
                      </linearGradient>
                      <linearGradient
                        id="paint48_linear_418_19994"
                        x1="10.8557"
                        y1="11.6651"
                        x2="11.5302"
                        y2="12.6265"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#EF4424" stopOpacity={0} />
                        <stop offset={1} stopColor="#883F2E" />
                      </linearGradient>
                      <linearGradient
                        id="paint49_linear_418_19994"
                        x1="13.8194"
                        y1="16.3464"
                        x2="13.9736"
                        y2="15.4674"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#6B2211" />
                        <stop offset={1} stopColor="#862311" />
                      </linearGradient>
                      <linearGradient
                        id="paint50_linear_418_19994"
                        x1="12.2981"
                        y1="14.4175"
                        x2="12.9373"
                        y2="13.9691"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#5A5A5A" />
                        <stop offset={1} stopColor="#444444" />
                      </linearGradient>
                      <linearGradient
                        id="paint51_linear_418_19994"
                        x1="13.1528"
                        y1="15.1967"
                        x2="13.9"
                        y2="16.6265"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#433F43" stopOpacity={0} />
                        <stop offset={1} stopColor="#1A1A1A" />
                      </linearGradient>
                      <linearGradient
                        id="paint52_linear_418_19994"
                        x1="12.6399"
                        y1="14.1281"
                        x2="13.7764"
                        y2="15.5988"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#433F43" stopOpacity={0} />
                        <stop offset={1} stopColor="#1A1A1A" />
                      </linearGradient>
                      <linearGradient
                        id="paint53_linear_418_19994"
                        x1="12.1305"
                        y1="13.3758"
                        x2="13.3052"
                        y2="14.785"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#433F43" stopOpacity={0} />
                        <stop offset={1} stopColor="#1A1A1A" />
                      </linearGradient>
                      <linearGradient
                        id="paint54_linear_418_19994"
                        x1="11.4251"
                        y1="12.1873"
                        x2="12.6833"
                        y2="13.6657"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#433F43" stopOpacity={0} />
                        <stop offset={1} stopColor="#1A1A1A" />
                      </linearGradient>
                      <linearGradient
                        id="paint55_linear_418_19994"
                        x1="10.6687"
                        y1="4.64026"
                        x2="11.1396"
                        y2="5.33349"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#EF4424" stopOpacity={0} />
                        <stop offset={1} stopColor="#883F2E" />
                      </linearGradient>
                      <linearGradient
                        id="paint56_linear_418_19994"
                        x1="11.4861"
                        y1="10.0288"
                        x2="12.9115"
                        y2="12.4252"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#EAF6FF" />
                        <stop offset={1} stopColor="#B3DAFE" />
                      </linearGradient>
                      <linearGradient
                        id="paint57_linear_418_19994"
                        x1="12.0319"
                        y1="11.6651"
                        x2="12.1421"
                        y2="12.5958"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#B3DAFE" stopOpacity={0} />
                        <stop offset={1} stopColor="#7BACDF" />
                      </linearGradient>
                      <linearGradient
                        id="paint58_linear_418_19994"
                        x1="12.1193"
                        y1="10.127"
                        x2="12.0782"
                        y2="11.8424"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FEF0AE" />
                        <stop offset={1} stopColor="#FAC600" />
                      </linearGradient>
                      <linearGradient
                        id="paint59_linear_418_19994"
                        x1="12.7745"
                        y1="9.14176"
                        x2="12.8746"
                        y2="10.13"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FEF0AE" />
                        <stop offset={1} stopColor="#FAC600" />
                      </linearGradient>
                      <linearGradient
                        id="paint60_linear_418_19994"
                        x1="10.3353"
                        y1="10.6772"
                        x2="11.7085"
                        y2="12.6346"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FEF0AE" />
                        <stop offset={1} stopColor="#FAC600" />
                      </linearGradient>
                      <linearGradient
                        id="paint61_linear_418_19994"
                        x1="11.2732"
                        y1="11.3767"
                        x2="10.9684"
                        y2="13.1144"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FEA613" stopOpacity={0} />
                        <stop offset={1} stopColor="#E94444" />
                      </linearGradient>
                      <linearGradient
                        id="paint62_linear_418_19994"
                        x1="12.0759"
                        y1="11.268"
                        x2="11.776"
                        y2="12.4322"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FEA613" stopOpacity={0} />
                        <stop offset={1} stopColor="#E94444" />
                      </linearGradient>
                      <clipPath id="clip0_418_19994">
                        <rect
                          width="13.7352"
                          height="13.7352"
                          fill="white"
                          transform="translate(6.6044 2.97815) rotate(-9.57733)"
                        />
                      </clipPath>
                      <clipPath id="clip1_418_19994">
                        <rect
                          width="13.7352"
                          height="13.7352"
                          fill="white"
                          transform="translate(0.766754 14.1953) rotate(-80.0521)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </p>
                <span className="text-text_secondary  text-x1 font-normal not-italic leading-120 text-center flex items-end justify-end w-auto">
                  Tennis
                </span>
              </div>
              <div
                onClick={() => handleNavigate("/sports?eventTypeId=1")}
                className="flex items-center justify-between px-2 flex-col bg-bg_sportGameCard rounded border border-solid border-border_secondary w-full sm:w-[68px] gap-y-0.5 pt-2.5 pb-1 active:scale-95 transition-all duration-300 active:opacity-90 aspect-2"
              >
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
                            />
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
                    className="w-full h-full"
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
                  <span className="w-full h-full">🏀</span>
                </p>
                <span className="text-text_secondary  text-x1 font-normal not-italic leading-120 text-center flex items-end justify-end w-auto">
                  Basket Ball
                </span>
              </div>
              <div className="flex items-center justify-between px-2 flex-col bg-bg_sportGameCard rounded border border-solid border-border_secondary w-full sm:w-[68px] gap-y-0.5 pt-2.5 pb-1 active:scale-95 transition-all duration-300 active:opacity-90 aspect-2">
                <p className=" w-7 h-auto flex items-center justify-center">
                  <span className="w-full h-full">🏓</span>
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
                    src="/assets/images/ExchLogos/menu-kabaddi.png?q=65&w=625&ar=0.75&px=auto&auto=format&fit=fill&blur=0"
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
              <div className="flex items-center justify-between px-2 flex-col bg-bg_sportGameCard rounded border border-solid border-border_secondary w-full sm:w-[68px] gap-y-0.5 pt-2.5 pb-1 active:scale-95 transition-all duration-300 active:opacity-90 aspect-2">
                <p className=" w-7 h-auto flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={30}
                    height={16}
                    viewBox="0 0 22 6"
                    fill="none"
                  >
                    <g id="Objects" clipPath="url(#clip0_418_43278)">
                      <path
                        id="Vector"
                        opacity="0.2"
                        d="M22 5.14813C22 5.29249 17.0755 5.40985 10.9995 5.40985C4.92349 5.40985 0 5.29249 0 5.14813C0 5.00377 4.92452 4.88641 11.0005 4.88641C17.0765 4.88641 22.001 5.00377 22.001 5.14813H22Z"
                        fill="black"
                      />
                      <g id="Group">
                        <path
                          id="Vector_2"
                          d="M3.90418 2.86432H3.72388V2.25469C3.72388 2.2038 3.76383 2.1633 3.81403 2.1633C3.86423 2.1633 3.90418 2.2038 3.90418 2.25469V2.86432Z"
                          fill="#D1D1D1"
                        />
                        <path
                          id="Vector_3"
                          d="M11.0794 1.58172L8.48961 1.06036C8.07266 0.976242 7.64034 1.06036 7.28281 1.293L6.24197 1.97222H7.13529L7.46516 1.71465C7.78274 1.46748 8.18945 1.37089 8.58181 1.45086L10.4678 1.83305L11.0784 1.58068L11.0794 1.58172Z"
                          fill="#424242"
                        />
                        <path
                          id="Vector_4"
                          d="M18.6234 4.35883H6.79517V4.69532H18.6234V4.35883Z"
                          fill="#1F1F1F"
                        />
                        <path
                          id="Vector_5"
                          d="M18.5886 2.60574L19.4215 1.12061H21.1589L21.0186 1.34182C20.8762 1.56718 21.036 1.86317 21.2993 1.86317L20.4541 3.65676H18.4923L18.5886 2.48007"
                          fill="#B5292A"
                        />
                        <path
                          id="Vector_6"
                          d="M21.0237 2.4458H18.6777L18.5886 2.60574V2.48007L18.4923 3.65676H20.4541L21.0237 2.4458Z"
                          fill="#292929"
                        />
                        <path
                          id="Vector_7"
                          d="M18.5302 4.35881H8.51725L7.08815 3.63494H4.32727L1.8481 4.03894C1.57765 4.10125 1.29593 4.09086 1.0306 4.0109C0.812389 3.94443 0.790875 3.63909 0.997813 3.54251L4.26273 2.35544C4.79954 2.10411 5.3845 1.97429 5.9756 1.97429H8.54287C9.07865 1.71673 9.66463 1.58275 10.2578 1.58275H11.0784V1.41035L11.021 1.34492C10.9718 1.2878 10.9452 1.2151 10.9452 1.14033V0.535889H14.8883L18.5046 2.94638L18.5292 4.36089L18.5302 4.35881Z"
                          fill="#D1D1D1"
                        />
                        <path
                          id="Vector_8"
                          d="M5.97663 1.97327C5.38553 1.97327 4.80057 2.10309 4.26376 2.35442L0.998843 3.54149C0.791905 3.63807 0.812394 3.94341 1.03163 4.00987C1.2191 4.06699 1.41477 4.08777 1.60941 4.07323C1.75693 4.05349 1.84913 4.03792 1.84913 4.03792L4.36927 3.30366L5.97766 1.97327H5.97663Z"
                          fill="#B5292A"
                        />
                        <path
                          id="Vector_9"
                          opacity="0.1"
                          d="M3.14504 3.14683L1.67087 3.76789C1.58686 3.8032 1.49056 3.7627 1.45573 3.67753C1.4209 3.59237 1.46085 3.49475 1.54486 3.45944L3.01904 2.83838C3.10304 2.80307 3.19934 2.84357 3.23417 2.92874C3.269 3.0139 3.22905 3.11152 3.14504 3.14683Z"
                          fill="white"
                        />
                        <path
                          id="Vector_10"
                          d="M9.74863 4.1646L9.65848 4.09709C8.72726 3.40022 7.60139 3.02426 6.44376 3.02426H4.52088L1.44241 4.07736C1.57866 4.08151 1.71492 4.06905 1.84809 4.03789L4.32726 3.63389H7.08814L8.51724 4.35777H9.74863V4.16356V4.1646Z"
                          fill="#292929"
                        />
                        <path
                          id="Vector_11"
                          d="M17.518 1.6056L14.8893 0.533813H14.0523L16.9566 2.28482L17.518 1.6056Z"
                          fill="#424242"
                        />
                        <g id="Group_2">
                          <path
                            id="Vector_12"
                            d="M5.37117 5.14813C6.19778 5.14813 6.86789 4.45252 6.86789 3.59445C6.86789 2.73638 6.19778 2.04077 5.37117 2.04077C4.54455 2.04077 3.87445 2.73638 3.87445 3.59445C3.87445 4.45252 4.54455 5.14813 5.37117 5.14813Z"
                            fill="#292929"
                          />
                          <path
                            id="Vector_13"
                            d="M5.37116 4.67558C5.946 4.67558 6.412 4.19154 6.412 3.59444C6.412 2.99735 5.946 2.51331 5.37116 2.51331C4.79632 2.51331 4.33032 2.99735 4.33032 3.59444C4.33032 4.19154 4.79632 4.67558 5.37116 4.67558Z"
                            stroke="#F7E041"
                            strokeWidth="1.32"
                            strokeMiterlimit={10}
                          />
                          <path
                            id="Vector_14"
                            d="M4.76981 3.59445C4.76981 3.93925 5.03924 4.21862 5.37116 4.21862C5.70308 4.21862 5.97251 3.93925 5.97251 3.59445C5.97251 3.24965 5.70308 2.97028 5.37116 2.97028C5.03924 2.97028 4.76981 3.24965 4.76981 3.59445Z"
                            fill="#D1D1D1"
                          />
                          <path
                            id="Vector_15"
                            d="M4.8692 3.59444C4.8692 3.88212 5.09458 4.1158 5.37118 4.1158C5.64778 4.1158 5.87316 3.88212 5.87316 3.59444C5.87316 3.30676 5.64778 3.07309 5.37118 3.07309C5.09458 3.07309 4.8692 3.30676 4.8692 3.59444Z"
                            fill="#888888"
                          />
                          <path
                            id="Vector_16"
                            d="M5.30766 3.58304H5.43469V3.02533H5.30766V3.58304Z"
                            fill="#D1D1D1"
                          />
                          <path
                            id="Vector_17"
                            d="M5.33489 3.54044L5.42471 3.6315L5.81371 3.23714L5.72389 3.14608L5.33489 3.54044Z"
                            fill="#D1D1D1"
                          />
                          <path
                            id="Vector_18"
                            d="M5.38345 3.53006V3.65884H5.93358V3.53006H5.38345Z"
                            fill="#D1D1D1"
                          />
                          <path
                            id="Vector_19"
                            d="M5.42445 3.55768L5.33463 3.64874L5.72362 4.0431L5.81345 3.95204L5.42445 3.55768Z"
                            fill="#D1D1D1"
                          />
                          <path
                            id="Vector_20"
                            d="M5.43468 3.6069H5.30765V4.16461H5.43468V3.6069Z"
                            fill="#D1D1D1"
                          />
                          <path
                            id="Vector_21"
                            d="M5.40742 3.64947L5.3176 3.55841L4.9286 3.95277L5.01842 4.04383L5.40742 3.64947Z"
                            fill="#D1D1D1"
                          />
                          <path
                            id="Vector_22"
                            d="M5.35889 3.65988V3.5311H4.80876V3.65988H5.35889Z"
                            fill="#D1D1D1"
                          />
                          <path
                            id="Vector_23"
                            d="M5.31688 3.63122L5.40671 3.54016L5.01771 3.1458L4.92788 3.23687L5.31688 3.63122Z"
                            fill="#D1D1D1"
                          />
                          <path
                            id="Vector_24"
                            d="M5.23593 3.59446C5.23593 3.67235 5.29637 3.73466 5.37116 3.73466C5.44594 3.73466 5.50639 3.67235 5.50639 3.59446C5.50639 3.51657 5.44594 3.45425 5.37116 3.45425C5.29637 3.45425 5.23593 3.51657 5.23593 3.59446Z"
                            fill="#888888"
                          />
                        </g>
                        <path
                          id="Vector_25"
                          d="M3.09588 3.67545H0.701752V4.54472H3.09588V3.67545Z"
                          fill="#E2413E"
                        />
                        <path
                          id="Vector_26"
                          d="M9.75889 3.85201L9.5581 3.55706C9.40853 3.33689 9.16164 3.20603 8.89836 3.20603C8.70269 3.20603 8.54492 3.04506 8.54492 2.84773V1.97327L10.4145 2.18513C10.9862 2.24952 11.525 2.48631 11.9635 2.86539C12.4849 3.31612 13.1467 3.5633 13.8321 3.5633H17.0028L17.2773 4.35883L10.726 4.36402C10.3408 4.36402 9.98017 4.17293 9.76196 3.85201H9.75889Z"
                          fill="white"
                        />
                        <path
                          id="Vector_27"
                          opacity="0.2"
                          d="M13.1211 4.11891C12.3702 4.09503 11.7596 3.95482 11.3253 3.78346C10.7977 3.57575 10.226 3.28599 9.86644 3.12709C9.50686 2.9682 9.12269 2.96093 8.99054 3.08763C8.9342 3.14163 8.8758 3.17591 8.82663 3.19875C8.85019 3.20395 8.87375 3.20602 8.89937 3.20602C9.16265 3.20602 9.40954 3.33688 9.55911 3.55706L9.7599 3.85201C9.97913 4.17292 10.3397 4.36401 10.7239 4.36401L13.199 4.36194C13.3793 4.23316 13.409 4.12826 13.1221 4.11891H13.1211Z"
                          fill="black"
                        />
                        <path
                          id="Vector_28"
                          d="M12.9101 3.88524L7.77557 4.02959L8.51727 4.40659H17.2753V3.57471L12.9101 3.88524Z"
                          fill="#292929"
                        />
                        <g id="Group_3">
                          <path
                            id="Vector_29"
                            d="M18.3007 5.14813C19.249 5.14813 20.0177 4.34976 20.0177 3.36493C20.0177 2.38009 19.249 1.58173 18.3007 1.58173C17.3525 1.58173 16.5837 2.38009 16.5837 3.36493C16.5837 4.34976 17.3525 5.14813 18.3007 5.14813Z"
                            fill="#292929"
                          />
                          <path
                            id="Vector_30"
                            d="M18.3007 4.57171C18.9429 4.57171 19.4635 4.03141 19.4635 3.36491C19.4635 2.69842 18.9429 2.15811 18.3007 2.15811C17.6586 2.15811 17.138 2.69842 17.138 3.36491C17.138 4.03141 17.6586 4.57171 18.3007 4.57171Z"
                            stroke="#F7E041"
                            strokeWidth="1.47"
                            strokeMiterlimit={10}
                          />
                          <path
                            id="Vector_31"
                            d="M17.5887 3.36494C17.5887 3.77309 17.9073 4.10439 18.3007 4.10439C18.6941 4.10439 19.0127 3.77309 19.0127 3.36494C19.0127 2.95679 18.6941 2.62549 18.3007 2.62549C17.9073 2.62549 17.5887 2.95679 17.5887 3.36494Z"
                            fill="#D1D1D1"
                          />
                          <path
                            id="Vector_32"
                            d="M18.3007 3.98286C18.6289 3.98286 18.8949 3.7062 18.8949 3.36492C18.8949 3.02364 18.6289 2.74698 18.3007 2.74698C17.9726 2.74698 17.7065 3.02364 17.7065 3.36492C17.7065 3.7062 17.9726 3.98286 18.3007 3.98286Z"
                            fill="#888888"
                          />
                          <path
                            id="Vector_33"
                            d="M18.2249 3.35037H18.3755V2.69089H18.2249V3.35037Z"
                            fill="#D1D1D1"
                          />
                          <path
                            id="Vector_34"
                            d="M18.2568 3.30132L18.3633 3.40927L18.8233 2.94295L18.7168 2.83499L18.2568 3.30132Z"
                            fill="#D1D1D1"
                          />
                          <path
                            id="Vector_35"
                            d="M18.3151 3.2891V3.44177H18.9656V3.2891H18.3151Z"
                            fill="#D1D1D1"
                          />
                          <path
                            id="Vector_36"
                            d="M18.3641 3.32109L18.2576 3.42905L18.7176 3.89537L18.8241 3.78742L18.3641 3.32109Z"
                            fill="#D1D1D1"
                          />
                          <path
                            id="Vector_37"
                            d="M18.3765 3.37946H18.2259V4.03894H18.3765V3.37946Z"
                            fill="#D1D1D1"
                          />
                          <path
                            id="Vector_38"
                            d="M18.3433 3.42958L18.2368 3.32162L17.7768 3.78795L17.8833 3.8959L18.3433 3.42958Z"
                            fill="#D1D1D1"
                          />
                          <path
                            id="Vector_39"
                            d="M18.2864 3.44179V3.28912H17.6359V3.44179H18.2864Z"
                            fill="#D1D1D1"
                          />
                          <path
                            id="Vector_40"
                            d="M18.2366 3.40876L18.343 3.30081L17.8831 2.83449L17.7766 2.94244L18.2366 3.40876Z"
                            fill="#D1D1D1"
                          />
                          <path
                            id="Vector_41"
                            d="M18.1409 3.36493C18.1409 3.45632 18.2126 3.5311 18.3007 3.5311C18.3888 3.5311 18.4605 3.45736 18.4605 3.36493C18.4605 3.2725 18.3888 3.19876 18.3007 3.19876C18.2126 3.19876 18.1409 3.27354 18.1409 3.36493Z"
                            fill="#888888"
                          />
                        </g>
                        <path
                          id="Vector_42"
                          d="M9.42698 4.35881L8.83792 3.65259C8.68528 3.46981 8.46195 3.36491 8.22633 3.36491H7.97226C7.91387 3.0305 7.626 2.78644 7.29101 2.78644H7.11685V4.364L9.428 4.35881H9.42698Z"
                          fill="#E2413E"
                        />
                        <path
                          id="Vector_43"
                          d="M11.8344 0H11.0517C10.8919 0 10.7618 0.131897 10.7618 0.293911H11.5445C11.7043 0.293911 11.8344 0.162015 11.8344 0Z"
                          fill="#292929"
                        />
                        <path
                          id="Vector_44"
                          d="M11.4902 0.293915H10.9462V0.533821H11.4902V0.293915Z"
                          fill="#292929"
                        />
                        <path
                          id="Vector_45"
                          opacity="0.1"
                          d="M12.8394 0.977266H11.2433C11.1521 0.977266 11.0794 0.90249 11.0794 0.811097C11.0794 0.718665 11.1532 0.644928 11.2433 0.644928H12.8394C12.9306 0.644928 13.0033 0.719704 13.0033 0.811097C13.0033 0.903528 12.9296 0.977266 12.8394 0.977266Z"
                          fill="white"
                        />
                        <path
                          id="Vector_46"
                          opacity="0.1"
                          d="M10.7782 2.67428L9.18622 2.55069C9.09606 2.54342 9.02845 2.46345 9.0346 2.37206C9.04177 2.28066 9.12065 2.21212 9.2108 2.21835L10.8028 2.34194C10.8929 2.34921 10.9606 2.42918 10.9544 2.52057C10.9472 2.61196 10.8684 2.68051 10.7782 2.67428Z"
                          fill="white"
                        />
                        <path
                          id="Vector_47"
                          d="M8.77441 3.03986C8.6904 3.03986 8.62177 2.97027 8.62177 2.88511V2.23498C8.62177 2.14981 8.6904 2.08023 8.77441 2.08023C8.85841 2.08023 8.92705 2.14981 8.92705 2.23498V2.88511C8.92705 2.97027 8.85841 3.03986 8.77441 3.03986Z"
                          fill="#1F1F1F"
                        />
                        <path
                          id="Vector_48"
                          d="M15.5163 2.60886H13.7122V2.96404H15.5163V2.60886Z"
                          fill="#B5292A"
                        />
                        <path
                          id="Vector_49"
                          d="M20.6098 1.40933H19.6079V1.73959H20.6098V1.40933Z"
                          fill="white"
                        />
                        <path
                          id="Vector_50"
                          d="M11.9717 1.70322C11.9717 1.81538 11.8826 1.90574 11.7719 1.90574C11.6613 1.90574 11.5722 1.81538 11.5722 1.70322C11.5722 1.59106 11.6613 1.5007 11.7719 1.5007C11.8826 1.5007 11.9717 1.59106 11.9717 1.70322Z"
                          fill="#B5292A"
                        />
                        <path
                          id="Vector_51"
                          d="M8.43839 3.88626H7.32379V4.04412H8.43839V3.88626Z"
                          fill="white"
                        />
                        <path
                          id="Vector_52"
                          d="M8.12183 2.21732H6.94781V2.4458H8.12183V2.21732Z"
                          fill="white"
                        />
                        <path
                          id="Vector_53"
                          d="M13.1211 1.73959H12.5249V2.28484H13.1211V1.73959Z"
                          fill="#B5292A"
                        />
                        <path
                          id="Vector_54"
                          d="M14.3084 1.73959H13.7122V2.28484H14.3084V1.73959Z"
                          fill="#B5292A"
                        />
                        <path
                          id="Vector_55"
                          d="M3.18399 4.54471H0.701752V4.76281H3.18399V4.54471Z"
                          fill="#1F1F1F"
                        />
                        <path
                          id="Vector_56"
                          d="M0.701752 4.34634H2.00382L3.09588 3.91638V4.54471H0.701752V4.34634Z"
                          fill="#292929"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_418_43278">
                        <rect width={22} height="5.40984" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </p>
                <span className="text-text_secondary  text-x1 font-normal not-italic leading-120 text-center flex items-end justify-end w-auto">
                  Formula1
                </span>
              </div>
              <div className="flex items-center justify-between px-2 flex-col bg-bg_sportGameCard rounded border border-solid border-border_secondary w-full sm:w-[68px] gap-y-0.5 pt-2.5 pb-1 active:scale-95 transition-all duration-300 active:opacity-90 aspect-2">
                <p className=" w-7 h-auto flex items-center justify-center">
                  <span>⛳</span>
                </p>
                <span className="text-text_secondary  text-x1 font-normal not-italic leading-120 text-center flex items-end justify-end w-auto">
                  Golf
                </span>
              </div>
              <div className="flex items-center justify-between px-2 flex-col bg-bg_sportGameCard rounded border border-solid border-border_secondary w-full sm:w-[68px] gap-y-0.5 pt-2.5 pb-1 active:scale-95 transition-all duration-300 active:opacity-90 aspect-2">
                <p className=" w-7 h-auto flex items-center justify-center" />
                <div
                  className="relative overflow-hidden w-7 h-7"
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="/assets/images/ExchLogos/SportIcon/menu-baseball.png?q=10&w=625&ar=0.75&px=auto&auto=format&fit=fill&blur=100"
                    alt="Baseball"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className="  w-full h-full"
                    title="Baseball"
                    loading="eager"
                  />
                </div>
                <p />
                <span className="text-text_secondary  text-x1 font-normal not-italic leading-120 text-center flex items-end justify-end w-auto">
                  Baseball
                </span>
              </div>
              <div className="flex items-center justify-between px-2 flex-col bg-bg_sportGameCard rounded border border-solid border-border_secondary w-full sm:w-[68px] gap-y-0.5 pt-2.5 pb-1 active:scale-95 transition-all duration-300 active:opacity-90 aspect-2">
                <p className=" w-7 h-auto flex items-center justify-center">
                  <span>⚾</span>
                </p>
                <span className="text-text_secondary  text-x1 font-normal not-italic leading-120 text-center flex items-end justify-end w-auto">
                  FIFA
                </span>
              </div>
              <div className="flex items-center justify-between px-2 flex-col bg-bg_sportGameCard rounded border border-solid border-border_secondary w-full sm:w-[68px] gap-y-0.5 pt-2.5 pb-1 active:scale-95 transition-all duration-300 active:opacity-90 aspect-2">
                <p className=" w-7 h-auto flex items-center justify-center" />
                <div
                  className="relative overflow-hidden w-7 h-7"
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="/assets/images/ExchLogos/SportIcon/menu-vollyBall.svg?q=65&w=625&ar=0.75&px=auto&auto=format&fit=fill&blur=0"
                    alt="Vollyball"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className="  w-full h-full"
                    title="Vollyball"
                    loading="eager"
                  />
                </div>
                <p />
                <span className="text-text_secondary  text-x1 font-normal not-italic leading-120 text-center flex items-end justify-end w-auto">
                  Vollyball
                </span>
              </div>
              <div className="flex items-center justify-between px-2 flex-col bg-bg_sportGameCard rounded border border-solid border-border_secondary w-full sm:w-[68px] gap-y-0.5 pt-2.5 pb-1 active:scale-95 transition-all duration-300 active:opacity-90 aspect-2">
                <p className=" w-7 h-auto flex items-center justify-center">
                  <span>⚾</span>
                </p>
                <span className="text-text_secondary  text-x1 font-normal not-italic leading-120 text-center flex items-end justify-end w-auto">
                  FIFA24
                </span>
              </div>
              <div className="flex items-center justify-between px-2 flex-col bg-bg_sportGameCard rounded border border-solid border-border_secondary w-full sm:w-[68px] gap-y-0.5 pt-2.5 pb-1 active:scale-95 transition-all duration-300 active:opacity-90 aspect-2">
                <p className=" w-7 h-auto flex items-center justify-center" />
                <div
                  className="relative overflow-hidden w-7 h-7"
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="/assets/images/ExchLogos/SportIcon/menu-eCricket.svg?q=65&w=625&ar=0.75&px=auto&auto=format&fit=fill&blur=0"
                    alt="E-cricket"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className="  w-full h-full"
                    title="E-cricket"
                    loading="eager"
                  />
                </div>
                <p />
                <span className="text-text_secondary  text-x1 font-normal not-italic leading-120 text-center flex items-end justify-end w-auto">
                  E-cricket
                </span>
              </div>
              <div className="flex items-center justify-between px-2 flex-col bg-bg_sportGameCard rounded border border-solid border-border_secondary w-full sm:w-[68px] gap-y-0.5 pt-2.5 pb-1 active:scale-95 transition-all duration-300 active:opacity-90 aspect-2">
                <p className=" w-7 h-auto flex items-center justify-center">
                  <span>🏒</span>
                </p>
                <span className="text-text_secondary  text-x1 font-normal not-italic leading-120 text-center flex items-end justify-end w-auto">
                  Ice Hockey
                </span>
              </div>
              <div className="flex items-center justify-between px-2 flex-col bg-bg_sportGameCard rounded border border-solid border-border_secondary w-full sm:w-[68px] gap-y-0.5 pt-2.5 pb-1 active:scale-95 transition-all duration-300 active:opacity-90 aspect-2">
                <p className=" w-7 h-auto flex items-center justify-center" />
                <div
                  className="relative overflow-hidden w-7 h-7"
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="/assets/images/ExchLogos/SportIcon/menu-HandBall.svg?q=65&w=625&ar=0.75&px=auto&auto=format&fit=fill&blur=0"
                    alt="Handball"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className="  w-full h-full"
                    title="Handball"
                    loading="eager"
                  />
                </div>
                <p />
                <span className="text-text_secondary  text-x1 font-normal not-italic leading-120 text-center flex items-end justify-end w-auto">
                  Handball
                </span>
              </div>
              <div className="flex items-center justify-between px-2 flex-col bg-bg_sportGameCard rounded border border-solid border-border_secondary w-full sm:w-[68px] gap-y-0.5 pt-2.5 pb-1 active:scale-95 transition-all duration-300 active:opacity-90 aspect-2">
                <p className=" w-7 h-auto flex items-center justify-center" />
                <div
                  className="relative overflow-hidden w-7 h-7"
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="/assets/images/ExchLogos/SportIcon/menu-cycling.png?q=65&w=625&ar=0.75&px=auto&auto=format&fit=fill&blur=0"
                    alt="Cycling"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className="  w-full h-full"
                    title="Cycling"
                    loading="eager"
                  />
                </div>
                <p />
                <span className="text-text_secondary  text-x1 font-normal not-italic leading-120 text-center flex items-end justify-end w-auto">
                  Cycling
                </span>
              </div>
              <div className="flex items-center justify-between px-2 flex-col bg-bg_sportGameCard rounded border border-solid border-border_secondary w-full sm:w-[68px] gap-y-0.5 pt-2.5 pb-1 active:scale-95 transition-all duration-300 active:opacity-90 aspect-2">
                <p className=" w-7 h-auto flex items-center justify-center" />
                <div
                  className="relative overflow-hidden w-7 h-7"
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="/assets/images/ExchLogos/SportIcon/menu-darts.svg?q=65&w=625&ar=0.75&px=auto&auto=format&fit=fill&blur=0"
                    alt="Darts"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className="  w-full h-full"
                    title="Darts"
                    loading="eager"
                  />
                </div>
                <p />
                <span className="text-text_secondary  text-x1 font-normal not-italic leading-120 text-center flex items-end justify-end w-auto">
                  Darts
                </span>
              </div>
              <div className="flex items-center justify-between px-2 flex-col bg-bg_sportGameCard rounded border border-solid border-border_secondary w-full sm:w-[68px] gap-y-0.5 pt-2.5 pb-1 active:scale-95 transition-all duration-300 active:opacity-90 aspect-2">
                <p className=" w-7 h-auto flex items-center justify-center" />
                <div
                  className="relative overflow-hidden w-7 h-7"
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="/assets/images/ExchLogos/SportIcon/menu-snooker.png?q=65&w=625&ar=0.75&px=auto&auto=format&fit=fill&blur=0"
                    alt="Snooker"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className="  w-full h-full"
                    title="Snooker"
                    loading="eager"
                  />
                </div>
                <p />
                <span className="text-text_secondary  text-x1 font-normal not-italic leading-120 text-center flex items-end justify-end w-auto">
                  Snooker
                </span>
              </div>
              <div className="flex items-center justify-between px-2 flex-col bg-bg_sportGameCard rounded border border-solid border-border_secondary w-full sm:w-[68px] gap-y-0.5 pt-2.5 pb-1 active:scale-95 transition-all duration-300 active:opacity-90 aspect-2">
                <p className=" w-7 h-auto flex items-center justify-center">
                  <span>🏈</span>
                </p>
                <span className="text-text_secondary  text-x1 font-normal not-italic leading-120 text-center flex items-end justify-end w-auto">
                  American Football
                </span>
              </div>
              <div className="flex items-center justify-between px-2 flex-col bg-bg_sportGameCard rounded border border-solid border-border_secondary w-full sm:w-[68px] gap-y-0.5 pt-2.5 pb-1 active:scale-95 transition-all duration-300 active:opacity-90 aspect-2">
                <p className=" w-7 h-auto flex items-center justify-center" />
                <div
                  className="relative overflow-hidden w-7 h-7"
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img
                    src="/assets/images/ExchLogos/SportIcon/menu-nba2k19.svg?q=65&w=625&ar=0.75&px=auto&auto=format&fit=fill&blur=0"
                    alt="NBA2K"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                    className="  w-full h-full"
                    title="NBA2K"
                    loading="eager"
                  />
                </div>
                <p />
                <span className="text-text_secondary  text-x1 font-normal not-italic leading-120 text-center flex items-end justify-end w-auto">
                  NBA2K
                </span>
              </div>
              <div className="flex items-center justify-between px-2 flex-col bg-bg_sportGameCard rounded border border-solid border-border_secondary w-full sm:w-[68px] gap-y-0.5 pt-2.5 pb-1 active:scale-95 transition-all duration-300 active:opacity-90 aspect-2">
                <p className=" w-7 h-auto flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width={18}
                    height={18}
                    x={0}
                    y={0}
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                  >
                    <g>
                      <circle
                        cx={356}
                        cy={238}
                        r={146}
                        fill="#6e83b7"
                        opacity={1}
                        data-original="#6e83b7"
                      />
                      <path
                        fill="#6e83b7"
                        d="M502 238c0 5.039-.255 10.018-.754 14.926a145.198 145.198 0 0 1-23.948 66.353c-21.532 32.073-55.45 55.136-94.906 62.341-8.563 1.561-17.383 2.38-26.392 2.38s-17.829-.819-26.393-2.38c-39.456-7.205-73.374-30.268-94.906-62.341a145.198 145.198 0 0 1-23.948-66.353A147.82 147.82 0 0 1 210 238c0-35.633 12.766-68.282 33.972-93.63 14.79-17.68 33.693-31.805 55.237-40.91C316.663 96.083 335.857 92 356 92s39.337 4.083 56.792 11.46c21.544 9.104 40.447 23.229 55.237 40.91C489.234 169.718 502 202.367 502 238z"
                        opacity={1}
                        data-original="#6e83b7"
                      />
                      <circle
                        cx={356}
                        cy={238}
                        r="136.504"
                        fill="#edeff1"
                        opacity={1}
                        data-original="#edeff1"
                      />
                      <path
                        fill="#6e83b7"
                        d="m410.813 235.628 44.536-16.764 45.897 34.062c.499-4.908.754-9.887.754-14.926 0-35.633-12.766-68.282-33.972-93.63l-19.63 55.741-43.572 16.4L366 187.877v-49.908l46.792-34.508C395.337 96.083 376.143 92 356 92s-39.337 4.083-56.792 11.46L346 137.969v49.908l-38.827 28.635-43.572-16.4-19.63-55.741C222.766 169.718 210 202.367 210 238c0 5.039.255 10.018.754 14.926l45.897-34.062 44.536 16.764 14.538 46.038-23.923 34.505-57.1 3.108c21.532 32.072 55.45 55.136 94.906 62.341l-20.469-55.354 22.929-33.071h47.864l22.929 33.071-20.469 55.354c39.456-7.205 73.374-30.269 94.906-62.341l-57.1-3.108-23.923-34.505z"
                        opacity={1}
                        data-original="#6e83b7"
                      />
                      <path
                        fill="#ffd3b3"
                        d="m502 359.429-42.949 13.966a60.005 60.005 0 0 1-37.109 0l-24.394-7.933a60.008 60.008 0 0 0-37.11 0l-24.391 7.932a59.996 59.996 0 0 1-37.111 0l-24.387-7.931a60 60 0 0 0-37.112 0l-24.384 7.93a60.003 60.003 0 0 1-37.113 0l-24.387-7.931a60 60 0 0 0-37.112 0l-24.387 7.931a60 60 0 0 1-37.112 0L10 359.429V502h492z"
                        opacity={1}
                        data-original="#ffd3b3"
                      />
                      <circle
                        cx={72}
                        cy={412}
                        r={10}
                        fill="#fcb98b"
                        opacity={1}
                        data-original="#fcb98b"
                      />
                      <circle
                        cx={212}
                        cy={450}
                        r={10}
                        fill="#fcb98b"
                        opacity={1}
                        data-original="#fcb98b"
                      />
                      <circle
                        cx={157}
                        cy={478}
                        r={10}
                        fill="#fcb98b"
                        opacity={1}
                        data-original="#fcb98b"
                      />
                      <circle
                        cx={117}
                        cy={440}
                        r={10}
                        fill="#fcb98b"
                        opacity={1}
                        data-original="#fcb98b"
                      />
                      <circle
                        cx={256}
                        cy={478}
                        r={10}
                        fill="#fcb98b"
                        opacity={1}
                        data-original="#fcb98b"
                      />
                      <circle
                        cx={49}
                        cy={478}
                        r={10}
                        fill="#fcb98b"
                        opacity={1}
                        data-original="#fcb98b"
                      />
                      <circle
                        cx={177}
                        cy={404}
                        r={10}
                        fill="#fcb98b"
                        opacity={1}
                        data-original="#fcb98b"
                      />
                      <circle
                        cx={440}
                        cy={412}
                        r={10}
                        fill="#fcb98b"
                        opacity={1}
                        data-original="#fcb98b"
                      />
                      <circle
                        cx={300}
                        cy={450}
                        r={10}
                        fill="#fcb98b"
                        opacity={1}
                        data-original="#fcb98b"
                      />
                      <circle
                        cx={355}
                        cy={478}
                        r={10}
                        fill="#fcb98b"
                        opacity={1}
                        data-original="#fcb98b"
                      />
                      <circle
                        cx={395}
                        cy={440}
                        r={10}
                        fill="#fcb98b"
                        opacity={1}
                        data-original="#fcb98b"
                      />
                      <circle
                        cx={463}
                        cy={478}
                        r={10}
                        fill="#fcb98b"
                        opacity={1}
                        data-original="#fcb98b"
                      />
                      <circle
                        cx={335}
                        cy={404}
                        r={10}
                        fill="#fcb98b"
                        opacity={1}
                        data-original="#fcb98b"
                      />
                      <circle
                        cx={256}
                        cy={408}
                        r={10}
                        fill="#fcb98b"
                        opacity={1}
                        data-original="#fcb98b"
                      />
                    </g>
                  </svg>
                </p>
                <span className="text-text_secondary  text-x1 font-normal not-italic leading-120 text-center flex items-end justify-end w-auto">
                  Beach Soccer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;

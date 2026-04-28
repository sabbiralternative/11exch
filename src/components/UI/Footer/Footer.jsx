import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Menu from "../../modals/Menu/Menu";

const Footer = () => {
  const [showMenuModal, setShowMenuModal] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className>
      {showMenuModal && <Menu setShowMenuModal={setShowMenuModal} />}
      <div className="w-full flex items-center justify-center px-1.5 fixed bottom-1 left-0 right-0 z-[101] z-51">
        <div className="w-full lg:w-[475px] bg-bg_primary2 flex items-center justify-start px-2 py-1.5 rounded-xl">
          <div className="w-[39%] flex items-center justify-between gap-x-1">
            <nav
              onClick={() => navigate("/casino")}
              className="flex items-center justify-center flex-col gap-y-1 relative cursor-pointer active:scale-95 transition-all ease-in-out duration-300 w-full"
            >
              <div
                className={`absolute h-[3px] top-[-8px] left-0 rounded-md  ${pathname === "/casino" ? "bg-exchLoginGradient smoothIncreaseWidth" : ""}`}
              />
              <span
                className={`w-6 h-6  ${pathname === "/casino" ? "opacity-100" : "opacity-50"}`}
              >
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 16 17"
                  fill="var(--color-icon_secondary)"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="fi_5140359" clipPath="url(#clip0_523_64764)">
                    <path
                      id="Vector"
                      d="M7.52941 16.4864C5.67455 16.3788 3.98926 15.6393 2.68563 14.4799L4.35348 12.812C5.22516 13.5499 6.32357 14.0282 7.52941 14.1277V16.4864ZM2.02012 13.8144C0.860737 12.5107 0.121205 10.8254 0.0136108 8.97058H2.37227C2.47175 10.1764 2.95008 11.2748 3.68797 12.1465L2.02012 13.8144ZM0.0136108 8.02941C0.121205 6.17455 0.860737 4.48926 2.02012 3.18563L3.68797 4.85348C2.95008 5.72516 2.47175 6.82357 2.37227 8.02941H0.0136108ZM2.68563 2.52012C3.98926 1.36074 5.67455 0.621205 7.52941 0.513611V2.87227C6.32357 2.97175 5.22516 3.45008 4.35348 4.18797L2.68563 2.52012ZM8.47058 0.513611C10.3254 0.621205 12.0107 1.36074 13.3144 2.52012L11.6465 4.18797C10.7748 3.45008 9.67642 2.97175 8.47058 2.87227V0.513611ZM13.9799 3.18563C15.1393 4.48926 15.8788 6.17455 15.9864 8.02941H13.6277C13.5282 6.82357 13.0499 5.72516 12.312 4.85348L13.9799 3.18563ZM15.9864 8.97058C15.8788 10.8254 15.1393 12.5107 13.9799 13.8144L12.312 12.1465C13.0499 11.2748 13.5282 10.1764 13.6277 8.97058H15.9864ZM13.3144 14.4799C12.0107 15.6393 10.3254 16.3788 8.47058 16.4864V14.1277C9.67642 14.0282 10.7748 13.5499 11.6465 12.812L13.3144 14.4799ZM8 13.2059C5.40101 13.2059 3.29411 11.099 3.29411 8.5C3.29411 5.90101 5.40101 3.79411 8 3.79411C10.599 3.79411 12.7059 5.90101 12.7059 8.5C12.7059 11.099 10.599 13.2059 8 13.2059Z"
                      fill="var(--color-icon_secondary)"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_523_64764">
                      <rect
                        width={16}
                        height={16}
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span
                className={`text-text_secondary w-full text-center truncate font-roboto text-[11px] font-normal leading-150 tracking-[0.3px]  ${pathname === "/casino" ? "opacity-100" : "opacity-30"}`}
              >
                Casino
              </span>
            </nav>
            <nav
              onClick={() => navigate("/sports?eventTypeId=4")}
              className="flex items-center justify-center flex-col gap-y-1 relative cursor-pointer active:scale-95 transition-all ease-in-out duration-300 w-full"
            >
              <div
                className={`absolute h-[3px] top-[-8px] left-0 rounded-md  ${pathname === "/sports" ? "bg-exchLoginGradient smoothIncreaseWidth" : ""}`}
              />
              <span
                className={`w-6 h-6  ${pathname === "/sports" ? "opacity-100" : "opacity-50"}`}
              >
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 16 17"
                  fill="var(--color-icon_secondary)"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="fi_1165187" clipPath="url(#clip0_523_64768)">
                    <path
                      id="Vector"
                      d="M8 0.5C3.58177 0.5 0 4.08177 0 8.5C0 12.9182 3.58177 16.5 8 16.5C12.4182 16.5 16 12.9182 16 8.5C15.9951 4.08385 12.4161 0.504948 8 0.5ZM8.28555 2.80638L11.0667 1.69466C11.3823 1.8375 11.6876 2.00208 11.9805 2.18724L11.9878 2.1918C12.2755 2.37409 12.5505 2.57578 12.8109 2.79544L12.8333 2.81497C12.9501 2.91445 13.0637 3.01745 13.1741 3.1237C13.188 3.13737 13.2026 3.15039 13.2165 3.16432C13.3323 3.27734 13.4444 3.39388 13.5529 3.5138C13.5618 3.52396 13.5704 3.53464 13.5794 3.54479C13.6746 3.65143 13.7661 3.76185 13.8549 3.87409C13.8763 3.90078 13.8977 3.92747 13.9184 3.95417C14.0147 4.07891 14.1079 4.20586 14.196 4.33685L13.6415 6.69362L10.9138 7.603L8.2862 5.50052L8.28555 2.80638ZM2.08138 3.95573C2.10208 3.92904 2.12318 3.90234 2.14453 3.87578C2.23229 3.76445 2.32305 3.65586 2.4168 3.54987C2.42695 3.53867 2.43633 3.52721 2.44635 3.51602C2.55417 3.39583 2.66576 3.27943 2.78138 3.16667C2.79466 3.15365 2.80794 3.13997 2.82188 3.128C2.93138 3.0224 3.04401 2.92005 3.15977 2.82109L3.18646 2.7987C3.44453 2.5806 3.71693 2.38021 4.00182 2.1987L4.01224 2.19206C4.30339 2.00729 4.60677 1.84297 4.92057 1.7L7.71445 2.80638V5.49974L5.08672 7.60182L2.35898 6.69414L1.80456 4.33737C1.89336 4.20664 1.98555 4.07995 2.08138 3.95573ZM1.76003 12.5921C1.68164 12.4725 1.60664 12.3508 1.53516 12.2267L1.51784 12.1967C1.44674 12.0733 1.37943 11.9478 1.31602 11.8203L1.3138 11.8163C1.18021 11.548 1.06289 11.272 0.96263 10.9896V10.987C0.915234 10.8536 0.872005 10.7171 0.832031 10.5797L0.817578 10.529C0.78099 10.4 0.747787 10.2695 0.718099 10.1376C0.715495 10.1247 0.71224 10.1125 0.709635 10.0997C0.644141 9.80182 0.597135 9.50026 0.56875 9.19648L2.19674 7.24297L4.9056 8.14583L5.6918 11.2904L4.4 13.0091L1.76003 12.5921ZM9.77578 15.7514C9.64245 15.7845 9.5056 15.813 9.36875 15.8387C9.34961 15.8424 9.33008 15.8456 9.31094 15.8491C9.1944 15.8699 9.07656 15.8878 8.95846 15.9023C8.92695 15.9064 8.8957 15.9107 8.86432 15.9145C8.75469 15.9272 8.64401 15.9368 8.53307 15.9448C8.49818 15.9471 8.46367 15.9507 8.42878 15.9529C8.28698 15.9616 8.14401 15.9667 8 15.9667C7.8681 15.9667 7.73698 15.9632 7.60664 15.9563C7.59089 15.9563 7.57578 15.9536 7.56003 15.9525C7.44401 15.9458 7.32852 15.9371 7.21328 15.9259L7.2 15.9234C6.94753 15.8961 6.69648 15.856 6.44805 15.8035L4.8707 13.3339L6.14219 11.6384H9.85781L11.1501 13.3451L9.77578 15.7514ZM15.2923 10.1C15.2896 10.1128 15.2865 10.1251 15.2837 10.1379C15.2539 10.2697 15.2207 10.4001 15.1842 10.5293L15.1699 10.5799C15.1298 10.7173 15.0867 10.8534 15.0392 10.9872V10.9898C14.9389 11.2723 14.8217 11.5483 14.688 11.8165L14.6858 11.8206C14.622 11.9482 14.5548 12.0737 14.484 12.197L14.4667 12.227C14.3956 12.3514 14.3207 12.4729 14.2422 12.5918L11.6112 13.0066L10.3104 11.2893L11.0962 8.14557L13.8051 7.24271L15.4331 9.19622C15.4048 9.50013 15.3578 9.80195 15.2923 10.1Z"
                      fill="var(--color-icon_secondary)"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_523_64768">
                      <rect
                        width={16}
                        height={16}
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span
                className={`text-text_secondary w-full text-center truncate font-roboto text-[11px] font-normal leading-150 tracking-[0.3px]  ${pathname === "/sports" ? "opacity-100" : "opacity-30"}`}
              >
                Sports
              </span>
            </nav>
          </div>
          <div className="w-[22%] h-full relative">
            <nav
              onClick={() => navigate("/")}
              className="flex w-max p-2 absolute left-1/2 -translate-x-1/2 top-1/4 -translate-y-[70%] min-w-max min-h-max items-center justify-center active:scale-95 transition-all ease-in-out duration-300 cursor-pointer rounded-full bg-bg_appBackgroundColor aspect-square"
            >
              <div
                className={`min-w-max flex items-center justify-center aspect-square rounded-full p-3 border-[0.2px] border-solid border-border_primary  opacity-100 ${pathname === "/" ? "bg-exchLoginGradient" : "bg-bg_suspendedBg"}`}
              >
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="var(--color-icon_secondary)"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                >
                  <g id="fi_69524" clipPath="url(#clip0_523_155769)">
                    <g id="Group">
                      <g id="Group_2">
                        <g id="Group_3">
                          <path
                            id="Vector"
                            d="M19.6643 9.10439L16.6332 6.07329V2.57187C16.6332 1.93876 16.1202 1.42568 15.4861 1.42568C14.8535 1.42568 14.3405 1.93876 14.3405 2.57187V3.78063L12.0836 1.52366C10.9678 0.408433 9.02771 0.410411 7.91442 1.52568L0.335548 9.10439C-0.111849 9.55268 -0.111849 10.278 0.335548 10.7256C0.783148 11.1738 1.50992 11.1738 1.95736 10.7256L9.53551 3.14672C9.78238 2.90114 10.2175 2.90114 10.4631 3.14599L18.0425 10.7256C18.2673 10.9497 18.5603 11.0612 18.8532 11.0612C19.1468 11.0612 19.4403 10.9496 19.6643 10.7256C20.1119 10.2781 20.1119 9.55272 19.6643 9.10439Z"
                            fill="var(--color-icon_secondary)"
                          />
                          <path
                            id="Vector_2"
                            d="M10.3981 5.32252C10.1779 5.10245 9.82136 5.10245 9.60182 5.32252L2.93543 11.9869C2.83018 12.0921 2.77051 12.2358 2.77051 12.3857V17.2465C2.77051 18.3871 3.69534 19.3119 4.83592 19.3119H8.13646V14.2004H11.8627V19.3119H15.1633C16.3038 19.3119 17.2287 18.3871 17.2287 17.2465V12.3857C17.2287 12.2358 17.1695 12.0921 17.0637 11.9869L10.3981 5.32252Z"
                            fill="var(--color-icon_secondary)"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_523_155769">
                      <rect width={20} height={20} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </nav>
          </div>
          <div className="w-[39%] flex items-center justify-between gap-x-1">
            <nav
              onClick={() => navigate("/open-bets")}
              className="flex items-center justify-center flex-col gap-y-1 relative cursor-pointer active:scale-95 transition-all ease-in-out duration-300 w-full"
            >
              <div
                className={`absolute h-[3px] top-[-8px] left-0 rounded-md  ${pathname === "/open-bets" ? "bg-exchLoginGradient smoothIncreaseWidth" : ""}`}
              />
              <span
                className={`w-6 h-6  ${pathname === "/open-bets" ? "opacity-100" : "opacity-50"}`}
              >
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 17 17"
                  fill="var(--color-icon_secondary)"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="fi_10928218">
                    <path
                      id="Vector"
                      d="M8.33325 8.88308L9.36133 9.50002L8.33325 10.117V8.88308ZM15.3333 8.00002V11C15.3333 13.4812 13.3145 15.5 10.8333 15.5H6.83325C4.35205 15.5 2.33325 13.4812 2.33325 11V8.00002C2.33325 5.6448 4.18384 4.00002 6.83325 4.00002H7.79306L6.44287 2.31228C6.27026 2.0967 6.30518 1.782 6.521 1.60964C6.73633 1.43752 7.05103 1.47219 7.22363 1.68776L8.83325 3.69979L10.4429 1.68776C10.6152 1.47146 10.9302 1.43776 11.1455 1.60964C11.3613 1.782 11.3962 2.0967 11.2236 2.31228L9.87344 4.00002H10.8333C13.4827 4.00002 15.3333 5.6448 15.3333 8.00002ZM10.8333 9.50002C10.8333 9.32448 10.7412 9.16164 10.5906 9.07131L8.09058 7.57131C7.93604 7.47854 7.74341 7.47609 7.58691 7.56496C7.43018 7.65358 7.33325 7.81984 7.33325 8.00002V11C7.33325 11.1802 7.43018 11.3465 7.58691 11.4351C7.66333 11.4785 7.74829 11.5 7.83325 11.5C7.92236 11.5 8.01147 11.4763 8.09058 11.4287L10.5906 9.92873C10.7412 9.8384 10.8333 9.67556 10.8333 9.50002Z"
                      fill="var(--color-icon_secondary)"
                    />
                  </g>
                </svg>
              </span>
              <span
                className={`text-text_secondary w-full text-center truncate font-roboto text-[11px] font-normal leading-150 tracking-[0.3px]  ${pathname === "/open-bets" ? "opacity-100" : "opacity-30"}`}
              >
                Open Bets
              </span>
            </nav>
            <nav
              onClick={() => setShowMenuModal((prev) => !prev)}
              className="flex items-center justify-center flex-col gap-y-1 relative cursor-pointer active:scale-95 transition-all ease-in-out duration-300 w-full"
            >
              <div
                className={`absolute h-[3px] top-[-8px] left-0 rounded-md  ${showMenuModal ? "bg-exchLoginGradient smoothIncreaseWidth" : ""}`}
              />
              <span
                className={`w-6 h-6  ${showMenuModal ? "opacity-100" : "opacity-50"}`}
              >
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 17 17"
                  fill="var(--color-icon_secondary)"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="fi_5410262">
                    <g id="Layer_2">
                      <path
                        id="Vector"
                        d="M7.33325 2H3.33325C2.782 2 2.33325 2.44875 2.33325 3V7C2.33325 7.55125 2.782 8 3.33325 8H7.33325C7.8845 8 8.33325 7.55125 8.33325 7V3C8.33325 2.44875 7.8845 2 7.33325 2Z"
                        fill="var(--color-icon_secondary)"
                      />
                      <path
                        id="Vector_2"
                        d="M14.3333 2H10.3333C9.782 2 9.33325 2.44875 9.33325 3V7C9.33325 7.55125 9.782 8 10.3333 8H14.3333C14.8845 8 15.3333 7.55125 15.3333 7V3C15.3333 2.44875 14.8845 2 14.3333 2Z"
                        fill="var(--color-icon_secondary)"
                      />
                      <path
                        id="Vector_3"
                        d="M7.33325 9H3.33325C2.782 9 2.33325 9.44875 2.33325 10V14C2.33325 14.5512 2.782 15 3.33325 15H7.33325C7.8845 15 8.33325 14.5512 8.33325 14V10C8.33325 9.44875 7.8845 9 7.33325 9Z"
                        fill="var(--color-icon_secondary)"
                      />
                      <path
                        id="Vector_4"
                        d="M14.3333 9H10.3333C9.782 9 9.33325 9.44875 9.33325 10V14C9.33325 14.5512 9.782 15 10.3333 15H14.3333C14.8845 15 15.3333 14.5512 15.3333 14V10C15.3333 9.44875 14.8845 9 14.3333 9Z"
                        fill="var(--color-icon_secondary)"
                      />
                    </g>
                  </g>
                </svg>
              </span>
              <span
                className={`text-text_secondary w-full text-center truncate font-roboto text-[11px] font-normal leading-150 tracking-[0.3px]  ${showMenuModal ? "opacity-100" : "opacity-30"}`}
              >
                Menu
              </span>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

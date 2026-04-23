import { useDispatch, useSelector } from "react-redux";
import { Settings } from "../../../api";
import { useLogo } from "../../../context/ApiProvider";
import { QuickAccessNavList } from "./quick-access-nav-list";
import { UnauthorizedView } from "./unauthorized-view";
import { Authorized } from "./authorized";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AppPopup from "./AppPopUp";
import DownloadAPK from "../../modals/DownloadAPK/DownloadAPK";

import { useEffect } from "react";
import {
  setClosePopUpForForever,
  setShowAPKModal,
  setShowAppPopUp,
} from "../../../redux/features/global/globalSlice";
import Error from "../../modals/Error/Error";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logo } = useLogo();
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { showAppPopUp, windowWidth, showAPKModal, closePopupForForever } =
    useSelector((state) => state?.global);

  useEffect(() => {
    const apk_modal_shown = sessionStorage.getItem("apk_modal_shown");
    const closePopupForForever = localStorage.getItem("closePopupForForever");
    dispatch(setClosePopUpForForever(closePopupForForever ? true : false));
    if (location?.state?.pathname === "/apk" || location.pathname === "/apk") {
      sessionStorage.setItem("apk_modal_shown", true);
      localStorage.setItem("closePopupForForever", true);
      dispatch(setClosePopUpForForever(true));
      localStorage.removeItem("installPromptExpiryTime");
    } else {
      if (!apk_modal_shown) {
        dispatch(setShowAPKModal(true));
      }
      if (!closePopupForForever) {
        const expiryTime = localStorage.getItem("installPromptExpiryTime");
        const currentTime = new Date().getTime();

        if ((!expiryTime || currentTime > expiryTime) && Settings.apk_link) {
          localStorage.removeItem("installPromptExpiryTime");

          dispatch(setShowAppPopUp(true));
        }
      }
    }
  }, [
    dispatch,
    windowWidth,
    showAppPopUp,
    location?.state?.pathname,
    location.pathname,
  ]);

  if (Settings.app_only && !closePopupForForever) {
    return <Error />;
  }

  return (
    <header className="w-full h-max flex flex-col bg-bg_appBackgroundColor">
      <div className=" flex flex-col w-full h-max">
        <AppPopup />
        <div className="flex h-max items-center justify-between py-2 px-3 w-full border-b border-solid border-border_secondary">
          <div
            onClick={() => navigate("/")}
            className="relative overflow-hidden max-h-[32px] max-w-[120px]"
            style={{ display: "inline-block", position: "relative" }}
          >
            <img
              src="/assets/logo.png"
              alt="exch11"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="  w-full min-h-full object-contain max-h-[32px]"
              title="exch11"
            />
          </div>
          <div className="flex items-center justify-center gap-x-1.5">
            <Link
              className="flex items-center justify-center py-[0.3125rem] px-2 rounded-md bg-exchLoginGradient text-text_secondary font-roboto text-xs not-italic font-semibold leading-150 tracking-widest h-8 active:opacity-80 active:scale-95"
              title="Login to exch11 & Enjoy the best online gaming experience"
              to="/login"
            >
              Login
            </Link>
            <Link
              className="flex items-center justify-center py-[0.3125rem] px-2 rounded-md bg-exchRegisterGradient text-text_secondary font-roboto text-xs not-italic font-semibold leading-150 tracking-widest h-8 active:opacity-80 active:scale-95"
              title="Register to exch11 & Get the exciting bonuses and more!!!"
              to="/register"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
      <div
        title="Top Nav"
        className="flex h-max border-b border-solid border-border_secondary items-center scroll-smooth justify-start gap-2 overflow-x-auto min-w-full no-scrollbar pl-2 relative"
      >
        <div className="flex cursor-pointer items-center justify-center h-full transition-all ease-in-out duration-200 whitespace-nowrap flex-col active:scale-95">
          <span
            className="text-text_secondary font-roboto pb-1 pt-2 text-xs not-italic leading-120 font-[450] tracking-[0.3px] cursor-pointer
                 opacity-60
                "
          >
            Aviator
          </span>
          <div className="h-[3px] rounded-xl bg-exchLoginGradient opacity-0" />
        </div>
        <div className="flex cursor-pointer items-center justify-center h-full transition-all ease-in-out duration-200 whitespace-nowrap flex-col active:scale-95">
          <span
            className="text-text_secondary font-roboto pb-1 pt-2 text-xs not-italic leading-120 font-[450] tracking-[0.3px] cursor-pointer
                 opacity-60
                "
          >
            Aura
          </span>
          <div className="h-[3px] rounded-xl bg-exchLoginGradient opacity-0" />
        </div>
        <div className="flex cursor-pointer items-center justify-center h-full transition-all ease-in-out duration-200 whitespace-nowrap flex-col active:scale-95">
          <span
            className="text-text_secondary font-roboto pb-1 pt-2 text-xs not-italic leading-120 font-[450] tracking-[0.3px] cursor-pointer
                 opacity-60
                "
          >
            Live Casino
          </span>
          <div className="h-[3px] rounded-xl bg-exchLoginGradient opacity-0" />
        </div>
        <div className="flex cursor-pointer items-center justify-center h-full transition-all ease-in-out duration-200 whitespace-nowrap flex-col active:scale-95">
          <span
            className="text-text_secondary font-roboto pb-1 pt-2 text-xs not-italic leading-120 font-[450] tracking-[0.3px] cursor-pointer
                 opacity-60
                "
          >
            Sports
          </span>
          <div className="h-[3px] rounded-xl bg-exchLoginGradient opacity-0" />
        </div>
        <div className="flex cursor-pointer items-center justify-center h-full transition-all ease-in-out duration-200 whitespace-nowrap flex-col active:scale-95">
          <span
            className="text-text_secondary font-roboto pb-1 pt-2 text-xs not-italic leading-120 font-[450] tracking-[0.3px] cursor-pointer
                 opacity-60
                "
          >
            Sportsbook
          </span>
          <div className="h-[3px] rounded-xl bg-exchLoginGradient opacity-0" />
        </div>
        <div className="flex cursor-pointer items-center justify-center h-full transition-all ease-in-out duration-200 whitespace-nowrap flex-col active:scale-95">
          <span
            className="text-text_secondary font-roboto pb-1 pt-2 text-xs not-italic leading-120 font-[450] tracking-[0.3px] cursor-pointer
                 opacity-60
                "
          >
            Virtual Sports
          </span>
          <div className="h-[3px] rounded-xl bg-exchLoginGradient opacity-0" />
        </div>
        <div className="flex cursor-pointer items-center justify-center h-full transition-all ease-in-out duration-200 whitespace-nowrap flex-col active:scale-95">
          <span
            className="text-text_secondary font-roboto pb-1 pt-2 text-xs not-italic leading-120 font-[450] tracking-[0.3px] cursor-pointer
                 opacity-60
                "
          >
            Poker
          </span>
          <div className="h-[3px] rounded-xl bg-exchLoginGradient opacity-0" />
        </div>
        <div className="flex cursor-pointer items-center justify-center h-full transition-all ease-in-out duration-200 whitespace-nowrap flex-col active:scale-95">
          <span
            className="text-text_secondary font-roboto pb-1 pt-2 text-xs not-italic leading-120 font-[450] tracking-[0.3px] cursor-pointer
                 opacity-60
                "
          >
            Slot-Games
          </span>
          <div className="h-[3px] rounded-xl bg-exchLoginGradient opacity-0" />
        </div>
        <div className="flex cursor-pointer items-center justify-center h-full transition-all ease-in-out duration-200 whitespace-nowrap flex-col active:scale-95">
          <span
            className="text-text_secondary font-roboto pb-1 pt-2 text-xs not-italic leading-120 font-[450] tracking-[0.3px] cursor-pointer
                 opacity-60
                "
          >
            Non-stop Roulette
          </span>
          <div className="h-[3px] rounded-xl bg-exchLoginGradient opacity-0" />
        </div>
        <div className="flex cursor-pointer items-center justify-center h-full transition-all ease-in-out duration-200 whitespace-nowrap flex-col active:scale-95">
          <span
            className="text-text_secondary font-roboto pb-1 pt-2 text-xs not-italic leading-120 font-[450] tracking-[0.3px] cursor-pointer
                 opacity-60
                "
          >
            Dreamwheel
          </span>
          <div className="h-[3px] rounded-xl bg-exchLoginGradient opacity-0" />
        </div>
        <div className="flex cursor-pointer items-center justify-center h-full transition-all ease-in-out duration-200 whitespace-nowrap flex-col active:scale-95">
          <span
            className="text-text_secondary font-roboto pb-1 pt-2 text-xs not-italic leading-120 font-[450] tracking-[0.3px] cursor-pointer
                 opacity-60
                "
          >
            Horse Racing
          </span>
          <div className="h-[3px] rounded-xl bg-exchLoginGradient opacity-0" />
        </div>
        <div className="flex cursor-pointer items-center justify-center h-full transition-all ease-in-out duration-200 whitespace-nowrap flex-col active:scale-95">
          <span
            className="text-text_secondary font-roboto pb-1 pt-2 text-xs not-italic leading-120 font-[450] tracking-[0.3px] cursor-pointer
                 opacity-60
                "
          >
            Grey Hound Racing
          </span>
          <div className="h-[3px] rounded-xl bg-exchLoginGradient opacity-0" />
        </div>
        <div />
        <div className="sticky cursor-pointer right-0 top-1 bottom-3 pl-1.5 pr-2 bg-topMenuopenBtnBg">
          <svg
            _ngcontent-ikv-c193
            xmlns="http://www.w3.org/2000/svg"
            width={10}
            height={10}
            viewBox="0 0 12 8"
            fill="var(--color-icon_secondary)"
            className="active:shadow-none active:translate-y-0.5 active:opacity-80 flex items-center justify-center w-[18px] h-[18px]  p-[3px] bg-bg_primary1 rounded-md"
          >
            <path
              _ngcontent-ikv-c193
              d="M6.00007 7.33333C5.8904 7.33397 5.78168 7.31295 5.68015 7.27148C5.57862 7.23001 5.48627 7.1689 5.40841 7.09167L0.408406 2.09167C0.251487 1.93475 0.16333 1.72192 0.16333 1.5C0.16333 1.27808 0.251487 1.06525 0.408406 0.908334C0.565326 0.751414 0.778155 0.663258 1.00007 0.663258C1.22199 0.663258 1.43482 0.751414 1.59174 0.908334L6.00007 5.325L10.4084 0.916668C10.5678 0.780146 10.7729 0.708807 10.9826 0.716908C11.1923 0.725009 11.3913 0.811953 11.5397 0.960365C11.6881 1.10878 11.7751 1.30773 11.7832 1.51746C11.7913 1.72719 11.7199 1.93225 11.5834 2.09167L6.58341 7.09167C6.42819 7.24562 6.21869 7.33241 6.00007 7.33333Z"
              fill="var(--color-icon_secondary)"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;

import { useDispatch, useSelector } from "react-redux";
import { Settings } from "../../../api";
import { useLogo } from "../../../context/ApiProvider";
import { useLocation, useNavigate } from "react-router-dom";
import AppPopup from "./AppPopUp";

import { useEffect } from "react";
import {
  setClosePopUpForForever,
  setShowAPKModal,
  setShowAppPopUp,
} from "../../../redux/features/global/globalSlice";
import Error from "../../modals/Error/Error";
import Unauthorized from "./Unauthorized";
import Authorized from "./Authorized";
import QuickAccessNavList from "./QuickAccessNavList";
import Notification from "./Notification";
import DownloadAPK from "../../modals/DownloadAPK/DownloadAPK";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logo } = useLogo();
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { showAppPopUp, windowWidth, closePopupForForever, showAPKModal } =
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
        {Settings.apk_link && showAPKModal && <DownloadAPK />}
        <Notification />
        <AppPopup />
        <div className="flex h-max items-center justify-between py-2 px-3 w-full border-b border-solid border-border_secondary">
          <div
            onClick={() => navigate("/")}
            className="relative overflow-hidden max-h-[32px] max-w-[120px]"
            style={{ display: "inline-block", position: "relative" }}
          >
            <img
              src={logo}
              alt="exch11"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="  w-full min-h-full object-contain max-h-[32px]"
              title="exch11"
            />
          </div>
          {token ? <Authorized /> : <Unauthorized />}
        </div>
      </div>
      <QuickAccessNavList />
    </header>
  );
};

export default Header;

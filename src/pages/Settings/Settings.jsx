import { useNavigate } from "react-router-dom";
import ChangePassword from "../../components/modules/Settings/ChangePassword";
import EditStake from "../../components/modules/Settings/EditStake";
import OtherSettings from "../../components/modules/Settings/OtherSettings";

const Settings = () => {
  const navigate = useNavigate();
  return (
    <main className="w-full flex-1  pt-1 overflow-y-auto scroll-smooth bg-bg_appBackgroundColor">
      <nav
        onClick={() => navigate(-1)}
        className="flex items-center py-2  h-max justify-start gap-1.5 w-full text-text_secondary font-roboto text-sm font-normal leading-120 py-2 bg-bg_appBackgroundColor w-full z-10 capitalize border-b border-solid border-border_secondary px-3"
      >
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
        <span className="text-text_secondary">Settings</span>
      </nav>
      <div className="flex items-center justify-center flex-col w-full px-3 pb-5 pt-3 gap-y-3">
        <EditStake />
        <ChangePassword />
        <OtherSettings />
      </div>
    </main>
  );
};

export default Settings;

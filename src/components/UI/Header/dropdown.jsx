import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/features/auth/authSlice";
import { Link } from "react-router-dom";
import { Settings } from "../../../api";

export const Dropdown = ({ setShowDropdown }) => {
  const closePopupForForever = localStorage.getItem("closePopupForForever");
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleOpenSocialLink = (link) => {
    if (link) {
      window.open(link, "_blank");
    }
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
    <div className="bg-white h-auto w-40 mt-[1.25rem] z-[100] absolute origin-top-right right-0 rounded-md border border-gray1 border-b-2 border-b-gray-300">
      <ul className="flex flex-col font-helvetica text-[11px]">
        <li className="p-2 text-black text-xs font-bold bg-goldenYellow">
          {user}
        </li>
        {Settings?.branchWhatsapplink && (
          <li
            onClick={() => handleOpenSocialLink(Settings?.branchWhatsapplink)}
            className="hover:underline cursor-pointer border-b border-b-gray18"
          >
            <div className="px-2 py-1">
              <a
                onClick={() => setShowDropdown(false)}
                className="cursor-pointer"
              >
                Customer Support
              </a>
            </div>
          </li>
        )}

        <li className="hover:underline cursor-pointer border-b border-b-gray18">
          <div className="px-2 py-1">
            <Link
              onClick={() => setShowDropdown(false)}
              className="cursor-pointer"
              to="/deposit"
            >
              Deposit
            </Link>
          </div>
        </li>
        <li className="hover:underline cursor-pointer border-b border-b-gray18">
          <div className="px-2 py-1">
            <Link
              onClick={() => setShowDropdown(false)}
              className="cursor-pointer"
              to="/withdraw"
            >
              Withdraw
            </Link>
          </div>
        </li>
        <li className="hover:underline cursor-pointer border-b border-b-gray18">
          <div className="px-2 py-1">
            <Link
              onClick={() => setShowDropdown(false)}
              className="cursor-pointer"
              to="/deposit-report"
            >
              Deposit Report
            </Link>
          </div>
        </li>
        <li className="hover:underline cursor-pointer border-b border-b-gray18">
          <div className="px-2 py-1">
            <Link
              onClick={() => setShowDropdown(false)}
              className="cursor-pointer"
              to="/withdraw-report"
            >
              Withdraw Report
            </Link>
          </div>
        </li>
        <li className="hover:underline cursor-pointer border-b border-b-gray18">
          <div className="px-2 py-1">
            <Link
              onClick={() => setShowDropdown(false)}
              className="cursor-pointer"
              to="/open-bets"
            >
              Open Bets
            </Link>
          </div>
        </li>
        <li className="hover:underline cursor-pointer border-b border-b-gray18">
          <div className="px-2 py-1">
            <Link
              onClick={() => setShowDropdown(false)}
              className="cursor-pointer"
              to="/betting-profit-loss"
            >
              Betting Profit & Loss
            </Link>
          </div>
        </li>

        <li className="hover:underline cursor-pointer border-b border-b-gray18">
          <div className="px-2 py-1">
            <Link
              onClick={() => setShowDropdown(false)}
              className="cursor-pointer"
              to="/my-bank-details"
            >
              My Bank Details
            </Link>
          </div>
        </li>

        {Settings?.referral && (
          <li className="hover:underline cursor-pointer border-b border-b-gray18">
            <div className="px-2 py-1">
              <Link
                onClick={() => setShowDropdown(false)}
                className="cursor-pointer"
                to="/affiliate"
              >
                Affiliate
              </Link>
            </div>
          </li>
        )}

        <li className="hover:underline cursor-pointer border-b border-b-gray18">
          <div className="px-2 py-1">
            <Link
              onClick={() => setShowDropdown(false)}
              className="cursor-pointer"
              to="/promotions"
            >
              Promotions
            </Link>
          </div>
        </li>
        <li className="hover:underline cursor-pointer border-b border-b-gray18">
          <div className="px-2 py-1">
            <Link
              onClick={() => setShowDropdown(false)}
              className="cursor-pointer"
              to="/bonus-statement"
            >
              Bonus Statement
            </Link>
          </div>
        </li>
        <li className="hover:underline cursor-pointer border-b border-b-gray18">
          <div className="px-2 py-1">
            <Link
              onClick={() => setShowDropdown(false)}
              className="cursor-pointer"
              to="/promotions"
            >
              Promos & Bonus
            </Link>
          </div>
        </li>
        <li className="hover:underline cursor-pointer border-b border-b-gray18">
          <div className="px-2 py-1">
            <Link
              onClick={() => setShowDropdown(false)}
              className="cursor-pointer"
              to="/lossback-bonus"
            >
              Lossback Bonus
            </Link>
          </div>
        </li>
        {closePopupForForever && (
          <li className="hover:underline cursor-pointer border-b border-b-gray18">
            <div className="px-2 py-1">
              <Link
                onClick={() => setShowDropdown(false)}
                className="cursor-pointer"
                to="/app-only-bonus"
              >
                App Only Bonus
              </Link>
            </div>
          </li>
        )}

        <li className="hover:underline cursor-pointer border-b border-b-gray18">
          <div className="px-2 py-1">
            <Link
              onClick={() => setShowDropdown(false)}
              className="cursor-pointer"
              to="/change-password"
            >
              Change Password
            </Link>
          </div>
        </li>
        {Settings.apk_link && (
          <li
            onClick={handleDownloadAPK}
            className="hover:underline cursor-pointer border-b border-b-gray18"
          >
            <div className="px-2 py-1">
              <a
                onClick={() => setShowDropdown(false)}
                className="cursor-pointer"
              >
                Download APK
              </a>
            </div>
          </li>
        )}

        <li className="hover:underline cursor-pointer border-b border-b-gray18">
          <div className="px-2 py-1">
            <Link
              onClick={() => setShowDropdown(false)}
              className="cursor-pointer"
              to="/rules"
            >
              Rules and Regulations
            </Link>
          </div>
        </li>
        <li
          onClick={() => dispatch(logout())}
          className="hover:underline cursor-pointer "
        >
          <div className="text-center bg-blue4 text-white py-2 font-bold text-xs">
            Logout
          </div>
        </li>
      </ul>
    </div>
  );
};

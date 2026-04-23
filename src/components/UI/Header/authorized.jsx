import { useSelector } from "react-redux";
import useBalance from "../../../hooks/balance";
import { Dropdown } from "./dropdown";
import { useRef, useState } from "react";
import useCloseModalClickOutside from "../../../hooks/closeModal";
import { useNavigate } from "react-router-dom";

export const Authorized = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const { data } = useBalance();
  const { user } = useSelector((state) => state.auth);

  useCloseModalClickOutside(ref, () => setShowDropdown(false));
  return (
    <div className="flex gap-2 md:gap-1 items-center">
      <div className="md:flex justify-center hidden ">
        <button
          onClick={() => navigate("/deposit")}
          className=" active:opacity-70 flex gap-2 text-[10px] md:text-xs rounded items-center bg-[#008000] w-fit px-1 md:px-2 md:py-[5px] justify-center mx-1 border border-white"
        >
          <span className=" my-auto text-white">Deposit </span>
        </button>
        <button
          onClick={() => navigate("/withdraw")}
          className=" active:opacity-70 flex gap-2 text-[10px] md:text-xs rounded items-center bg-[#FF0000] py-[2px] w-fit px-1 md:px-2 md:py-[5px] justify-center mx-1 border border-white"
        >
          <span className=" my-auto text-white">Withdraw</span>
        </button>
      </div>
      <div className="flex justify-center md:hidden ">
        <button
          onClick={() => navigate("/deposit")}
          className=" active:opacity-70 flex gap-2 text-[10px] md:text-xs rounded items-center bg-[#008000] w-fit px-1 md:px-2 md:py-[5px] justify-center mx-1 border border-white"
        >
          <span className=" my-auto text-white">D </span>
        </button>
        <button
          onClick={() => navigate("/withdraw")}
          className=" active:opacity-70 flex gap-2 text-[10px] md:text-xs rounded items-center bg-[#FF0000] py-[2px] w-fit px-1 md:px-2 md:py-[5px] justify-center mx-1 border border-white"
        >
          <span className=" my-auto text-white">W </span>
        </button>
      </div>
      <div className="flex md:gap-1">
        <div className="flex flex-row items-center gap-1">
          <div className="hidden md:flex items-center gap-2 rounded-md  px-3 py-1 text-[12px] bg-[rgba(255,255,255,.1)] shadow-[inset_0_2px_0_0_rgba(255,255,255,.3)]">
            <span className="text-[#ffb600]">Main Balance</span>
            <span className="font-bold text-[#ffb600]">
              {data?.availBalance}
            </span>
            <span className="text-[#ffb600]">Exposure</span>
            <span
              className="font-bold text-[#ffb600] cursor-pointer"
              role="button"
              tabIndex={0}
            >
              {data?.deductedExposure}
            </span>

            {/* <div className="relative flex items-center">
              <button
                type="button"
                className="p-0.5 text-[#ffb600] hover:text-amber-300 cursor-pointer"
                aria-label="Balance details"
                role="button"
                tabIndex={0}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  className="h-4 w-4"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z" />
                </svg>
              </button>
            </div> */}
          </div>
          <div
            className="md:hidden items-center gap-1.5 rounded-md px-2 py-1.5 text-[10px] bg-[rgba(255,255,255,.1)] shadow-[inset_0_2px_0_0_rgba(255,255,255,.3)]"
            role="presentation"
          >
            <div className="flex gap-1">
              <span className="text-[#ffb600]/80">Bal:</span>
              <span className="font-bold text-[#ffb600]">
                {" "}
                {data?.availBalance}
              </span>
            </div>
            <div className="flex gap-1">
              <span className="text-[#ffb600]/80 cursor-pointer" role="button">
                Exp
              </span>
              <span
                className="font-bold text-[#ffb600] cursor-pointer"
                role="button"
              >
                {data?.deductedExposure}
              </span>
            </div>
          </div>
          <div className="relative flex gap-1">
            <div ref={ref} className="relative">
              <button
                type="button"
                onClick={() => setShowDropdown((prev) => !prev)}
                className=" active:opacity-70 flex justify-center hover:underline items-center gap-1 w-full px-1 py-1 rounded-[2px] text-[#ffb600] rounded-md h-[30px] px-3 text-xs flex items-center gap-1 no-underline hover:no-underline bg-[rgba(255,255,255,.1)] shadow-[inset_0_2px_0_0_rgba(255,255,255,.3)]"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                </svg>
                <span>{user}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-down h-4 w-4 shrink-0"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              {showDropdown && <Dropdown setShowDropdown={setShowDropdown} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

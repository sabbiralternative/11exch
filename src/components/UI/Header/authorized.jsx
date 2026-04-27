import { Link, useNavigate } from "react-router-dom";
import useBalance from "../../../hooks/balance";

const Authorized = () => {
  const navigate = useNavigate();
  const { data } = useBalance();
  return (
    <div className="flex items-center justify-center gap-x-1.5">
      <button
        className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out flex items-center justify-center py-[0.3125rem] px-2 rounded-md bg-exchBalanceGradient text-text_secondary font-roboto text-xs not-italic font-semibold leading-150 tracking-widest h-8  w-[85px] xs:w-max 
      cursor-pointer
      active:opacity-80 active:scale-95
      "
        type="button"
      >
        <span className="text-text_secondary font-roboto not-italic font-medium leading-150 tracking-widest text-sm w-full truncate">
          ₹ {data?.availBalance}
        </span>
      </button>
      <Link to="/deposit">
        <button
          className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out flex items-center justify-center gap-1 py-[0.3125rem] px-2 rounded-md bg-exchRegisterGradient text-text_secondary font-roboto text-xs not-italic font-semibold leading-150 tracking-widest h-8 
      cursor-pointer
      active:opacity-80 active:scale-95
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
        </button>
      </Link>
      <button
        onClick={() => navigate("/account")}
        title="Profile"
        className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out flex items-center justify-center p-[0.4375rem] gap-1.5 rounded-md border border-border_secondary border-solid h-8 w-8 
      cursor-pointer
      
      "
        type="button"
      >
        <svg
          width={14}
          height={14}
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
        >
          <g id="Fill Ion Icons" clipPath="url(#clip0_576_141939)">
            <path
              id="Vector"
              d="M6.90036 6.74384C7.82684 6.74384 8.6291 6.41155 9.28461 5.75594C9.94011 5.10044 10.2724 4.2984 10.2724 3.37181C10.2724 2.44555 9.94011 1.6434 9.2845 0.987682C8.62889 0.332289 7.82674 0 6.90036 0C5.97377 0 5.17172 0.332289 4.51622 0.987789C3.86072 1.64329 3.52832 2.44544 3.52832 3.37181C3.52832 4.2984 3.86072 5.10055 4.51633 5.75605C5.17194 6.41144 5.97409 6.74384 6.90036 6.74384Z"
              fill="#fff"
            />
            <path
              id="Vector_2"
              d="M12.8004 10.7653C12.7815 10.4925 12.7433 10.1949 12.687 9.88071C12.6301 9.56412 12.557 9.26484 12.4694 8.99129C12.3789 8.70856 12.2559 8.42936 12.1038 8.1618C11.9459 7.88409 11.7605 7.64227 11.5524 7.44328C11.3348 7.23511 11.0685 7.06773 10.7604 6.94565C10.4534 6.8242 10.1132 6.76268 9.74933 6.76268C9.60641 6.76268 9.4682 6.82132 9.20128 6.9951C9.037 7.10223 8.84485 7.22613 8.63037 7.36317C8.44698 7.48002 8.19853 7.5895 7.89166 7.68863C7.59227 7.7855 7.28828 7.83464 6.98825 7.83464C6.68822 7.83464 6.38434 7.7855 6.08463 7.68863C5.77808 7.58961 5.52963 7.48013 5.34645 7.36328C5.134 7.22752 4.94174 7.10362 4.77501 6.99499C4.50841 6.82121 4.37009 6.76257 4.22717 6.76257C3.86316 6.76257 3.52307 6.8242 3.2162 6.94575C2.90837 7.06763 2.64188 7.235 2.42409 7.44339C2.21613 7.64248 2.03059 7.8842 1.87294 8.1618C1.72095 8.42936 1.5979 8.70846 1.50732 8.9914C1.41985 9.26494 1.34668 9.56412 1.28986 9.88071C1.23357 10.1945 1.19533 10.4922 1.17642 10.7656C1.15784 11.0335 1.14844 11.3116 1.14844 11.5924C1.14844 12.3232 1.38075 12.9148 1.83887 13.3511C2.29132 13.7817 2.89 14.0001 3.61803 14.0001H10.3591C11.0871 14.0001 11.6856 13.7818 12.1382 13.3511C12.5964 12.9151 12.8287 12.3234 12.8287 11.5923C12.8286 11.3102 12.8191 11.0319 12.8004 10.7653Z"
              fill="#fff"
            />
          </g>
          <defs>
            <clipPath id="clip0_576_141939">
              <rect width={14} height={14} fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  );
};

export default Authorized;

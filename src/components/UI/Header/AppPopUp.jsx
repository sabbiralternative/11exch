import { useDispatch } from "react-redux";
import { setShowAppPopUp } from "../../../redux/features/global/globalSlice";
import { Settings } from "../../../api";

const AppPopup = () => {
  const dispatch = useDispatch();
  const closeAppModal = () => {
    const expiryTime = new Date().getTime() + 24 * 60 * 60 * 1000;
    localStorage.setItem("installPromptExpiryTime", expiryTime);
    dispatch(setShowAppPopUp(false));
  };

  const handleDownload = (e) => {
    e.preventDefault();
    const fileUrl = Settings.apk_link;
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "site.apk");
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
    closeAppModal();
  };
  return (
    <div
      className="overflow-hidden transition-height  ease-in-out duration-300  w-full "
      style={{ height: "70px" }}
    >
      <div
        title="Install On IOS - Instant Download on your device(exch11)"
        className="flex items-center justify-between w-full p-4 gap-x-2.5 bg-bg_inputBgColor relative overflow-hidden h-[70px]"
      >
        <div className="absolute top-0 left-0 transperent-bg-one z-0 blur-97 w-[8.3125rem] h-full" />
        <div className="absolute top-0 right-0 transperent-bg-one z-0 blur-97 w-[7rem] h-full" />
        <div className="flex items-center gap-2 z-10">
          <button
            onClick={closeAppModal}
            className="cursor-pointer p-1  rounded-full  bg-bg_primary4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={14}
              height={14}
              viewBox="0 0 10 10"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.0837 7.32778C1.92099 7.49053 1.92102 7.75432 2.08375 7.91703C2.24648 8.07974 2.5103 8.07973 2.673 7.91699L5.00019 5.5894L7.32756 7.91678C7.49027 8.07948 7.7541 8.07948 7.91681 7.91678C8.07952 7.75407 8.07952 7.49024 7.91681 7.32753L5.5894 5.00011L7.91665 2.67245C8.07931 2.50972 8.07931 2.2459 7.91656 2.0832C7.75385 1.92049 7.49002 1.92051 7.32731 2.08325L5.0001 4.41086L2.67272 2.08345C2.51 1.92073 2.24618 1.92073 2.08347 2.08345C1.92075 2.24617 1.92075 2.50998 2.08347 2.67271L4.41094 5.00015L2.0837 7.32778Z"
                fill="var(--color-icon_primary)"
              />
            </svg>
          </button>
          <div className="flex items-center justify-center">
            <div
              className="relative overflow-hidden max-w-[60px] h-auto"
              style={{ display: "inline-block", position: "relative" }}
            >
              <img
                src="/assets/app-11exch-logo.png"
                alt="11Exch"
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                className="  w-full h-full"
              />
            </div>
          </div>
          <div className="flex items-start justify-start flex-col gap-y-0.5">
            <h2 className="text-text_secondary font-roboto text-xs font-bold leading-120 mb-0">
              Install Android APK
            </h2>
            <h6 className=" text-text_secondary1 font-roboto font-normal leading-120 mb-0 text-x">
              Instant Download on your device
            </h6>
            <div className="flex items-center gap-x-1">
              <svg
                width={7}
                height={7}
                viewBox="0 0 7 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="star (8) 1" clipPath="url(#clip0_1290_121031)">
                  <path
                    id="Vector"
                    d="M6.98175 2.68512C6.93593 2.54337 6.81021 2.4427 6.66147 2.4293L4.64108 2.24584L3.84216 0.375898C3.78325 0.238856 3.6491 0.150146 3.50004 0.150146C3.35098 0.150146 3.21682 0.238856 3.15791 0.376219L2.35899 2.24584L0.33828 2.4293C0.189808 2.44302 0.0644081 2.54337 0.0183178 2.68512C-0.0277726 2.82686 0.0147929 2.98233 0.127108 3.08033L1.65429 4.41967L1.20396 6.40337C1.171 6.54923 1.22762 6.7 1.34864 6.78748C1.41369 6.83448 1.48979 6.8584 1.56654 6.8584C1.63271 6.8584 1.69835 6.84057 1.75725 6.80532L3.50004 5.76372L5.24218 6.80532C5.36966 6.88201 5.53036 6.87501 5.65111 6.78748C5.77219 6.69973 5.82875 6.54891 5.79579 6.40337L5.34547 4.41967L6.87264 3.0806C6.98496 2.98233 7.02784 2.82713 6.98175 2.68512Z"
                    fill="#F5A524"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1290_121031">
                    <rect width={7} height={7} fill="#fff" />
                  </clipPath>
                </defs>
              </svg>
              <svg
                width={7}
                height={7}
                viewBox="0 0 7 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="star (8) 1" clipPath="url(#clip0_1290_121031)">
                  <path
                    id="Vector"
                    d="M6.98175 2.68512C6.93593 2.54337 6.81021 2.4427 6.66147 2.4293L4.64108 2.24584L3.84216 0.375898C3.78325 0.238856 3.6491 0.150146 3.50004 0.150146C3.35098 0.150146 3.21682 0.238856 3.15791 0.376219L2.35899 2.24584L0.33828 2.4293C0.189808 2.44302 0.0644081 2.54337 0.0183178 2.68512C-0.0277726 2.82686 0.0147929 2.98233 0.127108 3.08033L1.65429 4.41967L1.20396 6.40337C1.171 6.54923 1.22762 6.7 1.34864 6.78748C1.41369 6.83448 1.48979 6.8584 1.56654 6.8584C1.63271 6.8584 1.69835 6.84057 1.75725 6.80532L3.50004 5.76372L5.24218 6.80532C5.36966 6.88201 5.53036 6.87501 5.65111 6.78748C5.77219 6.69973 5.82875 6.54891 5.79579 6.40337L5.34547 4.41967L6.87264 3.0806C6.98496 2.98233 7.02784 2.82713 6.98175 2.68512Z"
                    fill="#F5A524"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1290_121031">
                    <rect width={7} height={7} fill="#fff" />
                  </clipPath>
                </defs>
              </svg>
              <svg
                width={7}
                height={7}
                viewBox="0 0 7 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="star (8) 1" clipPath="url(#clip0_1290_121031)">
                  <path
                    id="Vector"
                    d="M6.98175 2.68512C6.93593 2.54337 6.81021 2.4427 6.66147 2.4293L4.64108 2.24584L3.84216 0.375898C3.78325 0.238856 3.6491 0.150146 3.50004 0.150146C3.35098 0.150146 3.21682 0.238856 3.15791 0.376219L2.35899 2.24584L0.33828 2.4293C0.189808 2.44302 0.0644081 2.54337 0.0183178 2.68512C-0.0277726 2.82686 0.0147929 2.98233 0.127108 3.08033L1.65429 4.41967L1.20396 6.40337C1.171 6.54923 1.22762 6.7 1.34864 6.78748C1.41369 6.83448 1.48979 6.8584 1.56654 6.8584C1.63271 6.8584 1.69835 6.84057 1.75725 6.80532L3.50004 5.76372L5.24218 6.80532C5.36966 6.88201 5.53036 6.87501 5.65111 6.78748C5.77219 6.69973 5.82875 6.54891 5.79579 6.40337L5.34547 4.41967L6.87264 3.0806C6.98496 2.98233 7.02784 2.82713 6.98175 2.68512Z"
                    fill="#F5A524"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1290_121031">
                    <rect width={7} height={7} fill="#fff" />
                  </clipPath>
                </defs>
              </svg>
              <svg
                width={7}
                height={7}
                viewBox="0 0 7 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="star (8) 1" clipPath="url(#clip0_1290_121031)">
                  <path
                    id="Vector"
                    d="M6.98175 2.68512C6.93593 2.54337 6.81021 2.4427 6.66147 2.4293L4.64108 2.24584L3.84216 0.375898C3.78325 0.238856 3.6491 0.150146 3.50004 0.150146C3.35098 0.150146 3.21682 0.238856 3.15791 0.376219L2.35899 2.24584L0.33828 2.4293C0.189808 2.44302 0.0644081 2.54337 0.0183178 2.68512C-0.0277726 2.82686 0.0147929 2.98233 0.127108 3.08033L1.65429 4.41967L1.20396 6.40337C1.171 6.54923 1.22762 6.7 1.34864 6.78748C1.41369 6.83448 1.48979 6.8584 1.56654 6.8584C1.63271 6.8584 1.69835 6.84057 1.75725 6.80532L3.50004 5.76372L5.24218 6.80532C5.36966 6.88201 5.53036 6.87501 5.65111 6.78748C5.77219 6.69973 5.82875 6.54891 5.79579 6.40337L5.34547 4.41967L6.87264 3.0806C6.98496 2.98233 7.02784 2.82713 6.98175 2.68512Z"
                    fill="#F5A524"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1290_121031">
                    <rect width={7} height={7} fill="#fff" />
                  </clipPath>
                </defs>
              </svg>
              <svg
                width={7}
                height={7}
                viewBox="0 0 7 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="star (8) 1" clipPath="url(#clip0_1290_121031)">
                  <path
                    id="Vector"
                    d="M6.98175 2.68512C6.93593 2.54337 6.81021 2.4427 6.66147 2.4293L4.64108 2.24584L3.84216 0.375898C3.78325 0.238856 3.6491 0.150146 3.50004 0.150146C3.35098 0.150146 3.21682 0.238856 3.15791 0.376219L2.35899 2.24584L0.33828 2.4293C0.189808 2.44302 0.0644081 2.54337 0.0183178 2.68512C-0.0277726 2.82686 0.0147929 2.98233 0.127108 3.08033L1.65429 4.41967L1.20396 6.40337C1.171 6.54923 1.22762 6.7 1.34864 6.78748C1.41369 6.83448 1.48979 6.8584 1.56654 6.8584C1.63271 6.8584 1.69835 6.84057 1.75725 6.80532L3.50004 5.76372L5.24218 6.80532C5.36966 6.88201 5.53036 6.87501 5.65111 6.78748C5.77219 6.69973 5.82875 6.54891 5.79579 6.40337L5.34547 4.41967L6.87264 3.0806C6.98496 2.98233 7.02784 2.82713 6.98175 2.68512Z"
                    fill="#F5A524"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1290_121031">
                    <rect width={7} height={7} fill="#fff" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <button
          onClick={handleDownload}
          className=" bg-bg_primary1 text-text_secondary font-roboto font-semibold leading-150 z-10 text-xs px-3 py-1 h-7 flex items-center justify-center rounded-md"
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default AppPopup;

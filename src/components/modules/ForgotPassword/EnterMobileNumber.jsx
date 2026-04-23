import toast from "react-hot-toast";
import { useGetOtpMutation } from "../../../redux/features/auth/authApi";

const EnterMobileNumber = ({
  mobile,
  setOrder,
  setTimer,
  setMobile,
  setTab,
}) => {
  const [getOTP] = useGetOtpMutation();
  const handleOTP = async () => {
    const res = await getOTP({ mobile }).unwrap();
    if (res?.success) {
      setTab(2);
      setTimer(60);
      setOrder({
        orderId: res?.result?.orderId,
        otpMethod: "sms",
      });
      toast.success(res?.result?.message);
    } else {
      toast.error(res?.error?.errorMessage);
    }
  };

  const handleMobileNo = (e) => {
    if (e.target.value.length <= 10) {
      setMobile(e.target.value);
    }
  };

  return (
    <main className="w-full flex-1  pt-1 overflow-y-auto scroll-smooth bg-bg_secondary1">
      <div className=" w-full h-full relative">
        <div
          title="topEllipse"
          className=" w-[3.125rem] h-[3.125rem] bg-bg_tertiary18 absolute z-10 top-0 left-0"
          style={{ filter: "blur(77px)" }}
        />
        <div
          title="topEllipse"
          className=" w-[4.375rem] h-[4.375rem] bg-bg_tertiary18 absolute z-0 left-[0] bottom-0"
          style={{ filter: "blur(77px)" }}
        />
        <div className="p-2 pt-4 w-full block z-20">
          <div className="flex items-center font-roboto justify-center flex-col bg-appBackgroundGradient bg-cover bg-top rounded-2xl gap-y-4 pb-6 h-max p-4 shadow-lg">
            <div className="flex flex-col items-start gap-[0.3125rem] w-full">
              <div className="flex items-center gap-1.5 z-2">
                <span className="text-text_secondary  text-lg not-italic font-semibold leading-150 tracking-widest">
                  Forgot Password
                </span>
              </div>
            </div>
            <form
              autoComplete="off"
              className="w-full h-max flex flex-col gap-y-4"
            >
              <div title="Mobile Number *" className="flex flex-col w-full">
                <label
                  htmlFor="phoneNo"
                  className="text-xs not-italic font-semibold leading-150 tracking-widest text-text_primary3 mb-1 px-1"
                >
                  Mobile Number *
                </label>
                <div className="flex items-center w-full w-full text-sm transition-all ease-in-out duration-300 border border-solid  px-3 py-2 bg-bg_inputBgColor rounded-lg   not-italic font-medium leading-150 tracking-widest text-text_secondary1 opacity-80 focus-within:text-text_primary3 border-border_tertiary24 focus-within:opacity-100 focus-within:border-border_secondary2">
                  <div className="flex-shrink-0 w-max">
                    <div className="flex items-center gap-x-2 h-full ">
                      <div className="flex items-center gap-x-1">
                        {" "}
                        <span className="leading-150 tracking-widest font-normal">
                          +91
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width={18}
                          height={18}
                          viewBox="-45 -30 90 60"
                          fill="#07038D"
                        >
                          <title>Flag of India</title>
                          <path fill="#FFF" d="m-45-30h90v60h-90z" />
                          <path fill="#FF6820" d="m-45-30h90v20h-90z" />
                          <path fill="#046A38" d="m-45 10h90v20h-90z" />
                          <circle r="9.25" />
                          <circle fill="#FFF" r={8} />
                          <circle r="1.6" />
                          <g id="d">
                            <g id="c">
                              <g id="b">
                                <g id="a">
                                  <path d="m0-8 .3 4.81409L0-.80235-.3-3.18591z" />
                                  <circle
                                    transform="rotate(7.5)"
                                    r="0.35"
                                    cy={-8}
                                  />
                                </g>
                                <use xlinkHref="#a" transform="scale(-1)" />
                              </g>
                              <use xlinkHref="#b" transform="rotate(15)" />
                            </g>
                            <use xlinkHref="#c" transform="rotate(30)" />
                          </g>
                          <use xlinkHref="#d" transform="rotate(60)" />
                          <use xlinkHref="#d" transform="rotate(120)" />
                        </svg>
                      </div>
                      <svg
                        width={1}
                        height={24}
                        viewBox="0 0 2 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width={1} height={24} fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                  <input
                    onChange={handleMobileNo}
                    value={mobile}
                    className="bg-transparent focus:outline-none focus:border-none focus:ring-0 px-2 py-1 flex-grow min-w-0 border-none focus:outline-none bg-transparent"
                    placeholder="Enter your Mobile Number"
                    autoComplete="tel"
                    inputMode="numeric"
                    type="tel"
                  />
                  <div className="flex-shrink-0 w-max">
                    <div className="w-5 h-5 rounded-md bg-bg_color_danger flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="var(--color-icon_error)"
                        height={16}
                        width={16}
                        viewBox="0 0 384 512"
                      >
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex items-start w-full justify-between leading-normal px-1">
                  <div className=" w-max  h-max" />
                </div>
              </div>
              <div className="w-full flex items-center justify-center gap-x-2">
                <button
                  onClick={handleOTP}
                  disabled={mobile?.length < 10}
                  type="button"
                  className="relative overflow-hidden w-full mt-2 h-fit bg-exchRegisterGradient text-text_primary3 transition-all ease-in-out text-sm whitespace-nowrap p-2 rounded-lg active:scale-[0.98] active:opacity-95 disabled:opacity-70 font-medium relative flex items-center justify-center gap-x-2 font-bold"
                >
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="fi_7182118">
                      <path
                        id="Vector"
                        d="M15.8332 2.5H4.1665C2.74984 2.5 1.6665 3.58333 1.6665 5V17.5C1.6665 17.8333 1.83317 18.0833 2.08317 18.25C2.24984 18.3333 2.33317 18.3333 2.49984 18.3333C2.6665 18.3333 2.83317 18.3333 2.9165 18.25L6.6665 15.9167C6.83317 15.8333 6.99984 15.8333 7.1665 15.8333H15.8332C17.2498 15.8333 18.3332 14.75 18.3332 13.3333V5C18.3332 3.58333 17.2498 2.5 15.8332 2.5ZM6.6665 10C6.1665 10 5.83317 9.66667 5.83317 9.16667C5.83317 8.66667 6.1665 8.33333 6.6665 8.33333C7.1665 8.33333 7.49984 8.66667 7.49984 9.16667C7.49984 9.66667 7.1665 10 6.6665 10ZM9.99984 10C9.49984 10 9.1665 9.66667 9.1665 9.16667C9.1665 8.66667 9.49984 8.33333 9.99984 8.33333C10.4998 8.33333 10.8332 8.66667 10.8332 9.16667C10.8332 9.66667 10.4998 10 9.99984 10ZM13.3332 10C12.8332 10 12.4998 9.66667 12.4998 9.16667C12.4998 8.66667 12.8332 8.33333 13.3332 8.33333C13.8332 8.33333 14.1665 8.66667 14.1665 9.16667C14.1665 9.66667 13.8332 10 13.3332 10Z"
                        fill="currentColor"
                      />
                    </g>
                  </svg>
                  <span className="   ">Get OTP On Message</span>
                </button>

                {/* <button
                  disabled={mobile?.length < 10}
                  type="button"
                  className="relative overflow-hidden w-full mt-2 h-fit bg-exchRegisterGradient text-text_primary3 transition-all ease-in-out text-sm whitespace-nowrap p-2 rounded-lg active:scale-[0.98] active:opacity-95 disabled:opacity-70 font-medium relative flex items-center justify-center gap-x-2 font-bold"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width={20}
                    height={24}
                    viewBox="0 0 48 48"
                    fill="currentColor"
                  >
                    <path
                      fill="#fff"
                      d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
                    />
                    <path
                      fill="#fff"
                      d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
                    />
                    <path
                      fill="#cfd8dc"
                      d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
                    />
                    <path
                      fill="#40c351"
                      d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
                    />
                    <path
                      fill="#fff"
                      fillRule="evenodd"
                      d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="  opacity-75 ">Whatsapp</span>
                </button> */}
              </div>
            </form>
            {/* <div className="flex items-center justify-center gap-3 z-1 w-full">
              <div className="flex items-center h-[1px] bg-bg_secondary3 w-full" />
              <span className="w-full text-xs text-center text-text_primary3 font-roboto font-normal leading-150 tracking-widest">
                or sign up with
              </span>
              <div className="flex items-center h-[1px] bg-bg_secondary3 w-full" />
            </div> */}
          </div>
        </div>
        <div className="w-full mt-2 overflow-hidden">
          <div className="flex justify-center items-center whitespace-normal gap-4 marquee-scroll">
            <div className="flex items-center text-text_color_primary1 relative mt-2 gap-x-1 h-[4.5rem] active:scale-[98%] transition-all ease-in-out duration-200 p-4 rounded-lg w-[12rem] bg-exchLoginGradient min-w-[18rem] ">
              <div className="absolute left-[0.15769rem] top-[0.03925rem]">
                <svg
                  width={20}
                  height={21}
                  viewBox="0 0 20 21"
                  fill="var(--color-icon_primary3)"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                >
                  <g id="Group" opacity="0.73">
                    <g id="star">
                      <path
                        id="Vector"
                        d="M0.405762 6.38867C10.1454 10.6987 10.1454 10.6987 14.7051 1.00031C10.1454 10.6987 10.1454 10.6987 19.885 15.0087C10.1454 10.6987 10.1454 10.6987 5.58558 20.397C10.1454 10.6987 10.1454 10.6987 0.405762 6.38867Z"
                        fill="var(--color-icon_primary3)"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="absolute right-[0.1rem] bottom-0 rotate-[-21deg]">
                <svg
                  width={20}
                  height={21}
                  viewBox="0 0 20 21"
                  fill="var(--color-icon_primary3)"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                >
                  <g id="Group" opacity="0.73">
                    <g id="star">
                      <path
                        id="Vector"
                        d="M0.405762 6.38867C10.1454 10.6987 10.1454 10.6987 14.7051 1.00031C10.1454 10.6987 10.1454 10.6987 19.885 15.0087C10.1454 10.6987 10.1454 10.6987 5.58558 20.397C10.1454 10.6987 10.1454 10.6987 0.405762 6.38867Z"
                        fill="var(--color-icon_primary3)"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <img
                alt="AUTO-DEPOSIT-Z9"
                loading="lazy"
                width={100}
                height={100}
                decoding="async"
                data-nimg={1}
                className="h-[2.5rem] w-[2.5rem] text-x"
                srcSet="/assets/image.webp"
                src="/assets/image.webp"
                style={{ color: "transparent" }}
              />
              <span className="text-text_secondary text-base leading-150 font-medium tracking-widest not-italic">
                4% Extra Cash On Every Deposit
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EnterMobileNumber;

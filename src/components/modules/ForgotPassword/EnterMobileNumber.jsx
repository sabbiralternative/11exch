import toast from "react-hot-toast";
import { useGetOtpMutation } from "../../../redux/features/auth/authApi";
import useLanguage from "../../../hooks/use-language";
import { LanguageKey } from "../../../const";
import { AxiosSecure } from "../../../lib/AxiosSecure";
import { API, Settings } from "../../../api";

const EnterMobileNumber = ({
  mobile,
  setOrder,
  setTimer,
  setMobile,
  setTab,
}) => {
  const { getLanguage } = useLanguage();
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
  const getOtpOnWhatsapp = async () => {
    const otpData = {
      mobile: mobile,
      type: "otpsend",
    };

    const res = await AxiosSecure.post(API.otpless, otpData);
    const data = res.data;

    if (data?.success) {
      setTimer(60);
      toast.success(data?.result?.message);
    } else {
      toast.error(data?.error?.errorMessage);
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
                  {getLanguage(LanguageKey.FORGOT_PASSWORD)}
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
                  {getLanguage(LanguageKey.MOBILE_NUMBER)} *
                </label>
                <div className="flex items-center w-full">
                  {" "}
                  <select
                    id="dropdown-phone-button"
                    className="rounded-l-lg border-none text-white py-3  px-3 bg-bg_inputBgColor"
                  >
                    {Settings.country_code?.map((item) => {
                      return (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                  <div className="flex items-center w-full w-full text-sm transition-all ease-in-out duration-300 border border-solid  px-3 py-2 bg-bg_inputBgColor rounded-r-lg   not-italic font-medium leading-150 tracking-widest text-text_secondary1 opacity-80 focus-within:text-text_primary3 border-border_tertiary24 focus-within:opacity-100 focus-within:border-border_secondary2">
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
                </div>
              </div>
              <div className="w-full flex items-center justify-center gap-x-2">
                <div className="w-full flex items-center justify-center gap-x-2">
                  {Settings.otp_method?.includes("sms") && (
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
                      <span className="   ">
                        {" "}
                        {getLanguage(LanguageKey.GET_OTP_ON_MESSAGE)}
                      </span>
                    </button>
                  )}
                  {Settings.otp_method?.includes("whatsapp") && (
                    <button
                      onClick={getOtpOnWhatsapp}
                      disabled={mobile?.length < 10}
                      type="button"
                      className="relative overflow-hidden w-full mt-2 h-fit bg-exchRegisterGradient text-text_primary3 transition-all ease-in-out text-sm whitespace-nowrap p-2 rounded-lg active:scale-[0.98] active:opacity-95 disabled:opacity-70 font-medium relative flex items-center justify-center gap-x-2 font-bold"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        stroke="currentColor"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                        <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                      </svg>
                      <span className="   ">
                        {" "}
                        {getLanguage(LanguageKey.GET_OTP_ON_WHATSAPP)}
                      </span>
                    </button>
                  )}
                </div>
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

import { useRef, useState } from "react";
import {
  useGetOtpMutation,
  useRegisterMutation,
} from "../../../redux/features/auth/authApi";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Settings } from "../../../api";
import { setUser } from "../../../redux/features/auth/authSlice";
import { setShowBanner } from "../../../redux/features/global/globalSlice";
import { Link, useNavigate } from "react-router-dom";

const VerifyOTP = ({ mobile, setTab, timer, setTimer, setOrder, order }) => {
  const navigate = useNavigate();
  const affnook_token = localStorage.getItem("affnook_token");
  const referralCode = localStorage.getItem("referralCode");
  const dispatch = useDispatch();

  const [handleRegister] = useRegisterMutation();
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [getOTP] = useGetOtpMutation();
  const inputs = useRef([]);
  const [otpValues, setOtpValues] = useState(["", "", "", ""]);
  const handleInput = (index, e) => {
    const newValue = e.target.value.slice(0, 1);
    const newOtpValues = [...otpValues];
    newOtpValues[index] = newValue;
    setOtpValues(newOtpValues);
    if (newValue && index < inputs.current.length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  const handleOTP = async () => {
    const res = await getOTP({ mobile }).unwrap();
    if (res?.success) {
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
  const onSubmit = async (data) => {
    const registerData = {
      username: "",
      password: data?.password,
      confirmPassword: data?.confirmPassword,
      mobile: mobile,
      otp: data?.otp,
      isOtpAvailable: Settings.otp,
      referralCode: referralCode || data?.referralCode,
      orderId: order.orderId,
      otpMethod: order.otpMethod,
      affnook_token: affnook_token || null,
    };

    const result = await handleRegister(registerData).unwrap();

    if (result.success) {
      if (window?.fbq) {
        window.fbq("track", "CompleteRegistration", {
          content_name: "User Signup",
          status: "success",
        });
      }
      localStorage.removeItem("referralCode");
      const token = result?.result?.token;
      const bonusToken = result?.result?.bonusToken;
      const user = result?.result?.loginName;
      const memberId = result?.result?.memberId;
      const game = result?.result?.buttonValue?.game;
      const banner = result?.result?.banner;
      dispatch(setUser({ user, token, memberId }));
      localStorage.setItem("buttonValue", JSON.stringify(game));
      localStorage.setItem("bonusToken", bonusToken);
      localStorage.setItem("token", token);
      if (banner) {
        localStorage.setItem("banner", banner);
        dispatch(setShowBanner(true));
      }
      if (token && user) {
        navigate("/");
        toast.success("Register successful");
      }
    } else {
      toast.error(result?.error?.description);
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
              <span className="text-transparent text-start bg-clip-text leading-150 tracking-widest  font-semibold bg-exchLoginTextGradient text-lg">
                New Member?
              </span>
              <div className="flex items-center gap-1.5 z-2">
                <span className="text-text_secondary  text-lg not-italic font-semibold leading-150 tracking-widest">
                  Register Now,
                </span>
                <span className="text-lg">👋</span>
              </div>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              autoComplete="off"
              className="w-full h-max flex flex-col gap-y-4"
              data-gtm-form-interact-id={1}
            >
              <div title="Mobile Number *" className="flex flex-col w-full">
                <label
                  htmlFor="phoneNo"
                  className="text-xs not-italic font-semibold leading-150 tracking-widest text-text_primary3 mb-1 px-1"
                >
                  Mobile Number *
                </label>
                <div className="flex items-center w-full w-full text-sm transition-all ease-in-out duration-300 border border-solid  px-3 py-2 bg-bg_inputBgColor rounded-lg   not-italic font-medium leading-150 tracking-widest text-text_primary3 border-border_secondary2">
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
                    className="bg-transparent focus:outline-none focus:border-none focus:ring-0 px-2 py-1 flex-grow min-w-0 border-none focus:outline-none bg-transparent"
                    placeholder="Enter your Mobile Number"
                    autoComplete="tel"
                    inputMode="numeric"
                    type="tel"
                    value={mobile}
                    data-gtm-form-interact-field-id={1}
                    disabled
                  />
                  <div
                    onClick={() => setTab(1)}
                    className="flex-shrink-0 w-max"
                  >
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_3085_24)">
                        <path
                          d="M3.5 24H18.5C19.4297 23.9974 20.3204 23.626 20.9765 22.9674C21.6327 22.3087 22.0008 21.4167 22 20.487V12.95C22 12.6848 21.8946 12.4304 21.7071 12.2429C21.5196 12.0554 21.2652 11.95 21 11.95C20.7348 11.95 20.4804 12.0554 20.2929 12.2429C20.1054 12.4304 20 12.6848 20 12.95V20.487C20.0013 20.8864 19.8441 21.2701 19.5629 21.5537C19.2817 21.8374 18.8994 21.9979 18.5 22H3.5C3.10057 21.9979 2.7183 21.8374 2.43708 21.5537C2.15587 21.2701 1.99867 20.8864 2 20.487V5.513C1.99867 5.11357 2.15587 4.72993 2.43708 4.44627C2.7183 4.16262 3.10057 4.00212 3.5 4H11C11.2652 4 11.5196 3.89464 11.7071 3.70711C11.8946 3.51957 12 3.26522 12 3C12 2.73478 11.8946 2.48043 11.7071 2.29289C11.5196 2.10536 11.2652 2 11 2H3.5C2.57031 2.00265 1.67964 2.37403 1.02346 3.03265C0.367281 3.69126 -0.000797091 4.5833 1.29611e-06 5.513V20.487C-0.000797091 21.4167 0.367281 22.3087 1.02346 22.9674C1.67964 23.626 2.57031 23.9974 3.5 24Z"
                          fill="var(--color-icon_primary1)"
                        />
                        <path
                          d="M9.45499 10.5441L8.66599 14.1581C8.63027 14.322 8.63638 14.4923 8.68373 14.6532C8.73109 14.8142 8.81818 14.9606 8.93699 15.0791C9.05742 15.1946 9.20393 15.2793 9.36408 15.3261C9.52423 15.373 9.69331 15.3805 9.85699 15.3481L13.463 14.5571C13.6502 14.516 13.8217 14.4219 13.957 14.2861L23.071 5.1721C23.3496 4.89351 23.5706 4.56277 23.7214 4.19876C23.8722 3.83475 23.9498 3.4446 23.9498 3.0506C23.9498 2.65659 23.8722 2.26644 23.7214 1.90243C23.5706 1.53842 23.3496 1.20768 23.071 0.929096C22.4998 0.383232 21.7401 0.0786133 20.95 0.0786133C20.1599 0.0786133 19.4002 0.383232 18.829 0.929096L9.72899 10.0521C9.59241 10.1865 9.4973 10.3572 9.45499 10.5441ZM20.243 2.3441C20.4332 2.16184 20.6865 2.06009 20.95 2.06009C21.2135 2.06009 21.4667 2.16184 21.657 2.3441C21.842 2.53272 21.9456 2.78639 21.9456 3.0506C21.9456 3.3148 21.842 3.56847 21.657 3.7571L20.95 4.4641L19.536 3.0501L20.243 2.3441ZM11.343 11.2581L18.117 4.4671L19.517 5.8741L12.74 12.6671L10.945 13.0611L11.343 11.2581Z"
                          fill="var(--color-icon_primary1)"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_3085_24">
                          <rect width={24} height={24} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="flex items-start w-full justify-between leading-normal px-1">
                  <div className=" w-max  h-max" />
                </div>
              </div>
              <div className="mt-1 w-full flex flex-col gap-y-0.5 relative">
                <h1 className="text-xs font-medium text-text_primary3 ml-1">
                  Enter OTP *
                </h1>
                <div className="grid grid-cols-4 gap-4">
                  {[...Array(4)].map((_, index) => (
                    <div className="relative" key={index}>
                      <input
                        ref={(el) => (inputs.current[index] = el)}
                        onChange={(e) => handleInput(index, e)}
                        inputMode="numeric"
                        className="block w-full focus:outline-none   w-full h-[44px] text-center text-xl bg-bg_inputBgColor border rounded-md text-text_primary2 focus:border-border_secondary2 focus:ring-0 border-border_color_primary1"
                        placeholder="−"
                        aria-label="Digit 1 of OTP"
                        autoComplete="one-time-code"
                        pattern="[0-9]*"
                        value={otpValues[index]}
                        type="text"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-end mt-1">
                  <button
                    onClick={handleOTP}
                    type="button"
                    disabled={timer > 0}
                    className="text-text_primary3 font-bold text-xs sm:text-sm opacity-70 cursor-not-allowed"
                  >
                    {timer > 0
                      ? `Resend OTP in ${timer} seconds`
                      : "Resend OTP"}
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-y-0.5 w-full">
                <div title="Password *" className="flex flex-col w-full">
                  <label
                    htmlFor="password"
                    className="font-roboto text-xs not-italic font-semibold leading-150 tracking-widest text-text_primary2 mb-1 px-1"
                  >
                    Password *
                  </label>
                  <div className="flex items-center w-full w-full text-[13px] transition-all ease-in-out duration-300 border border-solid  px-3 py-2 bg-bg_inputBgColor rounded-lg  font-roboto not-italic font-medium leading-150 tracking-widest text-text_secondary1 opacity-80 focus-within:text-text_primary3 border-border_tertiary24 focus-within:opacity-100 focus-within:border-border_secondary2">
                    <input
                      {...register("password", { required: true })}
                      className="focus:border-none focus:ring-0 px-2 py-1 flex-grow min-w-0 border-none focus:outline-none bg-transparent"
                      placeholder="Enter Password"
                      autoComplete="current-password"
                      inputMode="text"
                      type={showPassword ? "text" : "password"}
                      data-gtm-form-interact-field-id={1}
                    />
                    <div
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="flex-shrink-0 w-max"
                    >
                      {showPassword ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height={22}
                          width={22}
                          viewBox="0 0 512 512"
                          className="popUpOpenAnimation"
                          fill="currentColor"
                        >
                          <title>Eye</title>
                          <path
                            d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={32}
                          />
                          <circle
                            cx={256}
                            cy={256}
                            r={80}
                            fill="none"
                            stroke="currentColor"
                            strokeMiterlimit={10}
                            strokeWidth={32}
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height={22}
                          width={22}
                          fill="currentColor"
                          viewBox="0 0 512 512"
                          className="popUpOpenAnimation"
                        >
                          <title>Eye Off</title>
                          <path d="M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM255.66 384c-41.49 0-81.5-12.28-118.92-36.5-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 00.14-2.94L93.5 161.38a2 2 0 00-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0075.8-12.58 2 2 0 00.77-3.31l-21.58-21.58a4 4 0 00-3.83-1 204.8 204.8 0 01-51.16 6.47zM490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 00-74.89 12.83 2 2 0 00-.75 3.31l21.55 21.55a4 4 0 003.88 1 192.82 192.82 0 0150.21-6.69c40.69 0 80.58 12.43 118.55 37 34.71 22.4 65.74 53.88 89.76 91a.13.13 0 010 .16 310.72 310.72 0 01-64.12 72.73 2 2 0 00-.15 2.95l19.9 19.89a2 2 0 002.7.13 343.49 343.49 0 0068.64-78.48 32.2 32.2 0 00-.1-34.78z" />
                          <path d="M256 160a95.88 95.88 0 00-21.37 2.4 2 2 0 00-1 3.38l112.59 112.56a2 2 0 003.38-1A96 96 0 00256 160zM165.78 233.66a2 2 0 00-3.38 1 96 96 0 00115 115 2 2 0 001-3.38z" />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height={22}
                            width={22}
                            fill="currentColor"
                            viewBox="0 0 512 512"
                            className="popUpOpenAnimation"
                          >
                            <title>Eye Off</title>
                            <path d="M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM255.66 384c-41.49 0-81.5-12.28-118.92-36.5-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 00.14-2.94L93.5 161.38a2 2 0 00-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0075.8-12.58 2 2 0 00.77-3.31l-21.58-21.58a4 4 0 00-3.83-1 204.8 204.8 0 01-51.16 6.47zM490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 00-74.89 12.83 2 2 0 00-.75 3.31l21.55 21.55a4 4 0 003.88 1 192.82 192.82 0 0150.21-6.69c40.69 0 80.58 12.43 118.55 37 34.71 22.4 65.74 53.88 89.76 91a.13.13 0 010 .16 310.72 310.72 0 01-64.12 72.73 2 2 0 00-.15 2.95l19.9 19.89a2 2 0 002.7.13 343.49 343.49 0 0068.64-78.48 32.2 32.2 0 00-.1-34.78z" />
                            <path d="M256 160a95.88 95.88 0 00-21.37 2.4 2 2 0 00-1 3.38l112.59 112.56a2 2 0 003.38-1A96 96 0 00256 160zM165.78 233.66a2 2 0 00-3.38 1 96 96 0 00115 115 2 2 0 001-3.38z" />
                          </svg>
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-y-0.5 w-full">
                <div title="Password *" className="flex flex-col w-full">
                  <label
                    htmlFor="password"
                    className="font-roboto text-xs not-italic font-semibold leading-150 tracking-widest text-text_primary2 mb-1 px-1"
                  >
                    Confirm Password *
                  </label>
                  <div className="flex items-center w-full w-full text-[13px] transition-all ease-in-out duration-300 border border-solid  px-3 py-2 bg-bg_inputBgColor rounded-lg  font-roboto not-italic font-medium leading-150 tracking-widest text-text_secondary1 opacity-80 focus-within:text-text_primary3 border-border_tertiary24 focus-within:opacity-100 focus-within:border-border_secondary2">
                    <input
                      {...register("confirmPassword", { required: true })}
                      className="focus:border-none focus:ring-0 px-2 py-1 flex-grow min-w-0 border-none focus:outline-none bg-transparent"
                      placeholder="Enter Confirm Password"
                      autoComplete="current-password"
                      inputMode="text"
                      type={showConfirmPassword ? "text" : "password"}
                      data-gtm-form-interact-field-id={1}
                    />
                    <div
                      onClick={() => setShowConfirmPassword((prev) => !prev)}
                      className="flex-shrink-0 w-max"
                    >
                      {showConfirmPassword ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height={22}
                          width={22}
                          viewBox="0 0 512 512"
                          className="popUpOpenAnimation"
                          fill="currentColor"
                        >
                          <title>Eye</title>
                          <path
                            d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={32}
                          />
                          <circle
                            cx={256}
                            cy={256}
                            r={80}
                            fill="none"
                            stroke="currentColor"
                            strokeMiterlimit={10}
                            strokeWidth={32}
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height={22}
                          width={22}
                          fill="currentColor"
                          viewBox="0 0 512 512"
                          className="popUpOpenAnimation"
                        >
                          <title>Eye Off</title>
                          <path d="M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM255.66 384c-41.49 0-81.5-12.28-118.92-36.5-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 00.14-2.94L93.5 161.38a2 2 0 00-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0075.8-12.58 2 2 0 00.77-3.31l-21.58-21.58a4 4 0 00-3.83-1 204.8 204.8 0 01-51.16 6.47zM490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 00-74.89 12.83 2 2 0 00-.75 3.31l21.55 21.55a4 4 0 003.88 1 192.82 192.82 0 0150.21-6.69c40.69 0 80.58 12.43 118.55 37 34.71 22.4 65.74 53.88 89.76 91a.13.13 0 010 .16 310.72 310.72 0 01-64.12 72.73 2 2 0 00-.15 2.95l19.9 19.89a2 2 0 002.7.13 343.49 343.49 0 0068.64-78.48 32.2 32.2 0 00-.1-34.78z" />
                          <path d="M256 160a95.88 95.88 0 00-21.37 2.4 2 2 0 00-1 3.38l112.59 112.56a2 2 0 003.38-1A96 96 0 00256 160zM165.78 233.66a2 2 0 00-3.38 1 96 96 0 00115 115 2 2 0 001-3.38z" />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height={22}
                            width={22}
                            fill="currentColor"
                            viewBox="0 0 512 512"
                            className="popUpOpenAnimation"
                          >
                            <title>Eye Off</title>
                            <path d="M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM255.66 384c-41.49 0-81.5-12.28-118.92-36.5-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 00.14-2.94L93.5 161.38a2 2 0 00-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0075.8-12.58 2 2 0 00.77-3.31l-21.58-21.58a4 4 0 00-3.83-1 204.8 204.8 0 01-51.16 6.47zM490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 00-74.89 12.83 2 2 0 00-.75 3.31l21.55 21.55a4 4 0 003.88 1 192.82 192.82 0 0150.21-6.69c40.69 0 80.58 12.43 118.55 37 34.71 22.4 65.74 53.88 89.76 91a.13.13 0 010 .16 310.72 310.72 0 01-64.12 72.73 2 2 0 00-.15 2.95l19.9 19.89a2 2 0 002.7.13 343.49 343.49 0 0068.64-78.48 32.2 32.2 0 00-.1-34.78z" />
                            <path d="M256 160a95.88 95.88 0 00-21.37 2.4 2 2 0 00-1 3.38l112.59 112.56a2 2 0 003.38-1A96 96 0 00256 160zM165.78 233.66a2 2 0 00-3.38 1 96 96 0 00115 115 2 2 0 001-3.38z" />
                          </svg>
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-y-0.5 w-full">
                <div title="Password *" className="flex flex-col w-full">
                  <label
                    htmlFor="password"
                    className="font-roboto text-xs not-italic font-semibold leading-150 tracking-widest text-text_primary2 mb-1 px-1"
                  >
                    Referral(Optional)
                  </label>
                  <div className="flex items-center w-full w-full text-[13px] transition-all ease-in-out duration-300 border border-solid  px-3 py-2 bg-bg_inputBgColor rounded-lg  font-roboto not-italic font-medium leading-150 tracking-widest text-text_secondary1 opacity-80 focus-within:text-text_primary3 border-border_tertiary24 focus-within:opacity-100 focus-within:border-border_secondary2">
                    <input
                      readOnly={referralCode}
                      {...register("referralCode")}
                      className="focus:border-none focus:ring-0 px-2 py-1 flex-grow min-w-0 border-none focus:outline-none bg-transparent"
                      defaultValue={referralCode}
                      placeholder="Enter referral code(Optional)"
                      inputMode="text"
                      type="text"
                      data-gtm-form-interact-field-id={1}
                    />
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="mt-5 w-full h-fit bg-exchRegisterGradient text-text_primary3 transition-all ease-in-out text-sm whitespace-nowrap p-2 rounded-lg active:scale-[0.98] active:opacity-95 disabled:opacity-70 font-medium relative flex items-center justify-center font-bold"
                disabled
              >
                Register
              </button>
              <p className="w-full text-center text-xs text-text_primary2  font-normal leading-150 tracking-widest cursor-pointer">
                Already have an account?{" "}
                <Link to="/login" className="underline">
                  Login
                </Link>
              </p>
            </form>
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

export default VerifyOTP;

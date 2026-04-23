import { useDispatch, useSelector } from "react-redux";
import { Settings } from "../../api";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useForm } from "react-hook-form";
import { setUser } from "../../redux/features/auth/authSlice";
import { setShowBanner } from "../../redux/features/global/globalSlice";
import toast from "react-hot-toast";
import { useEffect, useRef, useState } from "react";

const Login = () => {
  const ref = useRef();
  const [tab, setTab] = useState("phone");
  const [tabWidth, setTabWidth] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const { closePopupForForever } = useSelector((state) => state.global);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [handleLogin] = useLoginMutation();
  const { register, handleSubmit } = useForm();

  const onSubmit = async ({ username, password }) => {
    const loginData = {
      username: username,
      password: password,
      b2c: Settings.b2c,
      apk: closePopupForForever ? true : false,
      nonce: crypto.randomUUID(),
    };
    const result = await handleLogin(loginData).unwrap();

    if (result.success) {
      const token = result?.result?.token;
      const bonusToken = result?.result?.bonusToken;
      const user = result?.result?.loginName;
      const game = result?.result?.buttonValue?.game;
      const memberId = result?.result?.memberId;
      const banner = result?.result?.banner;

      dispatch(setUser({ user, token, memberId }));
      localStorage.setItem("memberId", memberId);
      localStorage.setItem("buttonValue", JSON.stringify(game));
      localStorage.setItem("token", token);
      localStorage.setItem("bonusToken", bonusToken);
      if (banner) {
        localStorage.setItem("banner", banner);
        dispatch(setShowBanner(true));
      }
      if (result?.result?.changePassword) {
        navigate("/");
        localStorage.setItem("changePassword", true);
        navigate("/change-password");
      }
      if (!result?.result?.changePassword && token && user) {
        navigate("/");
        toast.success("Login successful");
      }
    } else {
      toast.error(result?.error);
    }
  };

  const loginWithDemo = async () => {
    const loginData = {
      username: "demo",
      password: "",
      b2c: Settings.b2c,
      apk: closePopupForForever ? true : false,
      nonce: crypto.randomUUID(),
    };
    const result = await handleLogin(loginData).unwrap();

    if (result.success) {
      const token = result?.result?.token;
      const bonusToken = result?.result?.bonusToken;
      const user = result?.result?.loginName;
      const game = result?.result?.buttonValue?.game;
      const banner = result?.result?.banner;

      dispatch(setUser({ user, token }));
      localStorage.setItem("buttonValue", JSON.stringify(game));
      localStorage.setItem("token", token);

      localStorage.setItem("bonusToken", bonusToken);
      if (banner) {
        localStorage.setItem("banner", banner);
        dispatch(setShowBanner(true));
      }
      if (token && user) {
        navigate("/");
        toast.success("Login successful");
      }
    } else {
      toast.error(result?.error);
    }
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
  };

  const getWhatsAppId = (link) => {
    window.open(link, "_blank");
  };

  useEffect(() => {
    if (ref.current) {
      const handleResize = () => {
        const tabWidth = ref.current.offsetWidth;
        setTabWidth(tabWidth / 2);
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [tab]);

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
            <div className="flex flex-col items-start gap-[0.3125rem] w-full font-roboto">
              <span className="text-transparent text-start bg-clip-text bg-exchLoginTextGradient leading-150 tracking-widest font-bold text-lg">
                Log in
              </span>
              <div className="flex items-center gap-[0.375rem] z-2">
                <span className="text-text_secondary  text-lg not-italic font-semibold leading-150 tracking-widest capitalize">
                  Welcome to {Settings.site_name}
                </span>
                <span className="text-lg">👋</span>
              </div>
              <div
                ref={ref}
                className="px-2.5 w-full py-[0.44rem] rounded-lg h-max bg-bg_primary5 relative z-1 gap-2.5"
              >
                <div className="flex flex-row w-full items-center justify-center gap-2.5 relative">
                  <div
                    onClick={() => setTab("phone")}
                    className="cursor-pointer w-full flex flex-row items-center justify-center"
                  >
                    <span className="text-text_secondary  px-5 py-2 min-w-[50%] text-xs whitespace-nowrap truncate xs:text-sm md:text-sm lg:text-base font-bold leading-4 active:scale-95 block z-10 ">
                      Phone Number
                    </span>
                  </div>
                  <div
                    onClick={() => setTab("userId")}
                    className="cursor-pointer w-full flex flex-row items-center justify-center"
                  >
                    <span className="text-text_secondary  text-xs xs:text-sm rounded-lg px-5 py-2 min-w-[50%] text-xs whitespace-nowrap truncate xs:text-sm md:text-sm lg:text-base font-bold leading-4 active:scale-95 block z-10 ">
                      User ID
                    </span>
                  </div>
                  <div
                    className="absolute z-1 w-full h-full transition-all ease-in-out duration-150 bg-exchRegisterGradient text-xs xs:text-sm bg-exchRegisterGradient rounded-lg"
                    style={{
                      width: `${tabWidth}px`,
                      top: "1px",
                      left: tab === "phone" ? "0px" : `${tabWidth - 20}px`,
                      height: "27.9818px",
                    }}
                  />
                </div>
              </div>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full gap-y-4 flex flex-col mt-4"
              autoComplete="on"
              data-gtm-form-interact-id={0}
            >
              <div
                title={tab === "phone" ? "Mobile Number*" : "User ID*"}
                className="flex flex-col w-full"
              >
                <label
                  htmlFor="phoneNo"
                  className="text-xs not-italic font-semibold leading-150 tracking-widest text-text_primary2 mb-1 px-1"
                >
                  {tab === "phone" ? "Mobile Number*" : "User ID*"}
                </label>
                <div className="flex items-center w-full w-full text-[13px] transition-all ease-in-out duration-300 border border-solid  px-3 py-2 bg-bg_inputBgColor rounded-lg  not-italic font-medium leading-150 tracking-widest text-text_secondary1 opacity-80 focus-within:text-text_primary3 border-border_tertiary24 focus-within:opacity-100 focus-within:border-border_secondary2">
                  {tab === "phone" ? (
                    <div className="flex-shrink-0 w-max">
                      <div className="flex items-center gap-x-2 h-full">
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
                          width={2}
                          height={16}
                          viewBox="0 0 2 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width={2} height={16} fill="currentColor" />
                        </svg>
                      </div>
                    </div>
                  ) : (
                    <div className="flex-shrink-0 w-max">
                      <div className="flex items-center gap-x-2 h-full">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 14 14"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          className
                        >
                          <g
                            id="Fill Ion Icons"
                            clipPath="url(#clip0_576_141939)"
                          >
                            <path
                              id="Vector"
                              d="M6.90036 6.74384C7.82684 6.74384 8.6291 6.41155 9.28461 5.75594C9.94011 5.10044 10.2724 4.2984 10.2724 3.37181C10.2724 2.44555 9.94011 1.6434 9.2845 0.987682C8.62889 0.332289 7.82674 0 6.90036 0C5.97377 0 5.17172 0.332289 4.51622 0.987789C3.86072 1.64329 3.52832 2.44544 3.52832 3.37181C3.52832 4.2984 3.86072 5.10055 4.51633 5.75605C5.17194 6.41144 5.97409 6.74384 6.90036 6.74384Z"
                              fill="currentColor"
                            />
                            <path
                              id="Vector_2"
                              d="M12.8004 10.7653C12.7815 10.4925 12.7433 10.1949 12.687 9.88071C12.6301 9.56412 12.557 9.26484 12.4694 8.99129C12.3789 8.70856 12.2559 8.42936 12.1038 8.1618C11.9459 7.88409 11.7605 7.64227 11.5524 7.44328C11.3348 7.23511 11.0685 7.06773 10.7604 6.94565C10.4534 6.8242 10.1132 6.76268 9.74933 6.76268C9.60641 6.76268 9.4682 6.82132 9.20128 6.9951C9.037 7.10223 8.84485 7.22613 8.63037 7.36317C8.44698 7.48002 8.19853 7.5895 7.89166 7.68863C7.59227 7.7855 7.28828 7.83464 6.98825 7.83464C6.68822 7.83464 6.38434 7.7855 6.08463 7.68863C5.77808 7.58961 5.52963 7.48013 5.34645 7.36328C5.134 7.22752 4.94174 7.10362 4.77501 6.99499C4.50841 6.82121 4.37009 6.76257 4.22717 6.76257C3.86316 6.76257 3.52307 6.8242 3.2162 6.94575C2.90837 7.06763 2.64188 7.235 2.42409 7.44339C2.21613 7.64248 2.03059 7.8842 1.87294 8.1618C1.72095 8.42936 1.5979 8.70846 1.50732 8.9914C1.41985 9.26494 1.34668 9.56412 1.28986 9.88071C1.23357 10.1945 1.19533 10.4922 1.17642 10.7656C1.15784 11.0335 1.14844 11.3116 1.14844 11.5924C1.14844 12.3232 1.38075 12.9148 1.83887 13.3511C2.29132 13.7817 2.89 14.0001 3.61803 14.0001H10.3591C11.0871 14.0001 11.6856 13.7818 12.1382 13.3511C12.5964 12.9151 12.8287 12.3234 12.8287 11.5923C12.8286 11.3102 12.8191 11.0319 12.8004 10.7653Z"
                              fill="currentColor"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_576_141939">
                              <rect width={14} height={14} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <svg
                          width={2}
                          height={16}
                          viewBox="0 0 2 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width={2} height={16} fill="currentColor" />
                        </svg>
                      </div>
                    </div>
                  )}

                  <input
                    {...register("username", { required: true })}
                    className=" focus:outline-none focus:border-none focus:ring-0 px-2 py-1 flex-grow min-w-0 border-none  bg-transparent"
                    placeholder={
                      tab === "phone"
                        ? "Enter your Mobile Number"
                        : "Enter User ID"
                    }
                    autoComplete="tel"
                    inputMode="numeric"
                    type="tel"
                    data-gtm-form-interact-field-id={0}
                  />
                </div>
                <div className="flex items-start w-full justify-between leading-normal px-1">
                  <div className=" w-max  h-max" />
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
                  <div className="flex items-start w-full justify-between leading-normal px-1">
                    <div className=" w-max  h-max" />
                  </div>
                </div>
                <Link
                  to="/forgot-password"
                  className="w-full text-end text-xs text-text_primary2  font-normal leading-150 tracking-widest cursor-pointer"
                >
                  Forgot Password?
                </Link>
              </div>
              <button
                title="Login"
                aria-label="Login"
                type="submit"
                id="loginButton"
                className="relative overflow-hidden flex items-center text-text_primary2 justify-center h-[2.5rem] bg-exchRegisterGradient rounded-lg  shadow-regLogFinal font-roboto text-sm not-italic font-semibold leading-150 tracking-widest w-full disabled:opacity-50
            
          "
              >
                LOG IN
              </button>
              <button
                onClick={loginWithDemo}
                title="Login"
                aria-label="Login"
                type="button"
                id="loginButton"
                className="relative overflow-hidden flex items-center text-text_primary2 justify-center h-[2.5rem] bg-exchRegisterGradient rounded-lg  shadow-regLogFinal font-roboto text-sm not-italic font-semibold leading-150 tracking-widest w-full disabled:opacity-50
            
          "
              >
                Demo
              </button>
            </form>
            {/* <div className="flex items-center justify-center gap-3 z-1 w-full">
              <div className="flex items-center h-[1px] bg-bg_secondary3 w-full" />
              <span className="w-full text-xs text-center text-text_primary3 font-roboto font-normal leading-150 tracking-widest">
                or log in with
              </span>
              <div className="flex items-center h-[1px] bg-bg_secondary3 w-full" />
            </div> */}
            <p className="w-full text-center text-xs text-text_primary2  font-normal leading-150 tracking-widest cursor-pointer">
              Don&apos;t have an account?{" "}
              <Link to="/register" className="underline">
                Register
              </Link>
            </p>
            <div className="flex items-center justify-center gap-x-2 self-stretch">
              {Settings.apk_link && (
                <div
                  className="w-full flex items-center justify-center cursor-pointer"
                  id="googleLoginSignUpButton"
                >
                  <button
                    onClick={handleDownload}
                    title="Google Login"
                    aria-label="Google Login"
                    className="relative overflow-hidden flex relative overflow-hidden items-center justify-center h-[2.5rem] bg-bg_inputBgColor gap-x-[4px] border border-solid border-border_tertiary24 py-[0.69rem] rounded-lg shadow-md text-text_secondary font-roboto text-sm not-italic font-semibold leading-150 tracking-widest w-full active:scale-95 transition-all ease-in-out duration-300"
                    type="button"
                  >
                    Download APK
                  </button>
                </div>
              )}

              {Settings?.whatsapplink && Settings.registration_whatsapp && (
                <div className="w-full">
                  <button
                    onClick={() => getWhatsAppId(Settings?.whatsapplink)}
                    title="WhatsApp"
                    className="relative overflow-hidden flex relative overflow-hidden items-center justify-center h-[2.5rem] bg-bg_inputBgColor gap-x-[4px] border border-solid border-border_tertiary24 py-[0.69rem] rounded-lg shadow-md text-text_secondary font-roboto text-sm not-italic font-semibold leading-150 tracking-widest w-full active:scale-95 transition-all ease-in-out duration-300 "
                    type="button"
                  >
                    <svg
                      width={21}
                      height={20}
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="Fill Ion Icons" clipPath="url(#clip0_2432_31530)">
                        <path
                          id="Vector"
                          d="M10.2525 0H10.2475C4.73375 0 0.25 4.485 0.25 10C0.25 12.1875 0.955 14.215 2.15375 15.8612L0.9075 19.5763L4.75125 18.3475C6.3325 19.395 8.21875 20 10.2525 20C15.7662 20 20.25 15.5138 20.25 10C20.25 4.48625 15.7662 0 10.2525 0Z"
                          fill="#4CAF50"
                        />
                        <path
                          id="Vector_2"
                          d="M16.0712 14.1212C15.8299 14.8025 14.8724 15.3675 14.1087 15.5325C13.5862 15.6437 12.9037 15.7325 10.6062 14.78C7.66744 13.5625 5.77494 10.5762 5.62744 10.3825C5.48619 10.1887 4.43994 8.80123 4.43994 7.36623C4.43994 5.93123 5.16869 5.23248 5.46244 4.93248C5.70369 4.68623 6.10244 4.57373 6.48494 4.57373C6.60869 4.57373 6.71994 4.57998 6.81994 4.58498C7.11369 4.59748 7.26119 4.61498 7.45494 5.07873C7.69619 5.65998 8.28369 7.09498 8.35369 7.24248C8.42494 7.38998 8.49619 7.58998 8.39619 7.78373C8.30244 7.98373 8.21994 8.07248 8.07244 8.24248C7.92494 8.41248 7.78494 8.54248 7.63744 8.72498C7.50244 8.88373 7.34994 9.05373 7.51994 9.34748C7.68994 9.63498 8.27744 10.5937 9.14244 11.3637C10.2587 12.3575 11.1637 12.675 11.4874 12.81C11.7287 12.91 12.0162 12.8862 12.1924 12.6987C12.4162 12.4575 12.6924 12.0575 12.9737 11.6637C13.1737 11.3812 13.4262 11.3462 13.6912 11.4462C13.9612 11.54 15.3899 12.2462 15.6837 12.3925C15.9774 12.54 16.1712 12.61 16.2424 12.7337C16.3124 12.8575 16.3124 13.4387 16.0712 14.1212Z"
                          fill="#FAFAFA"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2432_31530">
                          <rect
                            width={20}
                            height={20}
                            fill="white"
                            transform="translate(0.25)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <span>WhatsApp</span>
                  </button>
                </div>
              )}
            </div>
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

export default Login;

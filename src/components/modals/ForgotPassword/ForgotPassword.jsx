import { useDispatch } from "react-redux";
import { Settings } from "../../../api";
import { useLogo } from "../../../context/ApiProvider";
import { useNavigate } from "react-router-dom";
import {
  setShowForgotPasswordModal,
  setShowRegisterModal,
} from "../../../redux/features/global/globalSlice";
import {
  useForgotPasswordMutation,
  useGetOtpMutation,
} from "../../../redux/features/auth/authApi";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import useCloseModalClickOutside from "../../../hooks/closeModal";

const ForgotPassword = () => {
  const ref = useRef();
  const { logo } = useLogo();
  const navigate = useNavigate();
  const [timer, setTimer] = useState(null);
  const dispatch = useDispatch();
  const [getOTP] = useGetOtpMutation();
  const [handleForgotPassword] = useForgotPasswordMutation();
  const { register, handleSubmit } = useForm();
  const [order, setOrder] = useState({
    orderId: null,
    otpMethod: null,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [mobile, setMobile] = useState("");

  useCloseModalClickOutside(ref, () => dispatch(setShowRegisterModal(false)));

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
    const forgotPasswordData = {
      username: mobile,
      password: data?.password,
      confirmPassword: data?.confirmPassword,
      otp: data?.otp,
      isOtpAvailable: Settings.otp,
      orderId: order.orderId,
      otpMethod: order.otpMethod,
    };

    const result = await handleForgotPassword(forgotPasswordData).unwrap();

    if (result.success) {
      toast.success("Password updated successfully");
      closeForgotPasswordModal();
      navigate("/login");
    } else {
      toast.error(result?.error?.loginName?.[0]?.description);
    }
  };

  const handleMobileNo = (e) => {
    if (e.target.value.length <= 10) {
      setMobile(e.target.value);
    }
  };
  const closeForgotPasswordModal = () => {
    dispatch(setShowForgotPasswordModal(false));
  };

  useEffect(() => {
    let interval = null;
    if (timer) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer > 0) return prevTimer - 1;
          clearInterval(interval);
          return 0;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"
      role="presentation"
    >
      <div
        ref={ref}
        className="flex w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-lg shadow-xl bg-white"
        role="dialog"
        aria-modal="true"
        aria-labelledby="signup-modal-title"
      >
        <div
          className="hidden md:flex flex-[0_0_45%] relative items-center justify-center min-h-[480px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("/src/assets/img/login_page_banner-CbcBaCVU.webp")',
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 flex items-center justify-center p-8">
            <img
              src={logo}
              style={{
                height: Settings.logo_height,
                width: Settings.logo_width,
              }}
              alt="Logo"
              className="max-h-[120px] w-auto object-contain"
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col bg-goldenYellow min-h-[480px] max-h-[90vh] relative">
          <button
            onClick={() => dispatch(setShowForgotPasswordModal(false))}
            type="button"
            className="absolute top-3 right-3 z-10 w-10 h-10 flex items-center justify-center bg-black text-white rounded hover:opacity-90 transition-opacity"
            aria-label="Close"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex flex-col flex-1 overflow-y-auto px-6 py-8 pt-14">
            <div className="flex justify-center">
              <div className="w-full max-w-md overflow-y-auto">
                <header className="flex flex-col justify-center items-center text-center">
                  <h1 className="text-2xl font-bold text-black3">
                    Forgot Password
                  </h1>
                  <p className="text-xs text-black4 mt-1">
                    Enter your phone number to reset your password.
                  </p>
                </header>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col w-full text-sm font-medium"
                >
                  <div className="flex flex-col space-y-2">
                    <div className="mt-2">
                      <div className="flex gap-2.5 mt-1">
                        <div className="w-[80px] text-black p-[2px] h-[44px] flex items-center rounded-md border border-solid border-gray-300 bg-white">
                          <img
                            src="data:image/webp;base64,UklGRnYBAABXRUJQVlA4TGkBAAAvEYAEEGfiOJJtpRoctp6G5p8MxVa/y70nDTeSJDlRosHl/z42jzpXazEzDBpJUtT3DJJew6t9Xcw44xC2bVFZn+BPZLGEEkEqmXQjePsRvABUPiCwwQGBwF4Pw/P7/XjKeTl42u/3+XxeFqKCp3nK+/2wMAux+KngaSr5/8VTfr+fym63kwrbcVV/N9f1skTq+311W/fA5CNZIITgP1jChRA4IW2E/igUggfJ3C79DySEIChTwxeeENR4FFyIOI8JRd5ydMA8NCuRv1J1/d5+iiVXrrVoTN/JlN1wGNm2mrzg7gR3ojjE3dH+G+JLCxH9nwBAR2GQAGlim6qqqroVYVxNxeoewlGJbQDwVcoAwKDR42dKnZUY5Gg87TPIcg7Rqy8H3SGiwCDZ1n7XYBHYeWe9as5QeUR10q4tKoji94N8bTfvD/L3EKgVONCcAXiJTFIAQJFIJAX++QtGvHKAVe5HWT7dOPgHAA=="
                            alt=""
                          />
                          <div>+91</div>
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 512 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M128 192l128 128 128-128z" />
                          </svg>
                        </div>
                        <input
                          onChange={(e) => handleMobileNo(e)}
                          value={mobile}
                          className="flex items-center px-3 py-2 w-full h-[44px] bg-white rounded border border-solid border-neutral-200 text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:border-gray-400 focus:ring-gray-400"
                          placeholder="Enter Phone Number"
                        />
                        {timer ? (
                          <button
                            type="button"
                            className="active:opacity-70 w-[130px]  text-[12px] rounded-lg  "
                          >
                            Retry in {timer}
                          </button>
                        ) : (
                          <button
                            onClick={handleOTP}
                            type="button"
                            className="active:opacity-70 w-[130px] bg-header-gradient text-goldenYellow  text-[12px] rounded-lg font-bold hover:bg-black4"
                            disabled={Settings.otp && mobile?.length < 10}
                          >
                            Get OTP
                          </button>
                        )}
                      </div>
                    </div>

                    <div>
                      <input
                        {...register("otp", { required: true })}
                        type="text"
                        id="otp"
                        className="flex items-center px-3 py-2 w-full h-[44px] bg-white rounded border border-solid border-neutral-200 text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:border-gray-400 focus:ring-gray-400 mt-1"
                        placeholder="Enter OTP"
                      />
                    </div>

                    <div>
                      <div className="flex items-center px-3 py-2 w-full h-[44px] bg-white rounded border border-solid border-neutral-200 text-black placeholder:text-gray-500 focus-within:outline-none focus-within:ring-2 focus-within:border-gray-400 focus-within:ring-gray-400 mt-1">
                        <input
                          {...register("password", { required: true })}
                          type={showPassword ? "text" : "password"}
                          className="w-full bg-transparent border-none outline-none"
                          placeholder="Enter Password"
                        />
                        <div
                          className="cursor-pointer text-black4 shrink-0"
                          role="button"
                          aria-label="Show password"
                        >
                          {showPassword ? (
                            <IoEye onClick={() => setShowPassword(false)} />
                          ) : (
                            <IoMdEyeOff onClick={() => setShowPassword(true)} />
                          )}
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center px-3 py-2 w-full h-[44px] bg-white rounded border border-solid border-neutral-200 text-black placeholder:text-gray-500 focus-within:outline-none focus-within:ring-2 focus-within:border-gray-400 focus-within:ring-gray-400 mt-1">
                        <input
                          {...register("confirmPassword", { required: true })}
                          type={showConfirmPassword ? "text" : "password"}
                          className="w-full bg-transparent border-none outline-none"
                          placeholder="Enter Confirm Password"
                        />
                        <div
                          className="cursor-pointer text-black4 shrink-0"
                          role="button"
                          aria-label="Show password"
                        >
                          {showConfirmPassword ? (
                            <IoEye
                              onClick={() => setShowConfirmPassword(false)}
                            />
                          ) : (
                            <IoMdEyeOff onClick={() => setShowPassword(true)} />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className=" active:opacity-70 w-full bg-header-gradient text-goldenYellow p-[10px] text-[13px] rounded-lg font-bold hover:bg-black4 mt-3"
                  >
                    Change Password
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

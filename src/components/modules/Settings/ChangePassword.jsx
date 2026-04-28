import { useForm } from "react-hook-form";
import { useChangePasswordMutation } from "../../../redux/features/auth/authApi";
import toast from "react-hot-toast";
import { useState } from "react";

const EyeOff = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="20px"
      width="20px"
      viewBox="0 0 512 512"
      fill="var(--color-icon_secondary)"
    >
      <title>Eye</title>
      <path
        d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
        fill="none"
        stroke="var(--color-icon_secondary)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
      <circle
        cx={256}
        cy={256}
        r={80}
        fill="none"
        stroke="var(--color-icon_secondary)"
        strokeMiterlimit={10}
        strokeWidth={32}
      />
    </svg>
  );
};

const EyeOn = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="20px"
      width="20px"
      fill="var(--color-icon_secondary)"
      viewBox="0 0 512 512"
    >
      <title>Eye Off</title>
      <path d="M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM255.66 384c-41.49 0-81.5-12.28-118.92-36.5-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 00.14-2.94L93.5 161.38a2 2 0 00-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0075.8-12.58 2 2 0 00.77-3.31l-21.58-21.58a4 4 0 00-3.83-1 204.8 204.8 0 01-51.16 6.47zM490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 00-74.89 12.83 2 2 0 00-.75 3.31l21.55 21.55a4 4 0 003.88 1 192.82 192.82 0 0150.21-6.69c40.69 0 80.58 12.43 118.55 37 34.71 22.4 65.74 53.88 89.76 91a.13.13 0 010 .16 310.72 310.72 0 01-64.12 72.73 2 2 0 00-.15 2.95l19.9 19.89a2 2 0 002.7.13 343.49 343.49 0 0068.64-78.48 32.2 32.2 0 00-.1-34.78z" />
      <path d="M256 160a95.88 95.88 0 00-21.37 2.4 2 2 0 00-1 3.38l112.59 112.56a2 2 0 003.38-1A96 96 0 00256 160zM165.78 233.66a2 2 0 00-3.38 1 96 96 0 00115 115 2 2 0 001-3.38z" />
    </svg>
  );
};

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [handleChangePassword] = useChangePasswordMutation();
  const { register, handleSubmit } = useForm();

  const onSubmit = async ({ password, newPassword, newPasswordConfirm }) => {
    const payload = {
      oldPassword: password,
      password: newPassword,
      passVerify: newPasswordConfirm,
      nonce: crypto.randomUUID(),
    };

    const res = await handleChangePassword(payload).unwrap();
    if (res.success) {
      localStorage.removeItem("changePassword");
      toast.success(res?.result?.message);
    } else {
      toast.error(res?.error?.errorMessage);
    }
  };
  return (
    <div className="flex items-start justify-start flex-col w-full relative overflow-hidden gap-y-3 py-2 px-2.5 bg-bg_tertiary12 border border-solid border-border_secondary9 rounded-xl page-in-animation">
      <div className="absolute top-0 left-0 transperent-bg-one z-0 blur-97 w-[8.3125rem] h-[5.625rem]" />
      <div className="absolute top-0 right-0 transperent-bg-one z-0 blur-97 w-[7rem] h-[4.6875rem]" />
      <div className="flex items-center justify-between py-[18px] relative z-[5] w-full">
        <div className="max-w flex items-center justify-center gap-x-1 z-[5] relative">
          <svg
            width={15}
            height={20}
            viewBox="0 0 15 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Layer_4" clipPath="url(#clip0_201_2276)">
              <path
                id="Vector"
                d="M11.7238 4.73188L10.2435 5.20416L9.90825 4.15284C9.60526 3.20348 8.95071 2.4287 8.06532 1.97134C7.17945 1.51397 6.16901 1.42933 5.21917 1.73183C4.26981 2.03482 3.49503 2.68937 3.03767 3.57476C2.5803 4.46064 2.49566 5.47107 2.79816 6.42091L4.16834 10.7161L2.68803 11.1884L1.31786 6.89319C1.10096 6.21363 1.02401 5.51195 1.08845 4.80691C1.15097 4.12639 1.3419 3.47232 1.65691 2.8625C1.97144 2.25268 2.39418 1.71837 2.91311 1.27302C3.45031 0.812293 4.06734 0.468427 4.7469 0.251527C5.42645 0.0346272 6.12861 -0.0423218 6.83366 0.022123C7.51417 0.084644 8.16824 0.275574 8.77806 0.590584C9.38788 0.905112 9.9222 1.32785 10.3675 1.84678C10.8283 2.38398 11.1721 3.00101 11.389 3.68057L11.7242 4.73188H11.7238Z"
                fill="url(#paint0_linear_201_2276)"
              />
              <path
                id="Vector_2"
                d="M13.5065 8.84913H1.05901C0.474135 8.84913 0 9.32327 0 9.90814V18.9415C0 19.5263 0.474135 20.0005 1.05901 20.0005H13.5065C14.0913 20.0005 14.5655 19.5263 14.5655 18.9415V9.90814C14.5655 9.32327 14.0913 8.84913 13.5065 8.84913Z"
                fill="url(#paint1_linear_201_2276)"
              />
              <path
                id="Vector_3"
                d="M7.31367 14.7788C7.93629 14.7617 8.4272 14.2432 8.41013 13.6205C8.39307 12.9979 7.8745 12.507 7.25187 12.5241C6.62925 12.5412 6.13835 13.0597 6.15541 13.6823C6.17248 14.305 6.69105 14.7959 7.31367 14.7788Z"
                fill="#262626"
              />
              <rect
                id="Rectangle 34624360"
                x="6.78125"
                y="14.0913"
                width="0.961862"
                height="1.92372"
                fill="#262626"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_201_2276"
                x1="1.20056"
                y1="6.52359"
                x2="11.2711"
                y2="3.31161"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFC700" />
                <stop offset={1} stopColor="#FFC700" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_201_2276"
                x1="0.240466"
                y1="9.11364"
                x2="14.2356"
                y2="21.1129"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#CAAAFF" />
                <stop offset={1} stopColor="#7E37F3" />
              </linearGradient>
              <clipPath id="clip0_201_2276">
                <rect width="14.5655" height={20} fill="#fff" />
              </clipPath>
            </defs>
          </svg>
          <span className="font-roboto text-sm text-text_secondary font-medium leading-120 z-[5] relative">
            Change Password
          </span>
        </div>
        <span className="flex items-center justify-center w-5 h-5 py-[0.41644rem] px-[0.2635rem] z-[5] relative rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={12}
            height={8}
            viewBox="0 0 12 8"
            fill="none"
          >
            <path
              d="M6.00007 7.33333C5.8904 7.33397 5.78168 7.31295 5.68015 7.27148C5.57862 7.23001 5.48627 7.1689 5.40841 7.09167L0.408406 2.09167C0.251487 1.93475 0.16333 1.72192 0.16333 1.5C0.16333 1.27808 0.251487 1.06525 0.408406 0.908334C0.565326 0.751414 0.778155 0.663258 1.00007 0.663258C1.22199 0.663258 1.43482 0.751414 1.59174 0.908334L6.00007 5.325L10.4084 0.916668C10.5678 0.780146 10.7729 0.708807 10.9826 0.716908C11.1923 0.725009 11.3913 0.811953 11.5397 0.960365C11.6881 1.10878 11.7751 1.30773 11.7832 1.51746C11.7913 1.72719 11.7199 1.93225 11.5834 2.09167L6.58341 7.09167C6.42819 7.24562 6.21869 7.33241 6.00007 7.33333Z"
              fill="#617293"
            />
          </svg>
        </span>
      </div>
      <div className="flex items-center justify-center w-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex items-center justify-center flex-col"
        >
          <div className="flex items-center justify-center w-full h-full border border-solid border-border_secondary4 rounded-md py-[0.4375rem] px-3.5 bg-bg_inputBgColor z-[5] focus-within:border-border_primary relative shadow-inputBoxShadow mb-1">
            <input
              {...register("password", { required: true })}
              placeholder="Enter Old Password"
              className="block w-full focus:outline-none  w-full bg-bg_inputBgColor font-roboto text-xs text-text_secondary font-medium leading-120 z-[1] relative py-1 px-0 placeholder:text-text_tertiary2"
              type={showPassword ? "text" : "password"}
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out absolute z-[5] 
      cursor-pointer
      
      "
              type="button"
            >
              {showPassword ? <EyeOff /> : <EyeOn />}
            </button>
          </div>
          <button
            className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out flex items-end justify-end font-roboto text-x1 font-medium text-text_secondary cursor-pointer w-full 
      cursor-pointer
      
      "
            type="button"
          >
            Forgot Current Password?
          </button>
          <div className="flex items-center justify-center w-full h-full border border-solid border-border_secondary4 rounded-md py-[0.4375rem] px-3.5 bg-bg_inputBgColor z-[5] focus-within:border-border_primary relative shadow-inputBoxShadow mt-2">
            <input
              placeholder="Enter New Password"
              {...register("newPassword", {
                required: true,
              })}
              className="block w-full focus:outline-none  w-full bg-bg_inputBgColor font-roboto text-xs text-text_secondary font-medium leading-120 z-[1] relative py-1 px-0 placeholder:text-text_tertiary2"
              autoComplete="off"
              type={showNewPassword ? "text" : "password"}
            />
            <button
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out absolute z-[5] 
      cursor-pointer
      
      "
              type="button"
            >
              {showNewPassword ? <EyeOff /> : <EyeOn />}
            </button>
          </div>
          <div className="flex items-center justify-center w-full h-full border border-solid border-border_secondary4 rounded-md py-[0.4375rem] px-3.5 bg-bg_inputBgColor z-[5] focus-within:border-border_primary relative shadow-inputBoxShadow mt-3">
            <input
              placeholder="Enter Confirm Password"
              {...register("newPasswordConfirm", {
                required: true,
              })}
              className="block w-full focus:outline-none  w-full bg-bg_inputBgColor font-roboto text-xs text-text_secondary font-medium leading-120 z-[1] relative py-1 px-0 placeholder:text-text_tertiary2"
              type={showConfirmPassword ? "text" : "password"}
            />
            <button
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out absolute z-[5] 
      cursor-pointer
      
      "
              type="button"
            >
              {showConfirmPassword ? <EyeOff /> : <EyeOn />}
            </button>
          </div>
          <button
            type="submit"
            className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out w-full bg-exchLoginGradient text-text_secondary px-3 h-8 text-sm font-medium leading-120 py-2.5 rounded-lg flex items-center justify-center shadow-loginBtnBoxShadow mt-3 
      cursor-pointer
      
      "
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;

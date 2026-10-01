import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { useBankAccountMutation } from "../../../redux/features/deposit/event.api";
import useCloseModalClickOutside from "../../../hooks/closeModal";
import { AxiosSecure } from "../../../lib/AxiosSecure";
import { API, Settings } from "../../../api";
import useLanguage from "../../../hooks/use-language";
import { LanguageKey } from "../../../const";

const CreateBankAccount = ({ refetchBankAccounts, setShowAddBank }) => {
  const { getLanguage } = useLanguage();
  const addBankRef = useRef();
  const [addNewBank] = useBankAccountMutation();
  const [isFormValid, setIsFormValid] = useState(false);
  const [bankDetails, setBankDetails] = useState({
    accountName: "",
    ifsc: "",
    accountNumber: "",
    confirmAccountNumber: "",
    upiId: "",
    otp: "",
  });
  const [mobile, setMobile] = useState(null);
  const { token } = useSelector((state) => state.auth);
  const [orderId, setOrderId] = useState(null);
  const [timer, setTimer] = useState(null);

  useCloseModalClickOutside(addBankRef, () => {
    setShowAddBank(false);
  });

  /* Handle add bank function */
  const handleAddBank = async (e) => {
    e.preventDefault();
    if (bankDetails.accountNumber !== bankDetails.confirmAccountNumber) {
      return toast.error("Account number not matched!");
    }

    if (mobile && !bankDetails.otp) {
      return toast.error("Please enter otp to add new account");
    }
    /* generating random token for post data */

    let bankData = {
      accountName: bankDetails.accountName,
      ifsc: bankDetails.ifsc,
      accountNumber: bankDetails.accountNumber,
      upiId: bankDetails.upiId,
      type: "addBankAccount",
      nonce: crypto.randomUUID(),
    };
    if (mobile) {
      bankData.mobile = mobile;
      bankData.otp = bankDetails.otp;
      bankData.orderId = orderId;
    }

    const res = await addNewBank(bankData).unwrap();

    if (res?.success) {
      setBankDetails({
        accountName: "",
        ifsc: "",
        accountNumber: "",
        confirmAccountNumber: "",
        otp: "",
      });
      toast.success(res?.result?.message);
      setShowAddBank(false);
      refetchBankAccounts();
    } else {
      toast.error(res?.result?.message);
    }
  };

  const validateForm = (bankDetails) => {
    const isaccountNameFilled = bankDetails.accountName.trim() !== "";
    const isaccountNumberFilled = bankDetails.accountNumber.trim() !== "";
    const isIfscFilled = bankDetails.ifsc.trim() !== "";
    const isOTPFilled = mobile ? bankDetails.otp.trim() !== "" : true;
    const isFormValid =
      isaccountNameFilled &&
      isIfscFilled &&
      isaccountNumberFilled &&
      isOTPFilled;
    setIsFormValid(isFormValid);
  };

  useEffect(() => {
    validateForm(bankDetails);
  }, [bankDetails]);

  const getOtp = async () => {
    const otpData = {
      mobile,
    };

    const res = await AxiosSecure.post(API.otp, otpData);
    const data = res.data;
    if (data?.success) {
      setTimer(60);
      setOrderId(data?.result?.orderId);
      toast.success(data?.result?.message);
    } else {
      toast.error(data?.error?.errorMessage);
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
  useEffect(() => {
    const getMobile = () => {
      const decode = jwtDecode(token);
      if (decode?.mobile) {
        setMobile(decode?.mobile);
      }
    };
    getMobile();
  }, [token]);

  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      setTimer(null);
    }
  }, [timer]);

  return (
    <div
      id="popup-modal"
      className="z-[1000] absolute top-0 right-[0.5px] md:right-0 overflow-hidden flex w-full h-screen min-h-[100dvh] items-center justify-center bg-bg_CasinoPopupBg"
    >
      <div
        ref={addBankRef}
        className="z-2 popUpBoxShadow popUpOpenAnimation absolute w-[90%] sm:w-[85%] md:w-[70%] lg:w-[450px] rounded-[5px] bg-bg_Quaternary p-2 xs:p-5 rounded-md"
      >
        <h2 className="mb-5 text-base md:text-xl font-medium">
          {getLanguage(LanguageKey.ADD_NEW_ACCOUNT)}
        </h2>
        <div
          onClick={() => setShowAddBank(false)}
          className="transition-all mb-2 ease-in-out duration-200 hover:scale-105 absolute -top-3 -right-3"
        >
          <svg
            className="cursor-pointer z-50"
            height="24"
            width="24"
            fill="var(--color-quaternary)"
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="circle-xmark"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g className="fa-duotone-group">
              <path
                fill="currentColor"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
              ></path>
              <path
                fill="white"
                d="M209 175c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47z"
              ></path>
            </g>
          </svg>
        </div>
        <div className="flex gap-10 items-start h-[95%] lg:h-auto w-full">
          <div
            title="mobileLogin"
            className="flex flex-col items-start gap-y-4 w-full"
          >
            <form
              onSubmit={handleAddBank}
              className="w-full gap-y-4 flex flex-col"
            >
              <div title="loginFormMonileUserIdInput" className="w-full">
                <div className=" uppercase text-[10px] md:text-xs lg:text-sm ml-1">
                  {getLanguage(LanguageKey.UPI_ID)} (Optional)
                </div>
                <div className="flex w-full items-center py-3.5 bg-auth rounded-lg border">
                  <input
                    onChange={(e) => {
                      setBankDetails({
                        ...bankDetails,
                        upiId: e.target.value,
                      });
                    }}
                    id="mobile-no-input"
                    className="px-2 block w-full focus:outline-none w-full  bg-auth text-text_Ternary pr-2 text-sm xs:text-md"
                    placeholder="Enter UPI ID"
                    value={bankDetails.upiId}
                  />
                  <span className="h-fit"> </span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div title="passwordInput" className="w-full  uppercase">
                  <div className="text-[10px] ml-1 md:text-xs lg:text-sm">
                    {getLanguage(LanguageKey.ACCOUNT_NAME)}
                  </div>
                  <div className="flex w-full items-center py-2 px-2 bg-auth rounded-lg border">
                    <input
                      onChange={(e) => {
                        setBankDetails({
                          ...bankDetails,
                          accountName: e.target.value,
                        });
                      }}
                      placeholder="Enter Account Name"
                      id="password-input"
                      className="block w-full focus:outline-none w-full pr-2 rounded-none text-text_Ternary bg-auth text-sm xs:text-md"
                      value={bankDetails.accountName}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <div title="passwordInput" className="w-full  uppercase">
                  <div className="text-[10px] ml-1 md:text-xs lg:text-sm">
                    {getLanguage(LanguageKey.ACCOUNT_NO)}
                  </div>
                  <div className="flex w-full items-center py-2 px-2 bg-auth rounded-lg border">
                    <input
                      onChange={(e) => {
                        setBankDetails({
                          ...bankDetails,
                          accountNumber: e.target.value,
                        });
                      }}
                      placeholder="Enter Account Number"
                      id="password-input"
                      className="block w-full focus:outline-none w-full pr-2 rounded-none text-text_Ternary bg-auth text-sm xs:text-md"
                      value={bankDetails.accountNumber}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div title="passwordInput" className="w-full  uppercase">
                  <div className="text-[10px] ml-1 md:text-xs lg:text-sm">
                    {getLanguage(LanguageKey.CONFIRM_ACCOUNT_NO)}
                  </div>
                  <div className="flex w-full items-center py-2 px-2 bg-auth rounded-lg border">
                    <input
                      onChange={(e) => {
                        setBankDetails({
                          ...bankDetails,
                          confirmAccountNumber: e.target.value,
                        });
                      }}
                      placeholder="Re-enter Account Number"
                      id="password-input"
                      className="block w-full focus:outline-none w-full pr-2 rounded-none text-text_Ternary bg-auth text-sm xs:text-md"
                      value={bankDetails.confirmAccountNumber}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div title="passwordInput" className="w-full  uppercase">
                  <div className="text-[10px] ml-1 md:text-xs lg:text-sm">
                    {getLanguage(LanguageKey.IFSC_CODE)}
                  </div>
                  <div className="flex w-full items-center py-2 px-2 bg-auth rounded-lg border">
                    <input
                      onChange={(e) => {
                        setBankDetails({
                          ...bankDetails,
                          ifsc: e.target.value,
                        });
                      }}
                      placeholder="Enter IFSC Code"
                      id="password-input"
                      className="block w-full focus:outline-none w-full pr-2 rounded-none text-text_Ternary bg-auth text-sm xs:text-md"
                      value={bankDetails.ifsc}
                    />
                  </div>
                </div>
              </div>
              {mobile && Settings.otp && (
                <div className="flex flex-col gap-1">
                  <div title="passwordInput" className="w-full  uppercase">
                    <div className="text-[10px] ml-1 md:text-xs lg:text-sm">
                      {getLanguage(LanguageKey.MOBILE_NUMBER)}
                    </div>
                    <div className="flex w-full items-center py-2 bg-auth rounded-lg border">
                      <input
                        readOnly
                        id="mobile-no-input"
                        className="px-2 block w-full focus:outline-none w-full  bg-auth rounded-none text-text_Ternary pr-2 text-sm xs:text-md"
                        placeholder="Phone Number"
                        type="text"
                        value={mobile}
                      />
                    </div>
                    <div className="w-full flex items-center justify-center gap-x-2">
                      {Settings.otp_method?.includes("sms") && !timer && (
                        <button
                          onClick={getOtp}
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
                      {Settings.otp_method?.includes("whatsapp") && !timer && (
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
                      {timer && (
                        <button
                          onClick={getOtpOnWhatsapp}
                          type="button"
                          className="relative overflow-hidden w-full mt-2 h-fit bg-exchRegisterGradient text-text_primary3 transition-all ease-in-out text-sm whitespace-nowrap p-2 rounded-lg active:scale-[0.98] active:opacity-95 disabled:opacity-70 font-medium relative flex items-center justify-center gap-x-2 font-bold"
                        >
                          <span className="   ">
                            {" "}
                            {getLanguage(LanguageKey.RETRY_IN)} {timer}s
                          </span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )}
              {mobile && (
                <div className="flex flex-col gap-1">
                  <div title="passwordInput" className="w-full  uppercase">
                    <div className="text-[10px] ml-1 md:text-xs lg:text-sm">
                      {getLanguage(LanguageKey.OTP)}
                    </div>
                    <div className="flex w-full items-center border p-1 bg-auth rounded-lg mt-2">
                      <input
                        onChange={(e) => {
                          setBankDetails({
                            ...bankDetails,
                            otp: e.target.value,
                          });
                        }}
                        id="otpSignUp"
                        className="block w-full focus:outline-none w-full  rounded-none py-1 text-text_Ternary px-2 text-sm xs:text-md bg-auth"
                        placeholder="Enter OTP"
                        type="text"
                        maxLength={6}
                      />
                    </div>
                  </div>
                </div>
              )}

              <div id="googleRecaptcha" className="hidden"></div>
              <div title="loginButton" className="w-full">
                <button
                  disabled={!isFormValid}
                  type="submit"
                  className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out w-full text-white bg-primary shadow-lg rounded-md xs:text-[15px] px-5 py-2 flex items-center justify-center gap-x-2  font-medium text-base cursor-pointer"
                >
                  <span> {getLanguage(LanguageKey.ADD_BANK_ACCOUNT)}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBankAccount;

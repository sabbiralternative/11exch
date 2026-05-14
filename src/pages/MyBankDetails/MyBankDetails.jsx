import { useState } from "react";

import { useBankAccountQuery } from "../../hooks/bankAccount";
import Swal from "sweetalert2";
import { AxiosSecure } from "../../lib/AxiosSecure";
import { API } from "../../api";
import toast from "react-hot-toast";
import CreateUSDTAccount from "../../components/modals/CreateUSDTAccount/CreateUSDTAccount";
import CreateBankAccount from "../../components/modals/CreateBankAccount/CreateBankAccount";
import { MdDelete } from "react-icons/md";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";

const MyBankDetails = () => {
  const [showAddBank, setShowAddBank] = useState(false);
  const [showUSDTModal, setShowUSDTModal] = useState(false);
  const [showDetails, setShowDetails] = useState(null);
  const [tab, setTab] = useState(1);
  const {
    data: bankData,
    refetch: refetchBankData,
    isFetched,
  } = useBankAccountQuery({
    type: "getBankAccounts",
    status: tab,
  });

  console.log(bankData);

  const handleShowDetails = (index) => {
    if (index === showDetails) {
      setShowDetails(null);
    } else {
      setShowDetails(index);
    }
  };

  const handleDeleteBank = (bankId) => {
    const payload = {
      bankId,
      type: "deleteBankAccount",
    };
    Swal.fire({
      title: "Delete Bank",
      text: "Are you sure you want to delete this bank?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data } = await AxiosSecure.post(API.bankAccount, payload);
        if (data?.success) {
          toast.success(data?.result?.message);
          refetchBankData();
        } else {
          toast.error(data?.error?.errorMessage);
          refetchBankData();
        }
      }
    });
  };

  const handleMakeDefault = (bankId) => {
    const payload = {
      bankId,
      type: "defaultBank",
    };
    Swal.fire({
      title: "Default Bank",
      text: "Are you sure you want to set this default bank?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ok, Set",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data } = await AxiosSecure.post(API.bankAccount, payload);
        if (data?.success) {
          toast.success(data?.result?.message);
          refetchBankData();
        } else {
          toast.error(data?.error?.errorMessage);
          refetchBankData();
        }
      }
    });
  };

  return (
    <div className="flex-1 flex white  w-full">
      {showAddBank && (
        <CreateBankAccount
          refetchBankAccounts={refetchBankData}
          setShowAddBank={setShowAddBank}
        />
      )}
      {showUSDTModal && (
        <CreateUSDTAccount
          refetchBankAccounts={refetchBankData}
          setShowUSDTModal={setShowUSDTModal}
        />
      )}

      <div className="h-full w-full overflow-auto hide-scrollbar mb-6 md:mb-0  ">
        <div className="w-full router-ctn max-md:pb-9">
          <main className="flex w-full">
            <div className="no-scrollbar h-full overflow-y-auto w-full mt-2">
              <div className=" w-full">
                <div className="flex flex-row items-center justify-start gap-6 relative">
                  <div
                    onClick={() => setTab(1)}
                    className="cursor-pointer flex flex-row items-center justify-center"
                  >
                    <span
                      className={` px-[25px] py-2 text-[13px] md:text-sm lg:text-base rounded-full font-bold leading-4 active:scale-95 block z-10 ${
                        tab === 1 ? "text-primary" : "bg-bg_Quaternary"
                      }`}
                    >
                      Active
                    </span>
                  </div>
                  <div
                    onClick={() => setTab(0)}
                    className="cursor-pointer flex flex-row items-center justify-center"
                  >
                    <span
                      className={`text-text_Ternary text-sm  rounded-full  px-[25px] py-2 text-[13px] md:text-sm lg:text-base font-bold leading-4 active:scale-95 block z-10  ${
                        tab === 0 ? "text-primary" : "bg-bg_Quaternary"
                      }`}
                    >
                      Deleted
                    </span>
                  </div>
                  <div
                    className={`absolute z-1 w-full h-full transition-all ease-in-out duration-150 bg-bg_Primary text-sm bg-bg_Primary  rounded-full  ${
                      tab === 1 ? "left-0" : "left-[105px] lg:left-[115px]"
                    }`}
                    style={{
                      width: tab === 1 ? "90px" : "90px",
                    }}
                  ></div>
                </div>
              </div>
              <div className="" style={{ margin: "10px 0px" }}>
                <div className="flex items-center justify-between gap-x-4 text-primary">
                  <button
                    onClick={() => setShowAddBank(true)}
                    className="btn"
                    style={{
                      background: "var(--color-bg_primary1)",

                      padding: "6px 0px",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    Add New Bank
                  </button>
                  <button
                    onClick={() => setShowUSDTModal(true)}
                    className="btn"
                    style={{
                      background: "var(--color-bg_primary1)",

                      padding: "6px 0px",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    Add USDT Account
                  </button>
                </div>
                <h2
                  style={{
                    marginTop: "5px",
                    fontWeight: "500",
                    color: "white",
                  }}
                >
                  Bank Details
                </h2>

                {bankData?.length > 0 &&
                  bankData?.map((bank, i) => {
                    return (
                      <div
                        style={{
                          marginTop: "10px",
                          background: "white",
                          padding: "10px",
                          cursor: "pointer",
                          borderTopLeftRadius: "10px",
                          borderTopRightRadius: "10px",
                          fontSize: "12px",
                        }}
                        key={i}
                      >
                        <div
                          onClick={() => handleShowDetails(i)}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            paddingBottom: "5px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "3px",
                            }}
                          >
                            {/* <img
                              style={{
                                height: "30px",
                                width: "30px",
                                objectFit: "contain",
                              }}
                              alt="Bank Icon"
                              src={`/src/assets/img/${bank?.bankCode}.png`}
                            /> */}
                            <div>
                              <p> {bank?.bankName}</p>
                              {bank?.isDefault === 1 && (
                                <span style={{ color: "#488feb" }}>
                                  Default
                                </span>
                              )}
                            </div>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "4px",
                            }}
                          >
                            {tab === 1 && (
                              <button
                                onClick={() => handleDeleteBank(bank?.bankId)}
                                style={{
                                  backgroundColor: "#e8e8e8",
                                  padding: "5px",
                                  borderRadius: "50%",
                                }}
                              >
                                {" "}
                                <MdDelete size={20} />
                              </button>
                            )}

                            {showDetails === i ? (
                              <IoMdArrowDropdown size={20} />
                            ) : (
                              <IoMdArrowDropright size={20} />
                            )}
                          </div>
                        </div>
                        <div
                          style={{
                            marginTop: "5px",
                            paddingTop: "5px",
                            borderTop: "1px solid gray",
                            display: showDetails === i ? "block" : "none",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                            }}
                          >
                            <p>Account Holder Name: </p>{" "}
                            <p>{bank?.bankAccountName}</p>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              marginTop: "4px",
                            }}
                          >
                            {" "}
                            <p> Account number: </p>{" "}
                            <p>{bank?.accountNumber}</p>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              marginTop: "4px",
                            }}
                          >
                            {" "}
                            <p> IFSC Code: </p> <p>{bank?.ifsc}</p>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              marginTop: "4px",
                            }}
                          >
                            {" "}
                            <p> Bank Branch: </p> <p>{bank?.bankBranch}</p>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              marginTop: "4px",
                            }}
                          >
                            {" "}
                            <p> Account added on: </p> <p>{bank?.dateAdded}</p>
                          </div>
                          {bank?.isDefault === 0 && tab === 1 && (
                            <button
                              onClick={() => handleMakeDefault(bank?.bankId)}
                              className="btn text-primary"
                              style={{
                                background: "var(--color-bg_primary1)",

                                marginTop: "15px",
                              }}
                            >
                              Default
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                {bankData?.length === 0 && isFetched && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "30px",
                      fontSize: "12px",
                      color: "white",
                    }}
                  >
                    {tab === 1
                      ? `No Bank Details found! Adding Bank Details is mandatory for
                 processing withdrawals`
                      : `No deleted bank data available`}
                  </div>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default MyBankDetails;

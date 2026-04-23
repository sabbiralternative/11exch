import { useEffect, useState } from "react";
import { LeftSidebar } from "../../components/shared/Sidebar/LeftSidebar";
import { RightSidebar } from "../../components/shared/Sidebar/RightSidebar";
import ChooseAmount from "../../components/modules/Deposit/ChooseAmount";
import PaymentMethod from "../../components/modules/Deposit/PaymentMethod";
import PaymentProof from "../../components/modules/Deposit/PaymentProof";

const Deposit = () => {
  const [amount, setAmount] = useState(null);
  const [paymentMethods, setPaymentMethods] = useState(false);
  const [uploadTransaction, setUploadTransaction] = useState(false);
  const [paymentId, setPaymentId] = useState("");
  const [tabs, setTabs] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [paymentMethods, uploadTransaction]);

  return (
    <div className="flex-1 flex white bg-gray1">
      <LeftSidebar />
      <div className="h-full w-full overflow-auto hide-scrollbar mb-6 md:mb-0 md:px-2 md:pl-[15px] md:pr-3">
        <div className="w-full router-ctn max-md:pb-9">
          <main className="flex w-full">
            {!paymentMethods && !uploadTransaction && (
              <ChooseAmount
                amount={amount}
                setAmount={setAmount}
                setPaymentMethods={setPaymentMethods}
              />
            )}

            {/* step 2 */}
            {paymentMethods && (
              <PaymentMethod
                setTabs={setTabs}
                tabs={tabs}
                paymentId={paymentId}
                setUploadTransaction={setUploadTransaction}
                setPaymentMethods={setPaymentMethods}
                setPaymentId={setPaymentId}
                amount={amount}
              />
            )}
            {/* step 3 */}
            {uploadTransaction && (
              <PaymentProof tabs={tabs} paymentId={paymentId} amount={amount} />
            )}
          </main>
        </div>
      </div>
      <RightSidebar />
    </div>
  );
};

export default Deposit;

import { Fragment, useEffect, useState } from "react";
import EnterMobileNumber from "../../components/modules/Register/EnterMobileNumber";
import VerifyOTP from "../../components/modules/Register/VerifyOTP";
import { Settings } from "../../api";

const Register = () => {
  const [user, setUser] = useState("");
  const [mobileUsername, setMobileUsername] = useState(
    Settings.registration_mobile ? "mobile" : "username",
  );

  const [tab, setTab] = useState(1);
  const [timer, setTimer] = useState(null);
  const [order, setOrder] = useState({
    orderId: null,
    otpMethod: null,
  });
  const [mobile, setMobile] = useState("");

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
    <Fragment>
      {tab === 1 && (
        <EnterMobileNumber
          mobile={mobile}
          setMobile={setMobile}
          setOrder={setOrder}
          setTimer={setTimer}
          setTab={setTab}
          setMobileUsername={setMobileUsername}
          mobileUsername={mobileUsername}
          setUser={setUser}
          user={user}
        />
      )}
      {tab === 2 && (
        <VerifyOTP
          mobile={mobile}
          setTab={setTab}
          timer={timer}
          setOrder={setOrder}
          setTimer={setTimer}
          order={order}
          user={user}
          mobileUsername={mobileUsername}
        />
      )}
    </Fragment>
  );
};

export default Register;

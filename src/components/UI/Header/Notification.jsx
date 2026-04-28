import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Marquee from "react-fast-marquee";
// import { RxCross2 } from "react-icons/rx";
import { setShowNotification } from "../../../redux/features/global/globalSlice";
import useGetNotification from "../../../hooks/useGetNotification";

const Notification = () => {
  const { notification, isFetchingNotification, isFetched } =
    useGetNotification();

  const dispatch = useDispatch();
  const [filteredNotification, setFilteredNotification] = useState([]);
  const { showNotification } = useSelector((state) => state?.global);

  useEffect(() => {
    const storedNotificationId =
      JSON.parse(localStorage.getItem("notificationId")) || [];
    if (
      (!storedNotificationId || storedNotificationId?.length === 0) &&
      notification?.length > 0
    ) {
      dispatch(setShowNotification(true));

      setFilteredNotification(notification);
    }
    if (
      notification?.length > 0 &&
      storedNotificationId &&
      storedNotificationId?.length > 0 &&
      !showNotification
    ) {
      const filteredNotifications = notification.filter(
        (notif) => !storedNotificationId.some((nId) => nId.id == notif.id),
      );

      if (filteredNotifications?.length > 0) {
        setFilteredNotification(filteredNotifications);
        dispatch(setShowNotification(true));
      }
    }
  }, [
    notification,
    showNotification,
    isFetched,
    isFetchingNotification,
    dispatch,
  ]);

  const closeNotification = () => {
    const notificationIds =
      JSON.parse(localStorage.getItem("notificationId")) || [];

    notification?.forEach((item) => {
      if (!notificationIds.some((notif) => notif.id === item.id)) {
        notificationIds.push({ id: item.id });
      }
    });

    localStorage.setItem("notificationId", JSON.stringify(notificationIds));

    dispatch(setShowNotification(false));
  };

  return (
    <Fragment>
      {showNotification && filteredNotification?.length > 0 && (
        <div className="w-full transition-all duration-300 ease-in-out overflow-hidden bg-bg_appBackgroundColor text-text_secondary py-1 text-sm border-b border-border_secondary relative font-bold">
          <div className="relative flex items-center">
            {filteredNotification?.map((item) => (
              <div
                key={item?.id}
                className="animate-marquee whitespace-nowrap flex"
              >
                <span className="mx-4 inline-block">{item?.text}</span>
              </div>
            ))}
          </div>
          <button
            onClick={closeNotification}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-bg_primary1 rounded-full flex items-center justify-center size-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.2rem"
              height="1.2rem"
              viewBox="0 0 14 15"
              fill="var(--color-icon_secondary)"
              className=" size-4"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.91728 10.7587C2.68949 10.9866 2.68952 11.3559 2.91735 11.5837C3.14517 11.8115 3.51452 11.8115 3.7423 11.5836L7.00036 8.32499L10.2587 11.5833C10.4865 11.8111 10.8558 11.8111 11.0836 11.5833C11.3114 11.3555 11.3114 10.9862 11.0836 10.7584L7.82525 7.49998L11.0834 4.24126C11.3111 4.01343 11.3111 3.64409 11.0833 3.41631C10.8555 3.18851 10.4861 3.18855 10.2583 3.41638L7.00024 6.67503L3.74191 3.41666C3.5141 3.18885 3.14475 3.18885 2.91695 3.41666C2.68914 3.64446 2.68914 4.01381 2.91695 4.24162L6.17541 7.50004L2.91728 10.7587Z"
                fill="var(--color-icon_secondary)"
              />
            </svg>
          </button>
        </div>
      )}
    </Fragment>
  );
};

export default Notification;

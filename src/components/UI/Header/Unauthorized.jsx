import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <div className="flex items-center justify-center gap-x-1.5">
      <Link
        className="flex items-center justify-center py-[0.3125rem] px-2 rounded-md bg-exchLoginGradient text-text_secondary font-roboto text-xs not-italic font-semibold leading-150 tracking-widest h-8 active:opacity-80 active:scale-95"
        title="Login to exch11 & Enjoy the best online gaming experience"
        to="/login"
      >
        Login
      </Link>
      <Link
        className="flex items-center justify-center py-[0.3125rem] px-2 rounded-md bg-exchRegisterGradient text-text_secondary font-roboto text-xs not-italic font-semibold leading-150 tracking-widest h-8 active:opacity-80 active:scale-95"
        title="Register to exch11 & Get the exciting bonuses and more!!!"
        to="/register"
      >
        Register
      </Link>
    </div>
  );
};

export default Unauthorized;

import { Link } from "react-router-dom";
import { Settings } from "../../../api";
import { setShowLanguageModal } from "../../../redux/features/global/globalSlice";
import { useDispatch } from "react-redux";
import { useLanguage } from "../../../context/LanguageProvider";
import { languageValue } from "../../../utils/language";
import { LanguageKey } from "../../../const";

const Unauthorized = () => {
  const dispatch = useDispatch();
  const { language, valueByLanguage } = useLanguage();
  return (
    <div className="flex items-center justify-center gap-x-1.5">
      <Link
        className="flex items-center justify-center py-[0.3125rem] px-2 rounded-md bg-exchLoginGradient text-text_secondary font-roboto text-xs not-italic font-semibold leading-150 tracking-widest h-8 active:opacity-80 active:scale-95 min-w-fit"
        title="Login to exch11 & Enjoy the best online gaming experience "
        to="/login"
      >
        {languageValue(valueByLanguage, LanguageKey.LOGIN)}
      </Link>
      {Settings.registration && (
        <Link
          className="flex items-center justify-center py-[0.3125rem] px-2 rounded-md bg-exchRegisterGradient text-text_secondary font-roboto text-xs not-italic font-semibold leading-150 tracking-widest h-8 active:opacity-80 active:scale-95"
          title="Register to exch11 & Get the exciting bonuses and more!!!"
          to="/register"
        >
          {languageValue(valueByLanguage, LanguageKey.REGISTER)}
        </Link>
      )}

      {Settings.language && (
        <button
          onClick={() => dispatch(setShowLanguageModal(true))}
          className="flex items-center justify-center py-[0.3125rem] px-2 rounded-md bg-exchRegisterGradient text-text_secondary font-roboto text-xs not-italic font-semibold leading-150 tracking-widest h-8 active:opacity-80 active:scale-95"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 mr-0.5"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
            <path d="M3.6 9h16.8" />
            <path d="M3.6 15h16.8" />
            <path d="M11.5 3a17 17 0 0 0 0 18" />
            <path d="M12.5 3a17 17 0 0 1 0 18" />
          </svg>
          {language.charAt(0).toUpperCase() + language.slice(1).toLowerCase()}
          <svg
            fill="currentColor"
            width={16}
            height={16}
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 330 330"
            className="w-3 h-3 ml-2"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              <path
                id="XMLID_225_"
                d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
              />
            </g>
          </svg>
        </button>
      )}
    </div>
  );
};

export default Unauthorized;

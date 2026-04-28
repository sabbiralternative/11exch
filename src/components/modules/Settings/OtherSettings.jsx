const OtherSettings = () => {
  return (
    <div className="flex items-start justify-center flex-col w-full gap-y-3">
      <span className="font-roboto text-text_secondary text-sm font-medium leading-120 page-in-animation w-full">
        Other Settings
      </span>
      <div className="flex items-start justify-between p-4 border border-solid border-border_tertiary18 bg-bg_inputBgColor relative overflow-hidden w-full rounded-xl page-in-animation">
        <div className="absolute top-0 left-0 transperent-bg-one z-0 blur-97 w-[5.3125rem] h-[3.625rem]" />
        <div className="absolute top-0 right-0 transperent-bg-one z-0 blur-97 w-[4rem] h-[2.6875rem]" />
        <div className="flex items-start justify-start flex-col gap-y-[0.31rem]">
          <span className="font-roboto font-medium leading-120 z-[1] text-text_secondary text-sm">
            Balance
          </span>
          <span className="font-roboto font-medium leading-120 z-[1] text-text_secondary8 text-xs">
            Disable balance display in the header
          </span>
        </div>
        <span className>
          <label className="inline-flex items-center cursor-pointer relative transition-all ease-in-out">
            <input className="sr-only peer" type="checkbox" />
            <div className="relative p-[2px] bg-[#B6BECD] border-[0.5px] border-border_cancelBtnBorderColor font-lato rounded-full peer-checked:bg-bg_success h-6 w-12">
              <span className="absolute top-1/2 right-[5px] transform  -translate-y-1/2 text-[10px] font-bold  text-[10px]">
                OFF
              </span>
              <div className="bg-bg_secondary border-[0.5px] border-border_secondary transition-all w-4 h-4 ease-in-out aspect-square absolute left-[2px] top-[3.5px] rounded-full " />
            </div>
          </label>
        </span>
      </div>
      <div className="flex items-center justify-between p-4 border border-solid border-border_tertiary18 bg-bg_inputBgColor relative overflow-hidden w-full rounded-xl page-in-animation">
        <div className="absolute top-0 left-0 transperent-bg-one z-0 blur-97 w-[5.3125rem] h-[3.625rem]" />
        <div className="absolute top-0 right-0 transperent-bg-one z-0 blur-97 w-[4rem] h-[2.6875rem]" />
        <div className="flex items-start justify-start flex-col gap-y-[0.31rem]">
          <span className="font-roboto font-medium leading-120 z-[1] text-text_secondary text-sm">
            English
          </span>
          <span className="font-roboto font-medium leading-120 z-[1] text-text_secondary8 text-xs">
            Active language
          </span>
        </div>
        <span className="flex items-center justify-center w-6 h-6 py-[0.41644rem] px-[0.2635rem] z-[5] relative ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={25}
            height={25}
            viewBox="0 0 12 8"
            fill="var(--color-icon_secondary)"
          >
            <path
              d="M6.00007 7.33333C5.8904 7.33397 5.78168 7.31295 5.68015 7.27148C5.57862 7.23001 5.48627 7.1689 5.40841 7.09167L0.408406 2.09167C0.251487 1.93475 0.16333 1.72192 0.16333 1.5C0.16333 1.27808 0.251487 1.06525 0.408406 0.908334C0.565326 0.751414 0.778155 0.663258 1.00007 0.663258C1.22199 0.663258 1.43482 0.751414 1.59174 0.908334L6.00007 5.325L10.4084 0.916668C10.5678 0.780146 10.7729 0.708807 10.9826 0.716908C11.1923 0.725009 11.3913 0.811953 11.5397 0.960365C11.6881 1.10878 11.7751 1.30773 11.7832 1.51746C11.7913 1.72719 11.7199 1.93225 11.5834 2.09167L6.58341 7.09167C6.42819 7.24562 6.21869 7.33241 6.00007 7.33333Z"
              fill="var(--color-icon_secondary)"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default OtherSettings;

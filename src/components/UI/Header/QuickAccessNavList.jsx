import { useLocation, useNavigate } from "react-router-dom";

const menuItems = [
  { id: 3, label: "Live Casino", href: "/casino" },
  { id: 4, label: "Sports", href: "/sports?eventTypeId=4" },
  { id: 5, label: "Sportsbook", href: "/sportsbook" },
  {
    id: 11,
    label: "Horse Racing",
    href: "/sports?eventTypeId=7",
  },
  {
    id: 11,
    label: "Greyhound Racing",
    href: "/sports?eventTypeId=4339",
  },
];

const QuickAccessNavList = () => {
  const { search, pathname } = useLocation();
  const params = new URLSearchParams(search);
  const eventTypeId = params.get("eventTypeId");
  const navigate = useNavigate();

  const handleNavigate = (item) => {
    if (item?.id === 5) {
      navigate(`/casino/sportsbook/550000`);
    } else {
      navigate(item.href);
    }
  };

  return (
    <div
      title="Top Nav"
      className="flex h-max border-b border-solid border-border_secondary items-center scroll-smooth justify-start gap-2 overflow-x-auto min-w-full no-scrollbar pl-2 relative"
    >
      {menuItems.map((item) => (
        <div
          onClick={() => handleNavigate(item)}
          key={item.id}
          className="flex cursor-pointer items-center justify-center h-full transition-all ease-in-out duration-200 whitespace-nowrap flex-col active:scale-95"
        >
          <span
            className={`text-text_secondary font-roboto pb-1 pt-2 text-xs not-italic leading-120 font-[450] tracking-[0.3px]  ${
              search
                ? item?.href?.split("=")[1] == eventTypeId
                  ? "cursor-pointer opacity-100"
                  : "opacity-60"
                : pathname === item?.href
                  ? "cursor-pointer opacity-100"
                  : "opacity-60"
            }`}
          >
            {item.label}
          </span>
          <div
            className={`h-[3px] rounded-xl bg-exchLoginGradient
              
              ${
                search
                  ? item?.href?.split("=")[1] == eventTypeId
                    ? "opacity-100 smoothIncreaseWidth"
                    : "opacity-0"
                  : pathname === item?.href
                    ? "opacity-100 smoothIncreaseWidth"
                    : "opacity-0"
              }
         `}
          />
        </div>
      ))}

      <div />
      <div className="sticky cursor-pointer right-0 top-1 bottom-3 pl-1.5 pr-2 bg-topMenuopenBtnBg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={10}
          height={10}
          viewBox="0 0 12 8"
          fill="var(--color-icon_secondary)"
          className="active:shadow-none active:translate-y-0.5 active:opacity-80 flex items-center justify-center w-[18px] h-[18px]  p-[3px] bg-bg_primary1 rounded-md"
        >
          <path
            d="M6.00007 7.33333C5.8904 7.33397 5.78168 7.31295 5.68015 7.27148C5.57862 7.23001 5.48627 7.1689 5.40841 7.09167L0.408406 2.09167C0.251487 1.93475 0.16333 1.72192 0.16333 1.5C0.16333 1.27808 0.251487 1.06525 0.408406 0.908334C0.565326 0.751414 0.778155 0.663258 1.00007 0.663258C1.22199 0.663258 1.43482 0.751414 1.59174 0.908334L6.00007 5.325L10.4084 0.916668C10.5678 0.780146 10.7729 0.708807 10.9826 0.716908C11.1923 0.725009 11.3913 0.811953 11.5397 0.960365C11.6881 1.10878 11.7751 1.30773 11.7832 1.51746C11.7913 1.72719 11.7199 1.93225 11.5834 2.09167L6.58341 7.09167C6.42819 7.24562 6.21869 7.33241 6.00007 7.33333Z"
            fill="var(--color-icon_secondary)"
          />
        </svg>
      </div>
    </div>
  );
};

export default QuickAccessNavList;

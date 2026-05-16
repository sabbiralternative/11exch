import { formatDate } from "../../../utils/formateDate";

const ScoreHome = ({ data }) => {
  return (
    <span
      id="inPlayTime"
      className="flex text-selection-none items-center justify-center flex-col col-span-2 pl-[2px] pr-[2px] min-h-9 active:scale-[94%] transition-all ease-in-out duration-100"
    >
      {data?.eventTypeId == 4 && (
        <>
          {data?.inPlay == 1 && data?.score2 ? (
            <span
              id="inPlayTime"
              className="flex items-center justify-center flex-col pl-[1px] pr-[1px]"
            >
              <span className="text-[#29ab2b] text-[9px] font-medium text-ellipsis overflow-hidden w-full text-center">
                {data?.score2?.line1}
              </span>
              <span className="text-[#29ab2b] text-[9px] xs:text-[9px] font-medium w-full text-center">
                {" "}
                {data?.score2?.line2}
              </span>
              <span className="text-[#29ab2b] text-[9px] font-medium w-full text-center">
                {data?.score2?.line3}
              </span>
            </span>
          ) : (
            <span
              id="inPlayTime"
              className="flex items-center justify-center flex-col pl-[1px] pr-[1px]"
            >
              <span className="text-[#29ab2b] text-[9px] font-medium text-ellipsis overflow-hidden w-full text-center">
                {formatDate(data)}
              </span>
              <span className="text-[#29ab2b] text-[6px] xs:text-[9px] font-medium w-full text-center">
                {/* Tgt 145 */}
              </span>
              <span className="text-[#29ab2b] text-[9px] font-medium w-full text-center">
                {/* 0/0 */}
              </span>
            </span>
          )}
        </>
      )}
      {data?.eventTypeId == 1 && (
        <>
          {data?.inPlay == 1 && data?.score ? (
            <span
              id="inPlayTime"
              className="flex flex-col  items-center justify-center  pl-[1px] pr-[1px]"
            >
              <span
                className="  text-[8px] xs:text-xs font-medium w-full flex items-center justify-center gap-x-2"
                style={{ fontSize: "10px" }}
              >
                <span className="text-[#29ab2b]">{data?.timeStatus}</span>
                <span className=" flex flex-col">
                  <span className="  "> {data?.score?.total_1}</span>
                  <span className="  ">{data?.score?.total_2}</span>
                </span>
              </span>
            </span>
          ) : (
            <span
              id="inPlayTime"
              className="flex items-center justify-center flex-col pl-[1px] pr-[1px]"
            >
              <span className="text-[#29ab2b] text-[9px] font-medium text-ellipsis overflow-hidden w-full text-center">
                {formatDate(data)}
              </span>
              <span className="text-[#29ab2b] text-[6px] xs:text-[9px] font-medium w-full text-center">
                {/* Tgt 145 */}
              </span>
              <span className="text-[#29ab2b] text-[9px] font-medium w-full text-center">
                {/* 0/0 */}
              </span>
            </span>
          )}
        </>
      )}

      {data?.eventTypeId == 2 && (
        <>
          {data?.inPlay == 1 && data?.score ? (
            <span
              id="inPlayTime"
              className="flex text-selection-none  items-center justify-center flex-col col-span-2  pl-[2px] pr-[2px] min-h-9 active:scale-[94%] transition-all ease-in-out duration-100"
            >
              <span
                id="inPlayTime"
                className="flex  items-center justify-center flex-col pl-[1px] pr-[1px]"
              >
                <span className="  text-[9px] font-medium w-full flex items-center justify-center gap-x-2 ">
                  <span className="text-[#29ab2b]">
                    {" "}
                    {data?.score?.totalSet1}
                  </span>
                  <span className="  ">
                    {" "}
                    {/* {data?.score?.set1
                      .map((item) => Number(item))
                      .filter((item) => !isNaN(item))
                      .pop()} */}
                    {data?.score?.set1?.length > 0 &&
                      Array.isArray(data?.score?.set1) &&
                      data?.score?.set1[data?.score?.set1?.length - 1]}
                  </span>
                </span>
                <span className="  text-[9px] font-medium w-full flex items-center justify-center gap-x-2">
                  <span className="text-[#29ab2b]">
                    {" "}
                    {data?.score?.totalSet2}
                  </span>
                  <span className="  ">
                    {" "}
                    {data?.score?.set2?.length > 0 &&
                      Array.isArray(data?.score?.set2) &&
                      data?.score?.set2[data?.score?.set2?.length - 1]}
                  </span>
                </span>
              </span>
            </span>
          ) : (
            <span
              id="inPlayTime"
              className="flex items-center justify-center flex-col pl-[1px] pr-[1px]"
            >
              <span className="text-[#29ab2b] text-[9px] font-medium text-ellipsis overflow-hidden w-full text-center">
                {formatDate(data)}
              </span>
              <span className="text-[#29ab2b] text-[6px] xs:text-[9px] font-medium w-full text-center">
                {/* Tgt 145 */}
              </span>
              <span className="text-[#29ab2b] text-[9px] font-medium w-full text-center">
                {/* 0/0 */}
              </span>
            </span>
          )}
        </>
      )}
      {(data?.eventTypeId == 5 || data?.eventTypeId == 6) && (
        <span
          id="inPlayTime"
          className="flex text-[#29ab2b] items-center justify-center flex-col pl-[1px] pr-[1px]"
        >
          <span className=" text-[9px] font-medium text-ellipsis overflow-hidden w-full text-center">
            {formatDate(data)}
          </span>
          <span className=" text-[6px] xs:text-[9px] font-medium w-full text-center">
            {/* Tgt 145 */}
          </span>
          <span className=" text-[9px] font-medium w-full text-center">
            {/* 0/0 */}
          </span>
        </span>
      )}
    </span>
  );
};

export default ScoreHome;

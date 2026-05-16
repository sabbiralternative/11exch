const ScoreBottomPart = ({ iscore }) => {
  return (
    <div className={`col-span-1 w-full h-max  `}>
      <div className="bg-transparent  py-1 ">
        <div className="min-w-full snap-center text-white text-[10px] flex flex-col justify-evenly divide-y divide-divide_color_primary2">
          <div className="grid grid-cols-10 text-center  gap-2 divide-x divide-divide_color_primary2">
            <div className="flex flex-col col-span-2">
              <span>CRR</span>
              <span>{iscore?.crr}</span>
            </div>
            <div className="flex flex-col col-span-2">
              <span> {"P'SHIP"} R</span>
              <span>{iscore?.partnership_runs}</span>
            </div>
            <div className="flex flex-col col-span-2">
              <span className="text-text_color_tertiary1">{"P'SHIP"} B</span>
              <span>{iscore?.partnership_balls}</span>
            </div>
            <div className="flex flex-col col-span-4">
              <span className="text-text_color_tertiary1">LAST WICKET</span>
              <div className=" flex items-center justify-center gap-x-0.5">
                <span>{iscore?.last_wicket}</span>
                <div className=" flex items-center justify-center gap-x-0.5">
                  {/* <span>1</span>
                        <span>(3)</span> */}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-8 pt-3 text-text_color_tertiary1">
            <span className="col-span-3 ml-3">Batsmen</span>
            <span className="col-span-1">R</span>
            <span className="col-span-1">B</span>
            <span className="col-span-1">4s</span>
            <span className="col-span-1">6s</span>
            <span className="col-span-1">SR</span>

            <div className=" col-span-3 ml-3 flex items-center justify-start flex-row text-white gap-x-1">
              <span> {iscore?.player_1_name}</span>
            </div>
            <span className=" col-span-1 text-white">
              {iscore?.player_1_run}
            </span>
            <span className=" col-span-1 text-white">
              {iscore?.player_1_ball}
            </span>
            <span className=" col-span-1 text-white">
              {iscore?.player_1_four}
            </span>
            <span className=" col-span-1 text-white ">
              {iscore?.player_1_six}
            </span>
            <span className=" col-span-1 text-white ">
              {iscore?.player_1_sr}
            </span>
            <div className=" col-span-3 ml-3 flex items-center justify-start flex-row text-white gap-x-1">
              <span> {iscore?.player_2_name}</span>
            </div>
            <span className=" col-span-1 text-white">
              {iscore?.player_2_run}
            </span>
            <span className=" col-span-1 text-white">
              {iscore?.player_2_ball}
            </span>
            <span className=" col-span-1 text-white">
              {iscore?.player_2_four}
            </span>
            <span className=" col-span-1 text-white ">
              {iscore?.player_2_six}
            </span>
            <span className=" col-span-1 text-white ">
              {iscore?.player_2_sr}
            </span>
          </div>
          <div className="grid grid-cols-8 pt-3 text-text_color_tertiary1">
            <span className="col-span-3 ml-3">Bowler</span>
            <span className="col-span-1">O</span>
            <span className="col-span-1">M</span>
            <span className="col-span-1">R</span>
            <span className="col-span-1">W</span>
            <span className="col-span-1">Eco</span>

            <span className=" col-span-3 ml-3 text-white">
              {iscore?.bowler}
            </span>
            <span className=" col-span-1 text-white">
              {iscore?.bowlerOvers}
            </span>
            <span className=" col-span-1 text-white">-</span>
            <span className=" col-span-1 text-white">{iscore?.bowlerRuns}</span>
            <span className=" col-span-1 text-white">
              {iscore?.bowlerWickets}
            </span>
            <span className=" col-span-1 text-white">{iscore?.bowlerEco}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreBottomPart;

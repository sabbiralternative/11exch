import ScoreBottomPart from "./ScoreBottomPart";
import ScoreTopPart from "./ScoreTopPart";

const Score = ({ iscore }) => {
  return (
    <div
      style={{ marginTop: "2px" }}
      id="score-board"
      className="score-board  show mb-md-3 w-full"
    >
      <ScoreTopPart iscore={iscore} />
      <ScoreBottomPart iscore={iscore} />
    </div>
  );
};

export default Score;

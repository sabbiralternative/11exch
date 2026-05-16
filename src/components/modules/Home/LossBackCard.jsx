import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LossBackCard = () => {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);

  const handleNavigate = () => {
    if (token) {
      navigate("/promotions");
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="relative px-2 flex flex-col items-center w-full rounded-lg bg-gradient-to-br from-[#5b21b6] to-[#9333ea] overflow-hidden shadow-lg">
      <div className="absolute top-2 right-2 w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 opacity-20" />
      <div className="absolute bottom-8 right-4 w-8 h-8 rounded-full bg-gradient-to-br from-yellow-300 to-amber-500 opacity-20" />
      <div className="absolute top-1/2 left-4 w-6 h-6 rounded-full bg-gradient-to-br from-amber-300 to-amber-400 opacity-10" />
      <div className="absolute top-12 right-16 w-4 h-4 rounded-full bg-white opacity-10" />
      <div className="absolute bottom-4 right-24 w-3 h-3 rounded-full bg-amber-200 opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_110%,rgba(255,255,255,0.1)_0%,transparent_46%)]" />
      <div className="py-4 w-full relative">
        <div className="relative text-center z-20 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-white font-black leading-normal text-xl tracking-wider uppercase">
          Lossback Bonus
        </div>
        <div className="h-[120%] aspect-square absolute bottom-0 translate-y-1/3 md:translate-y-1/2 left-0 z-10 opacity-60">
          <div
            className="relative overflow-hidden w-full h-full"
            style={{
              display: "inline-block",
              position: "relative",
            }}
          >
            <img
              src="/assets/cash-bundle.webp"
              alt="Lossback Bonus"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="  w-full h-full object-cover"
              title="Lossback Bonus"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 w-full py-3">
        {!token && (
          <div className="flex flex-col text-white leading-normal tracking-wider z-20">
            <div className="text-base flex items-center gap-2 mt-1">
              <div className="mt-1">
                <span className="px-2 py-1 text-xs font-bold rounded-full bg-white/20 text-white">
                  Login to view available claims
                </span>
              </div>
            </div>
          </div>
        )}
        {token && (
          <div className="flex flex-col text-white leading-normal tracking-wider z-20">
            <div className="text-base flex items-center gap-2 mt-1">
              <div className="mt-1">
                <span className="px-2 py-1 text-xs font-bold rounded-full bg-white/20 text-white">
                  View available claims
                </span>
              </div>
            </div>
          </div>
        )}

        <button
          onClick={handleNavigate}
          className="relative overflow-hidden bg-gradient-to-r from-amber-400 to-yellow-300 hover:from-amber-500 hover:to-yellow-400 ml-auto active:scale-[98%] transition-all duration-150 text-black px-5 py-2 text-sm font-bold rounded-lg shadow-md"
          type="button"
        >
          SEE ALL
        </button>
      </div>
      <div className="w-full h-1 bg-gradient-to-r from-amber-400 to-yellow-200" />
    </div>
  );
};

export default LossBackCard;

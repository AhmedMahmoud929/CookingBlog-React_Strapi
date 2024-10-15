import timerIcon from "../../assets/icons/Timer.svg";
import forkKnifeIcon from "../../assets/icons/ForkKnife.svg";
import { useState } from "react";
import { Heart } from "lucide-react";
import frAnimations, { motion } from "../../constants/framerAnimations";
import formatTitle from "../../utils/formatTitle";
import { Link } from "react-router-dom";

function SuggCard({ img, title, category, time, documentId }) {
  const [isFav, setIsFav] = useState(false);

  return (
    <motion.div
      {...frAnimations.fadeUp({ duration: 0.3, delay: 0.2 })}
      className="relative rounded-[1.8rem] h-[330px] bg-babyBlue/65"
    >
      <div
        className="absolute top-[15px] right-[15px] bg-white rounded-full h-9 w-9 flex justify-center items-center cursor-pointer transition-all duration-300"
        style={{ transform: isFav ? "scale(0.9)" : "scale(1)" }}
        onClick={() => setIsFav(!isFav)}
      >
        <Heart
          fill={isFav ? "#FF6363" : "#DBE2E5"}
          stroke="none"
          className="transition-all duration-300"
          style={{ transform: isFav ? "scale(1.3)" : "scale(1)" }}
        />
      </div>

      <div className="h-[190px] overflow-hidden rounded-[1.6rem]">
        <img
          className="object-cover object-center w-full h-full"
          src={import.meta.env.VITE_API_SERVER + img}
          alt="food"
        />
      </div>
      <div className="flex flex-col justify-between h-[130px] px-6 pt-4 pb-2">
        <Link to={"/recipe/" + documentId}>
          <h1 className="text-lg font-bold">{formatTitle(title, 33)}</h1>
        </Link>

        <div className="flex items-center gap-4">
          <div className="rounded-full flex items-center gap-1">
            <img src={timerIcon} alt="Timer" />
            <span className="text-sm text-black/60 font-medium">
              {time} Minutes
            </span>
          </div>
          <div className="rounded-full flex items-center gap-1">
            <img src={forkKnifeIcon} alt="forkKnife" />
            <span className="text-sm text-black/60 font-medium">
              {category}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default SuggCard;

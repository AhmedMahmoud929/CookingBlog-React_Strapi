import { motion } from "framer-motion";
import frAnimations from "../../../constants/framerAnimations";

const CategoryCard = ({ img, text, bg, delay }) => {
  const COLORS = {
    gray: "#7082461A",
    yellow: "#F09E001A",
    red: "#CC261B1A",
    green: "#6CC63F1A",
  };

  return (
    <motion.div
      {...frAnimations.fadeUp({ delay })}
      className="group cursor-pointer relative bg-gradient-to-t text-center rounded-[1.9rem] w-full h-[9.5rem] mt-[3rem]"
      style={{
        background: `linear-gradient(to top, ${COLORS[bg]} 0%, transparent 100%)`,
      }}
    >
      <img
        className="absolute blur-md opacity-40 -top-[25%] left-[60%] -translate-x-1/2 group-hover:scale-110 transition-transform duration-300"
        src={img}
        alt={text}
      />
      <img
        className="absolute -top-[35%] left-1/2 -translate-x-1/2 group-hover:scale-110 transition-transform duration-300"
        src={img}
        alt={text}
      />
      <p className="text-xl font-semibold mt-[5rem]">{text}</p>
    </motion.div>
  );
};

export default CategoryCard;

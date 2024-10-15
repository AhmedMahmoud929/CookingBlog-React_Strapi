import frAnimations, { motion } from "../../../constants/framerAnimations";
import badgeIcon from "../../../assets/icons/Badge.svg";
import hotIcon from "../../../assets/icons/hot.png";
import timerIcon from "../../../assets/icons/Timer.svg";
import forkKnifeIcon from "../../../assets/icons/ForkKnife.svg";
import playCircleIcon from "../../../assets/icons/PlayCircle.svg";
import { Link } from "react-router-dom";
import formatDate from "../../../utils/formatDate";
import formatBrief from "../../../utils/formatBrief";

function RecipeSlide({ recipe, isActive }) {
  const rotateAnimate = {
    from: isActive && {
      translateX: "-50%",
      opacity: 0,
      rotate: -90,
      scale: 0.5,
    },
    to: { translateX: "-50%", opacity: 1, rotate: 0, scale: 1 },
  };

  return (
    <div className="relative bg-babyBlue rounded-3xl h-[90vh] w-full flex lg:flex-row flex-col overflow-hidden ">
      {/* BADGE */}
      <motion.div
        initial={rotateAnimate.from}
        animate={rotateAnimate.to}
        transition={{ duration: 0.5, delay: 1.1 }}
        className="
        absolute w-[90px] top-[2%] left-[90%]
        md:w-[100px]
        lg:w-auto lg:top-[5%] lg:left-[50%] lg:-translate-x-1/2
        "
      >
        <img src={badgeIcon} alt="badge" />
      </motion.div>
      {/* LEFT */}
      <div className="w-full lg:w-1/2 h-full p-[2rem] sm:p-[3rem] flex flex-col justify-between">
        <motion.div
          {...frAnimations.fadeUp({})}
          className="bg-white w-fit flex gap-[0.8rem] rounded-full py-[0.7rem] px-5 "
        >
          <img src={hotIcon} alt="hot" />
          <span className="text-sm font-semibold">Hot Recipes</span>
        </motion.div>

        <motion.h1
          {...frAnimations.fadeUp({ delay: 0.3 })}
          className="
          text-4xl tracking-tight font-semibold mt-[2rem] mb-[1.5rem]
          sm:text-5xl
          md:text-h1
          "
        >
          {recipe.title}
        </motion.h1>

        <motion.p
          {...frAnimations.fadeRight({ delay: 0.5 })}
          className="
          leading-6 text-black/60 
          sm:leading-7 text-sm
          "
        >
          {formatBrief(recipe.brief, 160)}
        </motion.p>

        <div className="flex flex-wrap items-center gap-4 mt-[1rem]">
          <motion.div
            {...frAnimations.fadeBottom({ delay: 0.7 })}
            className="px-5 py-3 rounded-full bg-black/5 flex items-center gap-4"
          >
            <img src={timerIcon} alt="Timer" />
            <span className="text-sm text-black/60 font-medium">
              {+recipe.cookTime + +recipe.prepTime} Minutes
            </span>
          </motion.div>
          <motion.div
            {...frAnimations.fadeBottom({ delay: 0.9 })}
            className="p-3 rounded-full bg-black/5 flex items-center gap-4"
          >
            <img src={forkKnifeIcon} alt="forkKnife" />
            <span className="text-sm text-black/60 font-medium">
              {recipe.category.title}
            </span>
          </motion.div>
        </div>

        <div
          className="
        flex flex-col gap-6 items-start mt-[2rem]
        sm:flex-row sm:gap-0 sm:items-center sm:mt-[3rem] sm:justify-between
        "
        >
          <motion.div
            initial={isActive && { opacity: 0 }}
            animate={isActive ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex item-start gap-3"
          >
            <img
              src={import.meta.env.VITE_API_SERVER + recipe.auther.avatar.url}
              alt="Auther"
            />
            <div className="flex flex-col">
              <span className="font-semibold">{recipe.auther.fullName}</span>
              <span className="font-medium text-sm text-black/60">
                {formatDate(recipe.publishedAt)}
              </span>
            </div>
          </motion.div>
          <Link to={"/recipe/" + recipe.documentId} className="ml-auto sm:m-0">
            <motion.div
              initial={isActive && { opacity: 0 }}
              animate={
                isActive
                  ? { opacity: 1, transition: { duration: 0.5, delay: 1 } }
                  : {}
              }
              whileHover={{ scale: 1.1, transition: { duration: 0.4 } }}
              whileTap={{
                scale: 0.95,
                rotate: 2.5,
                transition: { duration: 0.3 },
              }}
              className="px-[2rem] py-[1rem] rounded-2xl bg-black flex items-center gap-2 cursor-pointer"
            >
              <span className="text-sm text-white font-medium">
                View Recipes
              </span>
              <img src={playCircleIcon} alt="playCircle" />
            </motion.div>
          </Link>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/2">
        <img
          className="object-cover object-center w-full h-full"
          src={import.meta.env.VITE_API_SERVER + recipe.cover.url}
          alt="Burger"
        />
      </div>
    </div>
  );
}

export default RecipeSlide;

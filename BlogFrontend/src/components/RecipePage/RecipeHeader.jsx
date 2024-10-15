import frAnimations, { motion } from "../../constants/framerAnimations";
import person1Icon from "../../assets/icons/person1.svg";
import timerIcon from "../../assets/icons/Timer.svg";
import forkKnifeIcon from "../../assets/icons/ForkKnife.svg";
import printerIcon from "../../assets/icons/printer.svg";
import shareIcon from "../../assets/icons/share.svg";
import eggDishImg from "../../assets/imgs/eggDish.png";
import formatDate from "../../utils/formatDate";
import { useEffect, useState } from "react";

function RecipeHeader({ recipe }) {
  const [rowData, setRowData] = useState([]);

  const formatKey = (key) => {
    return key
      .replace(/([A-Z])/g, " $1") // Adds space before capital letters
      .replace(/^./, (str) => str.toUpperCase()); // Capitalize first letter
  };

  useEffect(() => {
    if (recipe) {
      const newRowData = [
        {
          icon: import.meta.env.VITE_API_SERVER + recipe.auther.avatar.url,
          text: recipe.auther.fullName,
          p: formatDate(recipe.publishedAt),
        },
        {
          icon: timerIcon,
          text: "Prep time",
          p: recipe.prepTime + " Minutes",
        },
        {
          icon: timerIcon,
          text: "Cook time",
          p: recipe.cookTime + " Minutes",
        },
        {
          icon: forkKnifeIcon,
          text: "Type",
          p: recipe.category.title,
        },
      ];
      setRowData(newRowData);
    }
  }, [recipe]);

  return (
    <div>
      <div className="container px-4 mx-auto py-[4rem]">
        {/* TOP */}
        <div className="flex items-center justify-between">
          {/* LEFT */}
          <div className="left">
            <motion.h1
              {...frAnimations.fadeUp({})}
              className="text-4xl sm:text-5xl md:text-h1 mb-12 font-bold"
            >
              {recipe.title}
            </motion.h1>
            <div className="flex flex-col gap-[2rem] md:gap-0 md:flex-row">
              {rowData.map((ele, ix) => (
                <motion.div
                  {...frAnimations.fadeRight({ delay: 0.2 + ix * 0.2 })}
                  key={ix}
                  className="flex item-center gap-3 px-[1.5rem] md:border-r border-black/10 last:border-none"
                >
                  <img
                    className={ix == 0 ? "" : "w-6 h-6"}
                    src={ele.icon}
                    alt="Icon"
                  />
                  <div className="flex flex-col">
                    <span className="font-semibold">{ele.text}</span>
                    <span className="font-medium text-sm text-black/60">
                      {ele.p}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          {/* RIGHT */}
          <div
            className="
          flex flex-col gap-4
          lg:flex-row
          "
          >
            <motion.div
              {...frAnimations.fadeLeft({ delay: 0.5 })}
              className="text-center"
            >
              <div
                className="
              w-[3rem] h-[3rem] bg-babyBlue rounded-full flex items-center justify-center
              sm:w-[4rem] sm:h-[4rem]
              lg:w-[5rem] lg:h-[5rem]
              "
              >
                <img src={printerIcon} alt="Auther" />
              </div>
              <span className="block mt-2 text-xs font-semibold uppercase">
                Print
              </span>
            </motion.div>
            <motion.div
              {...frAnimations.fadeLeft({ delay: 0.7 })}
              className="text-center"
            >
              <div
                className="
              w-[3rem] h-[3rem] bg-babyBlue rounded-full flex items-center justify-center
              sm:w-[4rem] sm:h-[4rem]
              lg:w-[5rem] lg:h-[5rem]
              "
              >
                <img src={shareIcon} alt="Auther" />
              </div>
              <span className="block mt-2 text-xs font-semibold  uppercase">
                Share
              </span>
            </motion.div>
          </div>
        </div>
        {/* MIDDLE */}
        <div
          className="
        flex flex-col gap-[2rem] mt-12
        lg:flex-row
        "
        >
          <motion.div
            {...frAnimations.fadeUp({ delay: 0.9 })}
            className="bg-babyBlue flex-1 rounded-[1.875rem] overflow-hidden"
          >
            <img
              className="object-cover object-center h-full w-full"
              src={import.meta.env.VITE_API_SERVER + recipe.cover.url}
              alt="eggDish"
            />
          </motion.div>
          <motion.div
            {...frAnimations.fadeUp({ delay: 1 })}
            className="bg-babyBlue min-w-full sm:min-w-[22rem] min-h-[37.5rem] rounded-[1.875rem] p-[2rem]"
          >
            <h1 className="text-2xl font-semibold mb-6">
              Nutrition Information
            </h1>
            <ul>
              {Object.entries(recipe.nutritionInfo).map(
                ([key, value], ix) =>
                  key !== "id" && (
                    <li
                      key={ix}
                      className="flex items-center justify-between py-4 border-b border-black/10"
                    >
                      <span className="font-medium text-md sm:text-lg text-black/60">
                        {formatKey(key)}
                      </span>
                      <span className="font-medium text-md sm:text-lg">{value}</span>
                    </li>
                  )
              )}
            </ul>
          </motion.div>
        </div>
        {/* BOTTOM */}
        <motion.p {...frAnimations.fadeUp({})} className="mt-12 text-black/60">
          {recipe.brief}
        </motion.p>
      </div>
    </div>
  );
}

export default RecipeHeader;

import frAnimations, { motion } from "../../constants/framerAnimations";
import adsImg from "../../assets/imgs/Ads.png";
import formatTitle from "../../utils/formatTitle";
import { Link } from "react-router-dom";

function RecipeAside({ asideRecipes }) {
  return (
    <aside className=" w-full lg:w-[80%]">
      <div>
        <motion.h1
          {...frAnimations.fadeRight({})}
          className="text-3xl font-semibold"
        >
          Other Recipe
        </motion.h1>
        <ul className="mt-[2.5rem]">
          {asideRecipes.map((ele, ix) => (
            <Link key={ix} to={"/recipe/" + ele.documentId}>
              <motion.li
                {...frAnimations.fadeUp({})}
                className="flex item-center gap-3 mb-5"
              >
                <div className="min-w-[140px] sm:min-w-[180px] h-[100px] rounded-xl overflow-hidden">
                  <img
                    className="object-cover object-center w-full h-full"
                    src={import.meta.env.VITE_API_SERVER + ele.cover.url}
                    alt="Icon"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="font-semibold">
                    {formatTitle(ele.title, 40)}
                  </span>
                  <span className="font-medium text-sm text-black/60">
                    By {ele.auther.fullName}
                  </span>
                </div>
              </motion.li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="hidden lg:block">
        <motion.img
          {...frAnimations.fadeUp({})}
          className="mt-20 object-cover object-center w-full h-full"
          src={adsImg}
          alt="ads"
        />
      </div>
    </aside>
  );
}

export default RecipeAside;

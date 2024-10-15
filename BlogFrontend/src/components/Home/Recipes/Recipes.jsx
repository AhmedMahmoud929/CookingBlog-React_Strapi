import frAnimations, { motion } from "../../../constants/framerAnimations";
import RecipeCard from "./RecipeCard";

function Recipes({ suggestedRecipes }) {
  return (
    <div id="recipes">
      <div className="container px-4 mx-auto pt-[1rem] pb-[3rem]">
        {/* TOP */}
        <div>
          <motion.h1
            {...frAnimations.fadeUp({})}
            className="
            text-center text-4xl font-semibold
            sm:text-5xl
            "
          >
            Simple and tasty recipes
          </motion.h1>
          <motion.p
            {...frAnimations.fadeUp({ delay: 0.3 })}
            className="
            w-full mx-auto text-center leading-7 mt-6
            lg:w-1/2
            "
          >
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </motion.p>
        </div>
        {/* CARDS */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] mt-[1.5rem] gap-y-1 gap-x-[2.5rem]">
          {suggestedRecipes.map((ele, ix) => (
            <RecipeCard
              key={ix}
              img={ele.cover.url}
              title={ele.title}
              time={+ele.cookTime + +ele.prepTime}
              category={ele.category.title}
              documentId={ele.documentId}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Recipes;

import frAnimations, { motion } from "../../constants/framerAnimations";
import CheckList from "./CheckList";

function RecipeBody({ ingredients, directions }) {
  return (
    <div>
      <motion.h1
        {...frAnimations.fadeRight({})}
        className="text-black text-4xl font-semibold"
      >
        Ingredients
      </motion.h1>
      {ingredients.map((list, ix) => (
        <CheckList key={ix} title={list.title} items={list.items} />
      ))}
      {/*  */}
      <motion.h1
        {...frAnimations.fadeRight({})}
        className="text-black text-4xl font-semibold mt-[5.5rem]"
      >
        Directions
      </motion.h1>
      <CheckList items={directions.items} extended={true} />
    </div>
  );
}

export default RecipeBody;

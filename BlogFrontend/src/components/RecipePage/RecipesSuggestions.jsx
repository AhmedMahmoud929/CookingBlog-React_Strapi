import frAnimations, { motion } from "../../constants/framerAnimations";
import foodPic1 from "../../assets/imgs/foodPic1.png";
import foodPic2 from "../../assets/imgs/foodPic2.png";
import foodPic3 from "../../assets/imgs/foodPic3.png";
import foodPic4 from "../../assets/imgs/foodPic4.png";
import foodPic5 from "../../assets/imgs/foodPic5.png";
import foodPic6 from "../../assets/imgs/foodPic6.png";
import foodPic7 from "../../assets/imgs/foodPic7.png";
import foodPic8 from "../../assets/imgs/foodPic8.png";
import RecipeCard from "../Home/Recipes/RecipeCard";
import SuggCard from "./SuggCard";

const foodCards = [
  {
    img: foodPic1,
    title: "Big and Juicy Wagyu Beef Cheeseburger",
    time: "30 Minutes",
    category: "Snack",
  },
  {
    img: foodPic2,
    title: "Fresh Lime Roasted Salmon with Ginger Sauce",
    time: "30 Minutes",
    category: "Fish",
  },
  {
    img: foodPic3,
    title: "Strawberry Oatmeal Pancake with Honey Syrup",
    time: "30 Minutes",
    category: "Breakfast",
  },
  {
    img: foodPic4,
    title: "Fresh and Healthy Mixed Mayonnaise Salad",
    time: "30 Minutes",
    category: "Healthy",
  },
];

function RecipesSuggestions({ suggestedRecipes }) {
  return (
    <div>
      <div className="container px-4 mx-auto pt-24 pb-12">
        <motion.h1
          {...frAnimations.fadeUp({})}
          className="text-center text-3xl sm:text-4xl font-semibold"
        >
          You may like these recipe too
        </motion.h1>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 mt-16 mb-[2rem]">
          {suggestedRecipes.map((ele, ix) => (
            <SuggCard
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

export default RecipesSuggestions;

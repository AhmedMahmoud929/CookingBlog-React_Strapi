import { useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import frAnimations from "../../../constants/framerAnimations";
import meatImg from "../../../assets/icons/meat.png";
import veganImg from "../../../assets/icons/vegan.png";
import breakfastImg from "../../../assets/icons/breakfast.png";
import dessertImg from "../../../assets/icons/dessert.png";
import lunchImg from "../../../assets/icons/lunch.png";
import chocolateImg from "../../../assets/icons/chocolate.png";
import CategoryCard from "./CategoryCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../../reducers/categoriesSlice";

function Categories() {
  const { categories, status, error } = useSelector(
    (state) => state.categories
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <div>
      <div className="container px-4 mx-auto py-6 my-[5rem] mb-[3rem]">
        <div
          className="
        flex flex-col justify-between items-center
        sm:flex-row
        "
        >
          <motion.h1
            {...frAnimations.fadeRight({})}
            className="
            text-4xl font-semibold mb-6
            sm:mb-0
            lg:text-5xl
            "
          >
            Categories
          </motion.h1>
          <motion.button
            {...frAnimations.fadeLeft({})}
            {...frAnimations.btnRotate({})}
            className="
            text-md rounded-2xl mb-4 bg-babyBlue font-semibold py-[1rem] px-[1.4rem]
            md:text-lg md:mb-0
            lg:py-[1.2rem] lg:px-[1.6rem]
            "
          >
            View All Categories
          </motion.button>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-[2rem] mt-[4rem]">
          {status === "SUCCESS"
            ? categories.map((ele, ix) => (
                <CategoryCard
                  key={ix}
                  delay={ix * 0.2}
                  img={import.meta.env.VITE_API_SERVER + ele.icon.url}
                  text={ele.title}
                  bg="red"
                />
              ))
            : "Loading... What about a hot drink?"}
        </div>
      </div>
    </div>
  );
}

export default Categories;

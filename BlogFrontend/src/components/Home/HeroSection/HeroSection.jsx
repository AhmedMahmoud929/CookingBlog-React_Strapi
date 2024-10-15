import RecipeSlide from "./RecipeSlide";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import { EffectCards } from "swiper/modules";
import { motion } from "framer-motion";

function HeroSection({ recipes, midRecipe }) {
  return (
    <div className="relative box-border py-10 flex">
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        {recipes.length && (
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            initialSlide={midRecipe}
            loop={true}
            className="mySwiper container px-4 z-10 mx-auto flex items-center gap-[2rem] flex-grow transition-all duration-300"
          >
            {recipes.map((ele, ix) => (
              <SwiperSlide key={ix} className="rounded-3xl ">
                <RecipeSlide isActive={ix == midRecipe} recipe={ele} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </motion.div>
    </div>
  );
}

export default HeroSection;

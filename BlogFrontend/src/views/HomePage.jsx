import HeroSection from "../components/Home/HeroSection/HeroSection";
import Navbar from "../components/Common/Navbar";
import Categories from "../components/Home/Categories/Categories";
import Recipes from "../components/Home/Recipes/Recipes";
import ChefSection from "../components/Home/ChefSection";
import InstaSection from "../components/Home/InstaSection";
import ContactSection from "../components/Home/ContactSection";
import SubscribeSection from "../components/Common/SubscribeSection";
import Footer from "../components/Common/Footer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRecipes,
  fetchSuggestedRecipes,
  getFavRecipes,
} from "../reducers/recipesSlice";

const HomePage = () => {
  const { suggestedRecipes, recipes } = useSelector((state) => state.recipes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipes());
    dispatch(fetchSuggestedRecipes(9));
    dispatch(getFavRecipes());
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection
        recipes={recipes}
        midRecipe={Math.floor(recipes.length / 2)}
      />
      <Categories />
      <Recipes suggestedRecipes={suggestedRecipes} />
      <ChefSection />
      <InstaSection />
      <ContactSection />
      <SubscribeSection />
      <Footer />
    </>
  );
};

export default HomePage;

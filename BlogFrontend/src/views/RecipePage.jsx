import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchAsideRecipes,
  fetchSingleRecipe,
  fetchSuggestedRecipes,
  getComplatedTasks,
} from "../reducers/recipesSlice";
import Navbar from "../components/Common/Navbar";
import SubscribeSection from "../components/Common/SubscribeSection";
import Footer from "../components/Common/Footer";
import RecipeHeader from "../components/RecipePage/RecipeHeader";
import RecipeBody from "../components/RecipePage/RecipeBody";
import RecipeAside from "../components/RecipePage/RecipeAside";
import RecipesSuggestions from "../components/RecipePage/RecipesSuggestions";
import { useLocation, useParams } from "react-router-dom";

const RecipePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { suggestedRecipes, asideRecipes, singleRecipe, status, error } =
    useSelector((state) => state.recipes);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    if (id) {
      dispatch(fetchSingleRecipe(id));
      dispatch(getComplatedTasks());
      dispatch(fetchAsideRecipes());
      dispatch(fetchSuggestedRecipes(4));
    }
  }, [id]);

  return (
    <>
      {suggestedRecipes && asideRecipes && singleRecipe ? (
        <>
          <Navbar />
          <RecipeHeader recipe={singleRecipe} />
          <div
            className="
          flex flex-col gap-[40px] container px-4  mx-auto pb-20
          lg:flex-row
          "
          >
            <RecipeBody
              ingredients={singleRecipe.ingredients}
              directions={singleRecipe.directions}
            />
            <RecipeAside asideRecipes={asideRecipes} />
          </div>
          <SubscribeSection />
          <RecipesSuggestions suggestedRecipes={suggestedRecipes} />
          <Footer />
        </>
      ) : (
        "LOADING..."
      )}
    </>
  );
};

export default RecipePage;

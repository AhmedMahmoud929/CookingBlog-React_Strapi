import ArticlesList from "../components/Blog/ArticlesList";
import BlogHeader from "../components/Blog/BlogHeader";
import Footer from "../components/Common/Footer";
import Navbar from "../components/Common/Navbar";
import SubscribeSection from "../components/Common/SubscribeSection";
import RecipeAside from "../components/RecipePage/RecipeAside";
import Pagination from "../components/Blog/Pagenation";
import RecipesSuggestions from "../components/RecipePage/RecipesSuggestions";
import { useEffect, useState } from "react";
import {
  fetchAsideRecipes,
  fetchSuggestedRecipes,
} from "../reducers/recipesSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "../reducers/articlesSlice";

function BlogPage() {
  const dispatch = useDispatch();
  const { suggestedRecipes, asideRecipes, status, error } = useSelector(
    (state) => state.recipes
  );
  const { articles } = useSelector((state) => state.articles);

  useEffect(() => {
    dispatch(fetchArticles());
    dispatch(fetchAsideRecipes());
    dispatch(fetchSuggestedRecipes(4));
  }, []);

  return (
    <>
      <Navbar />
      <BlogHeader />
      <div className="
      flex flex-col container px-4 gap-16 mx-auto pb-20
      lg:flex-row
      ">
        <ArticlesList articles={articles} />
        {asideRecipes && <RecipeAside asideRecipes={asideRecipes} />}
      </div>
      <SubscribeSection />
      {suggestedRecipes && (
        <RecipesSuggestions suggestedRecipes={suggestedRecipes} />
      )}
      <Footer />
    </>
  );
}

export default BlogPage;

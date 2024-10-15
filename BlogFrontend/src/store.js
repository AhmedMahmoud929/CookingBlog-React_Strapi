import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./reducers/categoriesSlice";
import articlesSlice from "./reducers/articlesSlice";
import recipesSlice from "./reducers/recipesSlice";
import messagesSlice from "./reducers/messagesSlice";
import emailsSlice from "./reducers/emailsSlice";

const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    articles: articlesSlice,
    recipes: recipesSlice,
    messages: messagesSlice,
    emails: emailsSlice,
  },
});

export default store;

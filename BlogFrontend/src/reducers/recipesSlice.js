import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import qs from "qs";
import axios from "axios";

const handlePending = (state) => {
  state.status = "LOADING";
  state.error = null;
};

const handleFulfilled = (state, action, key) => {
  state[key] = action.payload;
  state.status = "SUCCESS";
  state.error = null;
};

const handleRejected = (state, action, key) => {
  state[key] = null;
  state.status = "FAILED";
  state.error = action.error;
};

export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async () => {
    const res = await axios.get(
      `${
        import.meta.env.VITE_API_SERVER
      }/api/recipes?populate=auther.avatar&populate=category&populate=cover`
    );
    return res.data.data;
  }
);

export const fetchSingleRecipe = createAsyncThunk(
  "recipes/fetchSingleRecipe",
  async (id) => {
    const query = qs.stringify(
      {
        populate: {
          auther: {
            populate: "*",
          },
          category: {
            fields: ["title"],
          },
          cover: {
            fields: ["url"],
          },
          nutritionInfo: true,
          ingredients: {
            populate: "*",
          },
          directions: {
            populate: {
              items: {
                populate: "*",
              },
            },
          },
        },
      },
      { encodeValuesOnly: true }
    );
    const res = await axios.get(
      `${import.meta.env.VITE_API_SERVER}/api/recipes/${id}?${query}`
    );

    return res.data.data;
  }
);

export const fetchAsideRecipes = createAsyncThunk(
  "recipes/fetchAsideRecipes",
  async () => {
    const query = qs.stringify(
      {
        fields: ["title"],
        populate: {
          auther: {
            fields: ["fullName"],
          },
          cover: {
            fields: ["url"],
          },
        },
      },
      { encodeValuesOnly: true }
    );

    const res = await axios.get(
      `${import.meta.env.VITE_API_SERVER}/api/recipes?${query}`
    );
    const data = res.data.data;
    return data.length <= 3 ? data : data.splice(0, 3);
  }
);

export const fetchSuggestedRecipes = createAsyncThunk(
  "recipes/fetchSuggestedRecipes",
  async (limit) => {
    const query = qs.stringify(
      {
        fields: ["title", "cookTime", "prepTime"],
        populate: {
          cover: {
            fields: ["url"],
          },
          category: {
            fields: ["title"],
          },
        },
      },
      { encodeValuesOnly: true }
    );

    const res = await axios.get(
      `${import.meta.env.VITE_API_SERVER}/api/recipes?${query}`
    );
    const data = res.data.data;
    return data.length <= limit ? data : data.splice(0, limit);
  }
);

const recipesSlice = createSlice({
  name: "recipes",
  initialState: {
    recipes: [],
    asideRecipes: [],
    suggestedRecipes: [],
    favRecipes: [],
    complatedTasks: [],
    singleRecipe: null,
    status: "IDLE",
    error: null,
  },
  reducers: {
    getFavRecipes: (state) => {
      const data = JSON.parse(localStorage.getItem("favRecipes"));
      state.favRecipes = data ? data : [];
    },
    addToFav: (state, action) => {
      state.favRecipes.push(action.payload);
      localStorage.setItem("favRecipes", JSON.stringify(state.favRecipes));
    },
    removeFromFav: (state, action) => {
      state.favRecipes = state.favRecipes.filter(
        (ele) => ele != action.payload
      );
      localStorage.setItem("favRecipes", JSON.stringify(state.favRecipes));
    },
    getComplatedTasks: (state) => {
      const data = JSON.parse(localStorage.getItem("complatedTasks"));
      state.complatedTasks = data ? data : [];
    },
    addToComplatedTasks: (state, action) => {
      state.complatedTasks.push(action.payload);
      localStorage.setItem(
        "complatedTasks",
        JSON.stringify(state.complatedTasks)
      );
    },
    removeFromComplatedTasks: (state, action) => {
      state.complatedTasks = state.complatedTasks.filter(
        (ele) => ele != action.payload
      );
      localStorage.setItem(
        "complatedTasks",
        JSON.stringify(state.complatedTasks)
      );
    },
  },
  extraReducers: (builder) => {
    builder
      // [ FETCH ALL RECIPES ]
      .addCase(fetchRecipes.pending, (state) => handlePending(state))
      .addCase(fetchRecipes.fulfilled, (state, action) =>
        handleFulfilled(state, action, "recipes")
      )
      .addCase(fetchRecipes.rejected, (state, action) =>
        handleRejected(state, action, "recipes")
      )

      // [ FETCH SINGLE RECIPE ]
      .addCase(fetchSingleRecipe.pending, (state) => handlePending(state))
      .addCase(fetchSingleRecipe.fulfilled, (state, action) =>
        handleFulfilled(state, action, "singleRecipe")
      )
      .addCase(fetchSingleRecipe.rejected, (state, action) =>
        handleRejected(state, action, "singleRecipe")
      )
      // [ FETCH ASIDE RECIPE ]
      .addCase(fetchAsideRecipes.pending, (state) => handlePending(state))
      .addCase(fetchAsideRecipes.fulfilled, (state, action) =>
        handleFulfilled(state, action, "asideRecipes")
      )
      .addCase(fetchAsideRecipes.rejected, (state, action) =>
        handleRejected(state, action, "asideRecipes")
      )
      // [ FETCH SUGGESED RECIPES ]
      .addCase(fetchSuggestedRecipes.pending, (state) => handlePending(state))
      .addCase(fetchSuggestedRecipes.fulfilled, (state, action) =>
        handleFulfilled(state, action, "suggestedRecipes")
      )
      .addCase(fetchSuggestedRecipes.rejected, (state, action) =>
        handleRejected(state, action, "suggestedRecipes")
      );
  },
});

export const {
  getFavRecipes,
  addToFav,
  removeFromFav,
  getComplatedTasks,
  addToComplatedTasks,
  removeFromComplatedTasks,
} = recipesSlice.actions;
export default recipesSlice.reducer;

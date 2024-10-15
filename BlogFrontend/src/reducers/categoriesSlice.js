import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_SERVER}/api/categories?populate=*`
    );
    return response.data.data;
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    status: "IDLE",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.categories = [];
        state.status = "LOADING";
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.status = "SUCCESS";
        state.error = null;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.categories = [];
        state.status = "FAILED";
        state.error = action.error.message;
      });
  },
});

export default categoriesSlice.reducer;

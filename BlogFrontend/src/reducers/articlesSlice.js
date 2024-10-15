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

export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async (title = null) => {
    console.log(title);
    const query = qs.stringify({
      ...(title && {
        filters: {
          title: {
            $contains: title,
          },
        },
      }),
      populate: {
        cover: {
          fields: "url",
        },
        auther: {
          fields: ["fullName"],
          populate: {
            avatar: {
              fields: "url",
            },
          },
        },
      },
    });
    const res = await axios.get(
      `${import.meta.env.VITE_API_SERVER}/api/articles?${query}`
    );
    const data = res.data.data;
    // console.log(data);
    return data;
  }
);

export const fetchSingleArticle = createAsyncThunk(
  "articles/fetchSingleArticle",
  async (id) => {
    const query = qs.stringify(
      {
        populate: {
          auther: {
            populate: {
              avatar: {
                fields: "url",
              },
            },
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
      `${import.meta.env.VITE_API_SERVER}/api/articles/${id}?${query}`
    );
    const data = res.data.data;
    console.log(data);
    return data;
  }
);

export const fetchAsideArticles = createAsyncThunk(
  "articles/fetchAsideArticles",
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
      `${import.meta.env.VITE_API_SERVER}/api/articles?${query}`
    );
    const data = res.data.data;
    return data.length <= 3 ? data : data.splice(0, 3);
  }
);

export const fetchSuggestedArticles = createAsyncThunk(
  "articles/fetchSuggestedArticles",
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
      `${import.meta.env.VITE_API_SERVER}/api/articles?${query}`
    );
    const data = res.data.data;
    return data.length <= limit ? data : data.splice(0, limit);
  }
);

const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    articles: [],
    asideArticles: [],
    suggestedArticles: [],
    singleArticle: null,
    status: "IDLE",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      // [ FETCH ALL RECIPES ]
      .addCase(fetchArticles.pending, (state) => handlePending(state))
      .addCase(fetchArticles.fulfilled, (state, action) =>
        handleFulfilled(state, action, "articles")
      )
      .addCase(fetchArticles.rejected, (state, action) =>
        handleRejected(state, action, "articles")
      )

      // [ FETCH SINGLE RECIPE ]
      .addCase(fetchSingleArticle.pending, (state) => handlePending(state))
      .addCase(fetchSingleArticle.fulfilled, (state, action) =>
        handleFulfilled(state, action, "singleArticle")
      )
      .addCase(fetchSingleArticle.rejected, (state, action) =>
        handleRejected(state, action, "singleArticle")
      )
      // [ FETCH ASIDE RECIPE ]
      .addCase(fetchAsideArticles.pending, (state) => handlePending(state))
      .addCase(fetchAsideArticles.fulfilled, (state, action) =>
        handleFulfilled(state, action, "asideArticles")
      )
      .addCase(fetchAsideArticles.rejected, (state, action) =>
        handleRejected(state, action, "asideArticles")
      )
      // [ FETCH SUGGESED RECIPES ]
      .addCase(fetchSuggestedArticles.pending, (state) => handlePending(state))
      .addCase(fetchSuggestedArticles.fulfilled, (state, action) =>
        handleFulfilled(state, action, "suggestedArticles")
      )
      .addCase(fetchSuggestedArticles.rejected, (state, action) =>
        handleRejected(state, action, "suggestedArticles")
      );
  },
});

export default articlesSlice.reducer;

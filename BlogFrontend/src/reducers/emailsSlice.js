import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const postEmail = createAsyncThunk(
  "emails/postEmail",
  async (email, { rejectWithValue }) => {
    try {
      const res = await axios.post("http://localhost:1337/api/emails", {
        data: { email },
      });
      const data = res.data.data;
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const emailsSlice = createSlice({
  name: "emails",
  initialState: {
    response: {},
    status: "IDLE",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(postEmail.pending, (state) => {
        state.response = {};
        state.status = "LOADING";
        state.error = null;
      })
      .addCase(postEmail.fulfilled, (state, action) => {
        state.response = action.payload;
        state.status = "SUCCESS";
        state.error = null;
      })
      .addCase(postEmail.rejected, (state, action) => {
        state.response = {};
        state.status = "FAILED";
        state.error = action.error;
      });
  },
});

export default emailsSlice.reducer;

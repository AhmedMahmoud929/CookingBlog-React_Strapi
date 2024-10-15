import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const postMessage = createAsyncThunk(
  "messages/postMessage",
  async ({ name, email, subject, enqType, message }, { rejectWithValue }) => {
    try {
      const res = await axios.post("http://localhost:1337/api/messages", {
        data: { name, email, subject, enqType, message },
      });
      const data = res.data.data;
      console.log(data);
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const messagesSlice = createSlice({
  name: "messages",
  initialState: {
    response: {},
    status: "IDLE",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(postMessage.pending, (state) => {
        state.response = {};
        state.status = "LOADING";
        state.error = null;
      })
      .addCase(postMessage.fulfilled, (state, action) => {
        state.response = action.payload;
        state.status = "SUCCESS";
        state.error = null;
      })
      .addCase(postMessage.rejected, (state, action) => {
        state.response = {};
        state.status = "FAILED";
        state.error = action.error;
      });
  },
});

export default messagesSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  comments: [],
  error: "",
};

const fetchComments = createAsyncThunk("comments/fetchComments", async () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.data)
    .catch((err) => err.message);
});

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchComments.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.loading = false;
      state.comments = action.payload;
      state.error = "";
    });
    builder.addCase(fetchComments.rejected, (state, action) => {
      state.loading = false;
      state.comments = [];
      state.error = action.error.message;
    });
  },
});

export default commentsSlice.reducer;
export { fetchComments };

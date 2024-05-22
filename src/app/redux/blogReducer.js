import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchBlogData = createAsyncThunk("api/blogPosts", () => {
  return fetch("/api/blogPosts")
    .then((res) => res.json())
    .then((data) => data);
});

const initialState = {
  loading: false,
  data: [],
  error: "",
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  // reducers: {
  //   setBlogData: (state, action) => {
  //     const newData = action.payload;
  //     state.data = newData;
  //   },
  // },

  extraReducers: (builder) => {
    builder.addCase(fetchBlogData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchBlogData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload
      state.error = ""
    });
    builder.addCase(fetchBlogData.rejected, (state, action) => {
      state.loading = false;
      state.data = []
      state.error = action.error.message
    });
  },
});

// export const blogActions = blogSlice.actions;

export default blogSlice.reducer;

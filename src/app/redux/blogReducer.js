import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchBlogData = createAsyncThunk("api/blogPosts", async (_, thunkAPI) => {
  try {
    const res = await fetch("/api/blogPosts");
    if (!res.ok) throw new Error(`Fetch failed with status ${res.status}`);
    return await res.json();
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
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

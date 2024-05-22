import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProjectsData = createAsyncThunk("/api/myProjects", () => {
  return fetch("/api/myProjects")
    .then((res) => res.json())
    .then((data) => data);
});

const initialState = {
  loading: false,
  data: [],
  error: "",
};

export const projectSlice = createSlice({
  name: "blog",
  initialState,
  // reducers: {
  //   setBlogData: (state, action) => {
  //     const newData = action.payload;
  //     state.data = newData;
  //   },
  // },

  extraReducers: (builder) => {
    builder.addCase(fetchProjectsData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProjectsData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload
      state.error = ""
    });
    builder.addCase(fetchProjectsData.rejected, (state, action) => {
      state.loading = false;
      state.data = []
      state.error = action.error.message
    });
  },
});

// export const blogActions = projectSlice.actions;

export default projectSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const blogSlice = createSlice({
  name: "blog",
  initialState: {
    data: [],
  },
  reducers: {
    getBlogData: (state, action) => {
      const newData = action.payload;
      state.data = newData;
    },
  },
});

export const { menuSlice } = blogSlice.actions

export default blogSlice.reducer

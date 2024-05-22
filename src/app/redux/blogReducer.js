import { createSlice } from "@reduxjs/toolkit";

import useFetch, { getAllBlogPosts } from "../hooks/useFetch";
const { isFetching, error, fetchedData } = getAllBlogPosts;


export const blogSlice = createSlice({
  name: "blog",
  initialState: {
    data: [],
  },
  reducers: {
    setBlogData: (state, action) => {
      const newData = action.payload;
      state.data = newData;
    },
  },
});

export const blogActions = blogSlice.actions

export default blogSlice.reducer

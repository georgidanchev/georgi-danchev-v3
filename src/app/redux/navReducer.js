import { createSlice } from "@reduxjs/toolkit"

export const navSlice = createSlice({
  name: "nav",
  initialState: {
    sectionInView: "",
    allSections: ["home", "about", "projects", "blog", "contact"],
    // allSections: ["home", "about", "contact"],
  },
  reducers: {
    setSectionInView: (state, action) => {
      state.sectionInView = action.payload
    },
    setCurrentSection: (state, action) => {
      state.sectionInView = action.payload
    },
  },
})

export const { setCurrentSection, setSectionInView } = navSlice.actions

export default navSlice.reducer

import { configureStore } from "@reduxjs/toolkit"
import navReducer from "./navReducer"
import menuReducer from "./menuReducer"
import blogReducer from "./blogReducer"

export default configureStore({
  reducer: {
    nav: navReducer,
    menu: menuReducer,
    blog: blogReducer
  },
})

import { configureStore } from "@reduxjs/toolkit"
import navReducer from "./navReducer"
import menuReducer from "./menuReducer"

export default configureStore({
  reducer: {
    nav: navReducer,
    menu: menuReducer,
  },
})

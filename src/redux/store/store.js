import { configureStore } from "@reduxjs/toolkit";
import repos from "../slices/repoSlice";

 const store = configureStore({
  reducer: {
    repos: repos,
  },
});

export default store;
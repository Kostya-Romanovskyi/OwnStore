import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import trendingMoviesSlice from "./TrendingMoviesSlice/TrendingMoviesSlice";

export default configureStore({
  reducer: {
    trendingMovies: trendingMoviesSlice,
  },
  middleware: [thunk],
});

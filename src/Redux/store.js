import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import popularMoviesSlice from "./Slices/PopularMoviesSlice";
import upcomingMoviesSlice from "./Slices/UpcomingMoviesSlice";

export default configureStore({
  reducer: {
    popularMovies: popularMoviesSlice,
    upcomingMovies: upcomingMoviesSlice,
  },
  middleware: [thunk],
});

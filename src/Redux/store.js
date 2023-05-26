import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import popularMoviesSlice from "./Slices/PopularMoviesSlice";
import upcomingMoviesSlice from "./Slices/UpcomingMoviesSlice";
import topRatedMoviesSlice from "./Slices/TopRatedMoviesSlice";
import trandingMoviesSlice from "./Slices/TrandingMoviesSlice";
import movieByIdSlice from "./Slices/MovieById";
import castByIdSlice from "./Slices/CastById";
import reviewsByIdSlice from "./Slices/ReviewsById";
import searchMoviesSlice from "./Slices/SearchMoviesSlice";
import genresSlice from "./Slices/GenresSlice";
import pathSlice from "./Slices/PathSlice";
import imagesSlice from "./Slices/ImagesSlice";
import videosSlice from "./Slices/VideosSlice";

export default configureStore({
  reducer: {
    popularMovies: popularMoviesSlice,
    upcomingMovies: upcomingMoviesSlice,
    topRatedMovies: topRatedMoviesSlice,
    trandingMovies: trandingMoviesSlice,
    movieById: movieByIdSlice,
    castById: castByIdSlice,
    reviewsById: reviewsByIdSlice,
    searchMovies: searchMoviesSlice,
    genres: genresSlice,
    location: pathSlice,
    images: imagesSlice,
    videos: videosSlice,
  },
  middleware: [thunk],
});

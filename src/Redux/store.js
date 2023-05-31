import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import authSlice from "./Slices/AuthSlice";
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
import nowPlaingSlice from "./Slices/NowPlaingSlice";
import moviesByGenreSlice from "./Slices/MoviesByGenreSlice";
import librarySlice from "./Slices/LibrarySlice";
import fireBaseLibrarySlice from "./Slices/FireBaseLibrarySlice";

export default configureStore({
  reducer: {
    auth: authSlice,
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
    nowPlaing: nowPlaingSlice,
    moviesByGenre: moviesByGenreSlice,
    library: librarySlice,
    fireBaseLibrary: fireBaseLibrarySlice,
  },
  middleware: [thunk],
});

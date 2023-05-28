import { createSlice } from "@reduxjs/toolkit";
import { getMovieByGenre } from "../../APIs/GetMoviesLists";

export const moviesByGenresSlice = createSlice({
  name: "nowPlaying",
  initialState: { moviesInfo: {}, loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMovieByGenre.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getMovieByGenre.fulfilled, (state, action) => {
      state.loading = false;
      state.moviesInfo = action.payload;
    });
    builder.addCase(getMovieByGenre.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default moviesByGenresSlice.reducer;

//Selectors
export const moviesByGenres = (state) => state.moviesByGenre.moviesInfo.results;
export const moviesByGenresFull = (state) => state.moviesByGenre.moviesInfo;

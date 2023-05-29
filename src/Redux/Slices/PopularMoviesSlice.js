import { createSlice } from "@reduxjs/toolkit";
import { getPopularMovies } from "../../APIs/GetMoviesLists";

export const popularMoviesSlice = createSlice({
  name: "popularMovies",
  initialState: { moviesInfo: {}, loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPopularMovies.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPopularMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.moviesInfo = action.payload;
    });
    builder.addCase(getPopularMovies.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default popularMoviesSlice.reducer;

//Selectors
export const popularMovies = (state) => state.popularMovies.moviesInfo.results;
export const popularMoviesFull = (state) => state.popularMovies.moviesInfo;
export const popularMoviesLoading = (state) => state.popularMovies.loading;

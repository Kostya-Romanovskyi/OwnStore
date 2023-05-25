import { createSlice } from "@reduxjs/toolkit";
import { getMoviesSearch } from "../../APIs/GetMoviesSearch";

export const searchMoviesSlice = createSlice({
  name: "searchMovies",
  initialState: { moviesInfo: {}, loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMoviesSearch.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getMoviesSearch.fulfilled, (state, action) => {
      state.loading = false;
      state.moviesInfo = action.payload;
    });
    builder.addCase(getMoviesSearch.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default searchMoviesSlice.reducer;

//Selectors
export const searchMovies = (state) => state.searchMovies.moviesInfo.results;
export const searchMoviesFull = (state) => state.searchMovies.moviesInfo;

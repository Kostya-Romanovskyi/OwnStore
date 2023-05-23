import { createSlice } from "@reduxjs/toolkit";
import { getTopRatedMovies } from "../../APIs/GetMoviesLists";

export const topRatedMoviesSlice = createSlice({
  name: "topRatedMovies",
  initialState: { moviesInfo: {}, loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTopRatedMovies.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTopRatedMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.moviesInfo = action.payload;
    });
    builder.addCase(getTopRatedMovies.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default topRatedMoviesSlice.reducer;

//Selectors
export const topRatedMovies = (state) =>
  state.topRatedMovies.moviesInfo.results;
export const topRatedMoviesFull = (state) => state.topRatedMovies.moviesInfo;

import { createSlice } from "@reduxjs/toolkit";
import { getUpcomingMovies } from "../../APIs/GetMoviesLists";

export const upcomingMoviesSlice = createSlice({
  name: "popularMovies",
  initialState: { moviesInfo: {}, loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUpcomingMovies.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUpcomingMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.moviesInfo = action.payload;
    });
    builder.addCase(getUpcomingMovies.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default upcomingMoviesSlice.reducer;

//Selectors
export const upcomingMovies = (state) =>
  state.upcomingMovies.moviesInfo.results;

export const upcomingMoviesFull = (state) => state.upcomingMovies.moviesInfo;

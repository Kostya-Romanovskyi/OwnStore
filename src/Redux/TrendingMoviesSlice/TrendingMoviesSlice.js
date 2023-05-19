import { createSlice } from "@reduxjs/toolkit";
import { getTrendingMovies } from "../../APIs/GetMoviesLists";

export const trendingMoviesSlice = createSlice({
  name: "trendingMovies",
  initialState: { moviesInfo: {}, loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTrendingMovies.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTrendingMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.moviesInfo = action.payload;
    });
    builder.addCase(getTrendingMovies.rejected, (state) => {
      state.loading = false;
    });
  },
});

// Action creators are generated for each case reducer function
// export const { getTrendingMovies } = trendingMoviesSlice.actions;

export default trendingMoviesSlice.reducer;

//Selectors
export const trendingMovies = (state) =>
  state.trendingMovies.moviesInfo.results;

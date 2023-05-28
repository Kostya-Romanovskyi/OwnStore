import { createSlice } from "@reduxjs/toolkit";
import { getNowPlaying } from "../../APIs/GetMoviesLists";

export const nowPlayingSlice = createSlice({
  name: "nowPlaying",
  initialState: { moviesInfo: {}, loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNowPlaying.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getNowPlaying.fulfilled, (state, action) => {
      state.loading = false;
      state.moviesInfo = action.payload;
    });
    builder.addCase(getNowPlaying.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default nowPlayingSlice.reducer;

//Selectors
export const nowPlaying = (state) => state.nowPlaing.moviesInfo.results;
export const nowPlayingFull = (state) => state.nowPlaing.moviesInfo;

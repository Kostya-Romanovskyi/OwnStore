import { createSlice } from "@reduxjs/toolkit";
import { getVideosById } from "../../APIs/GetById";

export const videosSlice = createSlice({
  name: "videos",
  initialState: { video: {}, loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getVideosById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getVideosById.fulfilled, (state, action) => {
      state.loading = false;
      state.video = action.payload;
    });
    builder.addCase(getVideosById.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default videosSlice.reducer;

//Selectors
export const videosTrailer = (state) => state.videos;

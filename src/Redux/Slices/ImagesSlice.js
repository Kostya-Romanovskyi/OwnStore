import { createSlice } from "@reduxjs/toolkit";
import { getImagesById } from "../../APIs/GetById";

export const imagesSlice = createSlice({
  name: "images",
  initialState: { images: {}, loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getImagesById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getImagesById.fulfilled, (state, action) => {
      state.loading = false;
      state.images = action.payload;
    });
    builder.addCase(getImagesById.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default imagesSlice.reducer;

//Selectors
export const imagesEl = (state) => state.images.images.backdrops;

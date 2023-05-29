import { createSlice } from "@reduxjs/toolkit";
import { getReviewsById } from "../../APIs/GetById";

export const reviewsByIdSlice = createSlice({
  name: "reviewsById",
  initialState: { movieInfo: {}, loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getReviewsById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getReviewsById.fulfilled, (state, action) => {
      state.loading = false;
      state.movieInfo = action.payload;
    });
    builder.addCase(getReviewsById.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default reviewsByIdSlice.reducer;

//Selectors
export const reviewsById = (state) => state.reviewsById.movieInfo;
export const reviewsByIdLoading = (state) => state.reviewsById.loading;

import { createSlice } from "@reduxjs/toolkit";
import { getMovieById } from "../../APIs/GetById";

export const movieByIdSlice = createSlice({
  name: "movieById",
  initialState: { movieInfo: {}, loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMovieById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getMovieById.fulfilled, (state, action) => {
      state.loading = false;
      state.movieInfo = action.payload;
    });
    builder.addCase(getMovieById.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default movieByIdSlice.reducer;

//Selectors
export const movieById = (state) => state.movieById.movieInfo;
export const movieByIdLoading = (state) => state.movieById.loading;

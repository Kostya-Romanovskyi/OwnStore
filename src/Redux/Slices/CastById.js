import { createSlice } from "@reduxjs/toolkit";
import { getCastById } from "../../APIs/GetById";

export const castByIdSlice = createSlice({
  name: "castById",
  initialState: { movieInfo: {}, loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCastById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCastById.fulfilled, (state, action) => {
      state.loading = false;
      state.movieInfo = action.payload;
    });
    builder.addCase(getCastById.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default castByIdSlice.reducer;

//Selectors
export const castById = (state) => state.castById.movieInfo;
export const castByIdLoading = (state) => state.castById.loading;

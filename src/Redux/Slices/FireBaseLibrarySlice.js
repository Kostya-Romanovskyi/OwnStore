import { createSlice } from "@reduxjs/toolkit";
import {
  fetchFirebaseData,
  addFirebaseData,
  deleteFirebaseData,
} from "../../APIs/LibraryAPI";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    isLoading: false,
    data: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFirebaseData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchFirebaseData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchFirebaseData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addFirebaseData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addFirebaseData.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(addFirebaseData.rejected, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
        state.error = action.error.message;
      })
      .addCase(deleteFirebaseData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteFirebaseData.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteFirebaseData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;

export const firebaseLibrary = (state) => state.fireBaseLibrary;

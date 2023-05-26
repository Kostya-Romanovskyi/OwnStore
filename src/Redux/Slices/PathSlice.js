import { createSlice } from "@reduxjs/toolkit";

export const pathSlice = createSlice({
  name: "location",
  initialState: {},
  reducers: {
    setPath: (state, action) => {
      state.path = action.payload;
    },
  },
});

export const { setPath } = pathSlice.actions;

export default pathSlice.reducer;

//selector
export const pathBack = (state) => state.location.path;

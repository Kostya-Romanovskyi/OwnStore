import { createSlice } from "@reduxjs/toolkit";
import { getGenres } from "../../APIs/GetMoviesLists";

export const genresSlice = createSlice({
  name: "genres",
  initialState: { genresList: {}, loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGenres.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getGenres.fulfilled, (state, action) => {
      state.loading = false;
      state.genresList = action.payload;
    });
    builder.addCase(getGenres.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default genresSlice.reducer;

//Selectors
export const genres = (state) => state.genres.genresList.genres;

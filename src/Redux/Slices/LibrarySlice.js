import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies, addMovie, deleteMovie } from "../../APIs/LibraryAPI";

const handlePending = (state) => {
  state.movies.isLoading = true;
};
const handleRejected = (state, action) => {
  state.movies.isLoading = false;
  state.movies.error = action.payload;
};

export const librarySlice = createSlice({
  name: "library",
  initialState: {
    movies: {
      library: [],
      isLoading: false,
      error: null,
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, handlePending)
      .addCase(addMovie.pending, handlePending)
      .addCase(deleteMovie.pending, handlePending)
      .addCase(fetchMovies.rejected, handleRejected)
      .addCase(addMovie.rejected, handleRejected)
      .addCase(deleteMovie.rejected, handleRejected)

      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies.isLoading = false;
        state.movies.error = null;
        state.movies.library = action.payload;
      })
      .addCase(addMovie.fulfilled, (state, action) => {
        state.movies.isLoading = false;
        state.movies.error = null;
        state.movies.library.push(action.payload);
      })
      .addCase(deleteMovie.fulfilled, (state, action) => {
        state.movies.isLoading = false;
        state.movies.error = null;

        const index = state.movies.library.findIndex(
          (movie) => movie.id === action.payload.id
        );

        state.movies.library.splice(index, 1);
      });
  },
});

export const { addInLibrary } = librarySlice.actions;

export default librarySlice.reducer;

// Selectors
export const libraryEl = (state) => state.library.movies;

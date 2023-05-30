import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://644800bd7bb84f5a3e4fa83c.mockapi.io";

export const fetchMovies = createAsyncThunk(
  "test-work/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/movies");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
//
export const addMovie = createAsyncThunk(
  "/test-work/addMovie",
  async (newMovie, thunkAPI) => {
    try {
      const response = await axios.post("/movies", newMovie);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteMovie = createAsyncThunk(
  "/movies/deleteMovie",
  async (movieId, thunkAPI) => {
    try {
      const response = await axios.delete(`/movies/${movieId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

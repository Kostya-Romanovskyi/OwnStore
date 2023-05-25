import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const MAIN_URL = "https://api.themoviedb.org";
const API_KEY = "f496025f6cb0adfa3f9f05b6edf25d52";

export const getMoviesSearch = createAsyncThunk(
  "moviesSearch",
  async (data) => {
    try {
      const response = await axios.get(
        `${MAIN_URL}/3/search/movie?api_key=${API_KEY}&language=en-US&page=${data.currentPage}&query=${data.query}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const MAIN_URL = "https://api.themoviedb.org";
const API_KEY = "f496025f6cb0adfa3f9f05b6edf25d52";

export const getPopularMovies = createAsyncThunk(
  "popularMovies",
  async (page = 1) => {
    try {
      const response = await axios.get(
        `${MAIN_URL}/3/movie/popular?api_key=${API_KEY}&page=${page}&language=en-US`
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const getUpcomingMovies = createAsyncThunk(
  "upcomingMovies",
  async (page = 1) => {
    try {
      const response = await axios.get(
        `${MAIN_URL}/3/movie/upcoming?api_key=${API_KEY}&page=${page}&language=en-US`
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const getTopRatedMovies = createAsyncThunk(
  "topRatedMovies",
  async (page = 1) => {
    try {
      const response = await axios.get(
        `${MAIN_URL}/3/movie/top_rated?api_key=${API_KEY}&page=${page}&language=en-US`
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const getTrandingMovies = createAsyncThunk(
  "trandingMovies",
  async (page = 1) => {
    try {
      const response = await axios.get(
        `${MAIN_URL}/3/trending/movie/day?api_key=${API_KEY}&page=${page}&language=en-US`
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const getGenres = createAsyncThunk("genres", async () => {
  try {
    const response = await axios.get(
      `${MAIN_URL}/3/genre/movie/list?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
});

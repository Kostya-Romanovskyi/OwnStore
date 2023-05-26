import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const MAIN_URL = "https://api.themoviedb.org";
const API_KEY = "f496025f6cb0adfa3f9f05b6edf25d52";

export const getMovieById = createAsyncThunk("movieById", async (id) => {
  try {
    const response = await axios.get(
      `${MAIN_URL}/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
});

export const getCastById = createAsyncThunk("castById", async (id) => {
  try {
    const response = await axios.get(
      `${MAIN_URL}/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
});

export const getReviewsById = createAsyncThunk("reviewsById", async (id) => {
  try {
    const response = await axios.get(
      `${MAIN_URL}/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
});

export const getImagesById = createAsyncThunk("imagesById", async (id) => {
  try {
    const response = await axios.get(
      `${MAIN_URL}/3/movie/${id}/images?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
});

export const getVideosById = createAsyncThunk("videosById", async (id) => {
  try {
    const response = await axios.get(
      `${MAIN_URL}/3/movie/${id}/videos?api_key=${API_KEY}`
    );

    const trailers = response.data.results.filter(
      (trailer) => trailer.type === "Trailer"
    );
    if (trailers.length > 0) {
      const officialTrailerKey = trailers[0].key;
      const officialTrailerUrl = `https://www.youtube.com/watch?v=${officialTrailerKey}`;
      return officialTrailerUrl;
    } else {
      return null; // No official trailer found
    }
  } catch (error) {
    console.error(error);
  }
});

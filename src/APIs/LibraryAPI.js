import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDatabase, ref, get, push, remove, child } from "firebase/database";
import { authInfo } from "../Redux/Slices/AuthSlice";
import { useSelector } from "react-redux";

axios.defaults.baseURL = "https://644800bd7bb84f5a3e4fa83c.mockapi.io";
// axios.defaults.baseURL = "https://owncinema-f9e30.firebaseio.com";

export const fetchMovies = createAsyncThunk(
  "movies/fetchAll",
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
  "/movies/addMovie",
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

export const fetchFirebaseData = createAsyncThunk(
  "data/fetchFirebaseData",
  async (uid) => {
    // Ваш код для получения данных из Firebase
    // Например, использование Firebase SDK для получения данных
    const db = getDatabase();
    const dataRef = ref(db, `/users/${uid}/movies`);
    const snapshot = await get(dataRef);
    const data = snapshot.val();
    if (data) {
      const dataArray = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      return dataArray;
    } else {
      return [];
    }
  }
);

export const addFirebaseData = createAsyncThunk(
  "data/addFirebaseData",
  async (obj) => {
    const db = getDatabase();
    const dataRef = ref(db, `/users/${obj.uid}/movies`);

    await push(dataRef, obj.movie);
  }
);

export const deleteFirebaseData = createAsyncThunk(
  "data/deleteFirebaseData",
  async (obj) => {
    const db = getDatabase();
    const dataRef = ref(db, `/users/${obj.uid}/movies/${obj.id}`);

    await remove(dataRef);
  }
);

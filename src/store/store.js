// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import heroReducer from "./slices/heroSlice";
import tournamentReducer from "./slices/tournamentSlice";

export const store = configureStore({
  reducer: {
    hero: heroReducer,
    tournament: tournamentReducer,
  },
});

export default store;

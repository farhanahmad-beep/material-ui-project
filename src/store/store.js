// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import heroReducer from "./slices/heroSlice";
import tournamentReducer from "./slices/tournamentSlice";
import testimonialReducer from "./slices/testimonialsSlice";

export const store = configureStore({
  reducer: {
    hero: heroReducer,
    tournament: tournamentReducer,
    testimonials: testimonialReducer

  },
});

export default store;

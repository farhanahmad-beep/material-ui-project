// src/store/slices/tournamentSlice.js
import { createSlice } from '@reduxjs/toolkit';
import {
  FlashOn,
  Extension,
} from "@mui/icons-material";

const initialState = {
  gameCategories: [
    {
      id: 3,
      title: "FPS Showdown",
      description:
        "Fast-paced first-person shooter tournaments with epic prize pools",
      image:
        "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=250&fit=crop",
      players: "15.8K",
      rating: 4.9,
      trending: true,
      icon: FlashOn,
      color: "#FF1744",
      gradient: "linear-gradient(135deg, #FF1744 0%, #FF5722 100%)",
    },
    {
      id: 4,
      title: "Strategy Zone",
      description:
        "Tactical gameplay that tests your strategic mind and decision making",
      image:
        "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=250&fit=crop",
      players: "6.1K",
      rating: 4.7,
      trending: false,
      icon: Extension,
      color: "#00E676",
      gradient: "linear-gradient(135deg, #00E676 0%, #00C853 100%)",
    },
  ],
};

export const tournamentSlice = createSlice({
  name: 'tournament',
  initialState,
  reducers: {
    setGameCategories: (state, action) => {
      state.gameCategories = action.payload;
    },
    addGameCategory: (state, action) => {
      state.gameCategories.push(action.payload);
    },
    updateGameCategory: (state, action) => {
      const { id, ...updates } = action.payload;
      const index = state.gameCategories.findIndex(category => category.id === id);
      if (index !== -1) {
        state.gameCategories[index] = { ...state.gameCategories[index], ...updates };
      }
    },
    removeGameCategory: (state, action) => {
      state.gameCategories = state.gameCategories.filter(
        category => category.id !== action.payload
      );
    },
  },
});

export const { setGameCategories, addGameCategory, updateGameCategory, removeGameCategory } = tournamentSlice.actions;

export default tournamentSlice.reducer;
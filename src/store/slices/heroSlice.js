// src/store/slices/heroSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  badge: "NEXT-GEN GAMING EXPERIENCE",
  title: {
    first: "DOMINATE",
    second: "THE ARENA"
  },
  description: "Join millions of elite gamers in the ultimate competitive gaming platform. Master your skills, climb the ranks, and claim your victory in the digital battleground.",
  buttons: {
    primary: {
      text: "Start Gaming Now",
      icon: "PlayArrow"
    },
    secondary: {
      text: "Join Community",
      icon: "Group"
    }
  },
  heroImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  floatingElements: [
    {
      id: 1,
      text: "+1000 XP",
      icon: "🎯",
      delay: 0,
      position: { top: '10%', right: '10%' }
    },
    {
      id: 2,
      text: "VICTORY!",
      icon: "🏆",
      delay: 1,
      position: { bottom: '20%', left: '10%' }
    },
    {
      id: 3,
      text: "KILL STREAK",
      icon: "⚡",
      delay: 2,
      position: { top: '30%', left: '5%' }
    }
  ],
  orbitingElements: [
    {
      id: 1,
      size: 32,
      color: "#00fff7",
      duration: 8,
      radius: 280,
      delay: 0
    },
    {
      id: 2,
      size: 24,
      color: "#ff0080",
      duration: 12,
      radius: 320,
      delay: 2
    },
    {
      id: 3,
      size: 20,
      color: "#8000ff",
      duration: 6,
      radius: 250,
      delay: 4
    }
  ],
  floatingCubes: [
    {
      id: 1,
      delay: 0,
      duration: 8,
      size: 100,
      position: { top: '15%', left: '5%' }
    },
    {
      id: 2,
      delay: 2,
      duration: 6,
      size: 80,
      position: { bottom: '30%', right: '15%' }
    },
    {
      id: 3,
      delay: 4,
      duration: 10,
      size: 60,
      position: { top: '10%', right: '30%' }
    },
    {
      id: 4,
      delay: 1,
      duration: 7,
      size: 40,
      position: { bottom: '20%', left: '15%' }
    }
  ],
  glowOrbs: [
    {
      id: 1,
      delay: 0,
      position: { top: '20%', left: '10%' },
      size: 150
    },
    {
      id: 2,
      delay: 2,
      position: { bottom: '40%', right: '20%' },
      size: 120
    },
    {
      id: 3,
      delay: 4,
      position: { top: '10%', right: '40%' },
      size: 100
    }
  ]
};

const heroSlice = createSlice({
  name: 'hero',
  initialState,
  reducers: {
    updateBadge: (state, action) => {
      state.badge = action.payload;
    },
    updateTitle: (state, action) => {
      state.title = { ...state.title, ...action.payload };
    },
    updateDescription: (state, action) => {
      state.description = action.payload;
    },
    updateButtons: (state, action) => {
      state.buttons = { ...state.buttons, ...action.payload };
    },
    updateHeroImage: (state, action) => {
      state.heroImage = action.payload;
    },
    updateFloatingElements: (state, action) => {
      state.floatingElements = action.payload;
    },
    updateOrbitingElements: (state, action) => {
      state.orbitingElements = action.payload;
    },
    updateFloatingCubes: (state, action) => {
      state.floatingCubes = action.payload;
    },
    updateGlowOrbs: (state, action) => {
      state.glowOrbs = action.payload;
    }
  },
});

export const {
  updateBadge,
  updateTitle,
  updateDescription,
  updateButtons,
  updateHeroImage,
  updateFloatingElements,
  updateOrbitingElements,
  updateFloatingCubes,
  updateGlowOrbs
} = heroSlice.actions;

export default heroSlice.reducer;
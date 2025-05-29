// src/store/slices/testimonialSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  testimonials: [
    {
      id: 1,
      name: "Alex Rodriguez",
      role: "Professional Esports Player",
    //   avatar: "https://i.pravatar.cc/150?img=1",
      rating: 5,
      text: "Nexus Gaming revolutionized my competitive gaming experience. The ultra-low latency and crystal-clear graphics give me the edge I need to dominate tournaments worldwide.",
      game: "Valorant Pro",
      bgColor: "#ff6b35",
      accent: "#06b6d4"
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Streaming Content Creator",
    //   avatar: "https://i.pravatar.cc/150?img=2",
      rating: 5,
      text: "Streaming has never been this smooth! Nexus Gaming's cloud infrastructure ensures my audience gets the highest quality content without any technical hiccups.",
      game: "Just Chatting",
      bgColor: "#8b5cf6",
      accent: "#f59e0b"
    },
    {
      id: 3,
      name: "Marcus Johnson",
      role: "Competitive Gamer",
    //   avatar: "https://i.pravatar.cc/150?img=3",
      rating: 5,
      text: "From casual gaming sessions to intense ranked matches, Nexus Gaming delivers consistent performance that keeps me ahead of the competition every single time.",
      game: "League of Legends",
      bgColor: "#00ff88",
      accent: "#ff6b35"
    },
    {
      id: 4,
      name: "Emma Thompson",
      role: "Game Developer",
      avatar: "https://i.pravatar.cc/150?img=4",
      rating: 5,
      text: "Testing our indie games on Nexus Gaming provides incredible performance insights. The platform's optimization tools help us deliver the best gaming experience possible.",
      game: "Indie Games",
      bgColor: "#06b6d4",
      accent: "#f59e0b"
    },
    {
      id: 5,
      name: "David Kim",
      role: "Tournament Organizer",
      avatar: "https://i.pravatar.cc/150?img=5",
      rating: 5,
      text: "Organizing major esports events requires reliable infrastructure. Nexus Gaming's enterprise solutions have made our tournaments flawless and memorable for all participants.",
      game: "Tournament Management",
      bgColor: "#f59e0b",
      accent: "#8b5cf6"
    },
    {
      id: 6,
      name: "Lisa Wang",
      role: "Gaming Influencer",
      avatar: "https://i.pravatar.cc/150?img=6",
      rating: 5,
      text: "My gaming content creation workflow is seamless with Nexus Gaming. The platform's recording and streaming features help me produce professional-quality videos effortlessly.",
      game: "Content Creation",
      bgColor: "#ff6b35",
      accent: "#00ff88"
    }
  ],
  currentIndex: 0,
  isAutoPlaying: true,
  autoPlayInterval: 5000,
  loading: false,
  error: null
};

const testimonialSlice = createSlice({
  name: "testimonials",
  initialState,
  reducers: {
    setCurrentIndex: (state, action) => {
      state.currentIndex = action.payload;
    },
    nextTestimonial: (state) => {
      state.currentIndex = (state.currentIndex + 1) % state.testimonials.length;
    },
    previousTestimonial: (state) => {
      state.currentIndex = state.currentIndex === 0 
        ? state.testimonials.length - 1 
        : state.currentIndex - 1;
    },
    toggleAutoPlay: (state) => {
      state.isAutoPlaying = !state.isAutoPlaying;
    },
    setAutoPlay: (state, action) => {
      state.isAutoPlaying = action.payload;
    },
    setAutoPlayInterval: (state, action) => {
      state.autoPlayInterval = action.payload;
    },
    addTestimonial: (state, action) => {
      state.testimonials.push({
        ...action.payload,
        id: Math.max(...state.testimonials.map(t => t.id)) + 1
      });
    },
    updateTestimonial: (state, action) => {
      const { id, updates } = action.payload;
      const testimonialIndex = state.testimonials.findIndex(t => t.id === id);
      if (testimonialIndex !== -1) {
        state.testimonials[testimonialIndex] = {
          ...state.testimonials[testimonialIndex],
          ...updates
        };
      }
    },
    removeTestimonial: (state, action) => {
      state.testimonials = state.testimonials.filter(t => t.id !== action.payload);
      // Adjust current index if necessary
      if (state.currentIndex >= state.testimonials.length) {
        state.currentIndex = Math.max(0, state.testimonials.length - 1);
      }
    },
    setTestimonials: (state, action) => {
      state.testimonials = action.payload;
      state.currentIndex = 0;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    clearError: (state) => {
      state.error = null;
    },
    resetToInitialState: (state) => {
      return initialState;
    }
  }
});

// Action creators
export const {
  setCurrentIndex,
  nextTestimonial,
  previousTestimonial,
  toggleAutoPlay,
  setAutoPlay,
  setAutoPlayInterval,
  addTestimonial,
  updateTestimonial,
  removeTestimonial,
  setTestimonials,
  setLoading,
  setError,
  clearError,
  resetToInitialState
} = testimonialSlice.actions;

// Selectors
export const selectTestimonials = (state) => state.testimonials.testimonials;
export const selectCurrentIndex = (state) => state.testimonials.currentIndex;
export const selectCurrentTestimonial = (state) => 
  state.testimonials.testimonials[state.testimonials.currentIndex];
export const selectIsAutoPlaying = (state) => state.testimonials.isAutoPlaying;
export const selectAutoPlayInterval = (state) => state.testimonials.autoPlayInterval;
export const selectTestimonialsLoading = (state) => state.testimonials.loading;
export const selectTestimonialsError = (state) => state.testimonials.error;
export const selectTestimonialById = (state, id) => 
  state.testimonials.testimonials.find(t => t.id === id);
export const selectTestimonialsCount = (state) => state.testimonials.testimonials.length;

// Async thunk actions for future API integration
export const fetchTestimonials = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    dispatch(clearError());
    
    // Simulate API call - replace with actual API endpoint
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const createTestimonial = (testimonialData) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    dispatch(clearError());
    
    // Simulate API call - replace with actual API endpoint
    await new Promise(resolve => setTimeout(resolve, 500));
    

    
    dispatch(addTestimonial(testimonialData));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const editTestimonial = (id, updates) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    dispatch(clearError());
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    dispatch(updateTestimonial({ id, updates }));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(error.message));
  }
};


export const deleteTestimonial = (id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    dispatch(clearError());
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    dispatch(removeTestimonial(id));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export default testimonialSlice.reducer;
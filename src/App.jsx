// src/App.jsx
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TournamentBrackets from './components/TournamentBrackets';
import Testimonials from './components/NexusGamingTestimonials';
import Footer from './components/NexusFooter';

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <HeroSection />
      <TournamentBrackets />
      <Testimonials />
      <Footer />
    </Provider>
  );
}

export default App;
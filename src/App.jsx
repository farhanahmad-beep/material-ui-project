import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TournamentBrackets from './components/TournamentBrackets';
import Testimonials from './components/NexusGamingTestimonials';
import Footer from './components/NexusFooter';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TournamentBrackets />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;

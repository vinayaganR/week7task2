import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import DestinationsSection from './DestinationsSection';
import ContactForm from './ContactForm';
import Footer from './Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <DestinationsSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;

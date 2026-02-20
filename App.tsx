
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background-dark text-white selection:bg-primary selection:text-white">
      <Header scrolled={scrolled} />
      
      <main className="flex-grow pt-24">
        <Hero />
        
        <div id="categories">
          <Categories />
        </div>

        <div id="gallery">
          <Gallery />
        </div>

        <Testimonials />
        
        <div id="contact">
          <Newsletter />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;

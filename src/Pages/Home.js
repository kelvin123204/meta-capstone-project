import React from "react";
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Hero from '../components/hero/Hero';
import Testimonials from '../components/Testimonials/Testimonials';
import About from '../components/about/About';

const Home = () => {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Hero />
        <Testimonials />
        <About />
      </main>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
};

export default Home;

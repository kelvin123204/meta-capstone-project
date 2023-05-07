import React from "react";
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import Hero from '../Components/Hero/Hero';
import Testimonials from '../Components/Testimonials/Testimonials';
import About from '../Components/About/About';

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

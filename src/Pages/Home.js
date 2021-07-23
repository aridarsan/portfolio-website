import React from 'react';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Portfolio from '../Components/Portfolio';

const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <About />
      <Portfolio/>
    </React.Fragment>
  );
};

export default Home;

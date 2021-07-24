import React from 'react';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Services from '../Components/Services';
import Portfolio from '../Components/Portfolio';
import Hire from '../Components/Hire';

const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <About />
      <Services/>
      <Portfolio/>
      <Hire/>
    </React.Fragment>
  );
};

export default Home;

import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import LandingSection from '../LandingSection';
import Footer from '../Footer';
import NavBar from '../Navbar';
import { Link } from 'react-scroll';

function Home() {
  return (
    <>
      <LandingSection />
      {/* <Navbar /> */}
      <Cards />
      <Footer />
    </>
  );
}

export default Home;

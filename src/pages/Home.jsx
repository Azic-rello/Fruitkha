import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Products from "../components/Products";
import OurNews from "../components/OurNews";
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <div>
      <Hero />
      <Card />
      <Products />
      <OurNews />
      <Carousel />
      <Footer />
    </div>
  );
};

export default Home;

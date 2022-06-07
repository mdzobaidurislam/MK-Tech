import React from "react";
import Review from "../Review/Review";
import Aviable from "./Aviable";
import Banner from "./Banner";
import Counter from "./Counter";
import Formates from "./Formates";
import "./Home.css";
const Home = () => {
  return (
    <>
      <Banner />
      <Aviable />
      <Formates />
      <Counter />
      <Review />
    </>
  );
};

export default Home;

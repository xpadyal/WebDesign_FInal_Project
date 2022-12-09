import React from "react";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Navbar from "../Navbar/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;

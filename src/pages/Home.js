import React from "react";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Charas from "../components/Charas";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
    <div className="bg-dark" style={{paddingBottom : 70 }}>
    <Navigation />
    <Header />
    <Charas />
    <Footer />
    </div>
    </>
  );
};

export default Home;

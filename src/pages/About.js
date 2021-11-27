import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const About = () =>
{
    return(
        <>
            <div style={{paddingBottom : 70 }}>
                <Navigation />
                <header className="bg-dark py-5">
      <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
          <h1 className="display-4 fw-bolder">Rick and Morty</h1>
          <p className="lead fw-normal text-white-50 mb-0">
            Get to know all character from Rick and Morty
          </p>
        </div>
      </div>
    </header>
            <div className="container mt-4">
                
                <h1>About Page</h1>
            <p>Made with love and sweat :v</p>
            </div>
            <Footer />
            </div>
        </>
    );
}

export default About;
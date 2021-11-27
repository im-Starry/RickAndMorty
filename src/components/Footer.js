import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-5 bg-light fixed-bottom">
      <div className="container">
        <div className="m-0 text-center text-dark">
          <Link className="fab fa-github me-3" to="https://github.com/im-Starry/RickAndMorty"> </Link>
          <Link className="fab fa-instagram" to="https://github.com/im-Starry/RickAndMorty"> </Link>
        </div>
        
        <div className="m-0 text-center text-dark">
          Copyright &copy; 2021, Rick And Morty by Grfiin Mumu
        </div>
      </div>
    </footer>
  );
};

export default Footer;

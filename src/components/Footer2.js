import React from "react";
import { Link } from "react-router-dom";

const Footer2 = () => {
  return (
    <footer className="py-5 mt-5 bg-dark fixed-bottom">
      <div className="container">
        <div className="m-0 text-center text-light">
          <Link className="fab fa-github me-3" to="https://github.com/im-Starry/RickAndMorty"> </Link>
          <Link className="fab fa-instagram" to="https://github.com/im-Starry/RickAndMorty"> </Link>
        </div>
        
        <div className="m-0 text-center text-light">
          Copyright &copy; 2021, Rick And Morty by Grfiin 
        </div>
      </div>
    </footer>
  );
};

export default Footer2;

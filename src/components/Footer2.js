import React from "react";
import { Link } from "react-router-dom";

const Footer2 = () => {
  return (
    <div className="py-5">
      <footer className="pt-5 pb-5 mt-5 bg-dark fixed-bottom">
      <div className="container">
        <div className="m-0 text-center text-light mb-3">
          <a className="fab fa-github text-secondary mx-4 fs-2 " href="https://github.com/im-Starry/RickAndMorty" target ="_blank"> </a>
          <a className="fab fa-instagram text-secondary mx-4 fs-2" href="https://www.instagram.com/im_grifff/" target ="_blank"> </a>
          <a className="fab fa-facebook text-secondary mx-4 fs-2" href="https://www.facebook.com/griffin.mumu.3" target ="_blank"> </a>
        </div>
        
        <div className="m-0 text-center text-secondary">
          Copyright &copy; 2021
          <i class="fas fa-code text-secondary d-block"> Code by : Grfiin Mumu</i> 
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer2;

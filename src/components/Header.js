import React from "react";

const Header = () => {
  return (
    <header className="bg-light py-5">
      <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-dark">
          <h1 className="display-4 fw-bolder">Rick and Morty</h1>
          <p className="lead fw-normal text-dark-50 mb-0">
            Get to know all character from Rick and Morty
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;

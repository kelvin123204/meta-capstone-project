import React from "react";
import img from "../../asset/restauranfood.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="left-container">
          <h1 className="title">Little Lemon</h1>
          <h3 className="location">Chicago</h3>
          <p className="desc">
            Ullamco deserunt amet esse irure officia id dolore qui fugiat
            exercitation nulla consequat elit consequat. Proident exercitation
            fugiat Lorem veniam fugiat pariatur nisi veniam sint.
          </p>
          <button className="button">Reserve a Table</button>
        </div>
        <img className="img" src={img} alt="resturant food" />
      </div>
    </React.Fragment>
  );
};

export default Hero;

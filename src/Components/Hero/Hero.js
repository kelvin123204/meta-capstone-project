import React from "react";
import img from "../../asset/restauranfood.jpg";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <React.Fragment>
      <div className={classes.container}>
        <div className={classes.leftContainer}>
          <h1 className={classes.title}>Little Lemon</h1>
          <h3 className={classes.location}>Chicago</h3>
          <p className={classes.desc}>
            Ullamco deserunt amet esse irure officia id dolore qui fugiat
            exercitation nulla consequat elit consequat. Proident exercitation
            fugiat Lorem veniam fugiat pariatur nisi veniam sint.
          </p>
          <button className={classes.button}>Reserve a Table</button>
        </div>
        <img className={classes.img} src={img} alt="resturant food" />
      </div>
    </React.Fragment>
  );
};

export default Hero;

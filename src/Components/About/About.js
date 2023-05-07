import React from "react";
import img1 from "../../asset/Mario and Adrian A.jpg";
import img2 from "../../asset/Mario and Adrian b.jpg";
import classes from "./About.module.css";

const About = () => {
  return (
    <div style={{ border: "10px solid red" }}>
      <h1>Little Lemon</h1>
      <h3>Chicago</h3>
      <p>
        Non commodo elit reprehenderit ullamco incididunt. Mollit laborum sit
        nisi elit veniam adipisicing culpa ea esse nostrud non officia Lorem
        fugiat. Ut culpa aliquip ullamco sunt nostrud enim non excepteur
        voluptate consequat incididunt fugiat. Ullamco consequat quis irure
        velit deserunt.Quis et exercitation nisi do laborum adipisicing amet
        ullamco. Ullamco incididunt enim aliqua tempor.
      </p>
      <div>
        <img src={img1} alt="" className={classes.img} />
        <img src={img2} alt="" className={classes.img} />
      </div>
    </div>
  );
};

export default About;

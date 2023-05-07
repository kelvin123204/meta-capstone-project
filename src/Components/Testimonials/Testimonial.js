import Rating from "./Rating";
import classes from "./Testimonial.module.css";

const Testimonial = (props) => {
  return (
    <div className={classes.container}>
      <Rating score={props.score.toFixed(1)} cap={5} />
      <div className={classes.imgName}>
        <img className={classes.img} src={props.imgSrc} />
        <p>{props.name}</p>
      </div>
      <p>{props.reviewText}</p>
    </div>
  );
};

export default Testimonial;

import Testimonial from "./Testimonial";

const data = [
  {
    id: 1,
    score: 4.3,
    name: "Ken",
    reviewTextText:
      "Commodo culpa labore velit eiusmod. Magna aute culpa amet aute aliqua ex minim.",
    imgSrc:
      "https://ik.imagekit.io/zenius/Coursera/html-css/little-lemon-testimonial-1_hP5ojsceu.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675153905015",
  },
  {
    id: 2,
    score: 4.72,
    name: "Mary",
    reviewText:
      "Enim exercitation ad cupidatat eu minim enim sit tempor adipisicing velit amet mollit esse.",
    imgSrc:
      "https://ik.imagekit.io/zenius/Coursera/html-css/little-lemon-testimonial-2_2HL7LRpbth.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675153905011",
  },
  {
    id: 3,
    score: 4.8,
    name: "Judy",
    reviewText:
      "Reprehenderit deserunt qui elit culpa do elit aute. Incididunt id dolore esse tempor magna.",
    imgSrc:
      "https://ik.imagekit.io/zenius/Coursera/html-css/little-lemon-testimonial-3_vBcNR58S4.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675153904991",
  },
  {
    id: 4,
    score: 5,
    name: "James",
    reviewText:
      "Deserunt reprehenderit minim veniam irure. Cillum occaecat laboris qui in.",
    imgSrc:
      "https://ik.imagekit.io/zenius/Coursera/html-css/little-lemon-testimonial-4_AB23rmZoI.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675153905002",
  },
];

const Testimonials = () => {
  return (
    <div style={{ border: "10px solid black" }}>
      {data.map((d) => (
        <Testimonial keys={d.id} {...d} />
      ))}
    </div>
  );
};

export default Testimonials;

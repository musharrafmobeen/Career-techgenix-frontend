import React from "react";
import "../styles/aboutus.css";

const AboutUs = () => {
  return (
    <div className="aboutus-container" id="aboutUs">
      <div className="aboutus-heading">
        <h2>About Us</h2>
      </div>
      <figure className="aboutus-figure">
        <img className="aboutus-img" src="aboutus.jpg" alt="" />
      </figure>
      <figcaption className="aboutus-text">
        <p>
          TechGenix is a cutting-edge software technology firm that prides
          itself in its ability to attract and retain top talent and solve
          complex problems. Led by Silicon Valley veterans, the leadership team
          has 75+ years of cumulative global experience in technology
          development, product design and leadership. Founded in 2011, the
          company has realized 100% YOY growth and is now home to 150
          world-class engineers and designers. Techgenix started with a focus on
          building products and later diversified to offering software services
          to customers. This blend has created a unique DNA that puts equal
          emphasis on product design, user experience and solid engineering.
        </p>
      </figcaption>
    </div>
  );
};

export default AboutUs;

import React, { useState } from "react";

const Card = ({ heading, paragraph, image, background, btcolor }) => {
  const [color, setColor] = useState({
    color: btcolor,
    border: "2px solid white",
  });
  return (
    <div className="card" style={{ backgroundColor: `${background}` }}>
      <img src={image} alt={image} />
      <h1 className="heading">{heading}</h1>
      <p className="para">{paragraph}</p>
      <button
        style={color}
        onMouseEnter={() => {
          setColor({
            color: "white",
            backgroundColor: "transparent",
            border: "2px solid white",
          });
        }}
        onMouseLeave={() => {
          setColor({ color: btcolor, border: "2px solid white" });
        }}
      >
        Learn More
      </button>
    </div>
  );
};

export default Card;

import React from 'react'

const Card = ({heading, paragraph, image, background, btcolor}) => {
  return (
      <div style={{padding: "20px", backgroundColor: `${background}`}}>
        <img src={image} alt={image} />
        <h1>{heading}</h1>
        <p>{paragraph}</p>
        <button style={{color: `${btcolor}`}}>Learn More</button>
      </div>
  )
}

export default Card
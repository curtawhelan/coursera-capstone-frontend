import React from "react"
import "./style/hero.css"

function Hero() {
  return (
    <div>
      <div className="green-background" style={{ paddingBottom: 50 }}>
        <div>
          <div className="title-and-location">
            <h1 className="display-title">Little Lemon</h1>
            <h2 className="sub-title">Chicago</h2>
          </div>
          <p className="hero-description">
            We are a family owned Mediterranean restaurant, focused on
            traditional reciptes served with a modern twist.
          </p>
          <div className="reserve-container">
            <h6 className="reserve-button">Reserve A Table</h6>
          </div>
        </div>
        <div>
          <img
            src="icons_assets/restauranfood.jpg"
            alt="man holding food"
            width={300}
            height={400}
          />
        </div>
      </div>
    </div>
  )
}

export default Hero

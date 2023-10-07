import React from "react"
import "./style/specials.css"

// THIS COMPONENT NEEDS TO HAVE A DIFFERENT CSS SET UP
// There is coupling between the styles of elements
// example: The description of the special items is shown as white
// when you try to change it to black, other text elements also become black

function Specials() {
  return (
    <div>
      <div className="row-wrapper">
        <div className="column-wrapper">
          <h1 className="display-title">This weeks specials!</h1>
        </div>
        <div className="column-wrapper">
          <h6 className="online-order-button">Online Order</h6>
        </div>
      </div>
      <div className="row-wrapper" style={{ margin: 50 }}>
        <div className="column-wrapper">
          <img
            src="icons_assets/greek salad.jpg"
            alt="close up of a greek salad"
            width={265}
            height={185}
          />
          <h4>Greek Salad</h4>
          <p>
            The famous greek salad of crispy lettuce, peppers, olives and our
            Chicago style feta cheese, garnished with crunchy garlic and
            rosemary croutons.{" "}
          </p>
        </div>
        <div className="column-wrapper">
          <img
            src="icons_assets/lemon dessert.jpg"
            alt="fully lemon dessert"
            width={265}
            height={185}
          />
          <h4>Lemon Dessert</h4>
          <p>
            This comes straight from grandma's recipe book, every last
            ingredient has been sourced and is as authentic as can be imagined.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Specials

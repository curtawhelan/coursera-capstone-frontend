import React from "react"
import "./style/reviews.css"

function CustomerReviews() {
  return (
    <div className="testimonial-background">
      <div className="row-wrapper">
        <div className="column-wrapper">
          <h1 className="display-title">Testimonials</h1>
        </div>
      </div>
      <div className="row-wrapper">
        <div className="column-wrapper" id="card-background">
          <img src="logo192.png" alt="man" width={100} height={100}></img>
          <p>Reviewer's Name</p>
          <p>Rating</p>
          <p>Review</p>
        </div>
        <div className="column-wrapper" id="card-background">
          <img src="logo192.png" alt="man" width={100} height={100}></img>
          <p>Reviewer's Name</p>
          <p>Rating</p>
          <p>Review</p>
        </div>
        <div className="column-wrapper" id="card-background">
          <img src="logo192.png" alt="man" width={100} height={100}></img>
          <p>Reviewer's Name</p>
          <p>Rating</p>
          <p>Review</p>
        </div>
        <div className="column-wrapper" id="card-background">
          <img src="logo192.png" alt="man" width={100} height={100}></img>
          <p>Reviewer's Name</p>
          <p>Rating</p>
          <p>Review</p>
        </div>
      </div>
    </div>
  )
}

export default CustomerReviews

import React from "react"
import CustomerReviews from "./CustomerReviews"
import Hero from "./Hero"
import Specials from "./Specials"
import "./style/homepage.css"

function Homepage() {
  return (
    <div>
      <Hero />
      <Specials />
      <CustomerReviews />
    </div>
  )
}

export default Homepage

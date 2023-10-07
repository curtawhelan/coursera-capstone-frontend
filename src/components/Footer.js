import React from "react"
import "./style/footer.css"

export default function Footer() {
  return (
    <footer className="row-wrapper">
      <div className="column-wrapper">
        <img
          src="/icons_assets/little-lemon-TALL.png"
          alt="little lemon logo"
          id="footer-logo"
        />
      </div>
      <div className="column-wrapper">
        <div className="footer-nav">
          <h3 className="paragraph-text">Navigation</h3>
          <div className="highlight-text">
            <p>Home</p>
            <p>About</p>
            <p>Menu</p>
            <p>Reservations</p>
            <p>Order Online</p>
            <p>Login</p>
          </div>
        </div>
      </div>
      <div className="column-wrapper">
        <div className="footer-nav">
          <h3 className="paragraph-text">Contact</h3>
          <div className="highlight-text">
            <p>Address</p>
            <p>Phone Number</p>
            <p>Email</p>
          </div>
        </div>
      </div>
      <div className="column-wrapper">
        <div className="footer-nav">
          <h3 className="paragraph-text">Social Media</h3>
          <div className="highlight-text">
            <p>Instagram</p>
            <p>Facebook</p>
            <p>TikTok</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

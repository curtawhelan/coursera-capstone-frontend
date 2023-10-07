import React from "react"
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Switch,
} from "react-router-dom"
import About from "./About"
import Homepage from "./Homepage"
import Menu from "./Menu"
import Reservations from "./Reservations"
import "./style/main.css"

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/reservations" element={<Reservations />}></Route>
      </Routes>
    </main>
  )
}

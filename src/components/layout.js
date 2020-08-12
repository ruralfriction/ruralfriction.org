import React from "react"
import { Link } from "gatsby"
import layoutStyles from "./layout.module.css"

export default function Layout({ children }) {
  return (
    <div>
      <nav className={layoutStyles.nav}>
        <Link to="/">
          <img src={"rural-friction-logo.svg"} alt="logo" />
        </Link>
        <Link to="/about">About</Link>
        <Link to="/events">Events</Link>
      </nav>
      <main>{children}</main>
    </div>
  )
}

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
      </nav>
      <main className={layoutStyles.main}>{children}</main>
    </div>
  )
}

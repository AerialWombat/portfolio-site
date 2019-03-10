import React from "react"
import styles from "./header.module.scss"

const Header = () => {
  return (
    <header className={styles.container}>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">PROJECTS</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

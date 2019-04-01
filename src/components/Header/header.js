import React from "react"
import styles from "./header.module.scss"
import { Link } from "react-scroll"

const Header = () => {
  return (
    <header className={styles.container}>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link to="about" spy={true} smooth={true} offset={0} duration={500}>
              ABOUT
            </Link>{" "}
          </li>
          <li>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              PROJECTS
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

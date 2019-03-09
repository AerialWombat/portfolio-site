import React from "react"
import Header from "../Header/header"

import styles from "./hero.module.scss"

const Hero = () => {
  return (
    <section className={styles.container}>
      <Header />
      <div className={styles.heroContent}>
        <h1 className={styles.title}>
          <span className={styles.firstLetter}>A</span>DRIAN{" "}
          <span className={styles.firstLetter}>Z</span>HAN
        </h1>
        <h2 className={styles.subtitle}>WEB DEVELOPER</h2>
        <a
          className={styles.resumeButton}
          target="#"
          href="https://drive.google.com/open?id=1fdRQ7NwkWkTfbtKXEURG8gXG7hbC8Bhp"
          rel="noopener noreferrer"
        >
          RESUME
        </a>
      </div>
    </section>
  )
}

export default Hero

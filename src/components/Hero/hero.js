import React from "react"
import Header from "../Header/header"
import {
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaGithub,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa"
import { IconContext } from "react-icons"

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
      <div className={styles.contactInfo}>
        <ul>
          <li>
            <a href="https://www.google.com/maps?hl=en&q=richmond,+va">
              <IconContext.Provider value={{ size: "1.5em" }}>
                <div>
                  <FaMapMarkerAlt />
                </div>
              </IconContext.Provider>
              <span className={styles.contactLabel}>Richmond, VA</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/AerialWombat">
              <IconContext.Provider value={{ size: "1.5em" }}>
                <div>
                  <FaGithub />
                </div>
              </IconContext.Provider>
              <span className={styles.contactLabel}>AerialWombat</span>
            </a>
          </li>
          <li>
            <a href="tel:5402731369">
              <IconContext.Provider value={{ size: "1.5em" }}>
                <div>
                  <FaPhone />
                </div>
              </IconContext.Provider>
              <span className={styles.contactLabel}>+1 (540) 273-1369</span>
            </a>
          </li>
          <li>
            <a href="mailto:adrianzhan@gmail.com">
              <IconContext.Provider value={{ size: "1.5em" }}>
                <div>
                  <FaEnvelope />
                </div>
              </IconContext.Provider>
              <span className={styles.contactLabel}>adrianzhan@gmail.com</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Hero

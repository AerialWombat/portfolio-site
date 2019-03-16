import React from "react"
import {
  FaHtml5,
  FaCss3Alt,
  FaGit,
  FaJsSquare,
  FaReact,
  FaSass,
  FaNpm,
} from "react-icons/fa"
import { IconContext } from "react-icons"

import styles from "./about.module.scss"

const iconSize = "2.5em"

const About = () => {
  return (
    <section className={styles.container}>
      <article>
        <h1 className={styles.header}>ABOUT ME</h1>
        <p>
          Now that there is the Tec-9, a crappy spray gun from South Miami. This
          gun is advertised as the most popular gun in American crime. Do you
          believe that shit? It actually says that in the little book that comes
          with it: the most popular gun in American crime. Like they're actually
          proud of that shit.
        </p>
      </article>
      <article>
        <h1 className={styles.header}>SKILLS</h1>

        <div className={styles.skillIcons}>
          <div className={styles.icon}>
            <IconContext.Provider value={{ size: iconSize }}>
              <FaHtml5 />
              <span>HTML5</span>
            </IconContext.Provider>
          </div>

          <div className={styles.icon}>
            <IconContext.Provider value={{ size: iconSize }}>
              <FaCss3Alt />
              <span>CSS3</span>
            </IconContext.Provider>
          </div>

          <div className={styles.icon}>
            <IconContext.Provider value={{ size: iconSize }}>
              <FaJsSquare />
              <span>Javascript</span>
            </IconContext.Provider>
          </div>

          <div className={styles.icon}>
            <IconContext.Provider value={{ size: iconSize }}>
              <FaReact />
              <span>React</span>
            </IconContext.Provider>
          </div>

          <div className={styles.icon}>
            <IconContext.Provider value={{ size: iconSize }}>
              <FaSass />
              <span>SASS/SCSS</span>
            </IconContext.Provider>
          </div>

          <div className={styles.icon}>
            <IconContext.Provider value={{ size: iconSize }}>
              <FaGit />
              <span>Git</span>
            </IconContext.Provider>
          </div>

          <div className={styles.icon}>
            <IconContext.Provider value={{ size: iconSize }}>
              <FaNpm />
              <span>npm</span>
            </IconContext.Provider>
          </div>
        </div>
      </article>
    </section>
  )
}

export default About

import React from "react"
import Img from "gatsby-image"
import {
  FaHtml5,
  FaCss3Alt,
  FaGit,
  FaGithubSquare,
  FaJsSquare,
  FaReact,
  FaSass,
  FaNpm,
} from "react-icons/fa"
import { IconContext } from "react-icons"
import Fade from "react-reveal/Fade"
import Reveal from "react-reveal/Reveal"

import styles from "./preview.module.scss"

const icons = {
  html5: FaHtml5,
  css3: FaCss3Alt,
  git: FaGit,
  github: FaGithubSquare,
  javascript: FaJsSquare,
  react: FaReact,
  sass: FaSass,
  npm: FaNpm,
}

const Preview = ({
  name,
  fluidImg,
  technologies,
  description,
  repoPath,
  demoPath,
}) => {
  return (
    <li className={styles.container}>
      <Fade left duration={1500} distance="25%">
        <div className={styles.projectImg}>
          <Img fluid={fluidImg} alt="Screenshot of project" />
          <ul className={styles.techList}>
            {technologies.map(tech => {
              const SpecificIcon = icons[tech]
              return (
                <IconContext.Provider value={{ size: "1.5em" }}>
                  <li>
                    <SpecificIcon />
                  </li>
                </IconContext.Provider>
              )
            })}
          </ul>
        </div>
      </Fade>
      <Fade top delay={1000} duration={1500} distance="50%">
        <h1 className={styles.title}>{name}</h1>
        <ul className={styles.projectDetails}>
          <li>
            <a href={repoPath} target="#" rel="noopener noreferrer">
              Repo
            </a>
          </li>
          <li>
            <a href={demoPath} target="#" rel="noopener noreferrer">
              Demo
            </a>
          </li>
        </ul>
        <p className={styles.description}>{description}</p>
      </Fade>
    </li>
  )
}

export default Preview

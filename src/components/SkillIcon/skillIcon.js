import React from "react"
import {
  FaHtml5,
  FaCss3Alt,
  FaFigma,
  FaGit,
  FaReact,
  FaSass,
  FaNpm,
  FaNodeJs,
} from "react-icons/fa"
import { DiPostgresql, DiJqueryLogo } from "react-icons/di"
import { SiJavascript, SiTypescript } from "react-icons/si"
import { IconContext } from "react-icons"

import styles from "./skillIcon.module.scss"

const DiExpress = () => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="1"
      height="2.5em"
      width="2.5em"
      viewBox="0 0 128 128"
      xmlns="http://w3.ord/2000/svg"
    >
      <path d="M126.67,98.44c-4.56,1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89,76,81.85,85.2,75.14,94.77c-2.4,3.42-4.92,4.91-9.4,3.7L92.66,62.34,67.6,29.71c4.31-.84,7.29-.41,9.93,3.45,5.83,8.52,12.26,16.63,18.67,25.21C102.65,49.82,109,41.7,115,33.26c2.41-3.42,5-4.72,9.33-3.46-3.28,4.35-6.49,8.63-9.72,12.88-4.36,5.73-8.64,11.53-13.16,17.14-1.61,2-1.35,3.3.09,5.19C109.9,76,118.16,87.1,126.67,98.44Z" />
      <path d="M1.33,61.74c.72-3.61,1.2-7.29,2.2-10.83,6-21.43,30.6-30.34,47.5-17.06C60.93,41.64,63.39,52.62,62.9,65H7.1c-.84,22.21,15.15,35.62,35.53,28.78,7.15-2.4,11.36-8,13.47-15,1.07-3.51,2.84-4.06,6.14-3.06-1.69,8.76-5.52,16.08-13.52,20.66-12,6.86-29.13,4.64-38.14-4.89C5.26,85.89,3,78.92,2,71.39c-.15-1.2-.46-2.38-.7-3.57Q1.33,64.78,1.33,61.74ZM7.2,60.25H57.63c-.33-16.06-10.33-27.47-24-27.57C18.63,32.56,7.85,43.7,7.2,60.25Z" />
    </svg>
  )
}

const icons = {
  html5: FaHtml5,
  css3: FaCss3Alt,
  git: FaGit,
  javascript: SiJavascript,
  typescript: SiTypescript,
  react: FaReact,
  sass: FaSass,
  figma: FaFigma,
  npm: FaNpm,
  node: FaNodeJs,
  postgre: DiPostgresql,
  express: DiExpress,
  jquery: DiJqueryLogo,
}

const getIconText = iconType => {
  switch (iconType) {
    case "html5":
      return "HTML5"
    case "css3":
      return "CSS3"
    case "git":
      return "Git"
    case "javascript":
      return "Javascript"
    case "typescript":
      return "Typescript"
    case "react":
      return "React"
    case "sass":
      return "SASS/SCSS"
    case "figma":
      return "Figma"
    case "npm":
      return "npm"
    case "node":
      return "Node.js"
    case "postgre":
      return "PostgreSQL"
    case "express":
      return "Express"
    case "jquery":
      return "jQuery"
    default:
      break
  }
}

const SkillIcon = ({ iconType, iconSize }) => {
  const SpecificIcon = icons[iconType]
  return (
    <div className={styles.icon}>
      <IconContext.Provider value={{ size: iconSize }}>
        <SpecificIcon />
        <span>{getIconText(iconType)}</span>
      </IconContext.Provider>
    </div>
  )
}

export default SkillIcon

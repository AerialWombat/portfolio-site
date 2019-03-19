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

import styles from "./skillIcon.module.scss"

const icons = {
  html5: FaHtml5,
  css3: FaCss3Alt,
  git: FaGit,
  javascript: FaJsSquare,
  react: FaReact,
  sass: FaSass,
  npm: FaNpm,
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
    case "react":
      return "React"
    case "sass":
      return "SASS/SCSS"
    case "npm":
      return "npm"
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

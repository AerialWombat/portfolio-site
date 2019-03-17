import React from "react"
import SkillIcon from "../SkillIcon/skillIcon"

import styles from "./about.module.scss"

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
        <p className={styles.subtitle}>
          I have experience with the following tools and technologies:
        </p>
        <div className={styles.skillIcons}>
          <SkillIcon iconType="html5" iconSize="2.5em" />
          <SkillIcon iconType="css3" iconSize="2.5em" />
          <SkillIcon iconType="javascript" iconSize="2.5em" />
          <SkillIcon iconType="react" iconSize="2.5em" />
          <SkillIcon iconType="sass" iconSize="2.5em" />
          <SkillIcon iconType="git" iconSize="2.5em" />
          <SkillIcon iconType="npm" iconSize="2.5em" />
        </div>
        <p className={styles.learning}>
          Currently learning&nbsp;
          <span> React</span>
        </p>
      </article>
    </section>
  )
}

export default About
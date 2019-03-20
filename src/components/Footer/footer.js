import React from "react"

import styles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.container}>
      <h1 className={styles.header}>CONTACT ME</h1>
      <a
        className={styles.emailButton}
        target="#"
        href="mailto:adrianzhan@gmail.com"
        rel="noopener noreferrer"
      >
        EMAIL
      </a>
      <div className={styles.mediaLinks}>
        <a
          className={styles.footerLink}
          target="#"
          href="https://github.com/AerialWombat"
          rel="noopener noreferrer"
        >
          GITHUB
        </a>
        <a
          className={styles.footerLink}
          target="#"
          href="https://www.linkedin.com/in/adrian-zhan-0a3394173/"
          rel="noopener noreferrer"
        >
          LINKEDIN
        </a>
      </div>
      <p className={styles.copyright}>Copyright © 2019 Adrian Zhan</p>
      <a
        className={styles.footerLink}
        target="#"
        href="https://github.com/AerialWombat/portfolio-site"
        rel="noopener noreferrer"
      >
        SOURCE
      </a>
    </footer>
  )
}

export default Footer

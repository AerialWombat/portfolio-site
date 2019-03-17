import React from "react"
import { graphql, StaticQuery } from "gatsby"

import styles from "./showcase.module.scss"

const Showcase = () => (
  <StaticQuery
    query={graphql`
      query {
        thumbnailImgs: allFile(
          filter: { relativeDirectory: { eq: "thumbnails" } }
        ) {
          edges {
            node {
              childImageSharp {
                fluid(quality: 100, maxWidth: 1920) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const thumbnailDataEdges = data.thumbnailImgs.edges
      return (
        <section className={styles.container}>
          <article>
            <h1 className={styles.header}>PROJECTS</h1>
          </article>
        </section>
      )
    }}
  />
)

export default Showcase

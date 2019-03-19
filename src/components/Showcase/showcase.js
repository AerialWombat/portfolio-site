import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Preview from "../Preview/preview"

import styles from "./showcase.module.scss"
import "./projects"
import projects from "./projects"

const Showcase = () => (
  <StaticQuery
    query={graphql`
      query {
        thumbnailImgs: allFile(
          filter: { relativeDirectory: { eq: "thumbnails" } }
        ) {
          edges {
            node {
              name
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
            <ul>
              {thumbnailDataEdges.map(imgData => {
                const project = projects.find(
                  projectData => projectData.imgPath === imgData.node.name
                )
                return (
                  <Preview
                    key={project.imgPath}
                    name={project.name}
                    fluidImg={imgData.node.childImageSharp.fluid}
                    technologies={project.technologies}
                    description={project.description}
                    repoPath={project.repoPath}
                    demoPath={project.demoPath}
                  />
                )
              })}
            </ul>
          </article>
        </section>
      )
    }}
  />
)

export default Showcase

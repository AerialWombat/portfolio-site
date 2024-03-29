import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Preview from "../Preview/preview"
import Fade from "react-reveal/Fade"

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
        <section name="projects" className={styles.container}>
          <article>
            <Fade top duration={1000} distance="10%">
              <h1 className={styles.header}>PROJECTS</h1>
            </Fade>
            <ul>
              {projects.map(project => {
                const fluidImg = thumbnailDataEdges.find(
                  imgData => imgData.node.name === project.imgPath
                ).node.childImageSharp.fluid
                return (
                  <Preview
                    key={project.imgPath}
                    name={project.name}
                    fluidImg={fluidImg}
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

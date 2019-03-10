import React from "react"
import { graphql, StaticQuery } from "gatsby"

import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ children, className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "hero2-dark.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1080) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`darkslategrey`}
        >
          {children}
        </BackgroundImage>
      )
    }}
  />
)

export default BackgroundSection

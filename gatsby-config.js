module.exports = {
  siteMetadata: {
    title: `Adrian Zhan`,
    siteUrl: `https://www.google.org`,
    description: `Adrian Zhan's personal website`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
  ],
}

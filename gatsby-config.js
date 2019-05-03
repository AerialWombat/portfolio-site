module.exports = {
  siteMetadata: {
    title: `Adrian Zhan`,
    siteUrl: `https://www.google.org`,
    description: `Adrian Zhan's personal website`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        options: {
          trackingId: "UA-139549011-1",
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is optional
          anonymize: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Any additional create only fields (optional)
          sampleRate: 5,
          siteSpeedSampleRate: 10,
        },
      },
    },
  ],
}

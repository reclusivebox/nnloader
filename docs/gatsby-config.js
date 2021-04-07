module.exports = {
  siteMetadata: {
    title: `nnLoader`,
    description: `The easiest way to load files from your package root.`,
    author: `Bruno Gregório`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#8BC34A`,
        theme_color: `#8BC34A`,
        display: `minimal-ui`,
        icon: `src/images/logoGreen.svg`,
        // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-sass',
  ],
};

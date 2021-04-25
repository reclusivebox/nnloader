const path = require("path");

module.exports = {
  siteMetadata: {
    title: `nnLoader`,
    description: `The easiest way to load files from your package root.`,
    author: `Bruno Gregório`,
  },
  pathPrefix: "/nnloader",
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-plaintext`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `examples`,
        path: `${__dirname}/examples`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `Markdowns`,
        path: `${__dirname}/markdown`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              inlineCodeMarker: "&",
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `nnLoader`,
        start_url: `/`,
        background_color: `#8BC34A`,
        theme_color: `#8BC34A`,
        display: `minimal-ui`,
        icon: "src/images/favicon Unmasked.svg",
        icons: [
          {
            src: "src/images/favicon.svg",
            type: "image/svg+xml",
            sizes: "512x512",
            purpose: "maskable",
          },
        ],
        // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-typescript",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        purgeOnly: ["node_modules/bootstrap"],
      },
    },
  ],
};

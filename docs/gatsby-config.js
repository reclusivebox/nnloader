const path = require('path');

module.exports = {
  pathPrefix: '/nnloader',
  siteMetadata: {
    title: `nnLoader`,
    description: `The no-nonsense file loader.`,
    author: `Bruno Gregório`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // `gatsby-plugin-typescript`,
    // `gatsby-plugin-checker`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require('sass'),
        postCssPlugins: [
          require('tailwindcss'),
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'Markdowns',
        path: './markdown',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              showLineNumbers: true,
              inlineCodeMarker: '&',
              prompt: {
                user: 'hero',
                host: 'quest',
              },
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `nnLoader - The no-nonsense file loader`,
        short_name: `nnLoader`,
        start_url: `/`,
        theme_color: `#3DFC86`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`,
      },
    },
  ],
};

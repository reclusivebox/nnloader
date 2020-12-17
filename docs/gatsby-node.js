/* eslint-disable require-jsdoc */
const path = require('path');

async function createPages({graphql, actions}) {
  const componentPath = path.resolve('./src/templates/markdown.tsx');

  const query = await graphql(`
    query MyQuery {
      allMarkdownRemark(sort: {fields: frontmatter___id}) {
        nodes {
          frontmatter {
            id
            path
          }
        }
      }
    }
  `);

  const ids = query.data.allMarkdownRemark.nodes.map(
      (item) => item.frontmatter.path,
  );

  ids.forEach(
      (pagePath, index) => {
        actions.createPage({
          path: pagePath,
          component: componentPath,
          context: {
            id: index + 1,
          },
        });
      },
  );
}

function onCreateWebpackConfig({stage, loaders, actions}) {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /responsiveWatcher\.js/,
            use: [loaders.null()],
          },
        ],
      },
    })
  }
}

module.exports = {createPages};

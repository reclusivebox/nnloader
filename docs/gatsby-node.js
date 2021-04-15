const path = require('path');

async function createPages({ graphql, actions }) {
  const query = await graphql(`
    query MyQuery {
      allMarkdownRemark {
        nodes {
          frontmatter {
            id
            path
          }
        }
      }
    }
  `);

  const pages = new Map();
  query.data.allMarkdownRemark.nodes.forEach(({frontmatter}) => pages.set(frontmatter.id, frontmatter.path));

  for(const id of pages.keys()) {
    actions.createPage({
      path: pages.get(id),
      component: path.resolve('./src/templates/DocPage.tsx'),
      context: {
        'id': id
      }
    });
  }


}

module.exports = { createPages };

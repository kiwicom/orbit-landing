/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// @flow

const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const pages = await graphql(`
    {
      allPrismicLocations {
        edges {
          node {
            id
            uid
            data {
              link_to_event {
                url
              }
              display_on_website
            }
          }
        }
      }
    }
  `);
  const template = path.resolve('./src/templates/location.js');
  pages.data.allPrismicLocations.edges.forEach(edge => {
    if (
      !edge.node.data.link_to_event &&
      edge.node.data.display_on_website !== 'false'
    ) {
      createPage({
        path: `/${edge.node.uid}`,
        component: template,
        context: {
          uid: edge.node.uid,
        },
      });
    }
  });
};

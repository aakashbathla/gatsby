const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      tours: allContentfulTour {
        nodes {
          slug
        }
      }
    }
  `)
  data.tours.nodes.forEach(tour => {
    createPage({
      path: `tours/${tour.slug}`,
      component: path.resolve("./src/templates/tour-template.js"),
      context: {
        slug: tour.slug,
      },
    })
  })
}

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
      posts: allContentfulPost {
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
  data.posts.nodes.forEach(post => {
    createPage({
      path: `blog/${post.slug}`,
      component: path.resolve("./src/templates/blog-template.js"),
      context: {
        slug: post.slug,
      },
    })
  })
}

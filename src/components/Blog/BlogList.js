import React from "react"
import BlogCard from "./BlogCard"
import Title from "../Title"
import { useStaticQuery, graphql } from "gatsby"
import styles from "../../css/blog.module.css"

const getPost = graphql`
  query {
    posts: allContentfulPost(sort: { fields: published, order: DESC }) {
      nodes {
        published(formatString: "MMMM Do, YYYY")
        slug
        id: contentful_id
        title
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`
const BlogList = () => {
  const { posts } = useStaticQuery(getPost)
  return (
    <div>
      <section className={styles.blog}>
        <Title title="our" subtitle="blogs"></Title>
        <div className={styles.center}>
          {posts.nodes.map(post => {
            return <BlogCard key={post.id} blog={post} />
          })}
        </div>
      </section>
    </div>
  )
}

export default BlogList

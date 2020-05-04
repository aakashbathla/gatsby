import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import BlogList from "../components/Blog/BlogList"
export const getData = graphql`
  query {
    blogImage: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
const blog = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.blogImage.childImageSharp.fluid} />
      <BlogList />
    </Layout>
  )
}

export default blog

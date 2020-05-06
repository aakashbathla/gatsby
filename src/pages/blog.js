import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import BlogList from "../components/Blog/BlogList"
import SEO from "../components/SEO"
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
      <SEO title="Blog Page" />
      <StyledHero img={data.blogImage.childImageSharp.fluid} />
      <BlogList />
    </Layout>
  )
}

export default blog

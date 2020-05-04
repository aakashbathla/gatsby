import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Tours from "../components/Tours/Tours"
import { graphql } from "gatsby"
export const getData = graphql`
  query {
    defaultImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
const tours = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.defaultImage.childImageSharp.fluid} />
      <Tours />
    </Layout>
  )
}

export default tours

import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Contact from "../components/Contact/Contact"
import SEO from "../components/SEO"
export const getData = graphql`
  query {
    contactImage: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const contact = ({ data }) => {
  return (
    <Layout>
      <SEO title="Contact Page" />
      <StyledHero img={data.contactImage.childImageSharp.fluid} />
      <Contact />
    </Layout>
  )
}

export default contact

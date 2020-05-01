import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner"
import About from "../components/home/About"
import Services from "../components/home/Services"
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
export default ({ data }) => (
  <Layout>
    <StyledHero home="true" img={data.defaultImage.childImageSharp.fluid}>
      <Banner
        title="continue exploring"
        info="Dolor tempor magna no sea sadipscing aliquyam aliquyam dolore tempor.."
      >
        <AniLink fade to="/tours" className="btn-white">
          Explore Tours
        </AniLink>
      </Banner>
    </StyledHero>
    <About />
    <Services />
  </Layout>
)

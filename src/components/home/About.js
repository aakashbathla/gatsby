import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
const About = () => {
  const {
    aboutImage: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(getAbout)
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <Img fluid={fluid} alt="about company" />
        </article>
        <article className={styles.aboutInfo}>
          <h4>Explore the difference</h4>
          <p>
            Sit consetetur amet et duo consetetur, invidunt sed voluptua est
            lorem. Est.
          </p>
          <p>
            Eirmod lorem est et voluptua gubergren dolor lorem justo. Ipsum stet
            sed.
          </p>
          <button type="button" className="btn-primary">
            Read more
          </button>
        </article>
      </div>
    </section>
  )
}

export default About

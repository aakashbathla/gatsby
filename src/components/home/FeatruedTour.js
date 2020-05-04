import React from "react"
import Tour from "../Tours/Tour"
import { useStaticQuery, graphql } from "gatsby"
import Title from "../Title"
import styles from "../../css/items.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
const getTours = graphql`
  query {
    featuredTour: allContentfulTour(filter: { featured: { eq: true } }) {
      totalCount
      nodes {
        name
        price
        slug
        country
        contentful_id
        days
        images {
          fluid {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
`
const FeatruedTour = () => {
  const response = useStaticQuery(getTours)
  const tours = response.featuredTour.nodes
  console.log(tours)
  return (
    <section className={styles.tours}>
      <Title title="featured" subtitle="tours" />
      <div className={styles.center}>
        {tours.map(tour => {
          console.log(tour)
          return <Tour key={tour.contentful_id} tour={tour} />
        })}
      </div>
      <AniLink fade to="/tours" className="btn-primary">
        All Tours
      </AniLink>
    </section>
  )
}

export default FeatruedTour

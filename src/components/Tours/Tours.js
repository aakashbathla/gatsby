import React from "react"
import TourList from "./TourList"
import { useStaticQuery, graphql } from "gatsby"

const getTours = graphql`
  query {
    tours: allContentfulTour {
      nodes {
        name
        price
        slug
        country
        contentful_id
        days
        images {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`
const Tours = () => {
  const { tours } = useStaticQuery(getTours)
  return (
    <div>
      <TourList tours={tours} />
    </div>
  )
}

export default Tours

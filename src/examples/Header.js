import React from "react"
import { useStaticQuery, graphql } from "gatsby"
const Header = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          author
          description
          title
        }
      }
    }
  `)
  console.log(data)
  return (
    <div>
      <h1>title:</h1>
      <h1>author:</h1>
    </div>
  )
}

export default Header

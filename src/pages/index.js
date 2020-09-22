import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import HomeTemplate from "../components/Template/Home/HomeTemplate"

export default function Index({ data }) {
  const { edges: posts } = data.allMdx
  return (
    <>
      <Helmet title={`Alfa's Blog`} />
      <HomeTemplate posts={posts} />
    </>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

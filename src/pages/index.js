import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import HomeTemplate from "../components/Template/Home/HomeTemplate"

export default function Index({ data }) {
  const [formattedPosts, setFormattedPosts] = useState([])

  useEffect(() => {
    const { edges: posts } = data.allMdx

    setFormattedPosts(
      (posts || []).map(({ node: post }) => ({
        title: post.frontmatter.title,
        date: post.frontmatter.date,
        description: post.excerpt,
        path: post.frontmatter.path,
        image: post.frontmatter.image.childImageSharp.fluid.src,
      }))
    )
  }, [data])

  return (
    <>
      <Helmet title={`Alfa's Blog`} />
      <HomeTemplate posts={formattedPosts} />
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

import React, { useEffect } from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import CssBaseline from "@material-ui/core/CssBaseline"
import Container from "@material-ui/core/Container"

import Header from "../components/Header/Header"

export default function Template({ data }) {
  const { mdx: post } = data

  return (
    <>
      <CssBaseline />
      <Helmet title={`${post.frontmatter.title} - Alfa's Blog`} />
      <Container maxWidth="lg">
        <Header title="Alfa's Blog" />
        <main>
          <h1>{post.frontmatter.title}</h1>
          <MDXRenderer>{post.body}</MDXRenderer>
        </main>
      </Container>
    </>
  )
}
export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`

import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Header from "../../Header/Header"

const HomeTemplate = ({ posts }) => {
  return (
    <>
      <Header title="Alfa's Blog" />
      <div className="blog-posts">
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            let imageFluid = post.frontmatter.image.childImageSharp.fluid
            console.log(post.frontmatter.image);
            return (
              <div className="blog-post-preview" key={post.id}>
                <img width="800" height="auto" fluid={imageFluid.src} />
                {/* <Img fluid={imageFluid} /> */}
                <h1>
                  <Link to={post.frontmatter.path}>
                    {post.frontmatter.title}
                  </Link>
                </h1>
                <h2>{post.frontmatter.date}</h2>
                <p>{post.excerpt}</p>
              </div>
            )
          })}
      </div>
    </>
  )
}

HomeTemplate.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
}

export default HomeTemplate

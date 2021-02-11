import React from "react"
import PropTypes from "prop-types"
import CssBaseline from "@material-ui/core/CssBaseline"
import Container from "@material-ui/core/Container"

import Header from "../../Header/Header"
import MainFeaturedCard from "../../Card/MainFeatured/MainFeaturedCard"

const HomeTemplate = ({ posts }) => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Alfa's Blog" />
        <main>
          {posts
            .filter(post => post.title.length > 0)
            .map(post => {
              return <MainFeaturedCard {...post} />
            })}
        </main>
      </Container>
    </>
  )
}

HomeTemplate.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
}

export default HomeTemplate

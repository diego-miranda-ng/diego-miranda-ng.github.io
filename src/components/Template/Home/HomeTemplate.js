import React from "react"
import PropTypes from "prop-types"

import Header from "../../Header/Header"
import FeaturedCard from "../../Card/Featured/FeaturedCard"

const HomeTemplate = ({ posts }) => {
  return (
    <>
      <Header title="Alfa's Blog" />
      <div className="blog-posts">
        {posts
          .filter(post => post.title.length > 0)
          .map(post => {
            return (
              <FeaturedCard
                title={post.title}
                date={post.date}
                description={post.description}
                image={post.image}
              />
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

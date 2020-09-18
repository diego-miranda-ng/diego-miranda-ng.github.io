import React from "react"
import PropTypes from "prop-types"
import ReactGist from "react-gist"

const Gist = ({ id, file }) => <ReactGist id={id} file={file} />

Gist.propTypes = {
  id: PropTypes.string.isRequired,
  file: PropTypes.string,
}

Gist.defaultProps = {
  id: "",
  file: "",
}

export default Gist

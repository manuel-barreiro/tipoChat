// TipoChatButton.jsx
import React from "react"
import PropTypes from "prop-types"

const TipoChatButton = ({ text }) => {
  return (
    <button className="bg-primary shadow-primary w-[90%] rounded-full p-4 shadow-sm">
      <span className="text-body-large font-bold">{text}</span>
    </button>
  )
}

TipoChatButton.propTypes = {
  text: PropTypes.string.isRequired,
}

export default TipoChatButton

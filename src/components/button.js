import React from "react"

const Button = ({ children, link, variant = "light" }) => {
  let buttonStyles = {}

  return (
    <div className={`btn btn-${variant}`}>
      <a href={link} target="_blank" rel="noreferrer">
        <button style={buttonStyles}>{children}</button>
      </a>
    </div>
  )
}

export default Button

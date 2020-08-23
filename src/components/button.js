import React from "react"

const Button = ({ children, link }) => {
  return (
    <div className="btn">
      <a href={link} target="_blank" rel="noreferrer">
        <button>{children}</button>
      </a>
    </div>
  )
}

export default Button

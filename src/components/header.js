import React from "react"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  <header className="mainNav">
    <span>{siteTitle}</span>
    <span>12 Main St, EH1 1AA</span>
    <a href="#booking">
     <button>Book Now</button>
    </a>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

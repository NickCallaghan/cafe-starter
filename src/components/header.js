import React from "react"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  <header className="mainNav">
    <div className="siteDetails">
      <div className="siteTitle">{siteTitle}</div>
      <div>1 McDonald Ave, EH1 1AA</div>
    </div>
    <a
      href="https://bookingninja.io/bookings/burger-restaurant"
      target="_blank"
    >
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

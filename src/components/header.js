import React from "react"
import PropTypes from "prop-types"
import Button from "./button.js"

const Header = ({ siteTitle }) => (
  <header className="mainNav">
    <div className="siteDetails">
      <div className="siteTitle">{siteTitle}</div>
      <div>1 McDonald Ave, EH1 1AA</div>
    </div>
    <Button link="https://bookingninja.io/bookings/burger-restaurant">
      Book Now
    </Button>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

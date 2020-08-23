import React from "react"
import PropTypes from "prop-types"
import Button from "./button.js"

const Header = data => {
  const { siteTitle, bookingLink, postcode, address } = data
  console.log(data)
  return (
    <header className="mainNav">
      <div className="siteDetails">
        <div className="siteTitle">{siteTitle}</div>
        <div>
          {address}, {postcode}
        </div>
      </div>
      <Button link={bookingLink}>Book Now</Button>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

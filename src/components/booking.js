import React, { useState } from "react"
import { useStaticQuery } from "gatsby"
import Button from "./button.js"

const Booking = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          bookingLink
        }
      }
    }
  `)
  const { bookingLink } = data.site.siteMetadata
  return (
    <section id="booking">
      <h2>Make a booking</h2>
      <p>
        Reservations are available for groups of up to 8 people. Due to social
        distancing we are operating at a reduced capacity please let us know if
        you no longer require your booking slot.
      </p>
      <Button variant="dark" link={bookingLink}>
        Book Now
      </Button>
    </section>
  )
}

export default Booking

import React, { useState } from "react"
import { withPrefix } from "gatsby"
import Button from "./button.js"

const Booking = () => {
  return (
    <section id="booking">
      <h2>Make a booking</h2>
      <p>Reservations are available for groups of up to 8 people.</p>
      <Button variant="dark">Book Now</Button>
    </section>
  )
}

export default Booking

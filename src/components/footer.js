import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <footer>
      <section>
        <div className="address">
          <h3>WHERE ARE WE?</h3>
          <span>1 McDonald Ave,</span>
          <span>Edinburgh, EH1 1AA</span>
          <span>
            <FontAwesomeIcon icon={faPhoneAlt} />
            &nbsp; 01234 567890
          </span>
        </div>
        <div className="hours">
          <h3>HOURS</h3>
          <span>Weekdays / 8-5</span>
          <span>Weekdays / 10-5</span>
        </div>
        <div className="contact">
          <h3>SOCIAL</h3>

          <div className="socialIcons">
            <a className="socialLink" href="#" target="_blank">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a className="socialLink" href="#" target="_blank">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a className="socialLink" href="#" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </section>
      <p>
        Built by
        <a
          href="https://www.mrnickcallaghan.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nick Callaghan
        </a>
      </p>
    </footer>
  )
}

export default Footer

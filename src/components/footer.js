import React from "react"
import { useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          address {
            city
            postcode
            street
          }
          author
          authorHome
          bookingLink
          description
          social {
            facebookUrl
            instaUrl
            twitterUrl
          }
          telephone
          title
        }
      }
    }
  `)

  const {
    address,
    telephone,
    social,
    author,
    authorHome,
  } = data.site.siteMetadata

  return (
    <footer>
      <section>
        <div className="address">
          <h3>WHERE ARE WE?</h3>
          <span>{address.street},</span>
          <span>
            {address.city}, {address.postcode}
          </span>
          <span>
            <FontAwesomeIcon icon={faPhoneAlt} />
            &nbsp; {telephone}
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
            <a className="socialLink" href={social.facebookUrl} target="_blank">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a className="socialLink" href={social.twitterUrl} target="_blank">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a className="socialLink" href={social.instaUrl} target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </section>
      <p>
        Built by
        <a href={authorHome} target="_blank" rel="noopener noreferrer">
          {author}
        </a>
      </p>
    </footer>
  )
}

export default Footer

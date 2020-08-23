import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Menu from "../components/menu/menu"
import LeafletMap from "../components/leafletMap"
import Footer from "../components/footer"
import Booking from "../components/booking.js"

const IndexPage = ({ data }) => {
  const content = data.allContentfulContent.edges[0].node

  return (
    <Layout>
      <div className="main">
        <SEO title="Home" />
        <section className="hero">
          <Img
            fluid={data.mainHero.childImageSharp.fluid}
            className="hero-image"
          />
        </section>

        <section className="container">
          <span className="description">
            Welcome to <strong>The Burger Restaurant</strong>, home of
            scotland's best burgers right in the heart of Edinburgh.
          </span>
          <div className="gallery-grid">
            <Img
              fluid={data.cocktail.childImageSharp.fluid}
              className="gallery-img1"
            />
            <Img
              fluid={data.foodLandscape.childImageSharp.fluid}
              className="gallery-img2"
            />
            <Img
              fluid={data.burgerPortrait.childImageSharp.fluid}
              className="gallery-img3"
            />
          </div>
          <div className="about-grid">
            <h2>{content.title}</h2>
            <p>{content.text.text}</p>
          </div>
        </section>
        <div className="parallax"></div>
        <section className="container">
          <Menu />
          <Booking />
        </section>
        {typeof window !== "undefined" && (
          <LeafletMap
            position={[55.9524162, -3.1731507]} // Your Coordinates
            zoom={18} // Zoom Level
            markerText={"Burger Restaurant, 1 McDonald Ave, EH1 1AA"} // Icon text
          />
        )}
        <Footer />
      </div>
    </Layout>
  )
}

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1600) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    mainHero: file(relativePath: { eq: "main-hero.jpg" }) {
      ...fluidImage
    }
    burgerPortrait: file(relativePath: { eq: "burger-portrait.jpg" }) {
      ...fluidImage
    }
    cocktail: file(relativePath: { eq: "cocktail.jpg" }) {
      ...fluidImage
    }
    foodLandscape: file(relativePath: { eq: "foodLandscape.jpg" }) {
      ...fluidImage
    }
    allContentfulContent(
      filter: { id: { eq: "e64c76b6-a69b-574a-940e-fb1ccec0da37" } }
    ) {
      edges {
        node {
          id
          title
          text {
            text
          }
        }
      }
    }
  }
`

export default IndexPage

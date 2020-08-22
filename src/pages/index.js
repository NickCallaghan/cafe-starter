import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Menu from "../components/menu/menu"
import LeafletMap from "../components/leafletMap"
import Footer from "../components/footer"

const IndexPage = ({ data }) => {
  const content = data.allContentfulContent.edges[0].node

  return (
    <Layout>
      <SEO title="Home" />
      <section className="hero">
        <Img
          fluid={data.coffeeShop.childImageSharp.fluid}
          className="hero-image"
        />
      </section>
      <section className="container">
        <span className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
        <div className="gallery-grid">
          <Img
            fluid={data.latte.childImageSharp.fluid}
            className="gallery-img1"
          />
          <Img
            fluid={data.coffeeBags.childImageSharp.fluid}
            className="gallery-img2"
          />
          <Img
            fluid={data.coffeePortrait.childImageSharp.fluid}
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
        {/* <Instagram /> */}
      </section>
      {typeof window !== "undefined" && (
        <LeafletMap
          position={[55.9524162, -3.1731507]} // Your Coordinates
          zoom={18} // Zoom Level
          markerText={"The Queen's House, 65 Park Row"} // Icon text
        />
      )}
      <Footer />
    </Layout>
  )
}

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1600) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    coffeeShop: file(relativePath: { eq: "coffee-shop-exterior.jpg" }) {
      ...fluidImage
    }
    coffeePortrait: file(relativePath: { eq: "coffee-portrait.jpg" }) {
      ...fluidImage
    }
    latte: file(relativePath: { eq: "latte.jpg" }) {
      ...fluidImage
    }
    coffeeBags: file(relativePath: { eq: "coffee-bags.jpg" }) {
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

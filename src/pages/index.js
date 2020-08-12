import React, { Component } from "react"
import Appbar from "../components/appbar"
import { graphql } from 'gatsby'
import Info from "../components/info"
import { Helmet } from "react-helmet"
import BackgroundImage from 'gatsby-background-image'

export default class index extends Component {
  render() {
    return (
        <BackgroundImage
          Tag="div"
          className="backgroundImage"
          fluid={this.props.data.file.childImageSharp.fluid}
          backgroundColor={"#FFF"}>
          <Appbar />
          <Info />
          <Helmet>
            <meta charSet="utf-8" />
            <meta name="description" content="Josh Boddy | Computer Science and all things tech" />
            <meta name="keywords" content="Programming, Josh, Boddy, Joshua, City, University, Computing, Computer, Science, Engineering, Tech, Technology, Music, Acting, Theatre, Film, Guitar, Vocal, Song" />
            <meta name="author" content="Josh Boddy" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Home | Josh</title>
          </Helmet>
        </BackgroundImage>
    )
  }
}

export const query = graphql`
    query {
    file(relativePath: { eq: "background.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

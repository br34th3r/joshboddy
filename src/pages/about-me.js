import React, { Component } from "react"
import "../style.css"
import { graphql } from 'gatsby'
import Appbar from "../components/appbar"
import Info from "../components/info"
import Img from "gatsby-image"
import { Helmet } from "react-helmet"

class AboutMe extends Component {
  render() {
    return (
      <div>
        <Appbar />
        <div className="AboutMe">
          <div className="AboutMeHeader">
            <h1>Josh Boddy</h1>
          </div>
          <Img fluid={this.props.data.file.childImageSharp.fluid} className="AboutMeImage"/>
          <div className="AboutMeContent">
            <p>I have always been astounded by computing, music and a lot of different things actually. I have an avid interest in learning and acquiring new knowledge which is evident through my multitude of passions and hobbies. I am keen to explore new things all the time, and I play an active role in my different social groups to introduce people to those things as well to try and inspire the same enjoyment for learning as I have.</p>
            <p>I am a programmer and computer scientist by training, attending City University of London and studying an undergraduate masters in Computer Science there. On top of that, I enjoy lots of sports, mainly Volleyball and Basketball, and I am an avid scuba diver with a full fledged love for the ocean and all of the wild and astounding creatures that inhabit it. As such, I do not eat any seafood as I do not want to contribute to any form of overfishing.</p>
            <p>I also have a passion for music and theatre. I have performed in shows with my school and the Prague Youth Theatre as well as developing my own hobby of performing music in different venues in Prague (a habit that I will soon bring to London).</p>
            <p>I have been programming for around 5 years now and can safely say I am fluent in around 9 programming languages, these are:</p>
            <ul>
              <li>Python</li>
              <li>Java</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Objective-C</li>
              <li>Swift</li>
              <li>C#</li>
              <li>C++</li>
            </ul>
            <p>I love programming because I believe it is a great tool for developing small simplifications to life and these can be used to assist people who need help, or to inspire someone to create their own tools and invoke more creative development in the industry. Programming has and always will be my greatest passion!</p>
            <p>If you want to get a clearer insight into my mind please feel free to explore this website and definitely look at my blog to get a deeper look into what I am up to and how my mind really works!</p>
          </div>
        </div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>About Me | Josh</title>
        </Helmet>
      </div>
    )
  }
}

export default AboutMe

export const query = graphql`
    query {
    file(relativePath: { eq: "me.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

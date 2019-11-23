import React, { Component } from "react"
import { Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

class Post extends Component {
  render() {
    if(this.props.img) {
      return (
        <div className="PostContainer">
          <a href={this.props.link}>
            <BackgroundImage fluid={this.props.img.childImageSharp.fluid} className="PostText">
              <h1>{this.props.postTitle}</h1>
              <h2>{this.props.postDate}</h2>
            </BackgroundImage>
          </a>
        </div>
      )
    } else {
      return (
        <div className="PostContainer">
          <a href={this.props.link}>
            <div className="PostText">
              <h1>{this.props.postTitle}</h1>
              <h2>{this.props.postDate}</h2>
            </div>
          </a>
        </div>
      )
    }
  }
}

export default Post;

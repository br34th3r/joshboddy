import React, { Component } from "react"

class Post extends Component {
  render() {
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

export default Post;

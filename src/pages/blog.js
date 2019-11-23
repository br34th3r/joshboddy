import React, { Component } from "react"
import "../style.css"
import Appbar from "../components/appbar"
import Post from "../components/post"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

class Blog extends Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    return (
      <div className="container-fluid">
        <Appbar />
        <div className="Blog">
          { posts.map((post) => (
            <Post
              postTitle={post.node.frontmatter.title}
              postDate={post.node.frontmatter.date}
              link={post.node.frontmatter.path}
              key={post.node.frontmatter.path}
              img={post.node.frontmatter.featuredImage}
            />
          ))}
        </div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Blog | Josh</title>
        </Helmet>
      </div>
    )
  }
}

export default Blog

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            path
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

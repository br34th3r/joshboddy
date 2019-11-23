import React from 'react';
import { graphql } from 'gatsby';
import BackgroundImage from "gatsby-background-image";

class BlogPost extends React.Component {
  render() {
    const { frontmatter, html } = this.props.data.markdownRemark;
    const image = frontmatter.featuredImage ? frontmatter.featuredImage.childImageSharp.fluid : null;
    return (
      <div className="Post">
        <div className="PostHeader">
          {image ? <BackgroundImage
            Tag="div"
            className="PostImage"
            fluid={image}
            backgroundColor={`#AAA`}
            style={{ width: "100%", height: "250px", backgroundPosition: 'right 0px top -350px' }}
            >
            <div className="PostHeaderText">
              <h1 className="PostHeaderTitle">{frontmatter.title}</h1>
              <h2 className="PostHeaderSubtitle">{frontmatter.date}</h2>
            </div>
          </BackgroundImage>
        :
          <div className="AlternateHeader">
            <h1 className="PostHeaderTitle">{frontmatter.title}</h1>
            <h2 className="PostHeaderSubtitle">{frontmatter.date}</h2>
          </div>
        }
        </div>
        <br />
        <div className="PostContent" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    )
  }
}

export default BlogPost;

export const pageQuery = graphql`
query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
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
`

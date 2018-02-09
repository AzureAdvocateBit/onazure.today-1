import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import Nav from "../components/Nav";
import get from "lodash/get";
import "./Tutorial.css";

class Tutorial extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;

    return (
      <div className="tutorial">
        <Helmet title={`${post.frontmatter.title} on Azure`} />
        <Nav
          title={this.props.data.markdownRemark.frontmatter.title}
          logo={this.props.data.markdownRemark.frontmatter.logo}
        />
        <div
          className="tutorial-body"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    );
  }
}

export default Tutorial;

export const pageQuery = graphql`
  query TutorialBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        logo {
          childImageSharp {
            resize(width: 400) {
              src
            }
          }
        }
      }
    }
  }
`;

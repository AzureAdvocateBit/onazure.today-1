import React from "react";
import "reset-css/reset.css";
import "prismjs/themes/prism-solarizedlight.css";
import "./index.css";
import Link from "gatsby-link";
import Nav from "../components/Nav";

class Template extends React.Component {
  render() {
    console.log(this.props.data);
    return <div className="layout">{this.props.children()}</div>;
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___title], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

export default Template;

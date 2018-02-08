import React from "react";
import Link from "gatsby-link";

class Template extends React.Component {
  render() {
    return (
      <pre>
        <code>{JSON.stringify(this.props, null, 4)}</code>
      </pre>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`;

export default Template;

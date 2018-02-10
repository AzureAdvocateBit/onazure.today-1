import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import get from "lodash/get";
import rehypeReact from "rehype-react";
import Nav from "../components/Nav";
import InstallNode from "../components/install-node";
import "./Tutorial.css";

class Tutorial extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const renderAst = new rehypeReact({
      createElement: React.createElement,
      components: {
        "install-node": InstallNode
      }
    }).Compiler;

    return (
      <div className="tutorial">
        <Helmet title={`${post.frontmatter.title} on Azure`} />
        <Nav
          title={this.props.data.markdownRemark.frontmatter.title}
          logo={this.props.data.markdownRemark.frontmatter.logo}
        />
        <div className="tutorial-body">{renderAst(post.htmlAst)}</div>
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
      htmlAst
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

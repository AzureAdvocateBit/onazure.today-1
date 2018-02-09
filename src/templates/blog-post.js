import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import Nav from "../components/Nav";
import get from "lodash/get";

class BlogPostTemplate extends React.Component {
  render() {
    console.log("my props", this.props);
    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, "data.site.siteMetadata.title");
    const { previous, next } = this.props.pathContext;

    return (
      <div>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <Nav
          title={this.props.data.markdownRemark.frontmatter.title}
          logo={this.props.data.markdownRemark.frontmatter.logo}
        />
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />

        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            listStyle: "none",
            padding: 0
          }}
        >
          {previous && (
            <li>
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            </li>
          )}

          {next && (
            <li>
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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

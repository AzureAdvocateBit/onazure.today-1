import React from "react";
import Nav from "../components/Nav";
import get from "lodash/get";
import Link from "gatsby-link";
import "./index.css";

class Index extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="home">
          <div className="tiles">
            {this.props.data.allMarkdownRemark.edges.map(tutorial => {
              console.log(tutorial.node.frontmatter.logo);
              const image = get(
                tutorial,
                "node.frontmatter.logo.childImageSharp.resize.src",
                ""
              ); // todo placeholder image
              return (
                <Link to={tutorial.node.fields.slug} className="tile">
                  <div
                    className="tile-img"
                    style={{
                      backgroundImage: `url(${image})`
                    }}
                  />
                  <h2 className="tile-name">
                    {tutorial.node.frontmatter.title}
                  </h2>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export const pageQuery = graphql`
  query HomePage {
    allMarkdownRemark(
      sort: { fields: [frontmatter___title], order: ASC }
      limit: 1000
    ) {
      edges {
        node {
          fields {
            slug
          }
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
    }
  }
`;

export default Index;

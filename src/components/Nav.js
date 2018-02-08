import React from "react";
import Link from "gatsby-link";
import logo from "./microsoft-gray.png";
import "./Nav.css";

class Bio extends React.Component {
  render() {
    let onLogo = null;
    if (this.props.onLogo) {
      onLogo = (
        <div className="on-logo">
          <img
            className="on-logo-img"
            src={this.props.onLogo}
            alt={`${this.props.title} logo`}
          />
          <p className="on-logo-text">on</p>
        </div>
      );
    }
    return (
      <nav className="navbar">
        <Link to="/">
          <img src={logo} alt="Microsoft Logo" />
        </Link>
      </nav>
    );
  }
}

export default Bio;

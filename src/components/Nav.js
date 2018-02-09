import React from "react";
import Link from "gatsby-link";
import logo from "./azure.svg";
import "./Nav.css";

class Nav extends React.Component {
  render() {
    let onLogo = null;
    if (this.props.logo) {
      onLogo = [
        <img
          className="on-logo-img"
          src={this.props.logo.childImageSharp.resize.src}
          alt={`${this.props.title} logo`}
        />,
        <span className="on-logo-text">on</span>
      ];
    }
    return (
      <nav className="navbar">
        {onLogo}
        <Link to="/">
          <img className="navbar-logo" src={logo} alt="Microsoft Logo" />
        </Link>
      </nav>
    );
  }
}

export default Nav;

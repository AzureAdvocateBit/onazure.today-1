import React from "react";
import "./install-node.css";

class InstallNode extends React.Component {
  state = {
    show: false
  };
  toggleShow = () => this.setState({ show: !this.state.show });
  render() {
    return (
      <p className="install-node">
        <button onClick={this.toggleShow} className="install-node-head">
          Need help installing Node? Click here for a little help!
        </button>
        <p className={`install-node-body${this.state.show ? " show" : ""}`}>
          <p>
            Head <a href="https://nodejs.org/en/">here</a> to grab the correct
            build of Node.js for your computer. You can either grab the LTS
            (Long Term Support, means it'll be supported/patched for years) or
            the Current build, both will work. If you're not sure which, grab
            the LTS.
          </p>
          <p>
            From there, download the file and run whatever installer it has
            (it's different for each operating system.) From there, open your
            terminal or command line and type in <code>node -v</code>. Your
            should see it print out numbers. If you see command not found or
            something like that, try{" "}
            <a href="https://nodejs.org/en/download/">
              the official Node website
            </a>.
          </p>
        </p>
      </p>
    );
  }
}

export default InstallNode;

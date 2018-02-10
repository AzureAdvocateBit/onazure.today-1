---
title: "React"
logo: "./react.png"
---

# React

React is an open source library from Facebook that for rendering user interface libraries. It's quite popular is being used right now at companies like Microsoft, Netflix, Airbnb, and many more.

While the React ecosystem allows you to assemble your own framework, the library itself is small in terms of what it covers: rendering interfaces and limited state management. That's it. There are many tools one can use to get started but we're going to use the `create-react-app` tool to get us started. You'll need Node installed to get started.

<install-node></install-node>

In your terminal, run `npm install --global create-react-app`. This will install the command line tool create-react-app which will scaffold (a word which means to generate a bunch of files and tools for you to get started) an app for you. From there, run `create-react-app my-azure-react-app`. This will do a lot of installing of various JavaScript/Node packages for you.

Feel free to explore all of the files it generated for you. After you run `cd my-azure-react-app` run `npm run start` to start your development server. This should open the web page automatically for you. If not, open [http://localhost:3000/](http://localhost:3000/) in your browser and you should see the development page.

Great! Let's go modify it and learn a bit about React. React typically is written in JSX which is just JavaScript with the ability to write HTML inside of it. It sounds scary but it ends up being very convenient. Open in your project src/App.js in a text editor of some sort (we recommend [Visual Studio Code](https://code.visualstudio.com/) which is free.)

Delete all the code. Instead put this:

```javascript
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>This is my first React app!</h1>
        <h2 style={{ color: "blue" }}>We're going to deploy it to Azure!</h2>
      </div>
    );
  }
}

export default App;
```

App is a function that returns "markup". In React terminology, we call App a component. We can in turn render these components which is what is shown on this page. What's cool about this is we can render other components inside of this component. As you may imagine, this unlocks the ability to make reusable components which is a powerful pattern for creating interfaces!

Let's make it dynamic! Change the code to look like:

```javascript
import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    fontWeight: "normal"
  };
  toggleBold = () => {
    if (this.state.fontWeight === "normal") {
      this.setState({ fontWeight: "bold" });
    } else {
      this.setState({ fontWeight: "normal" });
    }
  };
  render() {
    return (
      <div onClick={this.toggleBold}>
        <h1>This is my first React app!</h1>
        <h2 style={{ color: "blue", fontWeight: this.state.fontWeight }}>
          We're going to deploy it to Azure!
        </h2>
      </div>
    );
  }
}

export default App;
```

Now try clicking on the text. You should see the h2 going back and forth between bold and not bold! This is how we add interactions in React. Feel free to look around how the site is actually being rendered to the DOM in index.js or feel free to change the CSS in index.css or App.css.

## TODO Deploy to Azure

You should deploy it to Azure.

import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import HomePage from "./HomePage";
import CategoryPage from "./CategoryPage";

const allowedCategories = [
  "films",
  "people",
  "planets",
  "species",
  "starships",
  "vehicles"
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Star Wars</h1>
        </header>

        <section>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route
              exact
              path={`/:category(${allowedCategories.join("|")})`}
              component={CategoryPage}
            />
            <Route render={() => <h1>Page not found</h1>} />
          </Switch>
        </section>

        <footer>Footer</footer>
      </div>
    );
  }
}

export default App;

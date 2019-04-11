import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PageNotFound from "../../pages/PageNotFound";
import SavedBooks from "../../pages/SavedBooks";
import Search from "../../pages/Search";
import Nav from "../../components/Nav";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/saved-books" component={SavedBooks} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

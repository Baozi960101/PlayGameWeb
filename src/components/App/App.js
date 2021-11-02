import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../Header";
import Home from "../../pages/Home/Home";

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

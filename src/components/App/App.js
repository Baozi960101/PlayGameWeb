import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer/Footer";
import Home from "../../pages/Home/Home";
import AllPost from "../../pages/AllPost/AllPost";
import SingleArticle from "../../pages/SingleArticle/SingleArticle";

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/01">
            <SingleArticle />
          </Route>
          <Route path="/all">
            <AllPost/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

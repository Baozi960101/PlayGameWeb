import React, { useEffect, useState } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  useParams,
  useLocation,
} from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer/Footer";
import Home from "../../pages/Home/Home";
import Baseball from "../../pages/Baseball";
import SingleArticle from "../../pages/SingleArticle/SingleArticle";
import { SlugContext } from "../../global/context";
import Basketball from "../../pages/Basketball/Basketball";
import Other from "../../pages/Other/Other";
import Football from "../../pages/Football/Football";
import Tennis from "../../pages/Tennis/Tennis";
import Volleyball from "../../pages/Volleyball/Volleyball";

const NecessaryComponent = ({ content }) => {
  return (
    <>
      <Header />
      {content}
      <Footer />
    </>
  );
};

export default function App() {
  const [aloneSlug, setAloneSlug] = useState("");

  function BlogSinglePost() {
    let { slug } = useParams();
    let location = useLocation();
    useEffect(() => {
      setAloneSlug(slug);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);
    return <SingleArticle />;
  }

  return (
    <>
      <SlugContext.Provider value={{ aloneSlug, setAloneSlug }}>
        <Router>
          <Switch>
            <Route exact path="/">
              <NecessaryComponent content={<Home />} />
            </Route>
            <Route exact path="/baseball">
              <NecessaryComponent content={<Baseball />} />
            </Route>
            <Route exact path="/basketball">
              <NecessaryComponent content={<Basketball />} />
            </Route>
            <Route exact path="/football">
              <NecessaryComponent content={<Football />} />
            </Route>
            <Route exact path="/tennis">
              <NecessaryComponent content={<Tennis />} />
            </Route>
            <Route exact path="/volleyball">
              <NecessaryComponent content={<Volleyball />} />
            </Route>
            <Route exact path="/other">
              <NecessaryComponent content={<Other />} />
            </Route>
            <Route exact path="/:slug">
              <NecessaryComponent content={<BlogSinglePost />} />
            </Route>
          </Switch>
        </Router>
      </SlugContext.Provider>
    </>
  );
}

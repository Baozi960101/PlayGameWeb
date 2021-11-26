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
import AllPost from "../../pages/AllPost/AllPost";
import GameInformation from "../../pages/GameInformation";
import SingleArticle from "../../pages/SingleArticle/SingleArticle";
import { SlugContext } from "../../global/context";
import GamingStrategy from "../../pages/GamingStrategy/GamingStrategy";
import Vehicles from "../../pages/Vehicles/Vehicles";
import Sports from "../../pages/Sports/Sports";

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
  //登入狀態   之後改為false

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
            <Route exact path="/all">
              <NecessaryComponent content={<AllPost />} />
            </Route>
            <Route exact path="/gameinformation">
              <NecessaryComponent content={<GameInformation />} />
            </Route>
            <Route exact path="/gamingstrategy">
              <NecessaryComponent content={<GamingStrategy />} />
            </Route>
            <Route exact path="/vehicles">
              <NecessaryComponent content={<Vehicles />} />
            </Route>
            <Route exact path="/sports">
              <NecessaryComponent content={<Sports />} />
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

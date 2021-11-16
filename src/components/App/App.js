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
import SingleArticle from "../../pages/SingleArticle/SingleArticle";
import { SlugContext } from "../../global/context";
import { ScrollToTop } from "../../global/Scroll";

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
          <Header />
          <ScrollToTop />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/all">
              <AllPost />
            </Route>
            <Route path="/:slug">
              <BlogSinglePost />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </SlugContext.Provider>
    </>
  );
}

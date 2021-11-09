import React, { lazy, Suspense } from "react";
import styled from "styled-components"
import { MainPost } from "../Home/Home";

const Post = lazy(() => import("../Home/Post"));

const LazyPost = () => {
    return (
      <Suspense fallback={<p>Loading....</p>}>
        <Post></Post>
      </Suspense>
    );
  };

const MainTitle = styled.div`
  margin: 0 auto 50px auto;
  padding-bottom: 15px;
  max-width: 1230px;
  padding: 0px 15px 20px 15px;
  box-sizing: border-box;
  font-size: 40px;
  border-bottom: 2px solid #c4c4c4;
  letter-spacing: 1px;
`;

const BlockDiv = styled.div`
  height: 60px;

  @media screen and (max-width: 885px) {
    display: none;
  }
`;

export default function AllPost() {
    return (
        <>
        <MainTitle>All</MainTitle>
        <MainPost/>
        <LazyPost/>
        <BlockDiv/>
        <LazyPost/>
        <BlockDiv/>
        <LazyPost/>
        </>
    )
}
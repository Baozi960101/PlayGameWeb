import React, { lazy, Suspense } from "react";
import styled from "styled-components";
import trending from "../../images/trending.png";
import { Slideshow } from "./Slideshow";
import coverImg from "../../images/cover.jpeg";
import star from "../../images/star.png";
import advertise from "../../images/advertise.webp";
import { Link } from "react-router-dom"

const Post = lazy(() => import("./Post"));

const LazyPost = () => {
  return (
    <Suspense fallback={<p>Loading....</p>}>
      <Post></Post>
    </Suspense>
  );
};


const Goto = styled(Link)`
  text-decoration:none;
`


const Announcement = styled.div`
  display: flex;
  align-items: center;
  max-width: 1230px;
  padding: 0px 15px;
  height: 69px;
  margin: 0 auto;
  font-size: 18px;
  font-weight: 500;
  box-sizing: border-box;
`;

const AnnouncementBox = styled.div`
  background-color: #ee3124;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 100%;
  color: white;
  box-sizing: border-box;
`;
const Arrow = styled.img`
  width: 24px;
  height: 14px;
  margin-left: 5px;
  box-sizing: border-box;
`;

const AnnouncementTitle = () => {
  return (
    <>
      <AnnouncementBox>
        Trending
        <Arrow alt="trending" src={trending} />
      </AnnouncementBox>
    </>
  );
};

const SlideshowBox = styled.div`
  background-color: white;
  position: relative;
  width: 90%;
  height: 100%;
  box-sizing: border-box;
`;

const MainAnnouncement = () => {
  return (
    <>
      <Announcement>
        <AnnouncementTitle />
        <SlideshowBox>{Slideshow()}</SlideshowBox>
      </Announcement>
    </>
  );
};

const MainPostBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1230px;
  margin: 70px auto;
  padding: 0px 15px;
  box-sizing: border-box;

  @media screen and (max-width: 885px) {
    margin-bottom: 40px;
  }
`;

const MainPostImg = styled.img`
  max-width: 60%;
  cursor: pointer;

  @media screen and (max-width: 885px) {
    max-width: 100%;
  }
`;

const Box = styled.div`
  width: 35%;
  padding-left: 25px;

  @media screen and (max-width: 885px) {
    width: 100%;
    padding-left: 0px;
    margin-top: 50px;
  }
`;

const MainPostTitle = styled.h1`
  font-size: 26px;
  font-weight: 700;
  margin-top: 0;
  cursor: pointer;

  @media screen and (max-width: 885px) {
    font-size: 20px;
  }
`;
const SubTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #70706e;
  margin: 20px 0;

  @media screen and (max-width: 885px) {
    font-size: 14px;
  }
`;

const MarkBox = styled.div`
  display: flex;
`;
const Img = styled.img`
  width: 44px;
  margin-right: 30px;
`;

const MarkTitle = styled.div`
  color: #ee3124;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;
`;

const MarkSubTitle = styled.div`
  color: #70706e;
  font-size: 14px;
  font-weight: 500;
`;

const MainPostText = () => {
  return (
    <>
      <Box>
        <MainPostTitle>
          India squad for Cricket T20 World Cup 2021: All you need to know
        </MainPostTitle>
        <SubTitle>
          The suspense around the Indian squad for the upcoming Cricket T20
          World Cup 2021, to be played in the United Arab Emirates from October
          14 to November 17, was over on Wednesday night as the selectors
          announced the list of players who will be making the trip to the T20
        </SubTitle>
        <MarkBox>
          <Img src={star} />
          <div>
            <MarkTitle>Devarchit Varma</MarkTitle>
            <MarkSubTitle>Sep 09 | 5 mins</MarkSubTitle>
          </div>
        </MarkBox>
      </Box>
    </>
  );
};

export const MainPost = () => {
  return (
    <>
      <MainPostBox>
        <MainPostImg alt="Games" src={coverImg} />
        <MainPostText />
      </MainPostBox>
    </>
  );
};

const MiddleAdvertise = styled.img`
  width: 100%;
  margin: 100px 0 80px 0;
  cursor: pointer;
`;

const Latest = styled.div`
  margin: 0 auto 50px auto;
  padding-bottom: 15px;
  max-width: 1230px;
  padding: 0px 15px 20px 15px;
  box-sizing: border-box;
  font-size: 40px;
  border-bottom: 2px solid #c4c4c4;
  letter-spacing: 1px;
`;

const MiddlePostBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1230px;
  margin: 0px auto 70px auto;
  padding: 0px 15px;
  box-sizing: border-box;

  @media screen and (max-width: 885px) {
    margin-bottom: 10px;
  }
`;

const MiddlePostText = () => {
  return (
    <>
      <MiddlePostBox>
        <MainPostTitle>
          India squad for Cricket T20 World Cup 2021: All you need to know
        </MainPostTitle>
        <SubTitle>
          The suspense around the Indian squad for the upcoming Cricket T20
          World Cup 2021, to be played in the United Arab Emirates from October
          14 to November 17, was over on Wednesday night as the selectors
          announced the list of players who will be making the trip to the T20
        </SubTitle>
        <MarkBox>
          <Img src={star} />
          <div>
            <MarkTitle>Devarchit Varma</MarkTitle>
            <MarkSubTitle>Sep 09 | 5 mins</MarkSubTitle>
          </div>
        </MarkBox>
      </MiddlePostBox>
    </>
  );
};

const BlockDiv = styled.div`
  height: 60px;

  @media screen and (max-width: 885px) {
    display: none;
  }
`;

const ShowMoreBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 60px 0;

  @media screen and (max-width: 885px) {
    margin: 60px 0 50px 0;
  }
`;

const ShowMoreButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 40px;
  background: linear-gradient(#ee3124, #d00d00);
  border-radius: 4px;
  cursor: pointer;
  box-sizing: border-box;
  color: white;
  font-size: 20px;
`;


const ShowMore = () => {
  return (
    <>
    <Goto to="/all">
    <ShowMoreBox>
        <ShowMoreButton>All Posts</ShowMoreButton>
      </ShowMoreBox>
    </Goto>
    </>
  );
};

export default function Home() {
  return (
    <>
      <MainAnnouncement />
      <MainPost />
      <LazyPost />
      <BlockDiv />
      <LazyPost />
      <MiddleAdvertise alt="advertiseGames" src={advertise} />
      <Latest>LATEST</Latest>
      <MiddlePostText />
      <LazyPost />
      <BlockDiv />
      <LazyPost />
      <ShowMore />
    </>
  );
}

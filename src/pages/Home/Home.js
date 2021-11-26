import React, { useEffect, useState } from "react";
import styled from "styled-components";
import trending from "../../images/trending.png";
import { Slideshow } from "./Slideshow";
import advertise from "../../images/advertise.webp";
import { Link } from "react-router-dom";
import { MainPostContent, MainCoverPost } from "../../global/Post";
import { FetchTestAPI, FetchTestAPI02 } from "../../global/API";

const Goto = styled(Link)`
  text-decoration: none;
`;

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

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1230px;
  padding: 0px 15px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const MiddleAdvertise = styled.img`
  width: 100%;
  margin: 100px 0 80px 0;
  cursor: pointer;
`;

const Latest = styled.div`
  margin: 0 auto 10px auto;
  max-width: 1230px;
  padding: 0px 15px 20px 15px;
  box-sizing: border-box;
  font-size: 40px;
  border-bottom: 2px solid #c4c4c4;
  letter-spacing: 1px;
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
      <Goto to="/gameinformation">
        <ShowMoreBox>
          <ShowMoreButton>All Posts</ShowMoreButton>
        </ShowMoreBox>
      </Goto>
    </>
  );
};

export default function Home() {
  const [coverPost, setCoverPost] = useState([]);
  const [post, setPost] = useState([]);
  const [post02, setPost02] = useState([]);

  useEffect(() => {
    FetchTestAPI().then((data) => {
      setCoverPost(data.data.slice(0, 1));
      setPost(data.data.slice(0, 9));
    });
    FetchTestAPI02().then((data) => {
      setPost02(data.data.slice(0, 9));
    });
  }, []);

  return (
    <>
      <MainAnnouncement />
      {coverPost.map((data) => {
        return (
          <MainCoverPost
            to={data.crawler_No}
            key={data.crawler_No}
            src={data.crawler_PicUrl}
            title={data.crawler_Title.substring(0, 18)}
            content={data.crawler_Content.substring(0, 70)}
            name={data.crawler_Web}
            time={data.crawler_Date}
          />
        );
      })}
      <Box>
        {post.length !== 0 &&
          post.map((data) => {
            return (
              <MainPostContent
                to={data.crawler_No}
                key={data.crawler_No}
                src={data.crawler_PicUrl}
                title={data.crawler_Title.substring(0, 18)}
                content={data.crawler_Content.substring(0, 70)}
                name={data.crawler_Web}
                time={data.crawler_Date}
              />
            );
          })}
      </Box>
      <MiddleAdvertise alt="advertiseGames" src={advertise} />
      <Latest>Game Information</Latest>
      <Box>
        {post02.length !== 0 &&
          post02.map((data) => {
            return (
              <MainPostContent
                to={data.crawler_No}
                key={data.crawler_No}
                src={data.crawler_PicUrl}
                title={data.crawler_Title.substring(0, 10)}
                content={data.crawler_Content.substring(0, 70)}
                name={data.crawler_Web}
                time={data.crawler_Date}
              />
            );
          })}
      </Box>
      <ShowMore />
    </>
  );
}

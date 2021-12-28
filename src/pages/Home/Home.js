import React, { useEffect } from "react";
import styled from "styled-components";
import trending from "../../images/trending.png";
import { Slideshow } from "./Slideshow";
import { Link } from "react-router-dom";
import { MainPostContent, MainCoverPost } from "../../global/Post";
import { LoadingBox } from "../../global/Loading";
import useHandleArticle from "../../global/useHandleArticle";
import presetBasketball from "../../images/presetBasketball.jpg";
import presetBaseball from "../../images/presetBaseball.jpg";

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
        最新
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

const SlideshowText = styled.div`
  display: flex;
  align-items: center;
  height: 69px;
  box-sizing: border-box;
  padding-left: 25px;
  color: black;
`;

const MainAnnouncement = ({ content }) => {
  return (
    <>
      <Announcement>
        <AnnouncementTitle />
        <SlideshowBox>
          <Slideshow content={content} />
        </SlideshowBox>
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

// const MiddleAdvertise = styled.img`
//   width: 100%;
//   margin: 100px 0 80px 0;
//   cursor: pointer;
// `;

const Latest = styled.div`
  margin: 50px auto 10px auto;
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
      <Goto to="/basketball">
        <ShowMoreBox>
          <ShowMoreButton>觀看更多</ShowMoreButton>
        </ShowMoreBox>
      </Goto>
    </>
  );
};

export default function Home() {
  const {
    load,
    homePageArticle,
    coverPost,
    honePageTopPost,
    honePageBottomPost,
  } = useHandleArticle();

  useEffect(() => {
    homePageArticle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {load && <LoadingBox />}
      <MainAnnouncement
        content={honePageTopPost.map((data) => {
          return (
            <div className="each-slide">
              <Goto to={`/${data.crawler_No}`}>
                <SlideshowText>
                  {data.crawler_Title.substring(0, 50)}
                </SlideshowText>
              </Goto>
            </div>
          );
        })}
      />
      {coverPost.map((data) => {
        return (
          <MainCoverPost
            to={data.crawler_No}
            key={data.crawler_No}
            src={data.crawler_PicUrl}
            title={data.crawler_Title.substring(0, 18)}
            preset={presetBasketball}
            content={data.crawler_Content.substring(0, 250)}
            name={data.crawler_Web}
            time={data.crawler_Date}
          />
        );
      })}
      <Box>
        {honePageTopPost.length !== 0 &&
          honePageTopPost.map((data) => {
            return (
              <MainPostContent
                to={data.crawler_No}
                key={data.crawler_No}
                src={data.crawler_PicUrl}
                preset={presetBasketball}
                title={data.crawler_Title.substring(0, 18)}
                content={data.crawler_Content.substring(0, 70)}
                name={data.crawler_Web}
                time={data.crawler_Date}
              />
            );
          })}
      </Box>
      {/* <MiddleAdvertise alt="advertiseGames" src={advertise} /> */}
      <Latest>籃球</Latest>
      <Box>
        {honePageBottomPost.length !== 0 &&
          honePageBottomPost.map((data) => {
            return (
              <MainPostContent
                to={data.crawler_No}
                key={data.crawler_No}
                src={data.crawler_PicUrl}
                preset={presetBaseball}
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

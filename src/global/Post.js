import styled from "styled-components";
import star from "../images/star.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import pg180 from "../images/pg180.jpeg";
import pg192 from "../images/pg192.jpeg";
import playGamesLongLogo from "../images/playGamesLongLogo.svg";

const PostBox = styled.div`
  width: 32%;
  margin-top: 70px;

  @media screen and (max-width: 885px) {
    width: 100%;
    margin-top: 40px;
  }
`;

const MainPostImgBox = styled.div`
  max-width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;

  @media screen and (max-width: 885px) {
    margin-top: 50px;
  }
`;

const MainPostImgSize = styled.img`
  width: 100%;
`;

const MainPostImg = ({ src }) => {
  return (
    <MainPostImgBox>
      <MainPostImgSize alt="Game" src={src} />
    </MainPostImgBox>
  );
};

const MainPostTitle = styled.h1`
  font-size: 22px;
  font-weight: 700;
  margin-top: 0;
  cursor: pointer;
  color: black;

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

const GoTo = styled(Link)`
  text-decoration: none;
`;

const SEO = ({ title, src }) => (
  <Helmet>
    <meta charset="utf-8" />
    <title> PlayGames | {title} </title>
    <link rel="canonical" href="https://playgames.ai" />
    <meta property="og:url" itemprop="url" content="https://playgames.ai" />
    <meta
      property="og:title"
      itemprop="name"
      content={`PlayGames | ${title}`}
    />
    <meta
      property="og:image"
      itemprop="image"
      content={src !== "" ? src : playGamesLongLogo}
    />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:type" content="website" />
    <meta
      name="description"
      content="Welcome to Play Games! This website shares information about the famous games, including online games, cards games, latest sport news and vehicles in India."
    />
    <meta
      property="og:description"
      itemprop="description"
      content="Welcome to Play Games! This website shares information about the famous games, including online games, cards games, latest sport news and vehicles in India."
    />
    <meta name="viewport" content="width=1280" />
    <meta name="robots" content="index,follow,noarchive" />
    <link rel="apple-touch-icon" sizes="180x180" href={pg180} />
    <link rel="shortcut icon" sizes="192x192" href={pg192} />
    <meta property="og:locale" content="en-IN" />
    <meta property="fb:app_id" content="703025527750832" />
    <meta
      property="og:site_name"
      name="application-name"
      content="playgamesai"
    />
    <meta
      property="article:publisher"
      content="https://www.facebook.com/playgamesai"
    />
  </Helmet>
);

export const MainPostContent = ({ to, src, title, content, name, time }) => {
  return (
    <>
      <SEO title={title} src={src} />
      <PostBox>
        <GoTo to={`/${to}`}>
          <MainPostImg src={src} />
        </GoTo>
        <GoTo to={`/${to}`}>
          <MainPostTitle>{title}</MainPostTitle>
        </GoTo>
        <SubTitle>{content}</SubTitle>
        <MarkBox>
          <Img src={star} />
          <div>
            <MarkTitle>{name}</MarkTitle>
            <MarkSubTitle>{time}</MarkSubTitle>
          </div>
        </MarkBox>
      </PostBox>
    </>
  );
};

const MainPostTextBox = styled.div`
  width: 35%;
  padding-left: 25px;

  @media screen and (max-width: 885px) {
    width: 100%;
    padding-left: 0px;
    margin-top: 50px;
  }
`;

const MainPostBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1230px;
  margin: 70px auto;
  padding: 0px 15px;
  box-sizing: border-box;

  @media screen and (max-width: 885px) {
    width: 100%;
    margin-bottom: 40px;
  }
`;

const MainCoverPostImgBox = styled.div`
  max-width: 60%;
  height: 360px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media screen and (max-width: 885px) {
    max-width: 100%;
  }
`;

// const MainCoverImgBox = styled.div`
//   width: 720px;
//   height: 360px;
//   align-items: center;
//   justify-content: center;
//   overflow: hidden;
//   background-color: red;

//   @media screen and (max-width: 885px) {
//     width: 100%;
//   }
// `;

const MainCoverPostImg = styled.img`
  width: 100%;
`;

export const MainCoverPost = ({ to, src, title, content, name, time }) => {
  return (
    <>
      <SEO title={title} src={src} />
      <MainPostBox>
        <MainCoverPostImgBox>
          <GoTo to={`/${to}`}>
            <MainCoverPostImg alt="Games" src={src} />
          </GoTo>
        </MainCoverPostImgBox>
        <MainPostTextBox>
          <GoTo to={`/${to}`}>
            <MainPostTitle>{title}</MainPostTitle>
          </GoTo>
          <SubTitle>{content}</SubTitle>
          <MarkBox>
            <Img src={star} />
            <div>
              <MarkTitle>{name}</MarkTitle>
              <MarkSubTitle>{time}</MarkSubTitle>
            </div>
          </MarkBox>
        </MainPostTextBox>
      </MainPostBox>
    </>
  );
};

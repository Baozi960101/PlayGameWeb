import React, { useEffect } from "react";
import styled from "styled-components";
import { MainCoverPost, MainPostContent } from "../../global/Post";
import { ChangePageButton } from "../../global/ChangePage";
import useHandleArticle from "../../global/useHandleArticle";
import { ScrollToTop } from "../../global/Scroll";
import { LoadingBox } from "../../global/Loading";

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

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1230px;
  padding: 0px 15px;
  margin: 0 auto;
  box-sizing: border-box;
`;

export default function Sports() {
  const {
    post,
    page,
    ChangeNextPage,
    ChangePrevPage,
    load,
    sportsPageArticle,
    coverPost,
  } = useHandleArticle();

  //以下是新增內容
  useEffect(() => {
    ScrollToTop();
    sportsPageArticle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {load && <LoadingBox />}
      <MainTitle>Sports</MainTitle>
      {coverPost.map((data) => {
        return (
          <MainCoverPost
            to={data.crawler_No}
            key={data.crawler_No}
            src={data.crawler_PicUrl}
            title={data.crawler_Title.substring(0, 18)}
            content={data.crawler_Content.substring(0, 250)}
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
                key={data.crawler_No}
                to={data.crawler_No}
                src={data.crawler_PicUrl}
                title={data.crawler_Title.substring(0, 10)}
                content={data.crawler_Content.substring(0, 70)}
                name={data.crawler_Web}
                time={data.crawler_Date}
              />
            );
          })}
      </Box>
      <ChangePageButton
        changeNextPage={ChangeNextPage}
        changePrevPage={ChangePrevPage}
        page={page}
      />
    </>
  );
}
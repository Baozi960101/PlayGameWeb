import React, { useEffect } from "react";
import styled from "styled-components";
import { MainCoverPost, MainPostContent } from "../../global/Post";
import { TestURL } from "../../global/API";
import { ChangePageButton } from "../../global/ChangePage";
import useHandleArticle from "../../global/useHandleArticle";
import { ScrollToTop } from "../../global/Scroll";

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

export default function GameInformation() {
  const { FetchDate, post, page, ChangeNextPage, ChangePrevPage } =
    useHandleArticle();

  useEffect(() => {
    ScrollToTop();
    FetchDate(TestURL);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <MainTitle>Game Information</MainTitle>
      <MainCoverPost
        title="India squad for Cricket T20 World Cup 2021: All you need to know"
        content="The suspense around the Indian squad for the upcoming Cricket T20
          World Cup 2021, to be played in the United Arab Emirates from October
          14 to November 17, was over on Wednesday night as the selectors
          announced the list of players who will be making the trip to the T20"
        name="Devarchit Varma"
        time="Sep 09 | 5 mins"
      />
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

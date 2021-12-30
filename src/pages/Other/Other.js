import React, { useEffect } from "react";
import styled from "styled-components";
import { MainCoverPost, MainPostContent } from "../../global/Post";
import { ChangePageButton } from "../../global/ChangePage";
import useHandleArticle from "../../global/useHandleArticle";
import { ScrollToTop } from "../../global/Scroll";
import { LoadingBox } from "../../global/Loading";
import { SourceApi, NewsApi } from "../../global/API";
import presetSports from "../../images/presetSports.jpg";

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

async function fetchApi(FetchDate) {
  const res = await fetch(SourceApi);
  const { data } = await res.json();
  // eslint-disable-next-line no-use-before-define
  FetchDate(
    NewsApi(
      data.其他
        .map((item) => {
          return item.source_Name;
        })
        .join(),
      "other"
    )
  );
}

export default function Other() {
  const {
    FetchDate,
    post,
    page,
    ChangeNextPage,
    ChangePrevPage,
    setLoad,
    load,
    coverPost,
  } = useHandleArticle();

  //以下是新增內容
  useEffect(() => {
    setLoad(true);
    ScrollToTop();
    fetchApi(FetchDate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {load && <LoadingBox />}
      <MainTitle>其他</MainTitle>
      {coverPost.map((data) => {
        return (
          <MainCoverPost
            to={data.crawler_No}
            key={data.crawler_No}
            src={data.crawler_PicUrl}
            preset={presetSports}
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
                preset={presetSports}
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

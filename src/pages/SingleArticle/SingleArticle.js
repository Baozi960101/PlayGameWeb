import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { MainPostContent } from "../../global/Post";
import { AloneApi } from "../../global/API";
import { SlugContext } from "../../global/context";
import useHandleArticle from "../../global/useHandleArticle";
import { LoadingBox } from "../../global/Loading";
import presetBaseball from "../../images/presetBaseball.jpg";
import presetSports from "../../images/presetSports.jpg";

const MainBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1230px;
  margin: 50px auto;
  padding: 0px 15px;
  box-sizing: border-box;

  @media screen and (max-width: 885px) {
    margin-bottom: 40px;
  }
`;

const ArticleCoverBox = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const ArticleCover = styled.img`
  width: 100%;
`;

const ArticleTitle = styled.div`
  font-size: 36px;
  font-weight: 500;
  margin: 50px 0 20px 0;

  & + & {
    margin-top: 40px;
  }
`;

const ArticleContent = styled.div`
  font-size: 24px;
  font-weight: 400;
  margin: 20px 0;
  line-height: 1.65;

  & + & {
    margin-top: 10px;
  }
`;

// const MiddleAdvertise = styled.img`
//   width: 100%;
//   margin: 100px 0 80px 0;
//   cursor: pointer;
// `;

const MoreLikeThis = styled.div`
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

const MainSinglePost = ({ src, title, content }) => {
  return (
    <MainBox>
      <ArticleCoverBox>
        <ArticleCover src={src === "" ? presetSports : src} />
      </ArticleCoverBox>
      <ArticleTitle>{title}</ArticleTitle>
      <ArticleContent>
        {/* `<h4><span style="font-size: 14px;"><strong>ewgewggewgew</strong></span></h4>
      <h4>你好拉</h4>` */}
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </ArticleContent>
    </MainBox>
  );
};

export default function SingleArticle() {
  const { aloneSlug } = useContext(SlugContext);
  const [singlePost, setSinglePost] = useState([]);

  const { MoreLikeThisArticle, post, load } = useHandleArticle();

  useEffect(() => {
    if (aloneSlug !== "") {
      fetch(AloneApi(aloneSlug))
        .then((res) => res.json())
        .then((data) => {
          setSinglePost([data.data[0]]);
        });
    }
  }, [aloneSlug]);

  useEffect(() => {
    MoreLikeThisArticle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {load && <LoadingBox />}
      {singlePost.length !== 0 &&
        singlePost.map((data) => {
          return (
            <MainSinglePost
              key={data.crawler_No}
              src={data.crawler_PicUrl}
              title={data.crawler_Title}
              content={data.crawler_Content}
            />
          );
        })}
      {/* <MiddleAdvertise src={advertise} /> */}
      <MoreLikeThis>更多你會喜歡</MoreLikeThis>
      <Box>
        {post.length !== 0 &&
          post.map((data) => {
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
    </>
  );
}

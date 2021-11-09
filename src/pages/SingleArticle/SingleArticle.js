import React, { lazy, Suspense } from "react";
import styled from "styled-components";
import advertise from "../../images/advertise.webp";
import singleArticleTest from "../../images/singleArticleTest.jpg";

const Post = lazy(() => import("../Home/Post"));

const LazyPost = () => {
  return (
    <Suspense fallback={<p>Loading....</p>}>
      <Post></Post>
    </Suspense>
  );
};

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

const ArticleCover = styled.img`
  max-width: 100%;
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
  line-height: 1.33;

  & + & {
    margin-top: 10px;
  }
`;

const MiddleAdvertise = styled.img`
  width: 100%;
  margin: 100px 0 80px 0;
  cursor: pointer;
`;

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

export default function SingleArticle() {
  return (
    <>
      <MainBox>
        <ArticleCover src={singleArticleTest} />
        <ArticleTitle>
          India squad for World Cup 2021: All you need to know
        </ArticleTitle>
        <ArticleContent>
          The suspense around the Indian squad for the upcoming World Cup 2021,
          to be played in the United Arab Emirates from October 14 to November
          17, was over on Wednesday night as the selectors announced the list of
          players who will be making the trip to the World Cup, first such
          tournament to be played since the one India hosted in mid-2016.
        </ArticleContent>
        <ArticleContent>
          The Indian selectors sprang quite a few surprises in their
          announcement of the Indian squad for the World Cup. While Ravichandran
          Ashwin made a comeback to the Indian side in the shortest format, the
          biggest news was perhaps the inclusion of former captain and World Cup
          winner Mahendra Singh Dhoni in the team.
        </ArticleContent>
        <ArticleContent>
          Dhoni has joined the Indian team in the capacity of a team mentor for
          the upcoming World Cup, joining forces with many of his former
          teammates and coach Ravi Shastri, whose contract is set to end after
          the event in the UAE.
        </ArticleContent>
        <ArticleContent>
          There were also some big names missing from the team. The selectors
          did not include opening batsman Shikhar Dhawan, India’s highest
          wicket-taker in the format, Yuzvendra Chahal as well as Deepak Chahar
          in their squad.
        </ArticleContent>
        <ArticleTitle>India Squad for World Cup</ArticleTitle>
        <ArticleContent>
          Virat Kohli (c), Rohit Sharma, KL Rahul, Suryakumar Yadav, Rishabh
          Pant (wk), Ishan Kishan (wk), Hardik Pandya, Ravindra Jadeja, Rahul
          Chahar, Ravichandran Ashwin, Axar Patel, Varun Chakravarthy, Jasprit
          Bumrah, Bhuvneshwar Kumar, Mohammed Shami.
        </ArticleContent>
      </MainBox>
      <MiddleAdvertise src={advertise} />
      <MoreLikeThis>More Like This</MoreLikeThis>
      <LazyPost />
    </>
  );
}

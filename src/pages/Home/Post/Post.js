import styled from "styled-components";
import star from "../../../images/star.png";
import post01 from "../../../images/post01.jpg";
import post02 from "../../../images/post02.png";
import post03 from "../../../images/post03.jpg";

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1230px;
  padding: 0px 15px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const PostBox = styled.div`
  width: 32%;

  @media screen and (max-width: 885px) {
    width: 100%;
  }
`;

const MainPostImg = styled.img`
  max-width: 100%;
  cursor: pointer;

  @media screen and (max-width: 885px) {
    margin-top: 50px;
  }
`;

const MainPostTitle = styled.h1`
  font-size: 22px;
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

const MainPostText = ({ src }) => {
  return (
    <>
      <PostBox>
        <MainPostImg alt="Games 2021" src={src} />
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
      </PostBox>
    </>
  );
};

export default function Post() {
  return (
    <>
      <Box>
        <MainPostText src={post01} />
        <MainPostText src={post02} />
        <MainPostText src={post03} />
      </Box>
    </>
  );
}

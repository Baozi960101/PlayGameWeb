import styled from "styled-components";
import logo from "../../images/logo.png";

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1230px;
  height: 95px;
  margin: 0 auto 50px auto;
  padding: 0px 15px;
  box-sizing: border-box;
`;

const LogoImg = styled.img`
  cursor: pointer;
  max-width: 150px;
  height: 64px;
`;

const SubTitleBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const SubTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;

  & + & {
    margin-left: 23px;
  }

  @media screen and (max-width: 980px) {
    font-size: 14px;
    & + & {
      margin-left: 16px;
    }
  }
`;

export default function Header() {
  return (
    <>
      <HeaderBox>
        <LogoImg alt="PlayGames" src={logo} />
        <SubTitleBox>
          <SubTitle>Top Games</SubTitle>
          <SubTitle>News</SubTitle>
          <SubTitle>Esports</SubTitle>
          <SubTitle>Fantasy</SubTitle>
          <SubTitle>Rummy</SubTitle>
          <SubTitle>Sports News</SubTitle>
          <SubTitle>Culture</SubTitle>
          <SubTitle>FAQs</SubTitle>
          <SubTitle>Support</SubTitle>
        </SubTitleBox>
      </HeaderBox>
    </>
  );
}

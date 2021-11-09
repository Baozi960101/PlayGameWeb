import { useState } from "react";
import styled from "styled-components";
import logo from "../../images/logo.png";
import menu from "../../images/menu.svg";
import { Link } from "react-router-dom"

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1230px;
  height: 95px;
  margin: 0 auto 50px auto;
  padding: 0px 15px;
  box-sizing: border-box;

  @media screen and (max-width: 885px) {
    margin-bottom: 0px;
    height: 80px;
  }
`;

const HeaderRWD = styled.div`
  position: relative;
  @media screen and (max-width: 885px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

const Menu = styled.img`
  display: none;
  width: 25px;
  height: 25px;
  position: absolute;
  left: 0;
  cursor: pointer;

  @media screen and (max-width: 885px) {
    display: flex;
  }
`;

const HeaderRWDOption = styled.div`
  width: 100%;
  height: auto;
  border-style: 0;
  box-sizing: border-box;
  position: absolute;
  background-color: #f9f9f9;
  z-index: 5;
  padding-bottom: 8px;

  ${(props) =>
    props.$move &&
    `border-top: 1px solid #aba5b6;border-bottom: 1px solid #aba5b6;`}
`;
const SubTitleRWD = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
  height: 0px;
  overflow: hidden;
  transition: height 0.3s ease-in-out;

  ${(props) => props.$move && `height:46px`}
`;

const Goto = styled(Link)`

`

const LogoImg = styled.img`
  cursor: pointer;
  max-width: 150px;
  height: 64px;

  @media screen and (max-width: 885px) {
    max-width: 150px;
    height: 50px;
  }
`;

const SubTitleBox = styled.div`
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 885px) {
    display: none;
  }
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
  const [showOption, setShowOption] = useState(false);

  function optionChange() {
    setShowOption(!showOption);
  }

  return (
    <>
      <HeaderBox>
        <HeaderRWD>
          <Menu onClick={optionChange} src={menu} />
          <Goto to="./">
            <LogoImg alt="PlayGames" src={logo} />
          </Goto>
        </HeaderRWD>
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
      <HeaderRWDOption $move={showOption}>
        <SubTitleRWD $move={showOption}>Top Games</SubTitleRWD>
        <SubTitleRWD $move={showOption}>News</SubTitleRWD>
        <SubTitleRWD $move={showOption}>Esports</SubTitleRWD>
        <SubTitleRWD $move={showOption}>Fantasy</SubTitleRWD>
        <SubTitleRWD $move={showOption}>Rummy</SubTitleRWD>
        <SubTitleRWD $move={showOption}>Sports News</SubTitleRWD>
        <SubTitleRWD $move={showOption}>Culture</SubTitleRWD>
        <SubTitleRWD $move={showOption}>FAQs</SubTitleRWD>
        <SubTitleRWD $move={showOption}>Support</SubTitleRWD>
      </HeaderRWDOption>
    </>
  );
}

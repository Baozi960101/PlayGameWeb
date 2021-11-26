import styled from "styled-components";
import facebook from "../../images/facebook.png";
import instagram from "../../images/instagram.png";
import twitter from "../../images/twitter.png";
import youtube from "../../images/youtube.png";
// import footerIcon from "../../images/footerIcon.webp";
// import footerIcon2 from "../../images/footerIcon2.webp";
import playGamesLongLogo from "../../images/playGamesLongLogo.svg";

const FooterBox = styled.div`
  width: 100%;
  background-color: #f2f2f2;
  padding: 40px 0;
  margin-top: 60px;

  @media screen and (max-width: 885px) {
    padding: 20px 0;
    margin-top: 40px;
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1230px;
  padding: 0px 15px;
  margin: 0 auto;
  box-sizing: border-box;

  @media screen and (max-width: 885px) {
    justify-content: center;
  }
`;

const FooterLogoImg = styled.img`
  width: 141px;
  height: 61px;
`;

// const FooterMiddleBox = styled.div`
//   width: 320px;
//   color: #3b3743;

//   @media screen and (max-width: 885px) {
//     margin: 20px 0;
//   }
// `;

// const FooterMiddleContent = styled.div`
//   display: flex;
//   width: 100%;
//   justify-content: space-between;
// `;

// const FooterMiddleContentLeft = styled.div`
//   display: flex;
//   border-right: 1px solid #aba5b6;
//   padding-right: 20px;
//   box-sizing: border-box;
// `;
// const FooterMiddleContentRight = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   box-sizing: border-box;
// `;

// const FooterMiddleContentImg = styled.img`
//   width: 50px;
//   height: 50px;
//   cursor: pointer;
// `;

// const FooterMiddleContentLeftText = styled.div`
//   display: flex;
//   align-items: center;
//   width: 100px;
//   padding-left: 5px;
//   font-size: 14px;
//   color: #595365;
//   box-sizing: border-box;
// `;

// const FooterMiddleContentRightText = styled.div`
//   display: flex;
//   align-items: center;
//   width: 80px;
//   padding-left: 20px;
//   font-size: 14px;
//   color: #595365;
//   box-sizing: border-box;
// `;

// const FooterMiddleContentBottom = styled.div`
//   width: 85%;
//   margin: 25px auto 0 auto;
//   padding-top: 10px;
//   border-top: 1px solid #aba5b6;
//   display: flex;
//   justify-content: center;
//   font-size: 14px;
//   color: #595365;
//   cursor: pointer;

//   @media screen and (max-width: 885px) {
//     border-bottom: 1px solid #aba5b6;
//     padding-bottom: 10px;
//     margin: 25px auto 20px auto;
//   }
// `;

// const FooterMiddle = () => {
//   return (
//     <FooterMiddleBox>
//       <FooterMiddleContent>
//         <FooterMiddleContentLeft>
//           <FooterMiddleContentImg alt="footerIcon" src={footerIcon} />
//           <FooterMiddleContentLeftText>
//             RNG Certified by iTech
//           </FooterMiddleContentLeftText>
//         </FooterMiddleContentLeft>
//         <FooterMiddleContentRight>
//           <FooterMiddleContentRightText>
//             Member of TORF
//           </FooterMiddleContentRightText>
//           <FooterMiddleContentImg alt="footerIcon" src={footerIcon2} />
//         </FooterMiddleContentRight>
//       </FooterMiddleContent>
//       <FooterMiddleContentBottom>
//         T&C | Privacy Policy
//       </FooterMiddleContentBottom>
//     </FooterMiddleBox>
//   );
// };

const FooterIconBox = styled.div`
  width: 310px;
  display: flex;
  justify-content: space-between;
`;

const FooterIcon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const FooterYouTubeIcon = styled.img`
  width: 42px;
  height: 30px;
  cursor: pointer;
`;

const FooterRWD = styled.div`
  @media screen and (max-width: 885px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const IconBox = () => {
  return (
    <FooterIconBox>
      <FooterIcon src={facebook} />
      <FooterIcon src={twitter} />
      <FooterIcon src={instagram} />
      <FooterYouTubeIcon src={youtube} />
    </FooterIconBox>
  );
};

export default function Footer() {
  return (
    <>
      <FooterBox>
        <FooterContent>
          <FooterRWD>
            <FooterLogoImg src={playGamesLongLogo} />
          </FooterRWD>
          <FooterRWD>
            <IconBox />
          </FooterRWD>
        </FooterContent>
      </FooterBox>
    </>
  );
}

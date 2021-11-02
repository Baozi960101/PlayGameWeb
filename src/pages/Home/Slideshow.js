import styled from "styled-components";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const SlideshowText = styled.div`
  display: flex;
  align-items: center;
  height: 69px;
  box-sizing: border-box;
  padding-left: 25px;
`;

export function Slideshow() {
  const fadeProperties = {
    duration: 1500,
    canSwipe: true,
    autoplay: true,
    transitionDuration: 300,
    infinite: true,
    arrows: false,
  };

  return (
    <div
      style={{ position: "absolute", width: "100%", height: "100%" }}
      className="slide-container"
    >
      <Slide {...fadeProperties}>
        <div className="each-slide">
          <SlideshowText>
            Bangalore Indian T20 League 2021 Schedule, Venues, Match Timings &
            Squad
          </SlideshowText>
        </div>
        <div className="each-slide">
          <SlideshowText>
            How to play Indian T20 Cricket Fantasy league 2021?
          </SlideshowText>
        </div>
        <div className="each-slide">
          <SlideshowText>
            Hyderabad Indian T20 League 2021 Schedule, Venues, Match Timings &
            Squad
          </SlideshowText>
        </div>
      </Slide>
    </div>
  );
}

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export const Slideshow = ({ content }) => {
  const fadeProperties = {
    duration: 1500,
    canSwipe: true,
    autoplay: true,
    transitionDuration: 700,
    infinite: true,
    arrows: false,
  };

  return (
    <div
      style={{ position: "absolute", width: "100%", height: "100%" }}
      className="slide-container"
    >
      <Slide {...fadeProperties}>{content}</Slide>
    </div>
  );
};

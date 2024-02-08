/* eslint-disable react/prop-types */
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MENU_FOOD_IMG } from "../../utils/constants";

const CuisinesCarousel = ({ title, carousel }) => {
    
  return (
    <div className="carousel-container">
      <h3>Top Picks</h3>
      <Carousel
        className="carousel"
        autoFocus
        autoPlay
        infiniteLoop
        showThumbs={false}
        centerMode
        centerSlidePercentage={40}
        emulateTouch
      >
        {carousel.map((card) => (
          <img key={card?.bannerId} src={MENU_FOOD_IMG + card.creativeId} />
        ))}
      </Carousel>
    </div>
  );
};

export default CuisinesCarousel;

import {React} from 'react';
import './CarouselLibros.scss';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
const CarouselLibros = () => {
    return (
        <div style={{ padding: "20px" }}>
          <h2>React Multi Carousel</h2>
          <Carousel responsive={responsive} infinite={true} autoPlay={true}>
            <div>
              <img src="https://via.placeholder.com/300x200?text=1" alt="Slide 1" />
            </div>
            <div>
              <img src="https://via.placeholder.com/300x200?text=2" alt="Slide 2" />
            </div>
            <div>
              <img src="https://via.placeholder.com/300x200?text=3" alt="Slide 3" />
            </div>
            <div>
              <img src="https://via.placeholder.com/300x200?text=4" alt="Slide 4" />
            </div>
            <div>
              <img src="https://via.placeholder.com/300x200?text=5" alt="Slide 5" />
            </div>
          </Carousel>
        </div>
      );
}

export default CarouselLibros;
import {React} from 'react';
import './CarouselLibros.scss';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardBook from '../CardBook/CardBook';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4
    },
    desktop_small: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };
const CarouselLibros = ({data}) => {
    return (
        <div style={{ padding: "20px" }}>
          <Carousel responsive={responsive} infinite={true} autoPlay={false}>
            {data.map((book) => (
              <div key={book.id}>
                <CardBook book={book} />
              </div>
            ))}
          </Carousel>
        </div>
      );
}

export default CarouselLibros;
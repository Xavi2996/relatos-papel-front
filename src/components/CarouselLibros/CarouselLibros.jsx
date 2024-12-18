import {React} from 'react';
import './CarouselLibros.scss';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {books, novedades, recomendados} from '../../mocks/books'
import CardBook from '../CardBook/CardBook';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };
const CarouselLibros = () => {
    return (
        <div style={{ padding: "20px" }}>
          <h2>React Multi Carousel</h2>
          <Carousel responsive={responsive} infinite={true} autoPlay={true}>
            {novedades.map((book) => (
              <div key={book.id}>
                <CardBook book={book} />
              </div>
            ))}
          </Carousel>
        </div>
      );
}

export default CarouselLibros;
import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'http://res.cloudinary.com/dlfnke6kc/image/upload/v1526602634/etoile_amour_yc6eyo.jpg',
    altText: 'Slide 1',
    caption: ''
  }
];

const Carousel = () => <UncontrolledCarousel items={items} />;

export default Carousel;

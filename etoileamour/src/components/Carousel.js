import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'http://res.cloudinary.com/dlfnke6kc/image/upload/v1526602634/etoile_amour_yc6eyo.jpg',
    altText: 'Slide 1',
    caption: ''
  },
	{
    src: 'http://res.cloudinary.com/dlfnke6kc/image/upload/v1526629606/etoile_amour03_elmxzx.jpg',
    altText: 'Slide 2',
    caption: ''
  },
	{
    src: 'http://res.cloudinary.com/dlfnke6kc/image/upload/v1526629585/etoile_amour02_h9dnym.jpg',
    altText: 'Slide 3',
    caption: ''
  }
];

const Carousel = () => <UncontrolledCarousel items={items} />;

export default Carousel;

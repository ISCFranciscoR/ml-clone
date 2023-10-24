import React from 'react';
import './HomeCarousel.css';
import Slider from 'react-slick';
import '/node_modules/slick-carousel/slick/slick.css';
import '/node_modules/slick-carousel/slick/slick-theme.css';
import { Settings } from 'react-slick';

interface Props {
}

interface Image {
  id: `${string}-${string}-${string}-${string}-${string}`;
  path: string;
  title: string;
}

const CAROUSEL_IMG_SOURCE = '/src/assets/imgs/carousel/';
const NUMBER_OF_IMAGES = 9;
const images: Image[] = Array.from( {
  length: NUMBER_OF_IMAGES
}, ( _v, i ) => {
  i += 1;
  return {
    id: crypto.randomUUID(),
    title: `carousel-${i}`,
    path: `${CAROUSEL_IMG_SOURCE}carousel-${i}.webp`
  };
} );

export const HomeCarousel: React.FC<Props> = () => {
  const settings: Settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    className: 'home-carousel'
  };
  return (
    <div>
      <Slider {...settings}>
        {images.map( img => <div key={img.id} className='home-carousel-item'><img src={img.path} alt={img.title} /></div> )}
      </Slider>
    </div>
  );
};

import React from 'react';
import Imagewall from '@kiwicom/orbit-landing-components/src/ImageWall';

import grid01 from '../images/grid01.jpg';
import grid02 from '../images/grid02.jpg';
import grid03 from '../images/grid03.jpg';
import grid04 from '../images/grid04.jpg';
import grid05 from '../images/grid05.jpg';
import grid06 from '../images/grid06.jpg';
import grid07 from '../images/grid07.jpg';
import grid08 from '../images/grid08.jpg';
import grid09 from '../images/grid09.jpg';

const images = [
  grid01,
  grid02,
  grid03,
  grid08,
  grid04,
  grid05,
  grid09,
  grid07,
  grid06,
];

const Images = () => {
  return <Imagewall images={images} />;
};

export default Images;

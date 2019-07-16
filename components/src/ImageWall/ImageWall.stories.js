// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react';

import grid01 from '../../static/grid01.jpg';
import grid02 from '../../static/grid02.jpg';
import grid03 from '../../static/grid03.jpg';
import grid04 from '../../static/grid04.jpg';
import grid05 from '../../static/grid05.jpg';
import grid06 from '../../static/grid06.jpg';
import grid07 from '../../static/grid07.jpg';
import grid08 from '../../static/grid08.jpg';
import grid09 from '../../static/grid09.jpg';

import Imagewall from './index';

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

storiesOf('ImageWall', module).add('Default', () => (
  <Imagewall images={images} />
));

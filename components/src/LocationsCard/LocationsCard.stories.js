// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';

import logo from '../../static/kiwi.svg';
import grid from '../../static/grid01.jpg';

import LocationCard from './index';

storiesOf('LocationCard', module).add('Default', () => (
  <LocationCard
    backgroundImage={grid}
    eventName="Travel Hack"
    location="Barcelona"
    logo={logo}
  />
));

// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';

import pattern from '../../static/pattern03.svg';
import background from '../../static/hero.jpg';
import logo from '../../static/kiwi.svg';
import grid from '../../static/grid01.jpg';

import Locations from './index';

storiesOf('Locations', module).add('Default', () => (
  <Locations
    title="Hack the travel and discover the world from a whole new
    perspective."
    pattern={pattern}
    backgroundImage={background}
    locations={[
      {
        backgroundImage: grid,
        eventName: 'Travel Hack',
        location: 'Barcelona',
        logo: logo,
      },
      {
        backgroundImage: grid,
        eventName: 'Travel Hack',
        location: 'Barcelona',
        logo: logo,
      },
      {
        backgroundImage: grid,
        eventName: 'Travel Hack',
        location: 'Barcelona',
        logo: logo,
      },
      {
        backgroundImage: grid,
        eventName: 'Travel Hack',
        location: 'Barcelona',
        logo: logo,
      },
    ]}
    locationsHeading="Choose your destination"
  />
));

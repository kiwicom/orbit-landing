// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Google from '../../static/sponsor01.svg';
import Cnn from '../../static/cnn.svg';
import Cisco from '../../static/cisco.svg';
import Airbnb from '../../static/airbnb.svg';
import Uber from '../../static/uber.svg';

import Sponsors from './index';

storiesOf('Sponsors', module).add('Default', () => (
  <Sponsors logos={[Google, Cnn, Airbnb, Cisco, Uber, Google, Airbnb, Cisco, Cnn]} />
));

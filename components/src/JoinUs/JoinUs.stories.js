// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';

import joinUsImg from '../../static/joinUsImg.jpg';
import joinUsPattern from '../../static/pattern03.svg';
import joinUsPattern2 from '../../static/pattern04.svg';

import JoinUs from './index';

storiesOf('JoinUs', module).add('Default', () => (
  <JoinUs img={joinUsImg} pattern={joinUsPattern} pattern2={joinUsPattern2} />
));

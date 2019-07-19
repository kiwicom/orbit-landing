// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react';

import missionImage from '../../static/mission.jpg';

import Mission from './index';

storiesOf('Mission', module).add('Default', () => (
  <Mission img={missionImage} />
));

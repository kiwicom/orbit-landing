// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react';

import missionImage from '../../static/mission.jpg';

import Mission from './index';

storiesOf('Mission', module).add('Default', () => (
  <Mission
    category="Our Mission"
    title="Making Travel Better"
    subTitle="by travellers, for travellers"
    description="How? We want to engage people by organising hackathons all over the
    world on 27 September. We will bring together engineers, designers,
    travel innovators, and others, offer them a creative and supportive
    environment, and encourage their ideas on how to hack travel."
    sideImage={missionImage}
  />
));

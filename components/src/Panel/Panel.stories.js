// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react';

import icChallenge from '../../static/ic-challenge.svg';
import icConnected from '../../static/ic-connected.svg';
import icTequila from '../../static/ic-tequila.svg';

import Panel from './index';

storiesOf('Panel', module).add('Default', () => (
  <Panel
    items={[
      {
        title: 'Two travel challenges',
        content:
          'How? We want to engage people by organising hackathons all over the world on 27 September. We will bring together engineers, designers, travel innovators and others.',
        img: icChallenge,
      },
      {
        title: 'Working in Teams',
        content:
          'How? We want to engage people by organising hackathons all over the world on 27 September. We will bring together engineers, designers, travel innovators and others.',
        img: icConnected,
      },
      {
        title: 'Tequila flavoured',
        content:
          'How? We want to engage people by organising hackathons all over the world on 27 September. We will bring together engineers, designers, travel innovators and others.',
        img: icTequila,
      },
    ]}
  />
));

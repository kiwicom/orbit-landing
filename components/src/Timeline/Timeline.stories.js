// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Timeline from './index';

storiesOf('Timeline', module)
  .add('Default', () => (
    <Timeline
      title="Schedule"
      content="We begin on Friday, 10th of May at 18:00 and we will be hacking for 24 hours. Don’t worry, we will provide everything you need so you can last all night long"
      items={[
        { time: '17:00', title: 'Registration' },
        { time: '17:30', title: 'Welcome and introduction' },
        { time: '18:00', title: 'Pitching of ideas' },
      ]}
    />
  ))
  .add('White', () => (
    <Timeline
      background="white"
      title="Schedule"
      content="We begin on Friday, 10th of May at 18:00 and we will be hacking for 24 hours. Don’t worry, we will provide everything you need so you can last all night long"
      items={[
        { time: '17:00', title: 'Registration' },
        { time: '17:30', title: 'Welcome and introduction' },
        { time: '18:00', title: 'Pitching of ideas' },
      ]}
    />
  ));

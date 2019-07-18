// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react';

import NavBar from './index';

storiesOf('NavBar', module).add('Default', () => (
  <div style={{ background: 'black' }}>
    <NavBar
      items={[
        {
          question: 'Do all the team members need to fill out the form?',
          answer: 'Yes, all the team must fill out the form',
        },
        {
          question: 'Do all the team members need to fill out the form?',
          answer: 'Yes, all the team must fill out the form',
        },
        {
          question: 'Do all the team members need to fill out the form?',
          answer: 'Yes, all the team must fill out the form',
        },
      ]}
    />
  </div>
));

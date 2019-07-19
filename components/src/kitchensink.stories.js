// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Stack from '@kiwicom/orbit-components/lib/Stack';

import Faq from './Faq/index';

storiesOf('KitchenSink', module).add('Default', () => (
  <Stack spacing="loose">
    <Faq
      items={[
        {
          question: 'Do all the team members need to fill out the form?',
          answer: 'Yes, all the team must fill out the form',
        },
        {
          question: 'Based on what criteria will you choose the winning teams?',
          answer: 'Yes, all the team must fill out the form',
        },
        {
          question: 'Do all the team members?',
          answer: 'Yes, all the team must fill out the form',
        },
        {
          question: 'Do all the team members need to form?',
          answer: 'Yes, all the team must fill out the form',
        },
      ]}
    />
  </Stack>
));

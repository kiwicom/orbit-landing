// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react';

import profilePicture from '../../static/profileImage.png';

import Mentors from './index';

storiesOf('Mentors', module).add('Default', () => (
  <Mentors
    category="Meet our"
    title="Mentors"
    subTitle="The mentors are top Kiwi.com Javascript engineers,"
    mentors={[
      {
        name: 'Luděk Vepřek',
        description:
          'Pavel aka Strajk likes planning, doing, and delivering useful things, mostly software. Knows a bit about programming, software architecture, and project management.',
        socials: {
          linkedin: 'https://linkedin.com',
          twitter: 'https://twitter.com',
          facebook: 'https://facebook.com',
        },
        profilePicture: profilePicture,
      },
      {
        name: 'Luděk Vepřek',
        description:
          'Pavel aka Strajk likes planning, doing, and delivering useful things, mostly software. Knows a bit about programming, software.',
        socials: {
          linkedin: 'https://linkedin.com',
          twitter: 'https://twitter.com',
          facebook: 'https://facebook.com',
        },
        profilePicture: profilePicture,
      },
      {
        name: 'Luděk Vepřek',
        description:
          'Pavel aka Strajk likes planning, doing, and delivering useful things, mostly software. Knows a bit about programming, software architecture, and project management. and project management.',
        socials: {
          linkedin: 'https://linkedin.com',
          twitter: 'https://twitter.com',
          facebook: 'https://facebook.com',
        },
        profilePicture: profilePicture,
      },
      {
        name: 'Luděk Vepřek',
        description:
          'Pavel aka Strajk likes planning, doing, and delivering useful things, mostly software. Knows a bit about programming, software architecture, and project management.',
        socials: {
          linkedin: 'https://linkedin.com',
          twitter: 'https://twitter.com',
          facebook: 'https://facebook.com',
        },
        profilePicture: profilePicture,
      },
    ]}
  />
));

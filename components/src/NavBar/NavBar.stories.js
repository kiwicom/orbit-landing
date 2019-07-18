// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react';

import NavBar from './index';

storiesOf('NavBar', module).add('Default', () => (
  <div style={{ background: 'black' }}>
    <NavBar
      title="Travel Hackathon"
      items={[
        {
          title: 'About',
          onClick: '',
          href: '#test',
        },
        {
          title: 'Prizes',
          onClick: '',
          href: '#test',
        },
        {
          title: 'FAQ',
          onClick: '',
          href: '#test',
        },
        {
          title: 'Contact',
          onClick: '',
          href: '#test',
        },
        {
          title: 'Sponsors',
          onClick: '',
          href: '#test',
        },
      ]}
    />
  </div>
));

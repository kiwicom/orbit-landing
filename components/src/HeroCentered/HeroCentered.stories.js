// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '@kiwicom/orbit-components/lib/Button';

import heroImg from '../../static/hero02.jpg';
import heroPattern from '../../static/hero2.svg';
import NavBar from '../NavBar';

import HeroCentered from './index';

storiesOf('HeroCentered', module)
  .add('Default', () => (
    <HeroCentered
      backgroundImage={heroImg}
      heroImage={heroPattern}
      actions={<Button>Register</Button>}
    />
  ))
  .add('With NavBar', () => (
    <HeroCentered
      backgroundImage={heroImg}
      heroImage={heroPattern}
      actions={<Button>Register</Button>}
      navBar={
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
      }
    />
  ));

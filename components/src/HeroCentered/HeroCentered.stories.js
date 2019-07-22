// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';

import heroImg from '../../static/hero02.jpg';
import heroPattern from '../../static/hero2.svg';
import NavBar from '../NavBar';

import Hero from './index';

storiesOf('HeroCentered', module)
  .add('Default', () => (
    <Hero backgroundImage={heroImg} heroImage={heroPattern} />
  ))
  .add('With NavBar', () => (
    <Hero
      backgroundImage={heroImg}
      heroImage={heroPattern}
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

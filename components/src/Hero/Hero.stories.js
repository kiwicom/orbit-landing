// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';

import heroImg from '../../static/hero.jpg';
import heroPattern from '../../static/pattern04.svg';
import NavBar from '../NavBar';

import Hero from './index';

storiesOf('Hero', module)
  .add('Default', () => <Hero img={heroImg} pattern={heroPattern} />)
  .add('With NavBar', () => (
    <Hero
      img={heroImg}
      pattern={heroPattern}
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

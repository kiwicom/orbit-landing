// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '@kiwicom/orbit-components/lib/Button';

import heroImg from '../../static/hero.jpg';
import heroPattern from '../../static/pattern04.svg';
import NavBar from '../NavBar';

import Hero from './index';

storiesOf('Hero', module)
  .add('Default', () => (
    <Hero
      title="Tavel Hackathon"
      date="10 May"
      location="Ljubljana"
      description="Join us in making travel better and win your share of 1.000
      EUR for flight tickets"
      backgroundImage={heroImg}
      pattern={heroPattern}
      actions={
        <>
          <Button>Register</Button>
          <Button type="white" bordered>
            Share
          </Button>
        </>
      }
    />
  ))
  .add('With NavBar', () => (
    <Hero
      title="Tavel Hackathon"
      date="10 May"
      location="Ljubljana"
      description="Join us in making travel better and win your share of 1.000
      EUR for flight tickets"
      backgroundImage={heroImg}
      pattern={heroPattern}
      actions={
        <>
          <Button>Register</Button>
          <Button type="white" bordered>
            Share
          </Button>
        </>
      }
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

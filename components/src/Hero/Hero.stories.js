// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';

import heroImg from '../../static/hero.jpg';
import heroPattern from '../../static/heroPattern.svg';

import Hero from './index';

storiesOf('Hero', module).add('Default', () => (
  <Hero img={heroImg} pattern={heroPattern} />
));

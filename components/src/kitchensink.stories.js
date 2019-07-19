// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

// Components
import Faq from './Faq';
import Hero from './Hero';
import NavBar from './NavBar';
import Mission from './Mission';
import Imagewall from './ImageWall';
import JoinUs from './JoinUs';
import Panel from './Panel';
// Images
import heroImg from '../static/hero.jpg';
import heroPattern from '../static/pattern04.svg';
import missionImage from '../static/mission.jpg';
import grid01 from '../static/grid01.jpg';
import grid02 from '../static/grid02.jpg';
import grid03 from '../static/grid03.jpg';
import grid04 from '../static/grid04.jpg';
import grid05 from '../static/grid05.jpg';
import grid06 from '../static/grid06.jpg';
import grid07 from '../static/grid07.jpg';
import grid08 from '../static/grid08.jpg';
import grid09 from '../static/grid09.jpg';
import joinUsImg from '../static/joinUsImg.jpg';
import joinUsPattern from '../static/pattern03.svg';
import icChallenge from '../static/ic-challenge.svg';
import icConnected from '../static/ic-connected.svg';
import icTequila from '../static/ic-tequila.svg';

const images = [
  grid01,
  grid02,
  grid03,
  grid08,
  grid04,
  grid05,
  grid09,
  grid07,
  grid06,
];

const StyledStack = styled.div`
  & > * {
    margin: 0 0 5.26vh 0 !important;
  }
`;

storiesOf('KitchenSink', module).add('Default', () => (
  <StyledStack>
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
    <Mission img={missionImage} />
    <Panel
      items={[
        {
          title: 'Two travel challenges',
          content:
            'How? We want to engage people by organising hackathons all over the world on 27 September. We will bring together engineers, designers, travel innovators and others.',
          img: icChallenge,
        },
        {
          title: 'Working in Teams',
          content:
            'How? We want to engage people by organising hackathons all over the world on 27 September. We will bring together engineers, designers, travel innovators and others.',
          img: icConnected,
        },
        {
          title: 'Tequila flavoured',
          content:
            'How? We want to engage people by organising hackathons all over the world on 27 September. We will bring together engineers, designers, travel innovators and others.',
          img: icTequila,
        },
      ]}
    />
    <Imagewall images={images} />
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
    <JoinUs img={joinUsImg} pattern={joinUsPattern} pattern2={heroPattern} />
  </StyledStack>
));

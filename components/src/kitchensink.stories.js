// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '@kiwicom/orbit-components/lib/Button';
import TextLink from '@kiwicom/orbit-components/lib/TextLink';
import Facebook from '@kiwicom/orbit-components/lib/icons/Facebook';
import Instagram from '@kiwicom/orbit-components/lib/icons/Instagram';
import Twitter from '@kiwicom/orbit-components/lib/icons/Twitter';
import Linkedin from '@kiwicom/orbit-components/lib/icons/Linkedin';

// Components
import Faq from './Faq';
import Hero from './Hero';
import NavBar from './NavBar';
import Mission from './Mission';
import Imagewall from './ImageWall';
import JoinUs from './JoinUs';
import Locations from './Locations';
import HeroCentered from './HeroCentered';
import Timeline from './Timeline';
import Footer from './Footer';
import Sponsors from './Sponsors';
import Prizes from './Prizes';
// Images
import logo from '../static/kiwi.svg';
import heroImg from '../static/hero.jpg';
import heroPattern from '../static/pattern04.svg';
import heroImg2 from '../static/hero02.jpg';
import heroSvg from '../static/hero2.svg';
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
import Google from '../static/sponsor01.svg';
import Cnn from '../static/cnn.svg';
import Cisco from '../static/cisco.svg';
import Airbnb from '../static/airbnb.svg';
import Uber from '../static/uber.svg';

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

storiesOf('KitchenSink', module).add('Default', () => (
  <>
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
    <HeroCentered
      backgroundImage={heroImg2}
      heroImage={heroSvg}
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
    <Locations
      title="Hack the travel and discover the world from a whole new
    perspective."
      pattern={heroPattern}
      locations={[
        {
          backgroundImage: grid01,
          eventName: 'Travel Hack',
          location: 'Barcelona',
          logo: logo,
        },
        {
          backgroundImage: grid01,
          eventName: 'Travel Hack',
          location: 'Barcelona',
          logo: logo,
        },
        {
          backgroundImage: grid01,
          eventName: 'Travel Hack',
          location: 'Barcelona',
          logo: logo,
        },
        {
          backgroundImage: grid01,
          eventName: 'Travel Hack',
          location: 'Barcelona',
          logo: logo,
        },
      ]}
      locationsHeading="Choose your destination"
    />
    <Mission
      category="Our Mission"
      title="Making Travel Better"
      subTitle="by travellers, for travellers"
      description="How? We want to engage people by organising hackathons all over the
    world on 27 September. We will bring together engineers, designers,
    travel innovators, and others, offer them a creative and supportive
    environment, and encourage their ideas on how to hack travel."
      sideImage={missionImage}
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
    <Prizes
      title="Prizes"
      description="The winning team of each local hackathon will be invited to the Global Round on 17–18 October in Prague. Look forward to a weekend full of learning and fun activities. The accommodation and travel costs expenses on us. Besides the Hackathon itself, teams will have the opportunity to explore Prague and enjoy the accompanying program we’ll prepare for them."
      prizes={[
        { place: 1, prize: '2000 €' },
        { place: 2, prize: '600 €' },
        { place: 3, prize: '400 €' },
      ]}
      infoText="The main prizes for the Grand finale will be paid as Kiwi.com vouchers."
    />
    <Timeline
      title="Schedule"
      content="We begin on Friday, 10th of May at 18:00 and we will be hacking for 24 hours. Don’t worry, we will provide everything you need so you can last all night long"
      items={[
        { time: '17:00', title: 'Registration' },
        { time: '17:30', title: 'Welcome and introduction' },
        { time: '18:00', title: 'Pitching of ideas' },
      ]}
    />
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
    <JoinUs
      title="Join Us"
      descrtiption="The participants will be selected based on their solution of entry
    task"
      additionalInformation="We value the participation of each member and we want all
    attendees to have an enjoying and fulfilling experience."
      actions={<Button>Register</Button>}
      additionalActions={
        <TextLink external href="https://kiwi.com" type="primary">
          Check our Code of Conduct
        </TextLink>
      }
      backgroundImage={joinUsImg}
      patterns={[joinUsPattern, joinUsPattern]}
    />
    <Sponsors
      logos={[Google, Cnn, Airbnb, Cisco, Uber, Google, Airbnb, Cisco, Cnn]}
    />
    <Footer
      shareTitle="Share us with your friends"
      shareLinks={[
        { icon: <Facebook />, title: 'Facebook', href: '#' },
        { icon: <Instagram />, title: 'Instagram', href: '#' },
        { icon: <Twitter />, title: 'Twitter', href: '#' },
        { icon: <Linkedin />, title: 'Linkedin', href: '#' },
      ]}
      navigationLinks={[
        { title: 'Privacy Policy', href: '#' },
        { title: 'Code of Conduct', href: '#' },
        { title: 'Legal', href: '#' },
        { title: 'Site Map', href: '#' },
      ]}
    />
  </>
));

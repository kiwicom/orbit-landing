// @flow

import React from 'react';
import './reset.css';
import styled from 'styled-components';
import Button from '@kiwicom/orbit-components/lib/Button';
import TextLink from '@kiwicom/orbit-components/lib/TextLink';
import Stack from '@kiwicom/orbit-components/lib/Stack';
import { useStaticQuery, graphql } from 'gatsby';
// Components
import Faq from '@kiwicom/orbit-landing-components/src/Faq';
import NavBar from '@kiwicom/orbit-landing-components/src/NavBar';
import JoinUs from '@kiwicom/orbit-landing-components/src/JoinUs';
import Locations from '@kiwicom/orbit-landing-components/src/Locations';
import HeroCentered from '@kiwicom/orbit-landing-components/src/HeroCentered';
import Sponsors from '@kiwicom/orbit-landing-components/src/Sponsors';
import Prizes from '@kiwicom/orbit-landing-components/src/Prizes';
import OrbitLanding from '@kiwicom/orbit-landing-components/src/OrbitLanding';

import Footer from '../components/Footer';
import Seo from '../components/seo';
import About from '../components/About';
import Images from '../components/Images';
import Contact from '../components/Contact';
import Schedule from '../components/Schedule';
// Images
import heroPattern from '../images/pattern04.svg';
import heroImg2 from '../images/hero02.jpg';
import heroSvg from '../images/hero2.svg';
import joinUsImg from '../images/joinUsImg.jpg';
import joinUsPattern from '../images/pattern03.svg';
import sab from '../images/sab-dark.png';
import gdg from '../images/gdg.png';

const descriptionSupport = (
  <>
    We do not provide travel support to attend a hackathon of your choice. You
    are free to organize a hackathon in your city by yourself – if you would
    like to, let us know
    <TextLink href="mailto:globalhack@kiwi.com">here.</TextLink>
  </>
);

const StyledWrapper = styled.div`
  overflow: hidden;
`;

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query pagesAllPosts {
      allPrismicLocations {
        nodes {
          uid
          data {
            display_on_website
            logo_dark {
              url
            }
            background_image {
              url
            }
            location_country {
              text
            }
            location_city {
              text
            }
            featured
          }
        }
      }
    }
  `);

  const locationList = data.allPrismicLocations.nodes
    .filter(el => el.data.display_on_website !== 'false')
    .map(el => {
      return {
        featured: el.data.featured === 'featured',
        backgroundImage: el.data.background_image.url,
        href:
          el.data.link_to_event && el.data.link_to_event.url
            ? el.data.link_to_event.url
            : `/${el.uid}`,
        location: el.data.location_city.text,
        eventName: el.data.location_country.text,
        logo: el.data.logo_dark.url,
      };
    });

  return (
    <OrbitLanding>
      <StyledWrapper>
        <Seo title="Global Hackathon by Kiwi.com" />
        <HeroCentered
          backgroundImage={heroImg2}
          heroImage={heroSvg}
          actions={
            <Stack
              justify="center"
              grow={false}
              direction="column"
              align="center"
              tablet={{ direction: 'row', align: 'center' }}
            >
              <Button href="#locations">Register as participant</Button>
              <Button
                href="https://docs.google.com/forms/d/e/1FAIpQLSfiqeXYsVUS5Q17QZT5GB4botBn-BKU2hzkOjlFxRJVfewdxA/viewform"
                type="white"
                external
                bordered
              >
                Add your hackathon
              </Button>
            </Stack>
          }
          navBar={
            <NavBar
              title="#HackTravel"
              items={[
                {
                  title: 'About',
                  href: '#about',
                },
                {
                  title: 'Prizes',
                  href: '#prizes',
                },
                {
                  title: 'FAQ',
                  href: '#faq',
                },
                {
                  title: 'Contact',
                  href: '#contact',
                },
              ]}
            />
          }
        />
        <Locations
          id="locations"
          title="Hack travel and make it smarter, sustainable and accessible for everyone."
          pattern={heroPattern}
          locations={locationList}
          locationsHeading="Choose an event you want to attend"
        />
        <About />
        <Images />
        <Prizes
          id="prizes"
          title="Prizes"
          description={
            <>
              The winning project of each location will be invited to{' '}
              <b>send a demo for a global round</b>,
              <br /> in which top Kiwi.com developers and managers choose the
              winner of the global prize. <br />
              This round is 100% remote, more information will be provided soon.
              <br /> The global prize is:
            </>
          }
          prizes={[
            {
              place: 1,
              prize: 'In Kiwi.com travel vouchers',
              title: '€ 4,000',
            },
            {
              place: 2,
              prize: 'A weekend in Prague for the whole team',
              title: 'Weekend',
            },
            {
              place: 3,
              prize: 'Feedback session with top Kiwi.com developers',
              title: 'Feedback',
            },
          ]}
          infoText={
            <>
              To see the particular prizes you can win at each of the
              hackathons, please check the website of the specific event.
            </>
          }
        />
        <Schedule />
        <Faq
          id="faq"
          items={[
            {
              question: 'What is a hackathon?',
              answer:
                'Hackathon is an unorthodox way to solve different kind problems. It is a competition that gathers programmers with different skill sets to work collaboratively, on a software project, which creatively solves various problems on a given topic. ',
            },
            {
              question: 'Who’s behind the Global Travel Hackathon?',
              answer:
                'The idea was born at Kiwi.com, however, each of the hackathons has a different organiser. Please, consult the web page to see who’s the main organiser of the hackathon you are interested in. ',
            },
            {
              question: 'What should I build?',
              answer:
                'It depends on each location. The general theme of the Global Travel Hackathon is sustainability, accessibility and community in the world of travel; however, you can consult the particular event web page to see if there are some other topics. ',
            },
            {
              question: 'Can I join any of the hackathons?',
              answer:
                'Yes, you can definitely join us in the location you prefer. If you miss a location close to you, you can add your own event.',
            },
            {
              question:
                'In order to participate, do I need to stay for the whole 24 hours?',
              answer: 'It depends on each hackathon.',
            },
            {
              question: 'Can I get support to travel to a hackathon?',
              answer: descriptionSupport,
            },
            {
              question: 'Who can organise a hackathon?',
              answer:
                'Anyone who wants to. For example, you might be a member of a hackerspace or a local meetup organiser who wants to become a part of a global event.',
            },

            {
              question:
                'What support do the independently-organized hackathons get?',
              answer:
                'We’re running a global campaign promoting the whole initiative. Additionally, the winner of your hackathon will get the chance to win the main prize – 4,000 € in travel vouchers and feedback from Kiwi.com engineers.',
            },

            {
              question: 'How can I reach out to the organizers?',
              answer:
                'Send us an email at globalhack@kiwi.com or find us on Twitter (@codekiwicom) or Facebook (facebook.com/codekiwicom) ',
            },
          ]}
        />
        <Contact />
        <JoinUs
          title="Join Us"
          descrtiption="Please, fill in your application carefully and thoroughly, we'll be choosing the attendees based on what you write there."
          additionalInformation="We value the participation of each member and we want all
    attendees to have an enjoyable and fulfilling experience."
          actions={<Button href="#locations">Register as participant</Button>}
          additionalActions={
            <TextLink external href="/code-of-conduct/" type="primary">
              Check our Code of Conduct
            </TextLink>
          }
          backgroundImage={joinUsImg}
          patterns={[joinUsPattern, joinUsPattern]}
        />
        <Sponsors logos={[gdg, sab]} />
        <Footer />
      </StyledWrapper>
    </OrbitLanding>
  );
};

export default IndexPage;

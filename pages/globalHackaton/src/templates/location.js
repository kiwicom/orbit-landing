import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Grid from '@kiwicom/orbit-components/lib/utils/Grid';
import OrbitLanding from '@kiwicom/orbit-landing-components/src/OrbitLanding';
import LocationCard from '@kiwicom/orbit-landing-components/src/LocationsCard';
import Heading from '@kiwicom/orbit-components/lib/Heading';
import Stack from '@kiwicom/orbit-components/lib/Stack';
import Text from '@kiwicom/orbit-components/lib/Text';
import Facebook from '@kiwicom/orbit-components/lib/icons/Facebook';
import Twitter from '@kiwicom/orbit-components/lib/icons/Twitter';
import Linkedin from '@kiwicom/orbit-components/lib/icons/Linkedin';
import TextLink from '@kiwicom/orbit-components/lib/TextLink';
import NavBar from '@kiwicom/orbit-landing-components/src/NavBar';
import Locations from '@kiwicom/orbit-landing-components/src/Locations';
import Prizes from '@kiwicom/orbit-landing-components/src/Prizes';
import Faq from '@kiwicom/orbit-landing-components/src/Faq';

import Footer from '../components/Footer';
import NewLocations from '../components/NewLocations';
import Seo from '../components/seo';
import locationList from '../locationsList';
import heroPattern from '../images/pattern04.svg';
import About from '../components/About';
import Images from '../components/Images';
import Contact from '../components/Contact';
import Schedule from '../components/Schedule';

const StyledNavBarWrapper = styled.div`
  background-color: #000;
  padding: 3rem 0 0;
`;

const descriptionSupport = (
  <>
    We do not provide travel support to attend a hackathon of your choice. You
    are free to organize a hackathon in your city by yourself – if you would
    like to, let us know
    <TextLink href="mailto:globalhack@kiwi.com">here.</TextLink>
  </>
);

const Location = ({
  data: {
    prismicLocations: { data },
  },
}) => {
  console.log(data);
  return (
    <OrbitLanding>
      <>
        <Seo title="Locations of global hackathon by Kiwi.com" />
        <StyledNavBarWrapper>
          <NavBar
            title="#HackTravel"
            homeLink="/"
            items={[
              {
                title: 'About',
                href: '/#about',
              },
              {
                title: 'Prizes',
                href: '/#prizes',
              },
              {
                title: 'FAQ',
                href: '/#faq',
              },
              {
                title: 'Contact',
                href: '/#contact',
              },
            ]}
          />
        </StyledNavBarWrapper>
        <Locations
          id="locations"
          title={data.title.text}
          pattern={heroPattern}
          suppressed
        />
        <About />
        {data.body.map(el => {
          switch (el.slice_type) {
            case 'prices':
              console.log(el);
              return (
                <Prizes
                  key={el.id}
                  id="prizes"
                  title={el.primary.prizes_title.text}
                  description={
                    <span
                      dangerouslySetInnerHTML={{
                        __html: el.primary.prize_description.html,
                      }}
                    />
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
                    <span
                      dangerouslySetInnerHTML={{
                        __html: el.primary.prize_description.html,
                      }}
                    />
                  }
                />
              );
            default:
              return null;
          }
        })}
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
        <Schedule />
        <Images />
        <Contact />
        <Footer />
      </>
    </OrbitLanding>
  );
};
export default Location;

export const pageQuery = graphql`
  query locationPostBySlug($uid: String!) {
    prismicLocations(uid: { eq: $uid }) {
      uid
      id
      data {
        body {
          id
          slice_type
          items {
            prize_item_place
            prize_item_description {
              text
            }
            prize_item_title {
              text
            }
          }
          primary {
            additional_info {
              text
            }
            prize_description {
              html
            }
            prizes_title {
              text
            }
          }
        }
        title {
          text
        }
      }
    }
  }
`;

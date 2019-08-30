import React from 'react';
import '../pages/reset.css';
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
import Mentors from '@kiwicom/orbit-landing-components/src/Mentors';
import Mission from '@kiwicom/orbit-landing-components/src/Mission';

import Footer from '../components/Footer';
import NewLocations from '../components/NewLocations';
import Seo from '../components/seo';
import locationList from '../locationsList';
import heroPattern from '../images/pattern04.svg';
import chart from '../images/chart.png';
import evaluation from '../images/evaluation.jpg';
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

const resolveSliceMapping = el => {
  if (el.slice_type === 'prices') {
    const prizesMapped = el.items.map(item => {
      return {
        place: item.place,
        prize: item.prize_item_description && item.prize_item_description.text,
        title: item.prize_item_title && item.prize_item_title.text,
      };
    });
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
        prizes={prizesMapped}
        infoText={el.primary.additional_info.text}
      />
    );
  }

  if (el.slice_type === 'mentors') {
    const mentorsMapped = el.items.map(item => {
      return {
        name: item.mentor_item_name && item.mentor_item_name.text,
        description:
          item.mentor_item_description && item.mentor_item_description.text,
        socials: {
          linkedin: item.mentor_item_linkedin && item.mentor_item_linkedin.url,
          facebook: item.mentor_item_facebook && item.mentor_item_facebook.url,
          twitter: item.mentor_item_twitter && item.mentor_item_twitter.url,
        },
        profilePicture:
          item.mentor_item_profile && item.mentor_item_profile.url,
      };
    });
    return (
      <Mentors
        suppressed
        key={el.id}
        category={el.primary.category.text}
        title={el.primary.mentors_title.text}
        subTitle={el.primary.mentors_subtitle.text}
        mentors={mentorsMapped}
      />
    );
  }
  return null;
};

const Location = ({
  data: {
    prismicLocations: { data },
  },
}) => {
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
          return resolveSliceMapping(el);
        })}
        <Mission
          id="about"
          category=""
          title="What do we evaluate?"
          subTitle="Technical aspects 40%, Design 20%, Idea 30 %, Wow factor 10%"
          description={
            <>
              <b>Technical aspects</b>: The judging team would like to hear the
              answer to these questions when your team will present the final
              work: Is the project demo ready? What data and API’s did you use
              for your project? What technical challenges did your team have and
              how did you solve them? Did you use a particularly clever
              technique or did you use many different components?
              <br />
              <br />
              <b>Design</b>: How well is it designed? Did you put thought into
              the user experience? Idea: How creative is your idea? What
              approach did you follow? How well is it aligned with the hackathon
              topics?
              <br />
              <br />
              <b>Wow! Factor</b>: show the jury what is unique about the
              solution you provided, the way how your team worked or something
              special about your project
            </>
          }
          sideImage={evaluation}
        />
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
      data {
        body {
          ... on PrismicLocationsBodyPrices {
            id
            slice_type
            items {
              prize_item_place
              prize_item_title {
                text
              }
              prize_item_description {
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
          ... on PrismicLocationsBodyMentors {
            id
            slice_type
            primary {
              category {
                text
              }
              mentors_subtitle {
                text
              }
              mentors_title {
                text
              }
            }
            items {
              mentor_item_description {
                text
              }
              mentor_item_name {
                text
              }
              mentor_item_profile {
                url
              }
              mentor_item_twitter {
                url
              }
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

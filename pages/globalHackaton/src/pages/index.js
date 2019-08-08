// @flow

import React, { useEffect } from 'react';
import './reset.css';
import styled from 'styled-components';
import Button from '@kiwicom/orbit-components/lib/Button';
import TextLink from '@kiwicom/orbit-components/lib/TextLink';
import Facebook from '@kiwicom/orbit-components/lib/icons/Facebook';
import Twitter from '@kiwicom/orbit-components/lib/icons/Twitter';
import Stack from '@kiwicom/orbit-components/lib/Stack';
import Linkedin from '@kiwicom/orbit-components/lib/icons/Linkedin';
// Components
import Faq from '@kiwicom/orbit-landing-components/src/Faq';
import NavBar from '@kiwicom/orbit-landing-components/src/NavBar';
import Mission from '@kiwicom/orbit-landing-components/src/Mission';
import Imagewall from '@kiwicom/orbit-landing-components/src/ImageWall';
import JoinUs from '@kiwicom/orbit-landing-components/src/JoinUs';
import Locations from '@kiwicom/orbit-landing-components/src/Locations';
import HeroCentered from '@kiwicom/orbit-landing-components/src/HeroCentered';
import Timeline from '@kiwicom/orbit-landing-components/src/Timeline';
import Footer from '@kiwicom/orbit-landing-components/src/Footer';
import Sponsors from '@kiwicom/orbit-landing-components/src/Sponsors';
import Prizes from '@kiwicom/orbit-landing-components/src/Prizes';
import Contact from '@kiwicom/orbit-landing-components/src/Contact';
import OrbitLanding from '@kiwicom/orbit-landing-components/src/OrbitLanding';

import Seo from '../components/seo';
// Images
import logo from '../images/kiwi.svg';
import logoSab from '../images/sab.png';
import heroPattern from '../images/pattern04.svg';
import heroImg2 from '../images/hero02.jpg';
import heroSvg from '../images/hero2.svg';
import missionImage from '../images/mission.jpg';
import grid01 from '../images/grid01.jpg';
import grid02 from '../images/grid02.jpg';
import grid03 from '../images/grid03.jpg';
import grid04 from '../images/grid04.jpg';
import grid05 from '../images/grid05.jpg';
import grid06 from '../images/grid06.jpg';
import grid07 from '../images/grid07.jpg';
import grid08 from '../images/grid08.jpg';
import grid09 from '../images/grid09.jpg';
import joinUsImg from '../images/joinUsImg.jpg';
import joinUsPattern from '../images/pattern03.svg';
import icAccessibility from '../images/ic-accessibility.svg';
import icGlobe from '../images/ic-globe.svg';
import icTopic from '../images/ic-topic.svg';
import evBrno from '../images/ev-brno.jpg';
import evBarcelona from '../images/ev-barcelona.jpg';
import evZagreb from '../images/ev-zagreb.jpg';
import evLjublana from '../images/ev-ljublana.jpg';

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
  function gtag() {
    // eslint-disable-next-line no-undef
    dataLayer.push(arguments);
  }

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    gtag('js', new Date());
    gtag('config', 'UA-29345084-23');
  });

  return (
    <OrbitLanding>
      <StyledWrapper>
        <Seo title="Home" />
        <HeroCentered
          backgroundImage={heroImg2}
          heroImage={heroSvg}
          actions={
            <Stack justify="center" grow={false}>
              <Button
                href="https://docs.google.com/forms/d/e/1FAIpQLSeTYxsYCYCkExYyUuTX0IDB0gmr2UUtWXIyX4iMK-Jc_X0U6w/viewform"
                external
                onClick={() => {
                  // eslint-disable-next-line no-undef
                  if (gtag) {
                    gtag('event', 'register_clicked', {
                      event_label: 'Register',
                    });
                  }
                }}
              >
                Register as participant
              </Button>
              <Button
                href="https://docs.google.com/forms/d/e/1FAIpQLSfiqeXYsVUS5Q17QZT5GB4botBn-BKU2hzkOjlFxRJVfewdxA/viewform"
                external
                type="white"
                bordered
                onClick={() => {
                  // eslint-disable-next-line no-undef
                  if (gtag) {
                    gtag('event', 'partner_clicked', {
                      event_label: 'Partner Hackaton',
                    });
                  }
                }}
              >
                Add your hackathon
              </Button>
            </Stack>
          }
          navBar={
            <NavBar
              title="Travel Hackathon"
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
                {
                  title: 'Sponsors',
                  href: '#sponsors',
                },
              ]}
            />
          }
        />
        <Locations
          title="Hack travel and make it smarter, sustainable and accessible for
    everyone."
          pattern={heroPattern}
          locations={[
            {
              backgroundImage: evBarcelona,
              eventName: 'Coming soon',
              location: 'Barcelona',
              logo: logo,
            },
            {
              backgroundImage: evLjublana,
              eventName: 'Click to register',
              location: 'Belgrade',
              logo: logo,
            },
            {
              backgroundImage: evZagreb,
              eventName: 'Coming soon',
              location: 'Zagreb',
              logo: logo,
            },
            {
              backgroundImage: evBrno,
              eventName: 'Coming soon',
              location: 'Brno',
              logo: logoSab,
            },
          ]}
          locationsHeading="Future events"
        />
        <Mission
          id="about"
          category="Join us in"
          title="Making Travel Better"
          subTitle="by travellers, for travellers"
          description={
            <>
              At Kiwi.com, we care. We love the world of travel, but we’re aware
              of its dark side. That’s why we’re inviting everyone to{' '}
              <b>
                help us reshape the way we travel <br />
                to make it smarter, sustainable and accessible for everyone.
              </b>{' '}
              <br />
              <br />
              Let’s celebrate World Tourism Day by attending and organising
              travel hackathons all over the globe on 27 September. We want to
              bring together engineers, designers, and innovators: providing
              them with a creative and supportive environment, and encouraging
              their ideas on how to hack travel.
              <br />
              <br />
              We hope to trigger a global <b>#HackTravel</b> movement that would
              become a platform for constant improvement in the travel industry.
              Here are the main topics for this year.
            </>
          }
          sideImage={missionImage}
          items={[
            {
              title: 'Sustainability',
              content:
                'Do you have an idea on how to make travel more responsible? How to deal with mass tourism? Join us to make travel sustainable and bearable for everyone.',
              img: icGlobe,
            },
            {
              title: 'Accessibility',
              content:
                'How to make travel better for people with disabilities? How to find well-adapted hotel rooms or accessible restaurants? Or how to make travel smoother for travelers flying with their musical instruments, bikes or surfboards? Accessibility can be perceived from different perspectives – help us find the one which will change the world of travel.',
              img: icAccessibility,
            },
            {
              title: 'Community',
              content:
                "How to find one's travel network? How to connect offline communities? Help us connect the unconnected.",
              img: icTopic,
            },
          ]}
        />
        <Imagewall images={images} />
        <Prizes
          id="prizes"
          title="Prizes"
          description={
            <>
              The winning team of each location is invited to{' '}
              <b>participate in a global round</b>,
              <br /> in which top Kiwi.com developers and managers choose <br />{' '}
              the project they like the best.
              <br /> The global prize is:
            </>
          }
          prizes={[
            { place: 1, prize: '2000 €' },
            { place: 2, prize: '600 €' },
            { place: 3, prize: '400 €' },
          ]}
          infoText={<>The main prizes will be paid as Kiwi.com vouchers.</>}
        />
        <Timeline
          title="Schedule for Kiwi.com hackathons"
          content="We begin on Friday, 27 September and we will be hacking for 24 hours. Don’t worry, we will provide everything you need so you can last all night long. Please note that for some hackathons, the schdule might differ. Check the event website."
          items={[
            { time: '8.09.', title: 'Application deadline' },
            { time: '14.09', title: 'Confirmation of attendees' },
            { time: '27.–28.09', title: 'Kiwi.com hackathons' },
          ]}
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
                'What support do the independently organized hackathons get?',
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
        <Contact
          id="contact"
          title="Contact"
          leftSectionHeading="Questions"
          leftSectionDescription={
            <>
              Do you have a question, an idea or another request? Don’t hesitate
              to drop us a line at{' '}
              <TextLink href="mailto:globalhack@kiwi.com">
                globalhack@kiwi.com
              </TextLink>
              .
            </>
          }
          rightSectionHeading="Get involved"
          rightSectionDescription={
            <>
              Do you want to join us as a Global Hackathon Ambassador, Partner
              or Volunteer? Shoot us an e-mail at{' '}
              <TextLink href="mailto:globalhack@kiwi.com">
                globalhack@kiwi.com
              </TextLink>
              .
            </>
          }
        />
        <JoinUs
          title="Join Us"
          descrtiption="Please, fill in your application carefully and thoroughly, we'll be choosing the attendees based on what you write there."
          additionalInformation="We value the participation of each member and we want all
    attendees to have an enjoying and fulfilling experience."
          actions={
            <Button
              href="https://docs.google.com/forms/d/e/1FAIpQLSeTYxsYCYCkExYyUuTX0IDB0gmr2UUtWXIyX4iMK-Jc_X0U6w/viewform"
              external
              onClick={() => {
                // eslint-disable-next-line no-undef
                if (gtag) {
                  gtag('event', 'register_clicked', {
                    event_label: 'Register',
                  });
                }
              }}
            >
              Register as participant
            </Button>
          }
          additionalActions={
            <TextLink external href="/code-of-conduct/" type="primary">
              Check our Code of Conduct
            </TextLink>
          }
          backgroundImage={joinUsImg}
          patterns={[joinUsPattern, joinUsPattern]}
        />
        <Footer
          shareTitle="Share the event with your friends"
          shareLinks={[
            {
              icon: <Facebook />,
              title: 'Facebook',
              href:
                'http://www.facebook.com/sharer/sharer.php?u=https://hack.travel',
            },
            {
              icon: <Twitter />,
              title: 'Twitter',
              href:
                'https://twitter.com/share?url=https://hack.travel&text=Hack the travel and discover the world from a whole new perspective. #HackTravel',
            },
            {
              icon: <Linkedin />,
              title: 'Linkedin',
              href:
                'https://www.linkedin.com/shareArticle?url=https://hack.travel&title=Global Travel Hackaton by Kiwi.com',
            },
          ]}
          navigationLinks={[
            { title: 'Privacy Policy', href: '/privacy-policy/' },
            { title: 'Code of Conduct', href: '/code-of-conduct/' },
          ]}
        />
      </StyledWrapper>
    </OrbitLanding>
  );
};

export default IndexPage;

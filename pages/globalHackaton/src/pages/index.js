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
import icPlace from '../images/ic-place.svg';
import icGlobal from '../images/ic-global.svg';
import icTopic from '../images/ic-topic.svg';
import Google from '../images/sponsor01.svg';
import Cnn from '../images/cnn.svg';
import Cisco from '../images/cisco.svg';
import Airbnb from '../images/airbnb.svg';
import Uber from '../images/uber.svg';
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

const faqExternal = (
  <>
    You are encouraged to use any 3rd party services, APIs, open-source
    projects, libraries, and frameworks as long as they are publicly available
    on the web. We offer our public API's that you can find on our B2B platform{' '}
    <a href="https://tequila.kiwi.com/">Tequila</a>, so you can use our
    resources to take the travel experience to a new level.
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
                onClick={e => {
                  // eslint-disable-next-line no-undef
                  if (gtag) {
                    gtag('event', 'register_clicked', {
                      event_label: 'Register',
                    });
                  }
                }}
              >
                Register
              </Button>
              <Button
                href="https://docs.google.com/forms/d/e/1FAIpQLSfiqeXYsVUS5Q17QZT5GB4botBn-BKU2hzkOjlFxRJVfewdxA/viewform"
                external
                type="white"
                bordered
                onClick={e => {
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
          title="Hack the travel and discover the world from a whole new
    perspective."
          pattern={heroPattern}
          locations={[
            {
              backgroundImage: evBrno,
              eventName: '',
              location: 'Brno',
              logo: logoSab,
            },
            {
              backgroundImage: evLjublana,
              eventName: '',
              location: 'Ljublana',
              logo: logo,
            },
            {
              backgroundImage: evZagreb,
              eventName: '',
              location: 'Zagreb',
              logo: logo,
            },
            {
              backgroundImage: evBarcelona,
              eventName: '',
              location: 'Barcelona',
              logo: logo,
            },
          ]}
          locationsHeading="Choose your destination"
        />
        <Mission
          id="about"
          category="Our Mission"
          title="Making Travel Better"
          subTitle="by travellers, for travellers"
          description={
            <>
              We’re inviting everyone to <b>redefine the travel experience.</b>{' '}
              How? We want to engage people by organising hackathons all over
              the world on 27 September. We will bring together engineers,
              designers, travel innovators, and others, offer them a creative
              and supportive environment, and encourage their ideas on how to
              hack travel. Together, we’ll make it{' '}
              <b>better, smoother, and smarter for everyone.</b>
            </>
          }
          sideImage={missionImage}
          items={[
            {
              title: 'Why Global hacking?',
              content:
                'We hope to trigger a global #HackTravel movement that would become a platform for constant improvement in the world of travel.',
              img: icPlace,
            },
            {
              title: 'Where?',
              content:
                'How? We want to engage people by organising hackathons all over the world on 27 September. We will bring together engineers, designers, travel innovators and others.',
              img: icGlobal,
            },
            {
              title: 'Topic & Challenges',
              content:
                'We’ll focus on how to use technology to improve and redefine travel quality and experience. Specific challenges will be announced soon.',
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
              The winning team of each local hackathon will be invited to
              explore Prague with Kiwi.com. <br /> Look forward to a weekend
              full of fun activities and a party. The accommodation and travel
              costs are on us.
              <br />
              <b>+ Invitation for the Kiwi.com party (December 2019)</b>
            </>
          }
          prizes={[
            { place: 1, prize: '2000 €' },
            { place: 2, prize: '600 €' },
            { place: 3, prize: '400 €' },
          ]}
          infoText={
            <>
              The main prizes for the Grand finale will be paid as Kiwi.com
              vouchers.
            </>
          }
        />
        <Timeline
          title="Schedule"
          content="We begin on Friday, 10th of May at 18:00 and we will be hacking for 24 hours. Don’t worry, we will provide everything you need so you can last all night long"
          items={[
            { time: '25.08', title: 'Application deadline' },
            { time: '06.09', title: 'Confirmation of attendees' },
            { time: '27–28.09', title: 'Kiwi.com hackathons' },
            { time: '18–19.10', title: 'Superfinals in Prague' },
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
              question: 'What should I build?',
              answer:
                "You can build web or mobile applications related to travel experience, using the programming language and platform of your choice. We're looking for apps that help people feel the excitement of travel to the fullest extent, so get creative and build something innovative and unique!",
            },
            {
              question:
                'In order to participate, do I need to stay for the whole 24 hours?',
              answer:
                'We do strongly encourage you to be present for the first few hours of the hackathon to see the idea pitches, as well as the final few hours for the presentations and judging. But of course, 24 hours is a long time and people may need to attend to other commitments, or just shower and sleep, so you can definitely schedule your work according to your needs',
            },
            {
              question: 'Can I join any of the hackathons?',
              answer:
                'Yes, you can definitely join us in the location you prefer. The topic is common for all the locations, as well as the conditions for hacking we will provide. ',
            },
            {
              question: 'How big can my team be?',
              answer:
                'Teams can be anywhere from two to four members. All members must register and RSVP for the event.',
            },
            {
              question: 'Can I get a head start on my hack?',
              answer:
                "To ensure a level playing field for all participants, all code and assets must be created during the hackathon. Failure to comply with this rule may result in the offending team's disqualification. Nevertheless, feel free to make plans, create wireframes, and brainstorm ahead to the event.",
            },
            {
              question: 'Can I use external APIs, services, and SDKs?',
              answer: faqExternal,
            },
            {
              question:
                'Who owns the intellectual property generated during the hackathon?',
              answer:
                'What you create is yours. No one else, including Kiwi.com, has the rights to use it outside of the competition.',
            },
            {
              question: "What if I don't know how to code?",
              answer:
                'You are still welcome! As long as you come willing to learn and ready to contribute ideas, you can contribute to a team. But your team must have at least one developer because you will be evaluated on the technical solution of a demo you deliver in those 24 hours.',
            },
            {
              question: 'What are the demos like?',
              answer:
                "You'll have 180 seconds to pitch your idea and demo to a panel of judges. You'll be provided with AV support, a microphone, and a projector. The specific criteria of the evaluation process will be presented during August 2019. What we know for sure is that one of the criteria would be the technical solution, please, make sure that at least one of your team member can code.",
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
              to drop us a line at globalhack@kiwi.com.
            </>
          }
          rightSectionHeading="Get involved"
          rightSectionDescription={
            <>
              Do you want to join us as Global Hackathon Ambassador, Partner or
              Volunteer? Shoot us an e-mail at globalhack@kiwi.com.
            </>
          }
        />

        <JoinUs
          title="Join Us"
          descrtiption="Please, fill in your application carefully and thoroughly, we'll be choosing the attendees based on what you write there."
          additionalInformation="We value the participation of each member and we want all
    attendees to have an enjoying and fulfilling experience."
          actions={<Button>Register</Button>}
          additionalActions={
            <TextLink external href="/code-of-conduct/" type="primary">
              Check our Code of Conduct
            </TextLink>
          }
          backgroundImage={joinUsImg}
          patterns={[joinUsPattern, joinUsPattern]}
        />
        <Sponsors
          id="sponsors"
          logos={[Google, Cnn, Airbnb, Cisco, Uber, Google, Airbnb, Cisco, Cnn]}
        />
        <Footer
          shareTitle="Share us with your friends"
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
                'https://twitter.com/share?url=https://hack.travel&text=Hack the travel and discover the world from a whole new perspective.',
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

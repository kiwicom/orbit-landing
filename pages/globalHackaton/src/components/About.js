import React from 'react';
import Mission from '@kiwicom/orbit-landing-components/src/Mission';

import missionImage from '../images/mission.jpg';
import icGlobe from '../images/ic-globe.svg';
import icAccessibility from '../images/ic-accessibility.svg';
import icTopic from '../images/ic-topic.svg';

const About = () => {
  return (
    <Mission
      id="about"
      category=""
      title="Join us in making travel better "
      subTitle="by travellers, for travellers"
      description={
        <>
          At Kiwi.com, we care. We love the world of travel, but we’re aware of
          its dark side. That’s why we’re inviting everyone to{' '}
          <b>
            help us reshape the way we travel to make it smarter, sustainable
            and accessible for everyone.
          </b>{' '}
          <br />
          <br />
          Let’s celebrate World Tourism Day by attending and organising travel
          hackathons all over the globe on 27 September. We want to bring
          together engineers, designers, and innovators: providing them with a
          creative and supportive environment, and encouraging their ideas on
          how to hack travel.
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
            'Do you have an idea on how to make travel more responsible? How to deal with mass tourism or how to support local economies?',
          img: icGlobe,
        },
        {
          title: 'Accessibility',
          content:
            'How can we make travel better for people with disabilities? How to find well-adapted hotel rooms, accessible restaurants or how to travel easier with musical instruments or bikes?',
          img: icAccessibility,
        },
        {
          title: 'Community',
          content:
            'People are getting more and more interested in authentic experiences that support local communities. Connect the unconnected and make tourism become a tool building online and offline communities.',
          img: icTopic,
        },
      ]}
    />
  );
};

export default About;

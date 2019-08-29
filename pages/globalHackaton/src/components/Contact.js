import React from 'react';
import TextLink from '@kiwicom/orbit-components/lib/TextLink';
import Contact from '@kiwicom/orbit-landing-components/src/Contact';

const ContactTemplate = () => {
  return (
    <Contact
      id="contact"
      title="Contact"
      leftSectionHeading="Questions"
      leftSectionDescription={
        <>
          Do you have a question, an idea or another request? Don’t hesitate to
          drop us a line at{' '}
          <TextLink href="mailto:globalhack@kiwi.com">
            globalhack@kiwi.com
          </TextLink>
          .
        </>
      }
      rightSectionHeading="Get involved"
      rightSectionDescription={
        <>
          Do you want to join us as a Global Hackathon Ambassador, Partner or
          Volunteer? Shoot us an e-mail at{' '}
          <TextLink href="mailto:globalhack@kiwi.com">
            globalhack@kiwi.com
          </TextLink>
          .
        </>
      }
    />
  );
};

export default ContactTemplate;

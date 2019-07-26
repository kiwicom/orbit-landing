// @flow

import React from 'react';
import './reset.css';
import styled from 'styled-components';

// Components
import Page from '@kiwicom/orbit-landing-components/src/Page';
import Text from '@kiwicom/orbit-components/lib/Text';
import TextLink from '@kiwicom/orbit-components/lib/TextLink';
import Heading from '@kiwicom/orbit-components/lib/Heading';
import Stack from '@kiwicom/orbit-components/lib/Stack';
import List, { ListItem } from '@kiwicom/orbit-components/lib/List';

import Seo from '../components/seo';

const StyledWrapper = styled.div`
  overflow: hidden;
`;

const codeofconduct = () => (
  <StyledWrapper>
    <Seo description="Code of conduct" lang="en" title="Code of conduct" />
    <Page title="Code of conduct">
      <Text>
        Travel Hackathon is an event organized by{' '}
        <TextLink href="https://www.kiwi.com/">Kiwi.com</TextLink>, intended for
        networking and collaboration of the attendees in Tequila, our brand new
        platform that allows anyone to access Kiwi.com content, technology, and
        services. We value the participation of each member and we want all
        attendees to have an enjoyable and fulfilling experience. Accordingly,
        all attendees are expected to show respect and courtesy to other
        attendees throughout the event. To make clear what is expected, all
        staff, attendees, mentors, organizers, and volunteers at any Kiwi.com
        event are required to conform to the following Code of Conduct.
        Organizers will enforce this code throughout the event.
      </Text>
      <Heading type="title2">Our Standards</Heading>
      <Text>
        The travel hackathon is dedicated to providing a positive event
        experience for everyone, regardless of age, gender identity and
        expression, sexual orientation, disability, physical appearance, body
        size, ethnicity, nationality, race, or religion (or lack thereof),
        education, or socio-economic status.
      </Text>
      <Text>
        Examples of behavior that contributes to creating a positive environment
        include:
      </Text>
      <List>
        <Stack>
          <ListItem>Being kind to others</ListItem>
          <ListItem>Behaving professionally</ListItem>
          <ListItem>Using welcoming and inclusive language</ListItem>
          <ListItem>
            Being respectful of differing viewpoints and experiences
          </ListItem>
          <ListItem>Gracefully accepting constructive criticism</ListItem>
          <ListItem>Focusing on what is best for the community</ListItem>
          <ListItem>Showing empathy towards other community members</ListItem>
          <Text>
            Examples of unacceptable behavior by participants include:
          </Text>
          <ListItem>Harassment of event participants in any form</ListItem>
          <ListItem>Deliberate intimidation, stalking, or following</ListItem>
          <ListItem>
            Violent threats or language directed against another person
          </ListItem>
          <ListItem>
            Sexual language and imagery in any event venue, including talks
          </ListItem>
          <ListItem>Insults or put downs</ListItem>
          <ListItem>
            Sexist, racist, homophobic, transphobic, ableist, or exclusionary
            jokes
          </ListItem>
          <ListItem>Excessive swearing</ListItem>
          <ListItem>Unwelcome sexual attention or advances</ListItem>
          <ListItem>Unwelcome physical contact</ListItem>
          <ListItem>Sustained disruption of talks or other events</ListItem>
          <ListItem>
            Other conduct that is inappropriate for a professional audience
            including people of many different backgrounds
          </ListItem>
        </Stack>
      </List>
      <Text>
        Participants asked to stop any inappropriate behavior are expected to
        comply immediately.
      </Text>
      <Text>
        If a participant engages in behavior that violates this code of conduct,
        the event organizers may take any action they deem appropriate,
        including warning the offender or expulsion from the event with no
        refund.
      </Text>
      <Text>
        Thank you for helping make this a welcoming, friendly event for all.
      </Text>
      <Heading type="title3">Weapons Policy</Heading>
      <Text>
        No weapons are allowed at event venues, including but not limited to
        explosives (including fireworks), guns, and large knives such as those
        used for hunting or display, as well as any other item used for the
        purpose of causing injury or harm to others. Anyone seen in possession
        of one of these items will be asked to leave immediately, and will only
        be allowed to return without the weapon.
      </Text>
      <Text>
        Attendees are further expected to comply with all state and local laws
        on this matter.
      </Text>
      <Heading type="title2">Weapons Policy</Heading>
      <Text>
        All Travel Hackathon attendees are subject to the Code of Conduct. This
        includes staff and volunteers and mentors.
      </Text>
      <Heading type="title2">Contact Information</Heading>
      <Text>
        If you believe that someone is violating the code of conduct during the
        event, or have any other concerns, please contact a member of the event
        staff immediately.
      </Text>
      <List>
        <ListItem>
          <Text weight="bold">Incident Report</Text>
          <Text>
            Jona Azizaj – Community Advocate at Kiwi.com{' '}
            <TextLink href="mailto:jona.azizaj@kiwi.com">
              jona.azizaj@kiwi.com
            </TextLink>
          </Text>
        </ListItem>
        <ListItem>Behaving professionally</ListItem>
        <ListItem>Using welcoming and inclusive language</ListItem>
      </List>
    </Page>
  </StyledWrapper>
);

export default codeofconduct;

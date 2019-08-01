// @flow

import React from 'react';
import './reset.css';
import styled from 'styled-components';
// Components
import Page from '../components/pageTracked';

import Seo from '../components/seo';

const codeofconduct = () => (
  <>
    <Seo title="Code of conduct" />
    <Page title="Code of conduct">
      <p>
        <strong>
          <a href="https://hack.travel/">Travel Hackathon</a>
        </strong>{' '}
        is an event organized by{' '}
        <strong>
          <a href="https://kiwi.com">Kiwi.com</a>
        </strong>
        , intended for networking and collaboration of the attendees in Tequila,
        our brand new platform that allows anyone to access Kiwi.com content,
        technology, and services.
      </p>
      <p>
        We value the participation of each member and we want all attendees to
        have an enjoyable and fulfilling experience. Accordingly, all attendees
        are expected to show respect and courtesy to other attendees throughout
        the event.
      </p>
      <p>
        To make clear what is expected, all staff, attendees, mentors,
        organizers, and volunteers at any Kiwi.com event are required to conform
        to the following Code of Conduct. Organizers will enforce this code
        throughout the event.
      </p>
      <h2>Our Standards</h2>
      <p>
        The travel hackathon is dedicated to providing a positive event
        experience for everyone, regardless of age, gender identity and
        expression, sexual orientation, disability, physical appearance, body
        size, ethnicity, nationality, race, or religion (or lack thereof),
        education, or socio-economic status.
      </p>
      <p>
        Examples of behavior that contributes to creating a positive environment
        include:
      </p>
      <ul>
        <li>Being kind to others</li>
        <li>Behaving professionally</li>
        <li>Using welcoming and inclusive language</li>
        <li>Being respectful of differing viewpoints and experiences</li>
        <li>Gracefully accepting constructive criticism</li>
        <li>Focusing on what is best for the community</li>
        <li>Showing empathy towards other community members</li>
      </ul>
      <p>Examples of unacceptable behavior by participants include:</p>
      <ul>
        <li>Harassment of event participants in any form</li>
        <li>Deliberate intimidation, stalking, or following</li>
        <li>Violent threats or language directed against another person</li>
        <li>Sexual language and imagery in any event venue, including talks</li>
        <li>Insults or put downs</li>
        <li>
          Sexist, racist, homophobic, transphobic, ableist, or exclusionary
          jokes
        </li>
        <li>Excessive swearing</li>
        <li>Unwelcome sexual attention or advances</li>
        <li>Unwelcome physical contact</li>
        <li>Sustained disruption of talks or other events</li>
        <li>
          Other conduct that is inappropriate for a professional audience
          including people of many different backgrounds
        </li>
      </ul>
      <p>
        Participants asked to stop any inappropriate behavior are expected to
        comply immediately.
      </p>
      <p>
        If a participant engages in behavior that violates this code of conduct,
        the event organizers may take any action they deem appropriate,
        including warning the offender or expulsion from the event with no
        refund.
      </p>
      <p>
        Thank you for helping make this a welcoming, friendly event for all.
      </p>
      <h3>Weapons Policy</h3>
      <p>
        No weapons are allowed at event venues, including but not limited to
        explosives (including fireworks), guns, and large knives such as those
        used for hunting or display, as well as any other item used for the
        purpose of causing injury or harm to others. Anyone seen in possession
        of one of these items will be asked to leave immediately, and will only
        be allowed to return without the weapon.
      </p>
      <p>
        Attendees are further expected to comply with all state and local laws
        on this matter.
      </p>
      <h2>Scope</h2>
      <p>
        All Travel Hackathon attendees are subject to the Code of Conduct. This
        includes staff and volunteers and mentors.
      </p>
      <h2>
        <strong>Contact Information</strong>
      </h2>
      <p>
        If you believe that someone is violating the code of conduct during the
        event, or have any other concerns, please contact a member of the event
        staff immediately.
      </p>
      <ul>
        <li>
          <strong>Incident Report</strong>
          <ul>
            <li>
              Jona Azizaj – Community Advocate at Kiwi.com
              <br />
              <a href="mailto:jona.azizaj@kiwi.com">jona.azizaj@kiwi.com</a>
            </li>
          </ul>
        </li>
      </ul>
      <p>In case of a conflict of interest, you can individually contact:</p>
      <ul>
        <li>
          Paulina Montes <br />
          <a href="mailto:paulina.montes@kiwi.com">paulina.montes@kiwi.com</a>
        </li>
        <li>
          Kseniya Miantsiuk <br />
          <a href="mailto:kseniya.miantsiuk@kiwi.com">
            kseniya.miantsiuk@kiwi.com
          </a>
        </li>
      </ul>
      <p>
        Event staff will be happy to help participants venue security or local
        law enforcement, or assist any attendee to feel safe for the duration of
        the event. We value your attendance.
      </p>
      <h2>Procedure for Handling Incidents</h2>
      <ul>
        <li>
          <a href="/attendee-procedure-for-reporting-code-of-conduct-incidents/">
            Attendee Procedure for incident handling
          </a>
        </li>
        <li>
          <a href="/staff-procedure-for-incident-response/">
            Staff Procedure for incident handling
          </a>
        </li>
      </ul>
      <h2>License</h2>
      <p>
        This Code of Conduct has been adapted from the PyCon Code of Conduct,
        which is licensed under a
        <a href="http://creativecommons.org/licenses/by/3.0/">
          {' '}
          Creative Commons Attribution 3.0 Unported License
        </a>
        , and has been updated by Kiwi.com Community Team.
      </p>
    </Page>
  </>
);

export default codeofconduct;

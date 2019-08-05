// @flow

import React from 'react';
import './reset.css';
import styled from 'styled-components';

// Components
import Page from '../components/pageTracked';
import Seo from '../components/seo';

const atendee = () => (
  <>
    <Seo title="Attendee Procedure For Reporting Code of Conduct Incidents" />
    <Page title="Attendee Procedure For Reporting Code of Conduct Incidents">
      <p>
        If you believe someone is in physical danger, consult with a volunteer
        or staff member for the appropriate crisis number, non-emergency number,
        or police number.
      </p>

      <p>
        If you believe someone has violated the Code of Conduct (link), we
        encourage you to report it. If you are unsure whether the incident is a
        violation, or whether the space where it happened is covered by this
        Code of Conduct, we encourage you to still report it. We are fine with
        receiving reports where we decide to take no action for the sake of
        creating a safer space.
      </p>

      <p>During the event you can make a report:</p>

      <ul>
        <li>
          Email:
          <a href="mailto:jona.azizaj@kiwi.com">
            <strong>jona.azizaj@kiwi.com</strong>
          </a>
        </li>
      </ul>

      <p>
        In the event of a conflict of interest, you may directly contact any of
        the lead incident responders:
      </p>

      <ul>
        <li>
          Alzbeta Vackova <br />
          <a href="mailto:alzbeta.vackova@kiwi.com">alzbeta.vackova@kiwi.com</a>
        </li>
        <li>
          Jan Bleha <br />
          <a href="mailto:jan.bleha@kiwi.com">jan.bleha@kiwi.com</a>
        </li>
      </ul>

      <h2>
        <strong>Report Data</strong>
      </h2>

      <p>If you make a report via email or phone, please include:</p>

      <ul>
        <li>
          Your contact info (so we can get in touch with you if we need to
          follow up)
        </li>
        <li>Date and time of the incident</li>
        <li>Location of incident</li>
        <li>Whether the incident is ongoing</li>
        <li>Description of the incident</li>
        <li>
          Identifying information of the reported person: name, physical
          appearance, height, clothing
        </li>
        <li>Additional circumstances surrounding the incident</li>
        <li>
          Other people involved in or witnesses to the incident and their
          contact information or description
        </li>
      </ul>

      <p />

      <h2>Confidentiality</h2>

      <p>
        <strong>All reports will be kept confidential</strong>. When we discuss
        incidents with people who are reported, we will anonymize details as
        much as we can to protect reporter privacy.
      </p>

      <p>
        However, some incidents happen in one-on-one interactions, and even if
        the details are anonymized, the reported person may be able to guess who
        made the report. If you have concerns about retaliation or your personal
        safety, please note those in your report. We still encourage you to
        report, so that we can support you while keeping our event attendees
        safe. In some cases, we can compile several anonymized reports into a
        pattern of behavior, and take action on that pattern.
      </p>

      <p>
        In some cases we may determine that a public statement will need to be
        made. If that’s the case, the identities of all victims and reporters
        will remain confidential unless those individuals instruct us otherwise.
      </p>

      <h2>Report Handling Procedure</h2>

      <p>
        When you make a report to an incident responder, they will gather
        information about the incident according to the{' '}
        <a href="/staff-procedure-for-incident-response/">
          Staff Procedure For Incident Response
        </a>
        .
      </p>

      <p>
        After an incident responder takes the report, they will immediately
        consult with the lead incident responders (Jona Azizaj, Alzbeta Vackova
        and Jan Bleha).
      </p>

      <p>
        If the incident is ongoing and needs to be immediately addressed, any
        one of the lead incident responders may take appropriate action to
        ensure the safety of everyone involved.
      </p>

      <p>
        After the event, all incident responders will attend a debriefing
        session with the lead responders to discuss all incidents and determine
        any necessary follow-up actions.
      </p>

      <h2>Following Up With Reporters</h2>

      <p>
        Within one week of an incident report, the lead responders will follow
        up with the person who made the report and provided their contact
        information. The follow up may include:
      </p>

      <ul>
        <li>
          An acknowledgment that the Travel Hackathon lead responders discussed
          the situation
        </li>
        <li>
          Whether or not the report was determined to be a violation of the Code
          of Conduct
        </li>
        <li>
          What actions (if any) were taken to correcting the reporter behavior
        </li>
      </ul>

      <p>
        In some cases, the lead responders may need to ask additional questions
        about the incident in order to identify the reported person.
      </p>

      <h2>Conflicts of Interest</h2>

      <p>
        If an incident responder has a conflict of interest for a report, they
        will recuse themselves from the discussion and handling of the incident.
        The incident documentation will not be available to them, and they will
        excuse themselves from any conversations involving handling the
        incident.
      </p>

      <p>
        This procedure has been adapted from the PyCon Code of Conduct (CC BY
        3.0) and has been updated by Kiwi.com Community Team.
      </p>
    </Page>
  </>
);

export default atendee;

// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '@kiwicom/orbit-components/lib/Button';
import TextLink from '@kiwicom/orbit-components/lib/TextLink';

import joinUsImg from '../../static/joinUsImg.jpg';
import joinUsPattern from '../../static/pattern03.svg';
import joinUsPattern2 from '../../static/pattern04.svg';

import JoinUs from './index';

storiesOf('JoinUs', module).add('Default', () => (
  <JoinUs
    title="Join Us"
    descrtiption="The participants will be selected based on their solution of entry
    task"
    additionalInformation="We value the participation of each member and we want all
    attendees to have an enjoying and fulfilling experience."
    actions={<Button>Register</Button>}
    additionalActions={
      <TextLink external href="https://kiwi.com" type="primary">
        Check our Code of Conduct
      </TextLink>
    }
    backgroundImage={joinUsImg}
    patterns={[joinUsPattern, joinUsPattern2]}
  />
));

// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Contact from './index';

storiesOf('Contact', module).add('Default', () => (
  <Contact
    title="Contact"
    leftSectionHeading="Questions"
    leftSectionDescription="Do you have a question, an idea or another request? Don’t
  hesitate to drop us a line at globalhack@kiwi.com."
    rightSectionHeading="Get involved"
    rightSectionDescription="Do you have a question, an idea or another request? Don’t
    hesitate to drop us a line at globalhack@kiwi.com."
  />
));

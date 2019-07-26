// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Text from '@kiwicom/orbit-components/lib/Text';

import Page from './index';

storiesOf('Page', module).add('Default', () => (
  <Page title="Contact">
    <Text>Test</Text>
  </Page>
));

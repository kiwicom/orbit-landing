// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Text from '@kiwicom/orbit-components/lib/Text';

import OrbitLanding from './index';

storiesOf('OrbitLanding', module).add('Default', () => (
  <OrbitLanding title="Contact">
    <Text>Test</Text>
  </OrbitLanding>
));

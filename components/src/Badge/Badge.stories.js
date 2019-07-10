// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Badge from './index';

storiesOf('Button', module)
  .add('with text', () => <Badge>Hello Badge</Badge>)
  .add('with emoji', () => <Badge />);

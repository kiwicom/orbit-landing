// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Prizes from './index';

storiesOf('Prizes', module).add('Default', () => (
  <Prizes
    title="Prizes"
    description="The winning team of each local hackathon will be invited to the Global Round on 17–18 October in Prague. Look forward to a weekend full of learning and fun activities. The accommodation and travel costs expenses on us. Besides the Hackathon itself, teams will have the opportunity to explore Prague and enjoy the accompanying program we’ll prepare for them."
    prizes={[
      { place: 1, prize: '2000 €' },
      { place: 2, prize: '600 €' },
      { place: 3, prize: '400 €' },
    ]}
    infoText="The main prizes for the Grand finale will be paid as Kiwi.com vouchers."
  />
));

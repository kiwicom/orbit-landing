// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';
import Text from '@kiwicom/orbit-components/lib/Text';
import Stack from '@kiwicom/orbit-components/lib/Stack';
import Hide from '@kiwicom/orbit-components/lib/Hide';
import media from '@kiwicom/orbit-components/lib/utils/mediaQuery';

import Google from '../../static/sponsor01.svg';
import defaultTheme from '../defaultTheme';

const StyledSponsors = styled.div`
  display: flex;
  width: 100%;
  padding: 5.26vw;
  box-sizing: border-box;
`;

const StyledText = styled.span`
  margin: 8px 4.21vw 0 0;
`;

const Sponsor = styled.img`
  height: 3.68vw;
  min-height: 50px;
  margin-right: 4.21vw;
  margin-bottom: 0.63vw;
`;

const Sponsors = () => {
  return (
    <StyledSponsors>
      <StyledText>
        <Text type="secondary">Sponsors</Text>
      </StyledText>
      <Stack align="center" spacing="none" grow={false} wrap shrink>
        <Sponsor src={Google} />
        <Sponsor src={Google} />
        <Sponsor src={Google} />
        <Sponsor src={Google} />
        <Sponsor src={Google} />
        <Sponsor src={Google} />
      </Stack>
    </StyledSponsors>
  );
};

export default Sponsors;

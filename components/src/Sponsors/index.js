// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';
import Text from '@kiwicom/orbit-components/lib/Text';
import Stack from '@kiwicom/orbit-components/lib/Stack';
import media from '@kiwicom/orbit-components/lib/utils/mediaQuery';

import defaultTheme from '../defaultTheme';

const StyledSponsors = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly
  width: 100%;
  padding: 5.26vw;
  box-sizing: border-box;

  ${media.tablet(css`
    flex-direction: row;
    align-items: center;
  `)};
`;

StyledSponsors.defaultProps = {
  theme: defaultTheme,
};

const StyledText = styled.span`
  ${media.tablet(css`
    margin-right: 4.21vw;
  `)};
`;

StyledText.defaultProps = {
  theme: defaultTheme,
};

const SponsorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 4vh 0;
  padding: 0 1vw;
  box-sizing: border-box;

  ${media.tablet(css`
    width: 16.66%;
  `)};
`;

SponsorWrapper.defaultProps = {
  theme: defaultTheme,
};

const SponsorLogo = styled.img`
  max-width: stretch;
  max-height: 100px;
`;

const Sponsors = ({ logos, id }) => {
  return (
    <StyledSponsors id={id}>
      <StyledText>
        <Text size="large" type="secondary">
          Sponsors
        </Text>
      </StyledText>
      <Stack align="center" spacing="none" shrink wrap>
        {logos.map((logo, index) => {
          return (
            <SponsorWrapper key={index} index={index}>
              <SponsorLogo src={logo} alt="" />
            </SponsorWrapper>
          );
        })}
      </Stack>
    </StyledSponsors>
  );
};

export default Sponsors;

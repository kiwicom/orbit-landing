// @flow

import React from 'react';
import styled, { css } from 'styled-components';
import Heading from '@kiwicom/orbit-components/lib/Heading';
import Text from '@kiwicom/orbit-components/lib/Text';
import Stack from '@kiwicom/orbit-components/lib/Stack';
import media from '@kiwicom/orbit-components/lib/utils/mediaQuery';

import defaultTheme from '../defaultTheme';
import Container from '../utils/Container';

const Half = styled.div`
  flex-basis: 100%;

  ${media.tablet(css`
    flex-basis: 40%;
  `)};
`;
Half.defaultProps = {
  theme: defaultTheme,
};

const Timeline = ({
  title,
  leftSectionHeading,
  leftSectionDescription,
  rightSectionHeading,
  rightSectionDescription,
}) => {
  return (
    <Container>
      <Stack spacing="extraLoose">
        <Heading type="title1" element="h2">
          {title}
        </Heading>
        <Stack flex spacing="extraLoose">
          <Half>
            <Stack>
              <Heading type="title3" element="h3">
                {leftSectionHeading}
              </Heading>
              <Text>{leftSectionDescription}</Text>
            </Stack>
          </Half>
          <Half>
            <Stack>
              <Heading type="title3" element="h3">
                {rightSectionHeading}
              </Heading>
              <Text>{rightSectionDescription}</Text>
            </Stack>
          </Half>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Timeline;

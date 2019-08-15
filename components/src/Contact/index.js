// @flow

import React from 'react';
import styled, { css } from 'styled-components';
import Heading from '@kiwicom/orbit-components/lib/Heading';
import Text from '@kiwicom/orbit-components/lib/Text';
import Stack from '@kiwicom/orbit-components/lib/Stack';
import media from '@kiwicom/orbit-components/lib/utils/mediaQuery';
import Hide from '@kiwicom/orbit-components/lib/Hide';

import defaultTheme from '../defaultTheme';
import Container from '../utils/Container';
import Pattern from '../utils/Pattern';
import patternImage from '../../static/pattern06.svg';
import patternImage2 from '../../static/pattern09.svg';

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
  id,
}) => {
  return (
    <Container id={id}>
      <Hide on={['smallMobile', 'mediumMobile', 'largeMobile']}>
        <Pattern
          pattern={patternImage}
          width="7vw"
          height="6vw"
          top="20px"
          left="20px"
        />
        <Pattern
          pattern={patternImage2}
          width="7vw"
          height="6vw"
          right="0px"
          top="0"
        />
      </Hide>
      <Stack spacing="extraLoose">
        <Heading type="title1" element="h2">
          {title}
        </Heading>
        <Stack
          flex
          spacing="extraLoose"
          direction="column"
          tablet={{ direction: 'row' }}
        >
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

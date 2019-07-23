// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';
import Heading from '@kiwicom/orbit-components/lib/Heading';
import Text from '@kiwicom/orbit-components/lib/Text';
import Stack from '@kiwicom/orbit-components/lib/Stack';
import Hide from '@kiwicom/orbit-components/lib/Hide';
import media from '@kiwicom/orbit-components/lib/utils/mediaQuery';

import StyledPattern from '../utils/Pattern';
import defaultTheme from '../defaultTheme';

const StyledJoinUs = styled.div`
  display: flex;
  align-items: flex-center;
  width: 100%;
  height: 44.73vw;
  min-height: 430px;
  max-height: 850px;
  background-image: ${({ img }) => `url(${img})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom left;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
  }
`;

StyledJoinUs.defaultProps = {
  theme: defaultTheme,
};

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  max-width: 70vw;
  height: 100%;
  padding: 3.37vw 5.26vw;
  box-sizing: border-box;
  z-index: 1;

  ${media.desktop(css`
    max-width: 45.68vw;
  `)};
`;

ContentWrapper.defaultProps = {
  theme: defaultTheme,
};

const StyledCenter = styled.span`
  text-align: center;
`;

const JoinUs = ({
  backgroundImage,
  title,
  patterns,
  descrtiption,
  actions,
  additionalInformation,
  additionalActions,
}) => {
  return (
    <StyledJoinUs img={backgroundImage}>
      <Hide on={['smallMobile', 'mediumMobile', 'largeMobile', 'tablet']}>
        {patterns.length >= 1 && (
          <StyledPattern
            width="21.73vw"
            height="14.26vw"
            bottom="6.47vw"
            left="9.21vw"
            pattern={patterns[0]}
          />
        )}

        {patterns.length >= 2 && (
          <StyledPattern
            width="21.73vw"
            height="14.26vw"
            top="5.16vw"
            right="12vw"
            pattern={patterns[1]}
          />
        )}
      </Hide>
      <Stack direction="column" justify="center" align="center">
        <ContentWrapper>
          <Stack direction="column" justify="center" align="center" basis="70%">
            <Heading inverted type="title1">
              {title}
            </Heading>
            <Text type="white" size="large" align="center">
              {descrtiption}
            </Text>
            {actions}
          </Stack>
          <Stack
            direction="column"
            justify="center"
            align="center"
            spacing="none"
          >
            <Text type="white" size="small" align="center" spaceAfter="none">
              {additionalInformation}
            </Text>
            <StyledCenter>{additionalActions}</StyledCenter>
          </Stack>
        </ContentWrapper>
      </Stack>
    </StyledJoinUs>
  );
};

export default JoinUs;

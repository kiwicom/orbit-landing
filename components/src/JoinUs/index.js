// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';
import Button from '@kiwicom/orbit-components/lib/Button';
import Heading from '@kiwicom/orbit-components/lib/Heading';
import Text from '@kiwicom/orbit-components/lib/Text';
import TextLink from '@kiwicom/orbit-components/lib/TextLink';
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
  width: 70vw;
  padding: 3.37vw 5.26vw;
  box-sizing: border-box;
  z-index: 1;

  ${media.tablet(css`
    width: 45.68vw;
  `)};
`;

ContentWrapper.defaultProps = {
  theme: defaultTheme,
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

Wrapper.defaultProps = {
  theme: defaultTheme,
};

const BottomWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

BottomWrapper.defaultProps = {
  theme: defaultTheme,
};

const JoinUs = ({ img, pattern, pattern2 }) => {
  return (
    <StyledJoinUs img={img}>
      <Hide on={['smallMobile', 'mediumMobile', 'largeMobile', 'tablet']}>
        <StyledPattern
          width="21.73vw"
          height="14.26vw"
          bottom="6.47vw"
          left="9.21vw"
          pattern={pattern}
        />
        <StyledPattern
          width="21.73vw"
          height="14.26vw"
          top="5.16vw"
          right="12vw"
          pattern={pattern2}
        />
      </Hide>
      <Stack direction="column" justify="center" align="center">
        <ContentWrapper>
          <Stack direction="column" justify="center" align="center">
            <Heading inverted type="title1">
              Join Us
            </Heading>
            <Text type="white" align="center">
              The participants will be selected based on their solution of entry
              task
            </Text>
            <Button>Register</Button>
            <Text type="white" size="small" align="center">
              We value the participation of each member and we want all
              attendees to have an enjoying and fulfilling experience.
              <TextLink external={false} href="https://kiwi.com" type="primary">
                Check our Code of Conduct
              </TextLink>
            </Text>
          </Stack>
        </ContentWrapper>
      </Stack>
    </StyledJoinUs>
  );
};

export default JoinUs;

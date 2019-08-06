// @flow

import React from 'react';
import styled, { css } from 'styled-components';
import Heading from '@kiwicom/orbit-components/lib/Heading';
import Text from '@kiwicom/orbit-components/lib/Text';
import Stack from '@kiwicom/orbit-components/lib/Stack';

import defaultTheme from '../defaultTheme';
import slicedCorner from '../utils/slicedCorner';
import Container from '../utils/Container';

const Wrapper = styled.div`
  max-width: 780px;
`;

const TimeWrapper = styled.div`
  min-width: 100px;
`;

const StyledTimelineItem = styled.div``;

const TimelineItem = ({ time, title }) => {
  return (
    <StyledTimelineItem>
      <Stack flex>
        <TimeWrapper>
          <Text type="secondary" size="large">
            {time}
          </Text>
        </TimeWrapper>
        <Text size="large">{title}</Text>
      </Stack>
    </StyledTimelineItem>
  );
};

const StyledTimeline = styled.div`
  ${slicedCorner}
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

StyledTimeline.defaultProps = {
  theme: defaultTheme,
};

const Timeline = ({ id, title, content, items, theme, background }) => {
  return (
    <StyledTimeline
      backgroundColor={
        background === 'white'
          ? theme.orbit.palleteWhite
          : theme.orbit.paletteCloudLight
      }
    >
      <Container id={id} hasSlicedCorner={background !== 'white'}>
        <Stack
          spacing="loose"
          spaceAfter="large"
          direction="column"
          tablet={{ spaceAfter: 'none' }}
        >
          <Heading type="title1" element="h2">
            {title}
          </Heading>
          <Wrapper>
            <Text size="large">{content}</Text>
          </Wrapper>
          <Stack spacing="comfy">
            {items.map((el, i) => {
              return <TimelineItem key={i} title={el.title} time={el.time} />;
            })}
          </Stack>
        </Stack>
      </Container>
    </StyledTimeline>
  );
};

Timeline.defaultProps = {
  theme: defaultTheme,
};

export default Timeline;

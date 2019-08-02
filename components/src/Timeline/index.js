// @flow

import React from 'react';
import styled from 'styled-components';
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

const Timeline = ({ title, content, items, theme }) => {
  return (
    <StyledTimeline backgroundColor={theme.orbit.paletteCloudLight}>
      <Container hasSlicedCorner>
        <Stack spacing="loose">
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

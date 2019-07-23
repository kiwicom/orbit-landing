// @flow

import React from 'react';
import styled from 'styled-components';
import Heading from '@kiwicom/orbit-components/lib/Heading';
import Text from '@kiwicom/orbit-components/lib/Text';
import Stack from '@kiwicom/orbit-components/lib/Stack';

import Container from '../utils/Container';

const StyledMainContent = styled.div``;

const Wrapper = styled.div`
  max-width: 780px;
`;

const StyledTimelineItem = styled.div``;

const TimelineItem = ({ time, title }) => {
  return (
    <StyledTimelineItem>
      <Stack flex>
        <Text type="secondary" size="large">
          {time}
        </Text>
        <Text size="large">{title}</Text>
      </Stack>
    </StyledTimelineItem>
  );
};

const Timeline = ({ title, content, items }) => {
  return (
    <Container>
      <StyledMainContent>
        <Stack spacing="natural">
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
      </StyledMainContent>
    </Container>
  );
};

export default Timeline;

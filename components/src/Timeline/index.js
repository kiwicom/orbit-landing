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
  ${({ hasSlicedCorner }) => hasSlicedCorner && slicedCorner}
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

StyledTimeline.defaultProps = {
  theme: defaultTheme,
};

const StyledContentContainer = styled.div`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-size: ${({ theme }) => theme.orbit.fontSizeTextLarge};
`;

StyledContentContainer.defaultProps = {
  theme: defaultTheme,
};

const Timeline = ({
  id,
  title,
  content,
  items,
  theme,
  suppressed,
  corner = false,
}) => {
  return (
    <StyledTimeline
      backgroundColor={
        suppressed ? theme.orbit.paletteCloudLight : theme.orbit.palleteWhite
      }
      hasSlicedCorner={corner}
    >
      <Container id={id} hasSlicedCorner={corner}>
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
            <StyledContentContainer size="large">
              {content}
            </StyledContentContainer>
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

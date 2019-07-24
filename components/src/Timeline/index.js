// @flow

import React from 'react';
import styled from 'styled-components';
import Heading from '@kiwicom/orbit-components/lib/Heading';
import Text from '@kiwicom/orbit-components/lib/Text';
import Stack from '@kiwicom/orbit-components/lib/Stack';
import defaultTheme from '@kiwicom/orbit-components/lib/defaultTheme';

import slicedCorner from '../utils/slicedCorner';
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

const StyledContainer = styled(Container)`
  ${slicedCorner}
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const Timeline = ({ title, content, items, theme }) => {
  return (
    <StyledContainer backgroundColor={theme.orbit.paletteCloudLight}>
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
    </StyledContainer>
  );
};

Timeline.defaultProps = {
  theme: defaultTheme,
};

export default Timeline;

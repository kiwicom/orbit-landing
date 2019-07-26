// @flow

import React from 'react';
import styled from 'styled-components';
import Heading from '@kiwicom/orbit-components/lib/Heading';
import Stack from '@kiwicom/orbit-components/lib/Stack';

import Container from '../utils/Container';

const StyledWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Timeline = ({ title, children, id }) => {
  return (
    <Container id={id}>
      <StyledWrapper>
        <Stack spacing="extraLoose">
          <Heading type="title1" element="h2">
            {title}
          </Heading>
          <Stack flex spacing="natural" direction="column">
            {children}
          </Stack>
        </Stack>
      </StyledWrapper>
    </Container>
  );
};

export default Timeline;

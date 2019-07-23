// @flow

import React from 'react';
import styled from 'styled-components';
import Stack from '@kiwicom/orbit-components/lib/Stack';

const StyledContainer = styled.div`
  max-width: 1920px;
`;

const Container = ({ children }) => {
  return (
    <Stack justify="center">
      <StyledContainer>{children}</StyledContainer>
    </Stack>
  );
};

export default Container;

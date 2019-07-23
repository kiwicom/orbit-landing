// @flow

import React from 'react';
import styled from 'styled-components';
import Stack from '@kiwicom/orbit-components/lib/Stack';

const StyledContainer = styled.div`
  max-width: 1920px;
  width: 100%;
  padding-left: 5.2vw;
  padding-right: 5.2vw;
`;

const Container = ({ children }) => {
  return (
    <Stack justify="center">
      <StyledContainer>{children}</StyledContainer>
    </Stack>
  );
};

export default Container;

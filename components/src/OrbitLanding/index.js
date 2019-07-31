// @flow

import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import defaultTheme from '../defaultTheme';

const OrbitLanding = ({ theme, children }) => (
  <StyledThemeProvider theme={theme ? theme : defaultTheme}>
    {React.Children.only(children)}
  </StyledThemeProvider>
);

export default OrbitLanding;

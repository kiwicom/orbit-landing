// @flow

import React from 'react';
// Components
import Page from '@kiwicom/orbit-landing-components/src/Page';

const PageTracked = ({ title, children }) => {
  return <Page title={title}>{children}</Page>;
};

export default PageTracked;

// @flow

import React, { useEffect } from 'react';
// Components
import Page from '@kiwicom/orbit-landing-components/src/Page';

const PageTracked = ({ title, children }) => {
  function gtag() {
    // eslint-disable-next-line no-undef
    dataLayer.push(arguments);
  }
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    gtag('js', new Date());
    gtag('config', 'UA-29345084-23');
  });

  return <Page title={title}>{children}</Page>;
};

export default PageTracked;

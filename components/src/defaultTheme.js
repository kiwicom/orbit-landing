// @flow

import { defaultTokens } from '@kiwicom/orbit-design-tokens';

defaultTokens.fontSizeHeadingDisplay =
  'calc(70px + (166 - 80) * ((100vw - 320px) / (1920 - 320)))';
defaultTokens.lineHeightHeading = '1.02';
defaultTokens.fontWeightHeadingTitle2 = '600';
defaultTokens.fontSizeHeadingTitle2 =
  'calc(30px + (70 - 30) * ((100vw - 320px) / (1920 - 320)))';
defaultTokens.fontSizeTextNormal =
  'calc(16px + (32 - 16) * ((100vw - 320px) / (1920 - 320)))';

export default {
  orbit: defaultTokens,
  rtl: false,
};

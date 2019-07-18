// @flow

import { defaultTokens } from '@kiwicom/orbit-design-tokens';

defaultTokens.fontSizeHeadingDisplay =
  'calc(70px + (166 - 80) * ((100vw - 320px) / (1920 - 320)))';
defaultTokens.lineHeightHeading = '1.02';

defaultTokens.fontSizeHeadingTitle1 =
  'calc(30px + (102 - 30) * ((100vw - 320px) / (1920 - 320)))';
defaultTokens.fontWeightHeadingTitle1 = '600';

defaultTokens.fontSizeHeadingTitle2 =
  'calc(30px + (70 - 30) * ((100vw - 320px) / (1920 - 320)))';
defaultTokens.fontWeightHeadingTitle2 = '600';

defaultTokens.fontSizeHeadingTitle4 =
  'calc(16px + (40 - 16) * ((100vw - 320px) / (1920 - 320)))';
defaultTokens.fontWeightHeadingTitle4 = '600';

defaultTokens.fontSizeTextSmall =
  'calc(12px + (24 - 14) * ((100vw - 320px) / (1920 - 320)))';
defaultTokens.fontSizeTextNormal =
  'calc(16px + (28 - 16) * ((100vw - 320px) / (1920 - 320)))';
defaultTokens.fontSizeTextLarge =
  'calc(18px + (32 - 18) * ((100vw - 320px) / (1920 - 320)))';

// Button component
defaultTokens.fontSizeButtonNormal =
  'calc(16px + (28 - 16) * ((100vw - 320px) / (1920 - 320)))';
defaultTokens.borderRadiusNormal = `6px`;
defaultTokens.paddingButtonNormal = `0.84vw 1.68vw`;
defaultTokens.heightButtonNormal = `auto`;

defaultTokens.fontFamily = `"Circular Pro", -apple-system, ".SFNSText-Regular", "San Francisco", "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif`;

export default {
  orbit: defaultTokens,
  rtl: false,
};

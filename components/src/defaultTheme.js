// @flow

import { defaultTokens } from '@kiwicom/orbit-design-tokens';

defaultTokens.fontSizeHeadingDisplay =
  'calc(55px + (154 - 55) * ((100vw - 320px) / (1920 - 320)))';
defaultTokens.lineHeightHeading = '1.02';

defaultTokens.fontSizeHeadingTitle1 =
  'calc(30px + (90 - 30) * ((100vw - 320px) / (1920 - 320)))';
defaultTokens.fontWeightHeadingTitle1 = '600';

defaultTokens.fontSizeHeadingTitle2 =
  'calc(30px + (58 - 30) * ((100vw - 320px) / (1920 - 320)))';
defaultTokens.fontWeightHeadingTitle2 = '600';

defaultTokens.fontSizeHeadingTitle3 =
  'calc(30px + (40 - 30) * ((100vw - 320px) / (1920 - 320)))';
defaultTokens.fontWeightHeadingTitle3 = '600';

defaultTokens.fontSizeHeadingTitle4 =
  'calc(16px + (28 - 16) * ((100vw - 320px) / (1920 - 320)))';
defaultTokens.fontWeightHeadingTitle4 = '600';

defaultTokens.fontSizeTextSmall =
  'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))';
defaultTokens.fontSizeTextNormal =
  'calc(16px + (18 - 16) * ((100vw - 320px) / (1920 - 320)))';
defaultTokens.fontSizeTextLarge =
  'calc(18px + (22 - 18) * ((100vw - 320px) / (1920 - 320)))';

// Button normal
defaultTokens.fontSizeButtonNormal =
  'calc(16px + (18 - 16) * ((100vw - 320px) / (1920 - 320)))';
defaultTokens.borderRadiusNormal = `6px`;

defaultTokens.paddingButtonNormal =
  'calc(12px + (16 - 12) * ((100vw - 320px) / (1920 - 320))) calc(24px + (32 - 24) * ((100vw - 320px) / (1920 - 320)))';
defaultTokens.heightButtonNormal = `auto`;

// Button small
defaultTokens.fontSizeButtonSmall =
  'calc(14px + (24 - 14) * ((100vw - 320px) / (1920 - 320)))';
defaultTokens.borderRadiusSmall = `6px`;
defaultTokens.paddingButtonSmall =
  'calc(12px + (16 - 12) * ((100vw - 320px) / (1920 - 320))) calc(16px + (24 - 16) * ((100vw - 320px) / (1920 - 320)))';
defaultTokens.heightButtonSmall = `auto`;

// Font family
defaultTokens.fontFamily = `"Circular Pro", -apple-system, ".SFNSText-Regular", "San Francisco", "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif`;

// Button with only icon small
defaultTokens.widthIconMedium = `calc(24px + (32 - 24) * ((100vw - 320px) / (1920 - 320)))`;
defaultTokens.paddingButtonWithoutText =
  'calc(12px + (16 - 12) * ((100vw - 320px) / (1920 - 320)))';

export default {
  orbit: defaultTokens,
  rtl: false,
};

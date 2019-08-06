// @flow

import getTokens from '@kiwicom/orbit-components/lib/getTokens';

const defaultTokens = getTokens();

const customTheme = {
  fontSizeHeadingDisplay:
    'calc(55px + (154 - 55) * ((100vw - 320px) / (1920 - 320)))',
  lineHeightHeading: '1.02',
  lineHeightHeadingDisplay: '1.02',
  lineHeightHeadingTitle1: '1.02',
  lineHeightHeadingTitle2: '1.02',
  lineHeightHeadingTitle3: '1.02',
  lineHeightHeadingTitle4: '1.02',
  lineHeightHeadingTitle5: '1.02',

  fontSizeHeadingTitle1:
    'calc(30px + (90 - 30) * ((100vw - 320px) / (1920 - 320)))',
  fontWeightHeadingTitle1: '600',

  fontSizeHeadingTitle2:
    'calc(22px + (58 - 22) * ((100vw - 320px) / (1920 - 320)))',
  fontWeightHeadingTitle2: '600',

  fontSizeHeadingTitle3:
    'calc(19px + (40 - 19) * ((100vw - 320px) / (1920 - 320)))',
  fontWeightHeadingTitle3: '600',

  fontSizeHeadingTitle4:
    'calc(16px + (28 - 16) * ((100vw - 320px) / (1920 - 320)))',
  fontWeightHeadingTitle4: '600',

  fontSizeTextSmall:
    'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
  fontSizeTextNormal:
    'calc(16px + (18 - 16) * ((100vw - 320px) / (1920 - 320)))',
  fontSizeTextLarge:
    'calc(18px + (22 - 18) * ((100vw - 320px) / (1920 - 320)))',

  // Button normal
  fontSizeButtonNormal:
    'calc(16px + (18 - 16) * ((100vw - 320px) / (1920 - 320)))',
  borderRadiusNormal: `6px`,

  paddingButtonNormal:
    'calc(12px + (16 - 12) * ((100vw - 320px) / (1920 - 320))) calc(24px + (32 - 24) * ((100vw - 320px) / (1920 - 320)))',
  heightButtonNormal: `auto`,

  // Font family
  fontFamily: `"Circular Pro", -apple-system, ".SFNSText-Regular", "San Francisco", "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif`,

  // Button with only icon small
  widthIconMedium: `calc(24px + (32 - 24) * ((100vw - 320px) / (1920 - 320)))`,
  paddingButtonWithoutText:
    'calc(12px + (16 - 12) * ((100vw - 320px) / (1920 - 320)))',
};
const landing = {
  bodyPadding: 'calc(1rem + 7.02vw)',
};

const theme = { ...defaultTokens, ...customTheme };

export default {
  orbit: theme,
  rtl: false,
  landing: landing,
};

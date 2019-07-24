// @flow

import { css } from 'styled-components';

const slicedCorner = ({ backgroundColor }) => {
  return css`
    position: relative;
    z-index: 1;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100vw;
      height: 200px;
      background-color: ${backgroundColor};
      z-index: -1;
    }

    &:before {
      top: -40px;
      left: 0;
      transform: translate(-2px, 2vh) rotate(1.2deg);
    }
  `;
};

export default slicedCorner;

// @flow

import * as React from 'react';
import styled from 'styled-components';

const StyledPattern = styled.div`
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-image: ${({ pattern }) => `url(${pattern})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  position: absolute;
`;

const Pattern = ({ pattern, top, bottom, left, right, width, height }) => {
  return (
    <StyledPattern
      top={top}
      bottom={bottom}
      left={left}
      right={right}
      width={width}
      height={height}
      pattern={pattern}
    />
  );
};

export default Pattern;

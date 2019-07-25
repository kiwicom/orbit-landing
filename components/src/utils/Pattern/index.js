// @flow

import React from 'react';
import styled from 'styled-components';

const StyledPattern = styled.div`
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  min-height: ${({ minHeight }) => minHeight};
  min-width: ${({ minWidth }) => minWidth};
  background-image: ${({ pattern }) => `url(${pattern})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  position: ${({ relative }) => (relative ? 'relative' : 'absolute')};
  z-index: ${({ zindex }) => zindex};
`;

const Pattern = ({
  pattern,
  top,
  bottom,
  left,
  right,
  width,
  height,
  minHeight,
  minWidth,
  zindex,
  relative,
}) => {
  return (
    <StyledPattern
      top={top}
      bottom={bottom}
      left={left}
      right={right}
      width={width}
      height={height}
      minHeight={minHeight}
      minWidth={minWidth}
      pattern={pattern}
      relative={relative}
      zindex={zindex}
    />
  );
};

export default Pattern;

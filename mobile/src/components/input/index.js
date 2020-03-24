import React from 'react';
import { PropTypes } from 'prop-types';

import { Container, TInput } from './styles';

export default function input({ style }) {
  return (
    <Container style={style}>
      <TInput {...rest} />
    </Container>
  );
}

input.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Input.defaultProps = {
  style: {},
};

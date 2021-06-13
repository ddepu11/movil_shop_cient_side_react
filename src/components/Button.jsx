import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ innerText, pr, pl, pt, pb, fs, color }) => (
  <button
    type="button"
    style={{
      paddingTop: `${pt}px`,
      paddingBottom: `${pb}px`,
      paddingLeft: `${pl}px`,
      paddingRight: `${pr}px`,
      fontSize: `${fs}em`,
      color,
    }}
  >
    {innerText}
  </button>
);

Button.propTypes = {
  innerText: PropTypes.string.isRequired,
  pr: PropTypes.string.isRequired,
  pl: PropTypes.string.isRequired,
  pt: PropTypes.string.isRequired,
  pb: PropTypes.string.isRequired,
  fs: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Button;

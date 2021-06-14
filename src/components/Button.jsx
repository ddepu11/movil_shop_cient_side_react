import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  innerText,
  pr,
  pl,
  pt,
  pb,
  fs,
  color,
  bgColor,
  handleClick,
  pTB,
  pLR,
}) => (
  <button
    onClick={handleClick}
    type="button"
    style={{
      padding: `${pTB}px ${pLR}px`,
      paddingTop: `${pt}px`,
      paddingBottom: `${pb}px`,
      paddingLeft: `${pl}px`,
      paddingRight: `${pr}px`,
      fontSize: `${fs}em`,
      backgroundColor: `${bgColor}`,
      color,
    }}
  >
    {innerText}
  </button>
);

Button.propTypes = {
  handleClick: PropTypes.func,
  innerText: PropTypes.string,
  pr: PropTypes.string,
  pl: PropTypes.string,
  pt: PropTypes.string,
  pb: PropTypes.string,
  fs: PropTypes.string,
  pTB: PropTypes.string,
  pLR: PropTypes.string,
  color: PropTypes.string,
  bgColor: PropTypes.string,
};

Button.defaultProps = {
  handleClick: () => {},
  innerText: 'XYZ',
  pr: '5',
  pl: '5',
  pt: '10',
  pb: '10',
  fs: '1.2',
  pTB: '5',
  pLR: '10',
  color: 'white',
  bgColor: '#222',
};

export default Button;

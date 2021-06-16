import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Button = ({
  children,
  pr,
  pl,
  pt,
  pb,
  mr,
  ml,
  mt,
  mb,
  fs,
  color,
  bgColor,
  handleClick,
  tr,
  bSh,
  width,
  borderRadius,
  bcgImage,
  cursor,
}) => {
  useEffect(() => {});

  return (
    <button
      onClick={handleClick}
      type="button"
      style={{
        paddingTop: pt,
        paddingBottom: pb,
        paddingLeft: pl,
        paddingRight: pr,
        marginRight: mr,
        marginLeft: ml,
        marginTop: mt,
        marginBottom: mb,
        fontSize: fs,
        backgroundColor: bgColor,
        color,
        transform: tr,
        boxShadow: bSh,
        width,
        borderRadius,
        backgroundImage: bcgImage,
        cursor,
      }}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  pr: PropTypes.string,
  pl: PropTypes.string,
  pt: PropTypes.string,
  pb: PropTypes.string,
  mr: PropTypes.string,
  ml: PropTypes.string,
  mt: PropTypes.string,
  mb: PropTypes.string,
  fs: PropTypes.string,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  tr: PropTypes.string,
  bSh: PropTypes.string,
  width: PropTypes.string,
  borderRadius: PropTypes.string,
  bcgImage: PropTypes.string,
  cursor: PropTypes.string,
};

Button.defaultProps = {
  handleClick: () => {},
  children: 'XYZ',
  pr: '0',
  pl: '0',
  pt: '0',
  pb: '0',
  mr: '0',
  ml: '0',
  mt: '0',
  mb: '0',
  fs: '1em',
  color: 'white',
  bgColor: '#222',
  tr: 'transform 0.5s ease',
  bSh: 'rgba(0, 0, 0, 0.4) 0px 30px 90px',
  width: 'auto',
  borderRadius: '0px',
  bcgImage: '',
  cursor: 'pointer',
};

export default Button;

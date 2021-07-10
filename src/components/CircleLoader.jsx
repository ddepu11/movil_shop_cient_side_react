import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const spinTransition = {
  loop: Infinity,
  ease: 'linear',
  duration: 1,
};

const CircleLoader = () => (
  <Spinner>
    <motion.span
      className="circle"
      animate={{ rotate: 360 }}
      transition={spinTransition}
    />
  </Spinner>
);

const Spinner = styled.div`
  position: relative;
  width: 22px;
  height: 22px;

  .circle {
    display: block;
    width: 22px;
    height: 22px;
    border: 4px solid #e3e3e3;
    border-top: 4px solid #3490d9;
    border-radius: 50%;
    position: absolute;
    box-sizing: border-box;
    left: 0;
    right: 0;
  }
`;

export default CircleLoader;

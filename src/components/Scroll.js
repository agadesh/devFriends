import React from 'react';

const Scroll = props => {
  return <div style={{ overflowY: 'scroll', height: '70vh', width: '80vw', margin: 'auto' }}>{props.children}</div>;
};

export default Scroll;

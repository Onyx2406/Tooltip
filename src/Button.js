import React from 'react';
import Tooltip from './Tooltip';

function Button(props) {
  return (
    <button className={props.className}>
      <Tooltip {...props} />
    </button>
  );
}

export default Button;

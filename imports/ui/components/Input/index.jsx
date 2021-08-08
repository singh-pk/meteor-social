import React from 'react';

import './Input.scss';

const Input = ({ handleChange, label, ...otherProps }) => (
  <div className='input-container'>
    {label && <label className='input-label label-color'>{label}</label>}
    <input className='input' onChange={handleChange} {...otherProps} />
  </div>
);

export default Input;

import React, { useState, useRef } from 'react';
import { Meteor } from 'meteor/meteor';

import Button from '../Button';

import './Discuss.scss';

const Discuss = () => {
  const [val, setVal] = useState('');
  const [disabled, setDisabled] = useState(true);
  const ref = useRef(null);

  const handleClick = () =>
    Meteor.call(
      'post.add',
      { post: val, email: Meteor.user().emails[0].address },
      err => {
        if (err) {
          alert(err.reason);
        }

        setVal('');
        ref.current.innerHTML = '';
        setDisabled(true);
      }
    );

  return (
    <div className='discuss'>
      <div
        role='textbox'
        contentEditable='true'
        tabIndex='0'
        spellCheck='true'
        placeholder={`What's happening?`}
        className='discussion-box'
        onBlur={event => setVal(event.target.innerHTML)}
        onInput={event => setDisabled(!(event.target.innerHTML.length > 0))}
        ref={ref}
      />

      <div className='border' />

      <Button disabled={disabled} secondary onClick={handleClick}>
        Discuss
      </Button>
    </div>
  );
};

export default Discuss;

import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

import Input from '../Input';
import Button from '../Button';

import classes from './AuthPage.m.css';

const AuthPage = ({ page, history }) => {
  const [creds, setCreds] = useState({ email: '', password: '' });

  const handleChange = event => {
    const { value, name } = event.target;
    setCreds(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (page === 'Login') {
      Meteor.loginWithPassword(creds.email, creds.password);
    } else {
      Meteor.call('auth.signUp', creds, err => {
        if (err) {
          alert(err.reason);
        } else {
          history.push('/login');
        }
      });
    }
  };

  const authFields = [
    {
      type: 'email',
      label: 'Email',
      name: 'email',
      required: true,
      value: creds.login,
      handleChange,
    },
    {
      type: 'password',
      label: 'Password',
      name: 'password',
      required: true,
      value: creds.password,
      handleChange,
    },
  ];

  return (
    <div className={classes.authPage}>
      <header className={classes.authPageHeader}>{page}</header>

      <form onSubmit={handleSubmit}>
        {authFields.map(
          ({ type, label, name, required, value, handleChange }, i) => (
            <Input
              type={type}
              label={label}
              name={name}
              required={required}
              value={value}
              handleChange={handleChange}
              key={i}
            />
          )
        )}

        <Button type='submit'>{page}</Button>
      </form>
    </div>
  );
};

export default withRouter(AuthPage);

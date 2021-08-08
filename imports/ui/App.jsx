import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';

import WelcomePage from './pages/WelcomePage';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

import './App.scss';

export const App = () => {
  const user = useTracker(() => Meteor.user());

  const RenderRoute = ({
    component: Component,
    redirectPath = '/home',
    condition = !user,
    ...rest
  }) => {
    return (
      <Route
        {...rest}
        render={routeProps =>
          condition ? (
            <Component {...routeProps} />
          ) : (
            <Redirect to={redirectPath} />
          )
        }
      />
    );
  };

  return (
    <Switch>
      <RenderRoute exact path='/' component={WelcomePage} />
      <RenderRoute
        exact
        path='/home'
        component={Home}
        redirectPath='/login'
        condition={user}
      />
      <RenderRoute exact path='/login' component={Login} />
      <RenderRoute exact path='/signup' component={Signup} />
    </Switch>
  );
};

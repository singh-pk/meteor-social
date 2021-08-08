import React from 'react';
import { Meteor } from 'meteor/meteor';

import Header from '../Header';
import Discuss from '../Discuss';
import Post from '../Post';
import Button from '../Button';

import './Feed.scss';

const Feed = () => {
  return (
    <div className='feed'>
      <Header>
        <span>{Meteor.user()?.emails[0].address}</span>
        <Button secondary onClick={() => Meteor.logout()}>
          Logout
        </Button>
      </Header>

      <Discuss />

      <Post />
    </div>
  );
};

export default Feed;

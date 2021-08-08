import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Posts } from '/imports/db/posts';

import Button from '../Button';

import './Post.scss';

const Post = () => {
  const { posts, isLoading } = useTracker(() => {
    const handler = Meteor.subscribe('post.all');

    if (!handler.ready()) {
      return { posts: [], isLoading: true };
    }

    const posts = Posts.find({}, { sort: { createdAt: -1 } }).fetch();

    return { posts, isLoading: false };
  });

  const handleClick = (postId, userId) =>
    Meteor.call('post.delete', { postId, userId });

  return (
    <div className='posts'>
      {posts.map(({ _id, userId, email, post }, i) => (
        <div className='post' key={i}>
          <div>
            <span>{email}</span> - <span>{post}</span>
          </div>

          {Meteor.userId() === userId && (
            <div className='delete' onClick={() => handleClick(_id, userId)}>
              Delete
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Post;

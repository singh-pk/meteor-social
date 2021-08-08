import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Posts } from '../db/posts';

Meteor.methods({
  'post.add'({ post, email }) {
    check(post, String);

    return Posts.insert({
      post,
      email,
      userId: this.userId,
      createdAt: Date.now(),
    });
  },

  'post.delete'({ postId, userId }) {
    check(postId, String);
    check(userId, String);

    const post = Posts.findOne({ _id: postId, userId });

    if (!post) throw new Meteor.Error('Access denied.');

    return Posts.remove(postId);
  },
});

Meteor.publish('post.all', function () {
  return Posts.find({});
});

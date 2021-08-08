import { Mongo } from 'meteor/mongo';
// import SimpleSchema from 'simpl-schema';

export const Posts = new Mongo.Collection('posts');

// Posts.schema = new SimpleSchema({
//   post: {
//     type: String,
//   },
//   postedBy: {
//     type: { type: String, regEx: SimpleSchema.RegEx.Id },
//     ref: 'users',
//   },
//   likes: [{ type: String, regEx: SimpleSchema.RegEx.Id, ref: 'users' }],
//   comments: [
//     { comment: { type: String } },
//     {
//       commentedBy: {
//         type: String,
//         regEx: SimpleSchema.RegEx.Id,
//         ref: 'users',
//       },
//     },
//   ],
// });

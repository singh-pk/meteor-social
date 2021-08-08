import { Meteor } from 'meteor/meteor';
import '/imports/api/auth';
import '/imports/api/posts';
// import { UserCollection } from '/imports/api/users';

// function addUser({ email, password }) {
//   UserCollection.insert({ email, password, createdAt: new Date() });
// }

// Meteor.startup(() => {
//   // If the Links collection is empty, add some data.
//   if (UserCollection.find().count() === 0) {
//     insertLink({
//       title: 'Do the Tutorial',
//       url: 'https://www.meteor.com/tutorials/react/creating-an-app',
//     });

//     insertLink({
//       title: 'Follow the Guide',
//       url: 'http://guide.meteor.com',
//     });

//     insertLink({
//       title: 'Read the Docs',
//       url: 'https://docs.meteor.com',
//     });

//     insertLink({
//       title: 'Discussions',
//       url: 'https://forums.meteor.com',
//     });
//   }
// });

import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { check } from 'meteor/check';

Meteor.methods({
  'auth.signUp'({ email, password }) {
    check(email, String);
    check(password, String);

    Accounts.createUser({ email, password });
  },
});

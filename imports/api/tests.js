import { Meteor } from 'meteor/meteor';
import { Posts } from './client/js/data.js';
import { Random } from 'meteor/random';
import { assert } from 'meteor/practicalmeteor:chai';

if (Meteor.isServer) {
  describe('Posts', () => {
    describe('methods', () => {
      const userId = Random.id();
      let taskId;

      beforeEach(() => {
        taskId = Posts.insert({
          title: "Life"
          content: "Just a test"
          owner: "Tom"
          numUpvotes: 2
          numDownvotes: 2
          numDifference: 0
        });
      });

      it('can upvote', () => {
        const upvote = Meteor.server.methods['upVote'];

        // Set up a fake method invocation that looks like what the method expects
        const invocation = { userId };

        // Run the method with `this` set to the fake invocation
        deleteTask.apply(invocation, [taskId]);

        // Verify that the method does what we expected
        assert.equal(Posts.upVote(),3);
      });
    });
  });

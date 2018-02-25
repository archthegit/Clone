import { Mongo } from 'meteor/mongo';

export const Topics = new Mongo.Collection('topics');

let TopicsSchema = new SimpleSchema({
	'pun': {
		type: String,
		label: 'The content of the topic.'
	},
	'punpointsPos': {
		type: Number,
		label: 'The upvotes.'
	},
	'punpointsNeg': {
		type: Number,
		label: 'The downvotes.'
	},
	'timestamp': {
		type: Date,
		label: 'The date and time the topic was created.'
	}
});

Topics.attachSchema(TopicsSchema);

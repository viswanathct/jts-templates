/**
 * Extenders
 */

/* Helpers */
const { assign, collect } = require('@laufire/utils').collection;
const { getExtender } = require('./utils');
const { Config } = require('./core');

/* Exports */
const extensions = {
	array: {
		targetType: 'array',
	},
	optional: {
		required: false,
	},
	required: {
		required: true,
	},
}

const extenders = {
	config: (config) => new Config(config),
	extend: (config, extensions) => new Config(config, extensions),
	value: (config) => new Config({
		transform: () => config,
	}),
}

module.exports = assign(extenders, collect(extensions, getExtender));

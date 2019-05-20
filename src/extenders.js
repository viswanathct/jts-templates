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
}

const extenders = {
	config: (config) => new Config(config),
	extend: (config, extensions) => new Config(config, extensions),
}

module.exports = assign(extenders, collect(extensions, getExtender));

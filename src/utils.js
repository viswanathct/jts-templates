/**
 * Utils
 */

/* Helpers */
const { Config } = require('./core');

module.exports = {
	getExtender: (extensions) =>
		(config, additionalConfig) =>  new Config(config, extensions, additionalConfig),
}

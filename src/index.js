/**
 * JTS Templates
 */

/* Delegates */
const { transformer: jtsTransform } = require('json-transformation-schema');

/* Helpers */
const { standardizeOptions, schemaFromTemplate } = require('./core');

/* Exports */
const { type } = require('./core');

/**
 *
 * @param {object} template - The template to transform.
 * @param {object} options [optional] - Options for the jts transformer.
 * @returns {object} The transformer object, with a transform function.
 */
const transformer = (template, options = {}) => {
	options = standardizeOptions(options);
	schema = schemaFromTemplate(template);

	const jtsTransformer = jtsTransform(schema, options);

	return {
		transform: (data) => jtsTransformer.transform(data, schema, options),
	}
}

module.exports = {
	transformer,
	type,
	utils: require('./utils'),
	extenders: require('./extenders'),
}

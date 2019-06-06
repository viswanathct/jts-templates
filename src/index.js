/**
 * JTS Templates
 */

/* Delegates */
const { transformer } = require('json-transformation-schema');

/* Helpers */
const { standardizeOptions, schemaFromTemplate } = require('./core');

/* Exports */
const { type } = require('./core');

/**
 *
 * @param {object} schema - Schema of the template.
 * @param {object} options [optional] - Options for the jts transformer.
 * @returns {object} The transformer object, with a transform function.
 */
const template = (schema, options = {}) => {
	options = standardizeOptions(options);
	schema = schemaFromTemplate(schema);

	const jtsTransformer = transformer(schema, options);

	return {
		render: (data = {}) => jtsTransformer.transform(data, schema, options),
	}
}

module.exports = {
	template,
	type,
	utils: require('./utils'),
	extenders: require('./extenders'),
}

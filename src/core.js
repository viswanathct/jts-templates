/**
 * The Core
 */

/* Delegates */
const { standardizeSchema: jtsStandardizeSchema,
	transform: jtsTransform } = require('json-transformation-schema').core;

/* Helpers */
const { assign, clone, collect } = require('@laufire/utils').collection;
const { inferType } = require('@laufire/utils').reflection;

const schemaFromTemplate = (template) => ({
	type: 'template',
	template,
});

const configStandardizers = {
	string: (prop) => ({ prop }),
	config: (schema) => assign({}, schema),
	object: schemaFromTemplate,
	function: (fn) => fn,
};

const standardizeConfig = (config) => {
	const configStandardizer = configStandardizers[inferType(config)];
	return configStandardizer
		? configStandardizer(config)
		: config
}

/* Exports */
/**
 *
 * @param  {...object} configs - Any number of objects with jts config.
 */
const Config = function(...configs) {
	assign(this, ...configs.map((config) => typeof config != 'string'
		? config
		: standardizeConfig(config)
	));
};

const standardizeOptions = (options) => {
	options = clone(options);
	options.types =  assign({ template: type }, options.types);
	return options;
}

const standardizeSchema = (schema, options) => {
	schema.template = collect(schema.template, (propSchema) =>
		jtsStandardizeSchema(
			standardizeConfig(propSchema),
			options,
		)
	);
	return schema;
}

const transform = (data, schema, options) =>
	collect(schema.template, (propSchema) => jtsTransform(data, propSchema, options));

const type = {
	standardizeSchema,
	transform,
}

module.exports = {
	Config,
	standardizeOptions,
	standardizeSchema,
	schemaFromTemplate,
	type,
}

/**
 * Testing the core
 */
describe('jts-template core', () => {

	/* Test Targets */
	const { schemaFromTemplate, standardizeOptions, type } = require('../src/core');

	/* Tests */
	test('schemaFromTemplate converts the given template to jts schema', () => {
		const template = Symbol();

		expect(schemaFromTemplate(template)).toEqual({
			type: 'template',
			template,
		});
	});

	test('standardizeOptions adds the type config to pass to the jts transformer', () => {
		expect(standardizeOptions({})).toEqual({
			types: {
				template: type,
			},
		})
	});

	test('type.standardizeSchema standardizes the given schema', () => {

	});
});

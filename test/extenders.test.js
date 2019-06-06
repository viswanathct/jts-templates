/**
 * Testing the extenders
 */
describe('extenders', () => {

	/* Test Targets */
	const extenders = require('../src/extenders');
	const { Config } = require('../src/core');

	/* Helpers */
	const testSpec = (spec) => {
		const { extender, expectation, args = [{}]} = spec;

		test(`extender - ${ extender }`, () => {
			const actual = extenders[extender](...args);

			expect(actual).toBeInstanceOf(Config);
			expect(actual).toEqual(expectation);
		});
	}

	/* Spec */
	const specs = [
		{
			extender: 'array',
			expectation: {
				'targetType': 'array',
			},
		},
		{
			extender: 'optional',
			expectation: {
				'required': false,
			},
		},
		{
			extender: 'required',
			expectation: {
				'required': true,
			},
		},
		{
			extender: 'config',
			args: [{
				someProp: 'someValue',
			}],
			expectation: {
				someProp: 'someValue',
			},
		},
		{
			extender: 'extend',
			args: [
				{
					someProp: 'someValue',
				},
				{
					someOtherProp: 'someOtherValue',
				},
			],
			expectation: {
				someProp: 'someValue',
				someOtherProp: 'someOtherValue',
			},
		},
	]


	/* Tests */
	specs.forEach(testSpec)

	test('extender - value', () => {
		const value = Symbol();
		const actual = extenders.value(value);

		expect(actual).toBeInstanceOf(Config);
		expect(actual.transform()).toEqual(value);
	});
});

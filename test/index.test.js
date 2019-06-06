/**
 * Testing the entry-point
 */
describe('jts-template entry-point', () => {

	/* Test Targets */
	const { template } = require('../src');

	/* Helpers */
	const returnFirstArg = (x) => x;
	const { Config } = require('../src/core');

	/* Mocks and stubs */
	const { nested } =require('./helpers/mocksAndStubs');

	/* Tests */
	test('template allows for simple templating', () => {
		const schema = {
			nested: (doc) => doc,
		}
		const { render } = template(schema);

		expect(render(nested)).toEqual({ nested })
	});

	test('template allows for nested templating', () => {
		const schema = {
			nested: {
				a: returnFirstArg,
				b: returnFirstArg,
			},
		}
		const { render } = template(schema);

		expect(render(nested)).toEqual({
			nested: {
				a: nested,
				b: nested,
			},
		})
	});

	test('template schemas could be simple functions', () => {
		const schema = {
			val: () => 1,
		}
		const { render } = template(schema);

		expect(render(nested)).toEqual({ val: 1 });
	});

	test('template schemas of type string gathers the value from the passed doc', () => {
		const schema = {
			val: 'c/d',
		}
		const { render } = template(schema);

		expect(render(nested)).toEqual({ val: nested.c.d });
	});

	test('template schemas of type config allows for vanilla jts config within templates', () => {
		const schema = {
			val: new Config('c/d'),
		}
		const { render } = template(schema);

		expect(render(nested)).toEqual({ val: nested.c.d });
	});

	test('template schemas of type object allows for nested templates', () => {
		const schema = {
			parent: {
				child: returnFirstArg,
			},
		}
		const { render } = template(schema);

		expect(render(nested)).toEqual({
			parent: {
				child: nested,
			},
		});
	});

	test('template schemas of type object allows for nested templates', () => {
		const schema = {
			string: "string",
			number: 1,
			function: () => 1,
		};
		const { render } = template(schema, {
			translateProps: false,
		});

		const actual = render();
		expect(actual).toEqual({
			string: "string",
			number: 1,
			function: 1,
		});
	});
});

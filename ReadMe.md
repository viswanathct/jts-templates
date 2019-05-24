# JTS Templates

	A library to help in writing less verbose JSON transformation schema.

## The `Why`

* JSON Transformation schema could be a little verbose. This library provide an alternate way to write JTS.

## Example
```js
/* JTS with JTS templates */
const schema = {
	person: {
		name: type('string'),
		age: optional(type('number')),
		hobbies: type(optional('array')),
	},
}

/* JTS vanila */
const schema = {
	person: {
		type: 'object',
		properties: {
			name: {
				type: 'string',
			},
			age: {
				type: 'number',
				required: false,
			},
			hobbies: {
				type: 'array',
				required: false,
			},
		},
	},
}
```
**For more examples, check the [examples](https://github.com/author-name/jts-templates/tree/master/examples) dir**.

## Installation
```sh
$ npm install jts-templates
```

## Use Cases

* Some usecases.

## Keys

* A short list of things to understand the package, better.

## Notes

* Some notes.

# Development

## Setup
```sh
$ sh ./setup.sh
```

## ToDo

* Add a cheatsheet example.

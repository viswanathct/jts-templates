/**
 * The cheatsheet.
 */

/* Targets */

/* Helpers */
const { log, runExamples } = require('./helpers');

/* Data */


/* Examples */
const examples = {

	'Simple example': () => log(simpleExample),

};

/* Main */
runExamples(examples);

module.exports = {
	examples,
}

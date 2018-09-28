const list = require('./list');

function all( lang, project, query ) {
	return list( lang, project, null, null, query );
}

module.exports = all;

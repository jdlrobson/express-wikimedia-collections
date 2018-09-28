const mwApi = require('./mwApi');

// request/lib/oauth.js
module.exports = function ( lang, title, section, project, profile ) {
	var params = {
		prop: 'revisions|images',
		rvprop: 'content|timestamp',
		titles: title,
		meta: 'userinfo',
		uiprop: 'blockinfo'
	};
	if ( section !== undefined ) {
		params.rvsection = section;
	}
	return mwApi( lang, params, project, null, profile );
}

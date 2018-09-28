const watched = require('./watched');

const members = require('./members');

module.exports = function ( lang, project, collection, titles, profile ) {
	if ( collection === 0 ) {
		return watched( lang, project, titles, profile );
	} else {
		return members( lang, project, collection, profile.displayName ).then( function ( members ) {
			var watched = {};
			titles.forEach( function ( title ) {
				watched[ title ] = members.indexOf( title ) > -1;
			} );
			return watched;
		} );
	}
}

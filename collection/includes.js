const lag = require('./lag');
const list = require('./list');
const watched = require('./watched');

function includes( lang, project, title, includeWatchlist, profile ) {
	var username = profile.displayName;
	return list( lang, project, username, title ).then( function ( result ) {
		result = lag( result, username, profile );

		if ( profile && includeWatchlist ) {
			return watched( lang, project, [ title ], profile ).then( function ( watchInfo ) {
				result.collections.unshift( {
					id: 0,
					title: 'Watchlist',
					member: watchInfo[ title ]
				} );
				return result;
			} );
		} else {
			return result;
		}
	} );
}

module.exports = includes;

const update = require('./update');
const member = require('./member');
const members = require('./members');
const getInfo = require('./get-info');
const includes = require('./includes');
const edit = require('./edit');
const list = require('./list');
const create = require('./create');
const all = require('./all');

const addProps = require('./addProps');

function membersWithProps( lang, project, collection, username, query ) {
	return members( lang, project, collection, username ).then( function ( titles ) {
		var offset = query.offset ? parseInt( query.offset, 10 ) : 0;
		var nextOffset;

		return getInfo( lang, project, collection, username ).then( function ( info ) {
			if ( titles.length - offset > 50 ) {
				nextOffset = offset + 50;
			}
			titles = titles.slice( offset, offset + 50 );

			return addProps( titles, [ 'pageterms', 'pageimages', 'coordinates' ], lang, project ).then( function ( pages ) {
				return Object.assign( info, {
					pages: pages,
					'continue': nextOffset ? {
						offset: nextOffset
					} : undefined
				} );
			} );
		} );
	} );
}

module.exports = {
	all: all,
	create: create,
	edit: edit,
	includes: includes,
	list: list,
	member: member,
	members: membersWithProps,
	update: update
};

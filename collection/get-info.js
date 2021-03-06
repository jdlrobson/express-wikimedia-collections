const wikitext = require('./wikitext');

const extractInfo = require('./extract-info');
const lookup = require('./lookup');

function getInfo( lang, project, collection, username ) {
	var section = 0;
	var collectionTitle = lookup( username, collection );

	return wikitext( lang, collectionTitle, section, project ).then( function ( json ) {
		var rev,
			page = json.pages[ 0 ];

		if ( page && !page.missing ) {
			rev = page.revisions[ 0 ];
			return extractInfo( page.title, rev.content, rev.timestamp, page.images ? page.images[ 0 ].title : null );
		} else {
			throw 'Collection does not exist.';
		}
	} );
}

module.exports = getInfo;

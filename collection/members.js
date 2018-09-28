const wikitext = require('./wikitext');

const lookup = require('./lookup');
const extractMembers = require('./extract-members');

function members( lang, project, collection, username ) {
	var section = 1;
	var collectionTitle = lookup( username, collection );

	return wikitext( lang, collectionTitle, section, project ).then( function ( json ) {
		var page = json.pages[ 0 ];
		var rev = page.revisions[ 0 ];
		return extractMembers( rev.content, true );
	} );
}

module.exports = members;

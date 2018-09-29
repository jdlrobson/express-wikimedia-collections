

```
const express = 'express';
const app = express();
const init = require( 'express-wikimedia-collections' )
init( app, '/api', 'wikivoyage', 'en' );

```

Exposes the following APIS:

* /api/collection/
* /api/collection/by/:username
* /api/collection/by/:username/:id
* /api/private/collection/:id/:action/:title (action=create,has,with,add,remove,edit)

Lists are stored publically as pages @ en.wikivoyage.org/wiki/User<:user>/lists/<:id>

// express.js

/**
 * Required External Modules
*/
const express = require('express');
const session = require('express-session');
const path = require('path');

module.exports = function(){
    const app = express();
    const port = 3000;

    app.set('port', port);
    app.set('views', path.join(__dirname, '../views'));
    app.set('view engine', 'pug');
    app.use(express.static(path.join(__dirname, '../public')));

    app.listen(port, () => {
        console.log('ThreeJSGame listening at http://localhost:{port}');
    })

    return app;
}

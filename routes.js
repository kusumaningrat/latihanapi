'use strict';

module.exports = function(app){
    var myapp = require('./controller');

    app.route('/')
        .get(myapp.index);
}
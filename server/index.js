const hapi = require('hapi');
const mongoose = require('mongoose');
const Code = require('./models/Code');

mongoose.connect('mongodb://joonvena:codebase12@ds249623.mlab.com:49623/codebase');

mongoose.connection.once('open', () => {
    console.log('Database connection successful')
});

const server = hapi.server({
    port: 4000,
    host: 'localhost',
    "routes": {
        "cors": true
    }
});

const init = async () => {

    server.route([
        {
        method: 'GET',
        path: '/',
        handler: function(request, reply) {
            return home.js;
        }
    },
    {
        method: 'GET',
        path: '/api/codes',
        handler: (req, reply) => {
            return Code.find();
        }
    },
    {
        method: 'POST',
        path: '/api/codes',
        handler: (req, reply) => {
            const { title, code, tags } = req.payload;
            const code_snippet = new Code({
                title,
                code,
                tags
            });

            return code_snippet.save();
        }
    }
]);

    await server.start();
    console.log(`Server started at: ${server.info.uri}`);
};

init();

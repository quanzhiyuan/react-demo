const path = require('path');

module.exports = {
    resolve: {
        alias: {
            components: path.join(__dirname, '/src/components'),
            actions: path.join(__dirname, '/src/actions'),
            api: path.join(__dirname, '/src/api'),
            reducers: path.join(__dirname, '/src/reducers'),
            utils: path.join(__dirname, '/src/utils'),
            constants: path.join(__dirname, '/src/constants'),
        },
    },
};

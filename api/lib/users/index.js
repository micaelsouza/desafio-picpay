const routes = require('./routes');

exports.plugin = {
  async register(server) {
    server.route(routes);
  },
  pkg: {
    name: 'users',
    version: '1.0.0',
  },
};

const logger = require('fluent-logger');

logger.configure('filter.test', {
  host: 'localhost',
  port: 24224,
  timeout: 3.0,
  reconnectInterval: 600000 // 10 minutes
});

logger.emit('message', { message: 'this is a log' }, () => {
  process.exit(1);
});

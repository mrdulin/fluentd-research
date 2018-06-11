const logger = require('fluent-logger');

logger.configure('mongo.test', {
  host: 'localhost',
  port: 24224,
  timeout: 3.0,
  reconnectInterval: 60 * 10 * 1000
});

// send an event record with 'tag.label'
logger.emit('label', { record: 'this is a log' }, () => {
  process.exit(1);
});

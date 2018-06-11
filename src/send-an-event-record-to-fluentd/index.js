const logger = require('fluent-logger');

logger.configure('tag_prefix', {
  host: 'localhost',
  port: 24224,
  timeout: 3.0,
  reconnectInterval: 600000 // 10 minutes
});

// send an event record with 'tag.label'
logger.emit('label', { record: 'this is a log' }, () => {
  process.exit(1);
});

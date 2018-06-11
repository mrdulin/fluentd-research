const log4js = require('log4js');

log4js.configure({
  appenders: {
    fluent: {
      type: 'log4js-fluent-appender',
      tag_prefix: 'tag_prefix',
      options: {
        levelTag: true,
        host: 'localhost',
        port: 24224
      }
    }
  },
  categories: {
    default: {
      appenders: ['fluent'],
      level: 'info'
    }
  }
});

const logger = log4js.getLogger();

logger.info('This is info message!');

setTimeout(() => {
  log4js.shutdown(() => {});
}, 1000);

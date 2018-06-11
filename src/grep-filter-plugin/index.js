const logger = require('fluent-logger');

logger.configure('filter.test', {
  host: 'localhost',
  port: 24224,
  timeout: 3.0,
  reconnectInterval: 600000 // 10 minutes
});

const messages = {
  msg1: {
    record: { message: "It's cool outside today", hostname: 'web001.example.com' }
  },
  msg2: {
    record: { message: "That's not cool", hostname: 'web1337.example.com' }
  },
  msg3: {
    record: { message: 'I am cool but you are uncool', hostname: 'db001.example.com' }
  },
  msg4: {
    record: { hostname: 'web001.example.com' }
  },
  msg5: {
    record: { message: "It's cool outside today" }
  }
};

function emitp(label, record, timestamp) {
  return new Promise(resolve => {
    logger.emit(label, record, timestamp, resolve);
  });
}

function batchEmit(recondMap) {
  const emits = Object.keys(recondMap).map(label => {
    return emitp(label, recondMap[label].record, recondMap[label].timestamp);
  });
  return Promise.all(emits);
}

batchEmit(messages).then(() => {
  process.exit(1);
});

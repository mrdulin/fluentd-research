const express = require('express');
const logger = require('fluent-logger');

const app = express();
const port = process.env.PORT || 3000;

logger.configure('fluentd.test', {
  host: 'localhost',
  port: 24224,
  timeout: 3.0,
  reconnectInterval: 60 * 10 * 1000
});

app.get('/', (req, res) => {
  logger.emit('follow', { from: 'userA', to: 'userB' });
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

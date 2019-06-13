const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const config = require('./config');
const log = require('./utils/logger');
const exampleRouter = require('./routes/example');
const emailUtil = require('./utils/email.util');
const cacheUtil = require('./utils/cache.util');
const cronJob = require('./utils/cron.util');

const PORT = process.env.PORT || 8080;

const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
log.info(`app: Starting in [${env}] mode`);

const app = express();
log.info(`app: Setting up cors with options ${JSON.stringify(config[env].cors)}`);
app.use(cors(config[env].cors));
// Middlewares
log.info('app: Loading middlewares');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
log.info(`app: Setting up morgan level ${config[env].logger.morganLevel}`);
app.use(morgan(config[env].logger.morganLevel, { stream: log.stream }));
// using public folder server running the angular client.
app.use(express.static(path.join(__dirname, 'public')));
// Node Routes
app.use('/api/example', exampleRouter);
log.info('app: Finished loading middlewares');

// Angular reroute
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

// Start the server
app.listen(PORT, () => {
  log.info(`App listening on port ${PORT}`);
});


// Catch all unhandled rejections and log
process.on('unhandledrejection', async (reason) => {
  cacheUtil.incrementErrorCount(reason.stack || reason);
  log.error(` Unhandled Rejection at: ${reason.stack || reason}`);
  await emailUtil.sendAlertMail(`${process.env.COMPANY || 'DEV'} Unhandled Rejection  `, `Unhandled Rejection at: ${reason.stack || reason}`);
});


// Testing module
module.exports = app;

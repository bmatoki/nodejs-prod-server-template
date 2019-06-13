const express = require('express');
const log = require('../utils/logger');
const cacheUtil = require('../utils/cache.util');

const router = express.Router();

// example function for route
async function exampleFunc(req, res) {
  log.info('example route: /x/example exampleFunc() Started');
  try {
    return res.status(200).json({
      success: true,
      msg: 'example',
    });
  } catch (error) {
    log.error(`example route: /x/example exampleFunc() error: ${error}`);
    cacheUtil.incrementErrorCount(error.message || error);
    return res.status(400).json({
      success: false,
      msg: `Error : ${error}`,
    });
  } finally {
    log.info('example route: /x/example exampleFunc () Ended');
  }
}

// routes
router.get('/example', exampleFunc);
module.exports = router;

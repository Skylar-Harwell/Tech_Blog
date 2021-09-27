const router = require('express').Router();
const firstApi = require('./firstApiFileName');
const secondApi = require('./secondApiFileName');

router.use('/pageApiName', firstApi);
router.use('/pageApiName', secondApi);

module.exports = router;
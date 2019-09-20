const express = require('express');
const router = express.Router();

const jiraRouter = require('./api/jira');
router.get('/', function(req, res, next){
    res.send({
        result:"ok"
    });
});
router.use('/jira', jiraRouter);

module.exports = router;
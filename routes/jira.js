const express = require('express');
const router = express.Router();

const debug = require('debug')('dashboard:router:jira');

const request = require('request-promise-native');
const asyncHandler = require('express-async-handler');

const baseUrl = `${process.env.JIRA_URL}/rest/api/2`;
const jiraAuth = {
    'user': process.env.JIRA_ID,
    'pass': process.env.JIRA_PW
};

const apiProject = "/project";
const apiUser = "/user";
const jiraApiUser = "/group/member?groupname=jira-software-users";

async function getProjects (req, res, next) {
    let key = req.params.key;
    let reqUrl = baseUrl + apiProject;
    if(key){
        debug(`get jira project [${key}]`);
        reqUrl += `/${key}`;
    } else {
        debug("get all jira projects");
    }
    const options = {
        uri: reqUrl,
        auth: jiraAuth
    };

    let result = await request(options);
    res.send(result);
}

async function getUsers(req, res, next){
    let key = req.params.name;
    let reqUrl = baseUrl + jiraApiUser;
    if(key){
        debug(`get jira user [${key}]`);
        reqUrl += `/${key}`;
    } else {
        debug("get all jira users");
    }
    const options = {
        uri: reqUrl,
        auth: jiraAuth
    };

    let result = await request(options);
    res.send(result);
}

router.get(apiProject + "/:key?", asyncHandler(getProjects));
router.get(apiUser + "/:name?", asyncHandler(getUsers));

module.exports = router;
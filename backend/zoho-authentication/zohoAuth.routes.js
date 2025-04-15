const express = require('express');
const zohoAuth = express.Router({ mergeParams: true });

const zohoAuthController = require('./zohoAuth.controller');

zohoAuth.get('/', zohoAuthController.generateAccessToken);
zohoAuth.post('/', zohoAuthController.storeZohoAuthentication);

module.exports = zohoAuth;

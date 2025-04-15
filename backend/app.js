// Centralize all the routes here
const express = require('express');
const router = express.Router();

const zohoAuthRoutes = require('./zoho-authentication/zohoAuth.routes');

router.use('/zoho-auth', zohoAuthRoutes);

module.exports = router;

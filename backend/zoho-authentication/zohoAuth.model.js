const mongoose = require('mongoose');

const ZohoAuthSchema = mongoose.Schema({
  access_token: {
    index: true,
    required: true,
    type: String,
  },
  refresh_token: {
    required: true,
    type: String,
  },
  scope: {
    required: true,
    type: String,
  },
  redirect_uri: {
    required: true,
    type: String,
  },
  grant_type: {
    required: true,
    type: String,
  },
});

const ZohoAuth = new mongoose.model('ZohoAuth', ZohoAuthSchema);
module.exports = ZohoAuth;

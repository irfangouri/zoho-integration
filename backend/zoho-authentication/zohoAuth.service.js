const axios = require('axios');
const ZohoAuth = require('./zohoAuth.model');

const {
  CLIENT_ID,
  CLIENT_SECRET,
} = process.env;

const storeZohoAuthentication = async (zohoAuthData) => {
  try {
    const zohoAuth = new ZohoAuth({
      access_token: zohoAuthData.access_token,
      refresh_token: zohoAuthData.refresh_token,
      scope: zohoAuthData.scope,
      redirect_uri: zohoAuthData.redirect_uri,
      grant_type: zohoAuthData.grant_type,
    });
    await zohoAuth.save();

    return {
      statusCode: 201,
      zohoAuth: zohoAuth,
    };
  } catch (error) {
    console.error('Error occurred while storing zoho authentication credentials, error: ', error);
    return {
      statusCode: 500,
      error: `Error occurred while storing zoho authentication credentials, error: ${error}`,
    };
  }
}

const generateAccessToken = async () => {
  try {
    const zohoAuth = await ZohoAuth.findOne();
    if (!zohoAuth) {
      return {
        statusCode: 404,
        error: 'Zoho Authentication Credentials not found',
      };
    }

    const response = await axios.post(
      `https://accounts.zoho.in/oauth/v2/token?refresh_token=${zohoAuth.refresh_token}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&scope=${zohoAuth.scope}&redirect_uri=${zohoAuth.redirect_uri}&grant_type=${zohoAuth.grant_type}`,
    );

    const zohoAuthResponse = await ZohoAuth.findByIdAndUpdate(
      zohoAuth._id,
      { access_token: response?.data?.access_token },
      { new: true },
    );

    console.log('Done', new Date());

    return {
      statusCode: 200,
      message: 'Zoho Access Token updated successfully',
    };
  } catch (error) {
    console.error('Error occurred while generating access token from refresh token: ', error);
    return {
      statusCode: 500,
      error: `Error while generating access token from refresh token, error: ${error}`,
    };
  }
}

module.exports = {
  storeZohoAuthentication,
  generateAccessToken,
};

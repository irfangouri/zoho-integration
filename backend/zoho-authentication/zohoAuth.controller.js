const ZohoAuthService = require('./zohoAuth.service');

const storeZohoAuthentication = async (req, res) => {
  try {
    const zohoAuthData = req.body;

    const zohoAuth = await ZohoAuthService.storeZohoAuthentication(zohoAuthData);
    if (zohoAuth?.error) {
      return res
        .status(zohoAuth.statusCode)
        .send(zohoAuth.error);
    }

    res
      .status(zohoAuth.statusCode)
      .json({
        zohoAuth: zohoAuth.zohoAuth,
      });
  } catch (error) {
    res
      .status(500)
      .send(error);
  }
}

const generateAccessToken = async (req, res) => {
  try {
    const zohoAuth = await ZohoAuthService.generateAccessToken();
    if (zohoAuth?.error) {
      return res
        .status(zohoAuth.statusCode)
        .send(zohoAuth.error);
    }

    res
      .status(zohoAuth.statusCode)
      .json({
        zohoAuth: zohoAuth.message,
      });
  } catch (error) {
    res
      .status(500)
      .send(error);
  }
}

module.exports = {
  storeZohoAuthentication,
  generateAccessToken,
};

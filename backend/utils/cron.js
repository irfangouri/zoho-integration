const schedule = require('node-schedule');
const { generateAccessToken } = require('../zoho-authentication/zohoAuth.service');

const cronJob = async () => {
  schedule.scheduleJob('0 0 * * * *', async () => {
    console.log('This job is scheduled every hour', new Date());
    await generateAccessToken();
  });
}

module.exports = cronJob;

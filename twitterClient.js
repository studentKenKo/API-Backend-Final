const {TwitterApi} = require("twitter-api-v2");

const client = new TwitterApi({
    appKey: 'hmXMM5ipdKOgglZOucgXhZL95',
    appSecret: 'zoExpsBsPLxlhBvzzRh5M8HC5Y2cxleD5oKL5UcrQGWiQm2LGX',
    accessToken: '1574646079-l7JegTNQ4eRCKZu4hwPmTZ6z8qHvzLJS9xVbtRZ',
    accessSecret: 'ZE94Aib7vgUNYr4YLAq8gYGAXkmeVwUeDJNYPH3h2S7pc',
});

const rwClient = client.readWrite

module.exports =rwClient
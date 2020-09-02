module.exports = {
    GOOGLE_ANALYTICS_INIT: (() => process.env.NODE_ENV == 'production')(),  // optional (false)
    GOOGLE_ANALYTICS_ID: false,                                             // optional (false)
    DEV_BANNER: (() => process.env.HEROKU)(),                               // optional (false)
    DISCORD_CLIENT_ID: false,                                               // optional (false)
    DISCORD_LOGIN_URI: false,                                               // optional (false)
};
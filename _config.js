module.exports = {
    CNAME: false,                                                           // optional (false) - GitHub pages custom domain
    GOOGLE_ANALYTICS_INIT: (() => process.env.NODE_ENV == 'production')(),  // optional (false) - Google Analytics enabled
    GOOGLE_ANALYTICS_ID: false,                                             // optional (false) - Google Analytics tracking ID
    DEV_BANNER: (() => process.env.HEROKU)(),                               // optional (false) - If the development banner should be shown
    DISCORD_CLIENT_ID: false,                                               // optional (false) - Discord bot ID
    DISCORD_LOGIN_URI: false,                                               // optional (false) - Discord login proxy link
};
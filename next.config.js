const withImages = require('next-images');

module.exports = withImages({
  esModule: true,
  env: {
    API_URL: 'https://video-maker-back.herokuapp.com/api',
    DOMAIN: 'https://video-maker-back.herokuapp.com',
  },
});

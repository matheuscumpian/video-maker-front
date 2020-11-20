const withImages = require('next-images')

module.exports = withImages({
  esModule: true,
  env: {
    API_URL: 'http://localhost:8080/api',
    DOMAIN: 'http://localhost:3000'
  }
})

const path = require('path')

const outputFolder = 'dist'

const staticPublicPath = '/static'
const baseUri = 'https://storage.googleapis.com/twreporter-infographics/high-risk-youth-life-is-a-struggle'

const isProduction = process.env.NODE_ENV === 'production'
const scriptsPath = !isProduction ? '' : 'https://storage.googleapis.com/twreporter-infographics/high-risk-youth-life-is-a-struggle-eng-gcs/dist/'

module.exports = {
  baseUri,
  outputFolder,
  outputPath: path.resolve(__dirname, `./${outputFolder}`),
  scriptsPath,
  staticPublicPath,
}

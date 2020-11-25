const path = require('path')
const DEFAULT_OUTPUT_PATH = path.join(__dirname, 'dist')
const EXAMPLE_PACK_DATA = path.join(__dirname, 'src', 'example-data.json')

const config = require('./webpackConfigFactory.js')(
    DEFAULT_OUTPUT_PATH,
    EXAMPLE_PACK_DATA
)

module.exports = config


const path = require('path');

const BASE_PATH = path.join(__dirname,'..');
const SRC_DIR_NAME = 'src';
const DIST_DIR_NAME = 'dist';

const config = {

    DIR_SRC: path.join(BASE_PATH, SRC_DIR_NAME),
    DIR_DIST: path.join(BASE_PATH, DIST_DIR_NAME)

}

module.exports = config;
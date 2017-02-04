const appModule = require('./lib/appModule');
const path = require('path');

const appName = path.basename(__filename, '.js');

appModule.getFlags(appName);
appModule.prepareFlagMessage();
appModule.outputFlags(appName);

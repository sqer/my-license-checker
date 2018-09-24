#! /usr/bin/env node
var pkgConf = require('pkg-conf'),
	license = require('../index');

var getConfigFromMainPackageJson = function () {
	return pkgConf.sync('my-license-checker-config', process.cwd());
};

var start = function () {
	var config = getConfigFromMainPackageJson();
	license.run(config);
};

start();

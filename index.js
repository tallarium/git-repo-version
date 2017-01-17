/* jshint node:true, eqnull:true */

'use strict';

var getGitInfo = require('git-repo-info');

module.exports = function version(shaLength, root) {
  var projectPath = root || process.cwd();
  var info = getGitInfo(projectPath);

  var sha = info.sha || '';

  return sha.slice(0, shaLength || 8);
};

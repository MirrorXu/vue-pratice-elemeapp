'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')


var os = require('os');
var iptable = {};
var ifaces = os.networkInterfaces();
for (var dev in ifaces) {
  ifaces[dev].forEach(function (details, alias) {
    if ((details.family == 'IPv4') && (details.internal == false)) {
// iptable[dev+(alias?':'+alias:'')]=details.address;
      iptable['localIP'] = details.address;
    }
  });
}

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  localIp4: iptable.localIP
})

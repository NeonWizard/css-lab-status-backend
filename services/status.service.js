const express = require('express')

// const ManagementClient = require('f5-sdk-js').bigip.ManagementClient;
// const AS3Client = require('f5-sdk-js').bigip.extension.AS3Client;

// const mgmtClient = new ManagementClient({
//   host: 'huskyonnet.uw.edu',
//   port: 443,
//   user: process.env.F5_USERNAME,
//   password: process.env.F5_PASSWORD
// })
// await mgmtClient.login();

// const extensionClient = new AS3Client(mgmtClient);
// await extensionClient.service.create({ config: {} });


const STAT_ENUM = {
  0: 'ONLINE',
  1: 'OFFLINE',
  2: 'UNREACHABLE'
}

// TODO: external config
const TIMEOUT = 5000

// TODO: external utility
// Generates random integer in [min, max]
function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max-min+1)) + min
}

module.exports = {
  getStatus: (req, res) => {
    // generate dummy data
    const status = {}

    for (let i=1; i<20; i++) {
      status[i] = {
        'status': getRandomInt(0, 2), // 0, 1, 2
        'ping': getRandomInt(20, 300), // 20ms - 300ms
        'latency': getRandomInt(20, TIMEOUT), // 20ms - timeout
        'load': getRandomInt(0, 100) // 0% - 100%
      }
    }

    return res.status(200).json({ status: status })
  }
}

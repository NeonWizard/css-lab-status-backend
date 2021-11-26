const express = require('express')

const STAT_ENUM = {
  0: 'ONLINE',
  1: 'OFFLINE',
  2: 'UNREACHABLE'
}

// TODO: external config
const TIMEOUT = 5000


// Generates random integer in [min, max]
function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max-min+1)) + min
}


module.exports = {
  getStatus: (req, res) => {
    const status = {}

    for (let i=1; i<20; i++) {
      // generate dummy data
      status[i] = {
        'status': getRandomInt(0, 2), // 0, 1, 2
        'ping': getRandomInt(20, 300), // 20ms - 300ms
        'latency': getRandomInt(20, TIMEOUT), // 20ms - timeout
        'load': getRandomInt(0, 100) // 0% - 100%
      }

      // start timer

      // make ssh request

      // extract ssh query info

      // end timer

      // build status
    }

    return res.status(200).json({ status: status })
  }
}

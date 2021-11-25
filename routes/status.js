const express = require('express')
const router = express.Router()

const statusService = require('../services/status.service')

router.get('/', statusService.getStatus)

module.exports = router

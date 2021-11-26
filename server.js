const app = require('./index')
const openVPNManager = require('node-openvpn')
require('dotenv').config()

const PORT = process.env.PORT || 3000

const VPN_CONFIG = {
  host: 'huskyonnet.uw.edu',
  port: 443,
  timeout: 5000,
}
const VPN_AUTH = {
  user: process.env.VPN_USERNAME,
  password: process.env.VPN_PASSWORD,
}
const openVPN = openVPNManager.connect(VPN_CONFIG)

openVPN.on('connected', () => {
  openVPNManager.authorize(auth)
  console.log('Connected to UW VPN successfully.')
})

openVPN.on('console-output', output => {
  console.log(output)
})

openVPN.on('state-change', state => {
  console.log('VPN state change:')
  console.log(state)
})

openVPN.on('error', error => {
  console.warn('VPN error:')
  console.warn(error)
})

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log('Server running on http://127.0.0.1:'+PORT)
})

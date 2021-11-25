const app = require('./index')
require('dotenv').config()

const PORT = process.env.PORT || 3000

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log('Server running on http://127.0.0.1:'+PORT)
})

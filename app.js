const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.get('/', (req, res) => {
  res.send('welcome to my new app')
})

app.listen(port, () => {
  console.log(`my new expresso app is running here http://localhost:${port}`)
})

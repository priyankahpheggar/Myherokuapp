const express = require('express')
const app = express()
const port = process.env.PORT || 8080

var home_page = "<h1>Welcome to Priyanka Fashions"

//home page
app.get('/', (req, res) => res.send(home_page))

app.listen(port, () => {
  console.log(`my new expresso app is running here http://localhost:${port}`)
})

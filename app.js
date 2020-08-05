const express = require('express')
const app = express()
const port = process.env.PORT || 8080

var home_page = "<h1>Welcome to Priyanka Fashions"
var contact_page ="<html><body><h1>Contact Vishal Kumar</h1></body></html>"

//home page
app.get('/', (req, res) => res.send(home_page))

//contact page
app.get('/contact/', (req, res) => res.send(contact_page))

app.listen(port, () => {
  console.log(`my new expresso app is running here http://localhost:${port}`)
})

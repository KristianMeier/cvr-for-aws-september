const express = require('express')
const cors = require('cors')
require('dotenv').config()

const apiData = require('./apiData.js')

const app = express()

app.use(cors())

const PORT = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.json(apiData)
})

app.listen(PORT, () => {
  console.log(`listening...`)
})

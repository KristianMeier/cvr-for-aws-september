const express = require('express')
const cors = require('cors')
const apiData = require('./apiData.js')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.json(apiData)
})

app.listen(4000, () => {
  console.log(`listening...`)
})

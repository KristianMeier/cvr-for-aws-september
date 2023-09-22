const express = require('express')
const cors = require('cors')
const contentData = require('./contentData.js')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.json(contentData)
})

app.listen(4000, () => {
  console.log(`listening...`)
})

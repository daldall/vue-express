const express = require('express')

const cors = require('cors')

const bodyParser = require('body-parser')

const app = express()

const router = require('./routes')

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

const port = 3000;
app.get('/', (req, res) => {
  res.send('halo dunia!')
})

app.use('/api', router)

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})
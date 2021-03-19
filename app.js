const express = require('express')
const port = 3000
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateDrytalk = require('./generate_drytalk')


app.engine('handlebars', exphbs({ defaultsLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))


app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  const drytalk = generateDrytalk(options)
  res.render('index', { drytalk: drytalk, options: options })
})

app.listen(port, () => {
  console.log(`The Express server is Run successfully URL http://localhost:${port}`)
})
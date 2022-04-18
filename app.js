const express = require('express')
const app = express()
const port = process.env.PORT || 3000
// app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  // res.render('index')
})

app.use((req, res) => {
  res.send('<h1>404</h1>')
})

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}/`)
})

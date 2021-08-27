const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')

const app = express()
const port = process.env.PORT || 3000
app.use(express.json());

app.use(cors({
  origin:'http://localhost:4200'
}));


app.post('/login', (req, res) => {
  console.log(req.body);
  jwt.sign(req.body.a,);
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

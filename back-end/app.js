const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const { verifyUser } = require('./Users');

const app = express()
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:4200'
}));

const secret = "ThisIsASecretKey";
const port = process.env.PORT || 3000;


app.post('/api/login', (req, res) => {
  console.log(req.body);
  // "username": req.body.a 
  // "password": req.body.b 
  //verify(username,pass) from db and get user ID

  let id = verifyUser(req.body.a, req.body.b) || -1;
  if (id != -1) {
    let token = jwt.sign({ "name": req.body.a }, secret, {
      subject: id.toString()
    });
    res.status(200).json({ "token": token });
  }
  else {
    res.status(403);
  }
})

app.post('/api/verify', (req, res) => {
  try {
    let verification = jwt.verify(req.body.a, secret);
    res.status(200).json({ "message": "verified" });

  } catch (err) {
    res.status(401).json({ "message": err.message });
  }
})

// app.post('/api/home', (req, res) => {
//   try {
//     let verification = jwt.verify(req.header.token, secret);
//     res.status(200).send(homepage);

//   } catch (err) {
//     res.status(401).send(err);
//   }
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

const express = require("express");
const cors = require('cors')
const PORT = process.env.PORT || 3001;
const app = express();
const knex = require('./knex/knex')

app.use(cors()); 
app.use(express.json());


app.get("/", (req, res) => {
  res.json({ message: "Hello from server!" });
});
// getting to users data table
app.get("/users", (req, res) => {
  knex.select()
  .from('users')
  .then((result) =>{
    res.json(result);
  })  
});
// getting to challenge data table
app.get("/challenge", (req, res) => {
  knex.select()
  .from('challenge')
  .then((result) =>{
    res.json(result);
  })  
});
// getting to user_challenge data table  
app.get("/user_challenge", (req, res) => {
  knex.select()
  .from('user_challenge')
  .then((result) =>{
    res.json(result);
  })  
});
// Join statement between User, User_Challenge, and Challenge tables
app.get("/u-c-uc", (req, res) => {
  knex.select('*')
  .from('users')
  .leftJoin('user_challenge', 'user_challenge.user_id','users.id')
  .leftJoin('challenge', 'user_challenge.challenge_id', 'challenge.id')
  .then((result) =>{
    res.send(result);
  })  
});

// Join statement between User and User_Challenge tables
app.get("/u-uc", (req, res) => {
  knex.select('*')
  .from('users')
  .leftJoin('challenge', 'challenge.created_by','users.id')
  .then((result) =>{
    res.send(result);
  })  
});

// Join statement between User_Challenge, and Challenge tables
app.get("/uc-c", (req, res) => {
  knex.select('*')
  .from('user_challenge')
  //.leftJoin('user_challenge', 'user_challenge.user_id','users.id')
  .leftJoin('challenge', 'user_challenge.challenge_id', 'challenge.id')
  .then((result) =>{
    res.send(result);
  })  
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
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

app.get("/users", (req, res) => {
  knex.select()
  .from('users')
  .then((result) =>{
    res.json(result);
  })  
});
app.get("/challenge", (req, res) => {
  knex.select()
  .from('challenge')
  .then((result) =>{
    res.json(result);
  })  
});



app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
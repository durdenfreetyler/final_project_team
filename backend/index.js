const express = require("express");
const cors = require('cors')
const knex = require('./knex/knex')

const router = express.Router();
const PORT = process.env.PORT || 3001;
const app = express();


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

app.get("/user_challenge", (req, res) => {
  knex.select()
  .from('user_challenge')
  .then((result) =>{
    res.json(result);
  })  
});

app.post('/challenge', async (req, res) => {
  try {
    const { title, description, difficulty, time_limit, reward_points, created_by } = req.body;

    await knex('challenge').insert({
      title,
      description,
      difficulty,
      time_limit,
      reward_points,
      created_by
    });

    res.json({ message: 'Challenge created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

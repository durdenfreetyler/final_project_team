const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const app = express();
const knex = require("./knex/knex");
const cookieParser = require("cookie-parser");

// app.use(cors());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

const authenticateUser = (req, res, next) => {
  // Check if the user is authenticated
  let userId = false;
  if (req.cookies) {
    userId = req.cookies["userId"];
    req.user = { id: userId };
    next();
  } else {
    res.sendStatus(401); // Unauthorized
  }
};

app.get("/", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// getting to users data table
app.get("/users", (req, res) => {
  knex
    .select()
    .from("users")
    .then((result) => {
      res.json(result);
    });
});

app.post("/challenge", authenticateUser, (req, res) => {
  const { title, description } = req.body;
  knex("challenge")
    .insert({
      title,
      description,
      created_by: req.user.id,
    })
    .returning("*")
    .then((result) => {
      res.status(201).json(result[0]);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});

app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.cookie("userId", userId);
  res.redirect("/");
});

app.get("/challenge/:id", (req, res) => {
  console.log("id", req.params);
  knex
    .select()
    .from("challenge")
    .where("id", req.params.id)
    .then((result) => {
      res.json(result);
    });
});

// getting to challenge data table
app.get("/challenge", (req, res) => {
  knex
    .select()
    .from("challenge")
    .then((result) => {
      res.json(result);
    });
});
// getting to user_challenge data table
app.get("/user_challenge", (req, res) => {
  knex
    .select()
    .from("user_challenge")
    .then((result) => {
      res.json(result);
    });
});
// Join statement between User, User_Challenge, and Challenge tables
app.get("/u-c-uc", (req, res) => {
  knex
    .select("*")
    .from("users")
    .leftJoin("user_challenge", "user_challenge.user_id", "users.id")
    .leftJoin("challenge", "user_challenge.challenge_id", "challenge.id")
    .then((result) => {
      res.send(result);
    });
});

// Join statement between User and User_Challenge tables
app.get("/u-uc", (req, res) => {
  knex
    .select("*")
    .from("users")
    .leftJoin("challenge", "challenge.created_by", "users.id")
    .then((result) => {
      res.send(result);
    });
});

app.post("/u-uc", (req, res) => {
  const createdBy = req.body.createdBy; // assuming createdBy is a field in the POST request data
  knex
    .select("*")
    .from("users")
    .leftJoin("challenge", "challenge.created_by", "users.id")
    .where("challenge.created_by", createdBy)
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});

// Join statement between User_Challenge, and Challenge tables
app.get("/uc-c", (req, res) => {
  knex
    .select("*")
    .from("user_challenge")
    .leftJoin("challenge", "user_challenge.challenge_id", "challenge.id")
    .then((result) => {
      res.send(result);
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

/*
app.delete('/challenge/:id"', (req, res) => {
  knex('/challenge')
    .where(id, req.params.id)
    .del()
    .then(() => {
      knex.select()
        .from('/challenge')
        .then((result) => {
          res.send(result);
        });
    });  

}); */
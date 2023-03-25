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
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD","DELETE"],
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
  const { title, description, points, expiration_date } = req.body;
  knex("challenge")
    .insert({
      title,
      description,
      points,
      expiration_date,
      created_by: req.user.id,
    })
    .returning("*")
    .then((result) => {
      console.log("result", result);
      const challenge = result[0];

      knex("user_challenge")
        .insert({
          user_id: req.user.id,
          challenge_id: challenge.id,
          criteria_type: "...",
          criteria_value: "...",
          progress: 0,
          is_completed: false,
        })
        .then(() => {
          res.status(201).json(challenge);
        });
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
    .select("*")
    .from("challenge")
    .then((result) => {
      res.json(result);
    });
});
// getting to user_challenge data table
app.get("/user_challenge", (req, res) => {
  const userId = req.cookies.userId;
  knex
    .select(
      "user_challenge.id",
      "user_challenge.user_id",
      "user_challenge.challenge_id",
      "challenge.title",
      "challenge.description",
      "challenge.points",
      "user_challenge.criteria_type",
      "user_challenge.criteria_value",
      "user_challenge.progress",
      "challenge.expiration_date"
      // "user_challenge.completed_date"
    )
    .from("user_challenge")
    .join("challenge", "user_challenge.challenge_id", "=", "challenge.id")
    .orderBy("user_challenge.id")
    .where("user_challenge.user_id", userId)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send("An error occurred while retrieving user challenge data.");
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

app.post("/user_challenge", authenticateUser, async (req, res) => {
  const { challengeId } = req.body;
  const userId = req.user.id;

  try {
    // Check if the user is already in the challenge
    const userChallenge = await knex("user_challenge")
      .where({ user_id: userId, challenge_id: challengeId })
      .first();

    if (userChallenge) {
      res.status(400).json({ message: "User already joined the challenge" });
      return;
    }

    // Insert the user into the challenge
    await knex("user_challenge").insert({
      user_id: userId,
      challenge_id: challengeId,
      criteria_type: "...",
      criteria_value: "...",
      progress: 0,
      is_completed: false,
    });

    res.status(201).json({ message: "User joined the challenge" });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
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
// delets last added challenge
app.delete("/challenge/:id", (req, res) => {
  //console.log("params", req.params)
  knex("user_challenge")
    .where('challenge_id', req.params.id)
    .del()
    .then(() => {
      knex("challenge")
        .where('challenge.id', req.params.id)
        .del()
        .then(() => {
         knex
        .select()
        .from("challenge")
        .then((result) => {
          res.send(result);
        }); 
      });  
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


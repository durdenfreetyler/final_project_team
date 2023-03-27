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
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD", "DELETE"],
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

app.put("/user_challenge/:id", authenticateUser, async (req, res) => {
  const { is_completed } = req.body;
  const userId = req.user.id;

  try {
    const userChallenge = await knex("user_challenge")
      .where({ id: req.params.id, user_id: userId })
      .first();

    if (!userChallenge) {
      res.status(404).json({ message: "User challenge not found" });
      return;
    }

    await knex("user_challenge")
      .where({ id: req.params.id, user_id: userId })
      .update({
        is_completed: true,
        completed_before_expiration: true,
      });
    await knex
      .select(
        "user_challenge.id",
        "user_challenge.user_id",
        "user_challenge.challenge_id",
        "user_challenge.completed_before_expiration",
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
      .where("user_challenge.user_id", userId)
      .andWhere("user_challenge.id", req.params.id)
      .then((result) => {
        console.log("result", result);
        res.json(result[0]);
      });
    //   .returning("*");
    // console.log("updatedChallenge", updatedChallenge);
    // res
    //   .status(200)
    //   .json({ message: "User challenge updated", data: updatedChallenge[0] });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

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

//  .select(
//         "user_challenge.id",
//         "user_challenge.user_id",
//         "user_challenge.challenge_id",
//         "user_challenge.completed_before_expiration",
//         "challenge.title",
//         "challenge.description",
//         "challenge.points",
//         "user_challenge.criteria_type",
//         "user_challenge.criteria_value",
//         "user_challenge.progress",
//         "challenge.expiration_date"
//         // "user_challenge.completed_date"
//       )
//       .from("user_challenge")
//       .join("challenge", "user_challenge.challenge_id", "=", "challenge.id")
//       .where("user_challenge.user_id", userId)
//       .andWhere("user_challenge.id", req.params.id)

//       // .where({ id: req.params.id, user_id: userId })
//       .returning("*")
//       .update({ is_completed: true, completed_before_expiration: true })
//       .then((result) => {
//         console.log("result", result);
//         res.status(200).json({
//           message: "User challenge updated",
//           data: result.data,
//         });
//       })

// app.post("/donations", authenticateUser, async (req, res) => {
//   const { user_challenge_id, charity_id, amount } = req.body;
//   const userId = req.user.id;

//   try {
//     // Check if the user is already in the challenge
//     const userChallenge = await knex("user_challenge")
//       .where({ user_id: userId, id: user_challenge_id })
//       .first();

//     if (!userChallenge) {
//       res.status(400).json({ message: "User challenge not found" });
//       return;
//     }

//     // Insert the donation into the donations table
//     await knex("donations").insert({
//       user_challenge_id,
//       charity_id,
//       amount,
//     });

//     res.status(201).json({ message: "Donation added successfully" });
//   } catch (error) {
//     console.error(error);
//     res.sendStatus(500);
//   }
// });

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
      //console.log("result", result);
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
      "user_challenge.completed_before_expiration",
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
  const { challenge_id } = req.body;
  const userId = req.user.id;
  //console.log("req", req.body);
  //console.log("res", res);

  // console.log("req", req.body);
  // console.log("res", res);
  try {
    // Check if the user is already in the challenge
    const userChallenge = await knex("user_challenge")
      .where({ user_id: userId, challenge_id: challenge_id })
      .first();

    if (userChallenge) {
      res.status(400).json({ message: "User already joined the challenge" });
      return;
    }

    // Insert the user into the challenge
    const challenge = await knex("user_challenge").insert({
      user_id: userId,
      challenge_id: challenge_id,
      criteria_type: "...",
      criteria_value: "...",
      progress: 0,
      is_completed: false,
      completed_before_expiration: false,
    }).returning("*");
    //console.log('challenge', challenge)

    
    res.status(201).json({ message: "User joined the challenge", challenge: challenge[0] });
    
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
    .where("challenge_id", req.params.id)
    .del()
    .then(() => {
      knex("challenge")
        .where("challenge.id", req.params.id)
        .del()
        .then(() => {
          knex
            .select()
            .from("challenge")
            .then((result) => {
              //console.log('result', result)
              res.send(result);
            });
        });
    });
});

// end point for new user
// app.post("/users", async (req, res) => {
//   const { first_name, last_name, email, password } = req.body;

//   try {
//     // Check if user with given email already exists
//     const existingUser = await knex("users").where({ email }).first();
//     if (existingUser) {
//       return res
//         .status(409)
//         .json({ message: "User with that email already exists" });
//     }

//     // Insert the new user into the database
//     const newUser = await knex("users")
//       .insert({
//         first_name,
//         last_name,
//         email,
//         password,
//         created_date: new Date(),
//         is_player: true,
//         is_challenge_captain: false,
//       })
//       .returning("*");

//     res
//       .status(201)
//       .json({ message: "User created successfully", data: newUser[0] });
//   } catch (error) {
//     console.error(error);
//     res.sendStatus(500);
//   }
// });

// changes cookie to newly registered user
// app.post("/register", async (req, res) => {
//   try {
//     const { firstName, lastName, email, password } = req.body;

//     const [user] = await knex("users")
//       .insert({
//         first_name: firstName,
//         last_name: lastName,
//         email,
//         password: password,
//       })
//       .returning(["id", "first_name", "last_name", "email"]);

//     res.cookie("userId", user.id, { maxAge: 900000, httpOnly: true }); // set the cookie

//     res.json({ message: "User created successfully", user });
//   } catch (error) {
//     console.error(error);
//     res.sendStatus(500);
//   }
// });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

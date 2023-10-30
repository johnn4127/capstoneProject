const express = require('express');
const app = express();
const Sequelize = require('sequelize');
const pg = require('pg');
const bcrypt = require("bcryptjs");
app.use(express.json())
const { Users } = require('./models')

const cors = require('cors');
app.use(cors());
const sequelize = new Sequelize('Users', 'ograyfbl', process.env.PW, {
  host: process.env.HOST,
  dialect: 'postgres'
})

const saltRounds = 10;

app.get("/", (req, res) => {
  console.log("Heartbeat");
  res.send("heartbeat");
});

app.post("/register", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;


  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const newUser = await Users.create({
    email: email,
    password: hashedPassword 
  });
  res.send(newUser);
});
app.post("/profile", async (req, res) => {
  const characterName = req.body.characterName;
  const confidence = req.body.confidence;
  const proficiency = req.body.proficiency;
  const skills = req.body.skills;
  const Charstats = await characters.create({
    characterName: characterName,
    confidence: confidence,
    proficiency:proficiency,
    skills:skills
  });
  res.send(Charstats);
});
app.get('/profile',async (req,res)=>{
  const charData = await characters.findOne({
    where:{
      userID:ID
    }
  });
})

app.get("/users", async (req, res) => {
  const userData = await Users.findAll();
  console.log("Users");
  res.json(userData);
});

app.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await Users.findOne({
    where: {
      email: email
    }
  });

  if (!user) {
   
    res.status(401).send("Invalid login credentials");
    return;
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (passwordMatch) {
    
    res.send("Authentication successful");
  } else {

    res.status(401).send("Invalid login credentials");
  }
});

app.listen(3000, () => {
  console.log('Server is running at port 5500');
});
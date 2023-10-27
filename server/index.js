const express = require('express');
const app = express();
const Sequelize = require ('sequelize');
const pg = require('pg');
app.use(express.json())
const {Users} = require('./models')

const cors = require('cors');
app.use(cors());
const sequelize = new Sequelize('Users','ograyfbl',process.env.PW,{
  host:process.env.HOST,
  dialect:'postgres'
})



  
app.get("/", (req, res) => {
    console.log("Heartbeat");
    res.send("heartbeat");
  });
  
  app.post("/register", async (req, res) => {
    const email = req.body.email
    const password = req.body.password

    const newUser = await Users.create({
      email:email,
      password:password
    })
    res.send(newUser)
    }
  );
  app.get("/users", async (req, res) => {
    const userData = await Users.findAll();
    console.log("Users");
    res.json(userData);
  });

  app.post("/login", async (req, res) => {
    const email = req.body.email
    const password = req.body.password

    const newUser = await Users.findOne({
      where:{
      email:email,
      password:password}
      
    })
    res.send(newUser)
    }
  );


  app.listen(3000, () => {
    console.log('Server is running at port 5500');
})
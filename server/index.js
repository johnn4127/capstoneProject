const express = require('express');
const app = express();

const pg = require('pg');

app.use(express.json())

// const sequelize = new Sequelize(process.env.URL, {
//   dialectModule: pg,
// });
// const {
    
//     user,
   
//   } = require("./models");
  
app.get("/", (req, res) => {
    console.log("Heartbeat");
    res.send("heartbeat");
  });
  app.post("/register", async (req, res) => {
    const {
      

      email,
      password,
    } = req.body;
    const newUser = 
      await user.create({
        
        email,
        password
        
      });

      res.render('register', { successMessage: 'Registration successful' });
    }
    
  );
  app.get("/users", async (req, res) => {
    const userData = await user.findAll();
    console.log("Users");
    res.json(userData);
  });


  app.listen(5500, () => {
    console.log('Server is running at port 5500');
})
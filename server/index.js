const express = require('express');
const app = express();
const pg = require('pg')
const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const { Users } = require('./models');

app.use(express.json());
app.use(cors());

const sequelize = new Sequelize('Users', 'ograyfbl', "tTlxPTYCS8-1JoO1WpD0WcsiwA2NT_ZU", {
  host: "suleiman.db.elephantsql.com",
  dialect: 'postgres',
});

const saltRounds = 10;

app.get('/', (req, res) => {
  console.log('Heartbeat');
  res.send('heartbeat');
});

app.post('/register', async (req, res) => {
  try {
    const { email, password, charName } = req.body;

    const existingUser = await Users.findOne({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      res.status(409).json({ error: 'Email is already taken' });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await Users.create({
      email: email,
      password: hashedPassword,
      charName: charName,
      
    });

    res.json(newUser);
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/profile/:userID', async (req, res) => {
  const userID = req.params.userID;

  try {
    const charData = await Users.findByPk(userID);

    if (!charData) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    res.json({ charName: charData.charName });
  } catch (error) {
    console.error('Error fetching profile:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/users', async (req, res) => {
  try {
    const userData = await Users.findAll();
    res.json(userData);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/login', async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const user = await Users.findOne({
      where: {
        email: email,
      },
    });

    if (!user) {
    
      res.status(401).json({ message: 'Unknown email' });
      return;
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      res.json({ message: 'Authentication successful' });
    } else {
      res.status(401).json({ message: 'Invalid login credentials' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const express = require("express")
const app = express()
const port = 3000
const { Pool } = require('pg');
require('dotenv').config()

app.use(express.json())



const pool = new Pool({
	host: "suleiman.db.elephantsql.com",
	port: 5432,
	database: "ograyfbl",
	user: "ograyfbl",
	password: process.env.DB_PASSWORD,
});

app.get('/heartbeat',(req,res) => {
    console.log('Heartbeat')
    res.send('heartbeat')

    
})

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`)
})


const express = require('express');
require('dotenv').config();
const connectToDb = require('./database_config/db.js');
const TodoRoutes = require('./routes/todoRoutes.js')
const cors = require('cors')

const app = express();

PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors())

// DB connection
connectToDb()

app.use('/', TodoRoutes);


app.listen(PORT, ()=>{
    console.log(`Server listening on http://localhost:${PORT}`);
})


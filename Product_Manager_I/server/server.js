const express = require('express');
const cors = require('cors');
const app = express()

//1. Setup Express Environment
const port = 8000;
const db_name = "equipment";

//2. Setup MongoDB
require('./config/mongoose.config')(db_name);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//3. Setup Routes (Keep in mind: req.body is undefined without this)
require("./routes/equipment.routes")(app);

app.listen(port, () =>
    console.log(`Listening on port ${port}.`))

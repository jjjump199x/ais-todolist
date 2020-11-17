const express = require('express');
const connection = require('../AIS_TODOLIST/dbConnection')
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000
const path = require('path');

app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

//set static directory
app.use("/static",express.static(path.join(__dirname, "public")))

connection()

const router = require('../AIS_TODOLIST/routes/todoRoutes');
app.use(router);

app.listen(port, ()=>{
    console.log(`App listening on port ${port}`);
})


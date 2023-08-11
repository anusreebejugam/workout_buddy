require('dotenv').config()
const cors = require('cors')

const workoutRoutes = require('./routes/workouts')
const express = require('express')
const mongoose = require('mongoose')

const app = express();

//middleware to access data from the post requests
app.use(express.json());

app.use(cors())

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

//routes
app.use('/api/workouts', workoutRoutes);

//conect to db
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    //listen for request
    app.listen(process.env.PORT, () => {
        console.log("listening on port 4000");
    });
})
.catch((error) => {console.log(error);})




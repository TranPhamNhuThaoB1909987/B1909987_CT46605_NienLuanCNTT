const express = require('express');
const app = express();
const cors = require('cors');
const cookieparser = require('cookie-parser');
const config = require('./app/config/index')
const mongoose = require('mongoose');
const userRoute = require('./app/routes/user.route');


app.use(cors());
app.use(express.json());
app.use(cookieparser());
mongoose.set('strictQuery', false);
app.get('/', (req, res) => {
    res.json('Khoi tao du an');
})

app.use("/api/myrestaurant", userRoute);


try {
    mongoose.connect(config.db.uri);
    console.log('connected to mongodb');
    app.listen(config.app.port, () => {
        console.log(`app listening on ${config.app.port}`)
    });
} catch (error) {
    console.log("Error: ", error);
    process.exit();
}
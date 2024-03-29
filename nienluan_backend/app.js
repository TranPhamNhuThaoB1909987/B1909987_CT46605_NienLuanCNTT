const express = require('express');
const app = express();
const cors = require('cors');
const cookieparser = require('cookie-parser');
const config = require('./app/config/index');
const mongoose = require('mongoose');
const userRoute = require('./app/routes/user.route');
const foodRoute = require('./app/routes/food.route');
const foodItemsRoute = require('./app/routes/fooditem.route');
const billRoute = require('./app/routes/bill.route');

app.use(cors());
app.use(express.json());
app.use(cookieparser());
mongoose.set('strictQuery', false);
app.get('/', (req, res) => {
  res.json('Khoi tao du an');
});

app.use('/api/myrestaurant', userRoute);
app.use('/api/myrestaurant/food', foodRoute);
app.use('/api/myrestaurant/fooditems', foodItemsRoute);
app.use('/api/myrestaurant/bill', billRoute);

try {
  mongoose.connect(config.db.uri);
  console.log('connected to mongodb');
  app.listen(config.app.port, () => {
    console.log(`app listening on ${config.app.port}`);
  });
} catch (error) {
  console.log('Error: ', error);
  process.exit();
}

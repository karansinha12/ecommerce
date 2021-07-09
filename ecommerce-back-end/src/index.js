const express = require('express');
const env = require('dotenv')
const app = express();
const mongoose = require('mongoose')

const adminRoutes = require('./routes/admin/auth')
const userRoutes = require('./routes/auth')
const categoryRoutes = require('./routes/category')
const productRoutes = require('./routes/product')

env.config();
mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log('db connected');
}).catch(err => {
    console.log('there is an error in db connection');
})



app.use(express.json());
app.use('/api', adminRoutes);
app.use('/api', userRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);


app.listen(2000, () => {
    console.log(`Server running on port` + 2000);
})
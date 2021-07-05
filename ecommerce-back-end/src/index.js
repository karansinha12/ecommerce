const express = require('express');
const env = require('dotenv')
const app = express();
const mongoose = require('mongoose')

const adminRoutes = require('./routes/admin/auth')

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

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
})
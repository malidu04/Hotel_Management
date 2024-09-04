require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const userRoutes = require('./routes/user');

const app = express();
app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use('/uploads', express.static('uploads'));

app.use('/api/user', userRoutes);
mongoose
        .connect('mongodb+srv://malidupahasara04:pahasara12@cluster01.n92o6.mongodb.net/')
        .then(() => {
            app.listen(process.env.PORT, () => {
                console.log('connected to db & listening in port', process.env.PORT);
            });
        })
        .catch((error) => {
            console.log(error); 
        });
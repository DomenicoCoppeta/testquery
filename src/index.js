import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import testQueryRouter from './testQueryRouter.js';

const server = express();

const port = 3001;

dotenv.config();

server.use("/testquery", testQueryRouter);

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        server.listen(port, () => {
        console.log('listening on port ' + port);
        });
    })
    .catch(() => {
        console.log("DB connection error")
    });


import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import usersRouter from './usersRouter.js';
import genericError from './middlewares/genericError.js';

const server = express();

const port = 3001;

server.use(genericError);

dotenv.config();

server.use("/users", usersRouter);

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


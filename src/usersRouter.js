import express from 'express';
import { User } from './models/users.js';

const usersRouter = express.Router();

usersRouter.use(express.json());

usersRouter.get('/test', (req, res) => {
    res.json({message: "Hello, world! stocaz!"});
});

usersRouter.get('/', async (req,res, next) => {
    try {
        const users = await User.find({
          // isActive: true, // isActive
          // age: { $gt: 26} // age > 26
          // age: { $gt: 26 , $lte: 30 } // age > 26 && age <= 30
          // $or: [{eyeColor: "brown"},{ eyeColor: "blue"}], // eyeColor blue or brown
           //eyeColor: { $ne:"green"} // eyeColor different from green
          //  $and: [{eyeColor: { $ne:"green" }},{eyeColor: { $ne:"blue" }} ]  // eyeColor different from green nor blue
          company: "FITCORE"
        })
        const emails = users.map(user => user.email);
        res.json(emails);
        // res.json(users);

      } catch (error) {
        next(error);
      }

    });


export default usersRouter
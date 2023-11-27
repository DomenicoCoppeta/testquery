import express from 'express';

const testQueryRouter = express.Router();

testQueryRouter.use(express.json());

testQueryRouter.get('/test', (req, res) => {
    res.json({message: "Hello, world! stocaz!"});
});

testQueryRouter.get('/', (req,res) => {
    res.json(req.body);
    res.status(200).send;
    });

export default testQueryRouter
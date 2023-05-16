import express from 'express';

const activityRoute = express.Router();

activityRoute.post('/sync', async (req, res) => {
    const {body} = req;
    res.status(200).send({
        hello: 'Testing routes',
        body
    })
});

activityRoute.get('/', async (req, res) => {
    const {body} = req;
    res.status(200).send({
        hello: 'testing route'
    })
});

export default activityRoute;

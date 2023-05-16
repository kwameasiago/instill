import express from 'express';
import Activity from '../services/activity.js';

const activityRoute = express.Router();
const { getActivities, syncApiActivities } = new Activity()

activityRoute.get('/sync', async (req, res) => {
    try {
        const data = await syncApiActivities();
        
        res.status(200).send({
            hello: 'Testing routes',
            activity: data
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            error
        })
    }

});

activityRoute.get('/', async (req, res) => {
    try {
        const {query} = req;
        console.log(query)
        const data = await getActivities(query)
        res.status(200).send({
            hello: 'testing route',
            activity: data
        })
    } catch (error) {
        console.log({error})
        res.status(500).send({
            error
        })
    }
});

export default activityRoute;

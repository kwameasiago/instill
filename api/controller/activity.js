import express from 'express';
import Activity from '../services/activity.js';

const activityRoute = express.Router();
const { getActivities, syncApiActivities } = new Activity()

activityRoute.get('/sync', async (req, res) => {
    try {
        const data = await syncApiActivities();
        
        res.status(200).send({
            activity: data
        })
    } catch (error) {
        res.status(500).send({
            error
        })
    }

});

activityRoute.get('/', async (req, res) => {
    try {
        const {query} = req;
        const {data, count} = await getActivities(query)
        res.status(200).send({
            activity: data,
            count
        })
    } catch (error) {
        res.status(500).send({
            error
        })
    }
});

export default activityRoute;

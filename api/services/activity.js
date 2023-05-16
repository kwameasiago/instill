import fetch from "node-fetch";
import activityModel  from '../models/activity.js';

class Activity {
     async syncApiActivities() {
        try {
            let arr = [...Array(21).keys()].slice(1).map(async () => {
                const response = await fetch("https://boredapi.com/api/activity");
                const newActivity = await response.json();
                console.log(newActivity)
                const data = await activityModel.insertMany(newActivity);
                return data
            })
            return await Promise.all(arr)
        } catch (error) {
            throw error
        }
    }
    formartQuery (query) {
        return query
    }

    async getActivities(query){
        try {
            let result
            if(Object.keys(query).length > 0){
                let whereClause = Object.keys(query).map(key => ({
                    [`${key}`]: key==='price'? {$lt : parseFloat(query[`${key}`])}:query[`${key}`]
                }))
                console.log(whereClause)
                result = await  activityModel.find({$and:whereClause});
            }
            else{
                result = await  activityModel.find();
            }
            return result
        } catch (error) {
            throw error
        }
    }
}

export default Activity;
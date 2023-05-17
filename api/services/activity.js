import fetch from "node-fetch";
import activityModel  from '../models/activity.js';

class Activity {
     async syncApiActivities() {
        try {
            let arr = [...Array(21).keys()].slice(1).map(async () => {
                const response = await fetch("https://boredapi.com/api/activity");
                const newActivity = await response.json();
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
            let param = Object.keys(query).filter(s => s != 'offset')
            let result;
            let count;
            if(param.length > 0){
                let whereClause = param.map(key => ({
                    [`${key}`]: key==='price'? {$lt : parseFloat(query[`${key}`])}: key==='activity'? { $regex: query['activity'], $options: "i" } :query[`${key}`]
                }))
                result = await  activityModel.find({$and:whereClause}).skip(query.offset).limit(10);
                count = await  activityModel.count({$and:whereClause});
            }
            else{
                result = await  activityModel.find().skip(query.offset || 0).limit(10); 
                count = await  activityModel.count();
            }
            return {data:result, count}
        } catch (error) {
            throw error
        }
    }
}

export default Activity;
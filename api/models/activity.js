import mongoose from 'mongoose';

const {Schema, model} = mongoose; 

const activitySchema  = Schema({
    activity: String,
    type: String,
    participants: Number,
    price: Number,
    link: String,
    key: String,
    accessibility: Number
},{
    timeStamps: true,
     typeKey: '$type' 
})

const activityModel = model('Activity', activitySchema);

export default activityModel;
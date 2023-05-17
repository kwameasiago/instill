import mongoose from 'mongoose';
const env = process.env.NODE_MODULES === 'test' ? process.env.TEST_MONGO_URL : process.env.MONGO_URL;

const connection = async () => {
    try {
        const conn = await mongoose.connect(env|| '');
        console.log(`Connect to mongo ${conn.connection.host}`)
    } catch (error) {
        console.log({
            name: 'Unable to connect to database',
            error})
    }
}

export default connection
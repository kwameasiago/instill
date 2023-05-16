import mongoose from 'mongoose';

const connection = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_DOCKER_URL || '');
        console.log(`Connect to mongo ${conn.connection.host}`)
    } catch (error) {
        console.log({
            name: 'Unable to connect to database',
            error})
    }
}

export default connection
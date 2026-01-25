import mongoose from 'mongoose'

export const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTIONSTRING,{
            dbName: process.env.MONGODB_NAME
        });
        console.log('Connected to MongoDB successfully!');
    } catch (error){
        console.log('Connected to MongoDB failed!:', error);
        process.exit(1);
    }
};

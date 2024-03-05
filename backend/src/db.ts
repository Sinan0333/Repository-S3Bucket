import mongoose from "mongoose";

const connectDB = async() => {
    try {
        await mongoose.connect('mongodb+srv://sinanmp333:sinanat2005@mern.2xyblil.mongodb.net/MERN?retryWrites=true&w=majority')
        console.log('Databse connected');
    } catch (error:any) {
        console.log(error.message);
    }
}

export default connectDB
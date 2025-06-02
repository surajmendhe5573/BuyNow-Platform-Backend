const mongoose= require('mongoose');

const connectDB= async()=>{
    mongoose.connect(process.env.MONGO_URI)
        .then(()=>{
            console.log('MongoDB is Connected');
        })
        .catch((err)=>{
            console.log(err);
        })
};

connectDB();

module.exports= connectDB;
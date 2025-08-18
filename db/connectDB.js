const mongoose = require("mongoose");
const Live_Url = "mongodb+srv://ajaysinghtomar79744:ajay1234@cluster0.c9tupad.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDB = async ()=>{
    return mongoose.connect(Live_Url)

    .then(()=>{
        console.log('Database connection succesful')
    })
    .catch((error)=>{
        console.log(error);
    });
};
module.exports = connectDB;
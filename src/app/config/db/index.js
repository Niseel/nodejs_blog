const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect('mongodb://localhost:27017/congthanh_blogger_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log("Connect Successfully !!!");
    } catch (error) {
        console.log("Connect Failuare !!!");
        console.log("Error: ", error);
    }

}

module.exports = { connectDB };

const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect('mongodb://localhost:27017/congthanh_blogger_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log("Connect Successfully !!!\n\n");
    } catch (error) {
        console.log("Connect Failuare !!!\n");
        console.log("Error: ", error, '\n\n');
    }

}

module.exports = { connectDB };

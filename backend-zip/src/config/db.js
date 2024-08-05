const mongoose = require("mongoose")

const mongoDbUrl='mongodb://localhost:27017'
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}
const mongoose = require("mongoose")

const mongodbUrl = "mongodb+srv://barkatulopenai:Emraan.009@cazz-karo.whbvlcd.mongodb.net/"

const connectDb = () => {
    return mongoose.connect(mongodbUrl)
}

module.exports={connectDb}
const mongoose = require("mongoose")

const mondbUrl = "mongodb+srv://barkatulopenai:Emraan.009@cazz-karo.whbvlcd.mongodb.net/"

const connectDb = () => {
    return mongoose.connect(mondbUrl)
}

module.exports={connectDb}
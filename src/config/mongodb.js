const mongoose = require("mongoose")
const mongoConnect = require("connect-mongo")

try {
    mongoose.connect(
        process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true 
        }
    )
} catch(error) {
    console.log(error.message)
}

const MongoStore = mongoConnect.create({
    mongoUrl: process.env.MONGO_URL
})

module.exports = mongoose
module.exports = MongoStore


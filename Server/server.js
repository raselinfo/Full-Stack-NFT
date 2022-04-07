const express = require("express")
const mongoose = require("mongoose")
const { PORT, DB_URI } = require("./config")
const app = express()


// Todo: Database Connect
const db = async () => {
    try {
        let conn = await mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`MongoDB Connected : ${conn.connection.host}`)
    } catch (err) {
        console.log("Error", err.message)
        process.exit()
    }
}
db()





// Todo: APP Listen
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})
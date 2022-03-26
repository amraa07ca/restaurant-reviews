import app from "./server"
import mongodb from "mongodb"
import dotenv from "dotenv"

dotenv.config()
const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 8000

MongoClient.connect(
    process.env.RESTREVIEWS_DB_URI, {
        poolSize: 50,
        wtimeout: 2500,
        useNewUrlParse: true
    }
    .catch(err => {
        console.error(err.stack)
        process.exit(1)
    })
)
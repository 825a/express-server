const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config({path: "./config.env"})

let DB


const uri = process.env.MONGO_URI
const database_name = process.env.DATABASE_NAME

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
})


async function connect_to_db() {

    try {
        client.connect()

        await client.db("admin").command({ ping: 1 });
        console.log("pinged the database");

    } catch (error) {
        console.error(error)
    }

    DB = client.db(database_name)

    return DB !== undefined
}

function get_db() {
    return DB
}


module.exports = {
    connect_to_db,
    get_db
}
require("dotenv").config({path: "./config.env"})
const { MongoClient, ServerApiVersion } = require('mongodb');

let DB


const uri = process.env.MONGO_URI

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

    DB = client.db("first_database")

    return DB !== undefined
}

function get_db() {
    return DB
}


module.exports = {
    connect_to_db,
    get_db
}
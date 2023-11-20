const express = require("express")
const conn = require("./connections/db_connection.js")
const gene_routes = require("./routes/gene_routes.js")
require("dotenv").config({path: "./config.env"})


const port = process.env.PORT

const app = express()

app.listen(port, async () => {
   
    await conn.connect_to_db(function (error) {
        if (error) {
            console.error(error)
        }
    })

    console.log("listening on port", port)
})

// middleware
app.use((req, res, next) => {
    console.log(req.method, req.path)
    next()
})

app.use(gene_routes)
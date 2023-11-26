const conn = require("../connections/db_connection.js")
require("dotenv").config({path: "./config.env"})


const collection_name = process.env.COLLECTION_NAME


const get_gene = async (req, res) => {

    try {
        const gene_id = req.query.id

        const db = conn.get_db()
        const my_collection = db.collection(collection_name)

        const query = { "geneId": gene_id }

        const result = await my_collection.findOne(query)

        console.log("gene_id =", gene_id)
        console.log("response =", result)

        res.status(200).json(result)
    } catch {
        res.status(400).json( {"error": "get_gene"} )
    }
}

const get_gene_ids = async (req, res) => {

    try {
        const db = conn.get_db()
        const my_collection = db.collection(collection_name)

        const projection = {"geneId": 1, "_id": 0} 

        const result = await my_collection.find({}).project(projection).toArray()

        console.log("response =", result)

        res.status(200).json(result)
    } catch {
        res.status(400).json( {"error": "get_gene_ids"} )
    }
}

const get_wgcna = async (req, res) => {

    // TODO
    res.status(400).json( {"not": "implemented"} )
}

const get_wgcna_ids = async (req, res) => {

    // TODO
    res.status(400).json( {"not": "implemented"} )
}


module.exports = {
    get_gene,
    get_gene_ids,
    get_wgcna,
    get_wgcna_ids
}
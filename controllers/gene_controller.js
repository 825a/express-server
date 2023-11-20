const conn = require("../connections/db_connection.js")


const get_gene = async (req, res) => {

    try {
        const gene_id = req.query.id

        const db = conn.get_db()
        const my_collection = db.collection("example_data2")

        const query = { "Gene": gene_id }

        const result = await my_collection.findOne(query)

        console.log("gene_id =", gene_id)
        console.log("response =", result)

        res.status(200).json(result)
    } catch {
        res.status(400).json( {"error": "get_gene"} )
    }
}

const get_wgcna = async (req, res) => {

    // TODO
}


module.exports = {
    get_gene,
    get_wgcna
}
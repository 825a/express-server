const express = require("express")
const func = require("../controllers/gene_controller.js")


const router = express.Router()

router.get("/gene", func.get_gene)

router.get("/gene-ids", func.get_gene_ids)

router.get("/wgcna", func.get_wgcna)

router.get("/wgcna-ids", func.get_wgcna_ids)


module.exports = router
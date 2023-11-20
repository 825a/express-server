const express = require("express")
const func = require("../controllers/gene_controller.js")


const router = express.Router()

router.get("/genes", func.get_gene)

router.get("/wgcna", func.get_wgcna)


module.exports = router
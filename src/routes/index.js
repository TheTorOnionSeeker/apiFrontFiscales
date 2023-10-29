const { Router } = require("express");
const router=Router();

const cargaInfoFiscalesRouter=require("./cargaInfoFiscalesRoutes.js")

router.use("/carga_info_fiscales", cargaInfoFiscalesRouter);

module.exports=router;
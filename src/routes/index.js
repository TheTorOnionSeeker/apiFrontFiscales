const { Router } = require("express");
const router=Router();

const cargaInfoFiscalesRouter=require("./cargaInfoFiscalesRoutes.js")

router.use("/info_fiscales", cargaInfoFiscalesRouter);

module.exports=router;
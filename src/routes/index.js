const { Router } = require("express");
const router = Router();

const cargaInfoFiscalesRouter = require("./cargaInfoFiscalesRoutes.js");
const cargaInfoEscuelasRouter = require("./cargaInfoEscuelasRoutes.js");

router.use("/fiscales", cargaInfoFiscalesRouter);
router.use("/escuelas", cargaInfoEscuelasRouter);

module.exports = router;

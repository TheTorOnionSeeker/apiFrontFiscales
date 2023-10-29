const { Router } = require("express");
const router = Router();

const cargaInfoFiscalesRouter = require("./cargaInfoFiscalesRoutes.js");
const cargaInfoEscuelasRouter = require("./cargaInfoEscuelasRoutes.js");

router.use("/info_fiscales", cargaInfoFiscalesRouter);
router.use("/info_escuelas", cargaInfoEscuelasRouter);

module.exports = router;

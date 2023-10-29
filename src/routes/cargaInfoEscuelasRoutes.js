const { Router } = require("express");
const router = Router();

const {
  cargaInfo,
  getInfo,
} = require("../controllers/cargainfoescuelas.controllers.js");

router.get("/", getInfo);
router.post("/", cargaInfo);

module.exports = router;

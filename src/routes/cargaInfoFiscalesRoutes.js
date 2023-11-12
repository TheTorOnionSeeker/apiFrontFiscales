const { Router } = require("express");
const router = Router();

const {
  createFiscal,
  getAll,
  getFiscalById,
  getFiscalByName,
  modifyFiscal,
} = require("../controllers/fiscal.controllers.js");

router.get("/", getAll);
router.get("/:id", getFiscalById);
router.get("/:name", getFiscalByName);
router.post("/new", createFiscal);
router.post("/modify", modifyFiscal);

module.exports = router;

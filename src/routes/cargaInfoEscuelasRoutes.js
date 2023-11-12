const { Router } = require("express");
const router = Router();

const {
  createEscuela,
  getAll,
  getEscuelaById,
  getEscuelaByName,
  modifyEscuela,
} = require("../controllers/escuela.controllers.js");

router.get("/", getAll);
router.get("/:id", getEscuelaById);
router.get("/:name", getEscuelaByName);
router.post("/new", createEscuela);
router.post("/modify", modifyEscuela);

module.exports = router;

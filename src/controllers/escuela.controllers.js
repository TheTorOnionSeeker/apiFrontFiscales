const { Escuela } = require("../db.js");

async function createEscuela(req, res) {
  const { nombre, numero, coordenadas, ubicacion } = req.body;
  try {
    let marcaTiempo = Date.now();
    const new_escuela = await Escuela.create({
      nombre: nombre,
      numero: numero,
      coordenadas: coordenadas,
      ubicacion: ubicacion,
    });
    if (!new_escuela) throw new Error("No se pudo crear la escuela!");
    res.status(201).json({
      escuela: new_escuela,
      msg: "Escuela creada!",
      marcaTiempo: marcaTiempo,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getAll(req, res) {
  try {
    const DBescuelas = await Escuela.findAll({
      attributes: ["id", "nombre", "coordenadas", "ubicacion"],
    });
    if (DBescuelas === null) throw new Error("Escuelas no encontradas!");
    res.status(200).json(DBescuelas);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

async function getEscuelaById(req, res) {
  const { id } = req.params;
  try {
    const escuela = await Escuela.findOne({
      where: {
        id: id,
      },
      attributes: ["id", "nombre", "numero", "coordenadas", "ubicacion"],
    });
    if (escuela === null) throw new Error("Escuela no encontrada!");
    res.status(200).json(escuela);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getEscuelaByName(req, res) {
  const { nombre } = req.params;
  try {
    const escuela = await Escuela.findOne({
      where: { nombre: { [Op.iLike]: `%${nombre}%` } },
      attributes: ["id", "nombre", "numero", "coordenadas", "ubicacion"],
    });
    if (escuela === null) throw new Error("Escuela no encontrada!");
    res.status(200).json(escuela);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function modifyEscuela(req, res) {
  const { id, nombre, numero, coordenadas, ubicacion } = req.body;
  try {
    const escuela = await Escuela.update(
      {
        nombre: nombre,
        numero: numero,
        coordenadas: coordenadas,
        ubicacion: ubicacion,
      },
      { where: { id: id } }
    );
    res.status(200).json({ escuela: escuela, msg: "Escuela modificada!" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  createEscuela,
  getAll,
  getEscuelaById,
  getEscuelaByName,
  modifyEscuela,
};

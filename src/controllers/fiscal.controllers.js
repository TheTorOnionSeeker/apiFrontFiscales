const { Fiscal } = require("../db.js");

async function createFiscal(req, res) {
  const { nombre, dni, telefono, email, ubicacion } = req.body;
  try {
    let marcaTiempo = Date.now();
    const new_fiscal = await Fiscal.create({
      nombre: nombre,
      dni: dni,
      telefono: telefono,
      email: email,
      ubicacion: ubicacion,
    });
    if (!new_fiscal) throw new Error("No se pudo crear el fiscal!");
    res.status(201).json({
      fiscal: new_fiscal,
      msg: "Fiscal creado!",
      marcaTiempo: marcaTiempo,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getAll(req, res) {
  try {
    const DBfiscales = await Fiscal.findAll({
      attributes: ["id", "nombre", "dni", "telefono", "email", "ubicacion"],
    });
    if (DBfiscales === null) throw new Error("Fiscales no encontrados!");
    res.status(200).json(DBfiscales);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

async function getFiscalById(req, res) {
  const { id } = req.params;
  try {
    const fiscal = await Fiscal.findOne({
      where: {
        id: id,
      },
      attributes: ["id", "nombre", "dni", "telefono", "email", "ubicacion"],
    });
    if (fiscal === null) throw new Error("Fiscal no encontrado!");
    res.status(200).json(fiscal);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getFiscalByName(req, res) {
  const { nombre } = req.params;
  try {
    const fiscal = await Fiscal.findOne({
      where: { nombre: { [Op.iLike]: `%${nombre}%` } },
      attributes: ["id", "nombre", "dni", "telefono", "email", "ubicacion"],
    });
    if (fiscal === null) throw new Error("Fiscal no encontrado!");
    res.status(200).json(fiscal);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function modifyFiscal(req, res) {
  const { id, nombre, dni, telefono, email, ubicacion } = req.body;
  try {
    const fiscal = await Fiscal.update(
      {
        nombre: nombre,
        dni: dni,
        telefono: telefono,
        email: email,
        ubicacion: ubicacion,
      },
      { where: { id: id } }
    );
    res.status(200).json({ fiscal: fiscal, msg: "Fiscal modificado!" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  createFiscal,
  getAll,
  getFiscalById,
  getFiscalByName,
  modifyFiscal,
};

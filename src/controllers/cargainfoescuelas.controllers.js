function getInfo(req, res) {
  res.status(200).json("Info escuelas");
}

function cargaInfo(req, res) {
  res.status(200).json("Info escuela cargada");
}

module.exports = { cargaInfo, getInfo };

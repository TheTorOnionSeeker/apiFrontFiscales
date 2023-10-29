
function getInfo(req, res) {
    res.status(200).json("Info fiscales");
}

function cargaInfo(req, res) {
    res.status(200).json("Info cargada");
}

module.exports = { cargaInfo, getInfo, };
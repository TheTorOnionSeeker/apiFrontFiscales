require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/dbfiscales`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: fiscal => Fiscal
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Escuela, Fiscal, Mapa } = sequelize.models;

//*********************************************************************************** */
// Aca vendrian las relaciones
// Una Escuela tiene unicamente un Fiscal y a un Fiscal le puede corresponder de 0 a muchas Escuelas

Fiscal.hasOne(Escuela);
Escuela.belongsTo(Fiscal);

// Una Escuela tiene unicamente un Mapa y a un Mapa le pueden corresponder de 0 a muchas Escuelas
//Mapa.hasOne(Escuela);
//Escuela.belongsTo(Mapa);

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Escuela, Fiscal, Mapa } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};

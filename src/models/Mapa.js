const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("escuela", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    coordenadas: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

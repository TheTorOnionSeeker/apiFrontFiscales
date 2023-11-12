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
    numero: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    coordenadas: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: false,
      defaultValue: [],
    },
    ubicacion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

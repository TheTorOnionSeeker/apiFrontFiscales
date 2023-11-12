const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("fiscal", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dni: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    ubicacion: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });
};

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class dbConfig extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  dbConfig.init(
    {
      configID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      companyID: {
        type: DataTypes.INTEGER,
        required: true,
      },
      dbName: {
        type: DataTypes.STRING,
        required: true,
      },
      userName: {
        type: DataTypes.STRING,
        required: true,
      },
      password: {
        type: DataTypes.STRING,
        required: true,
      },
    },
    {
      sequelize,
      modelName: "dbConfig",
      timestamps: false,
    }
  );
  return dbConfig;
};

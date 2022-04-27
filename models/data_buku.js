'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class data_buku extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  data_buku.init(
    {
      title: DataTypes.STRING,
      category: DataTypes.STRING,
      penerbit: DataTypes.STRING,
      best_seller: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'data_buku',
    }
  );
  return data_buku;
};

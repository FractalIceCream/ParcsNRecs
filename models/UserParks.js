const { Model, DataTypes } = require('sequelize');

const { sequelize }= require('../config/connection');

class UserParks extends Model {}

UserParks.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true, 
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    parks_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'parks',
        key: 'id'
      }
    }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user_parks',
  }
);

module.exports = UserParks;

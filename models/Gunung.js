// models/gunung.js
import { DataTypes } from 'sequelize'
import sequelize from '../config/Database.js'

const Gunung = sequelize.define(
  'Gunung',
  {
    kode_gunung: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nama_gunung: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deskripsi: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    
    province: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    kota: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    maps: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    tableName: 'gunung',
  },
)

export default Gunung

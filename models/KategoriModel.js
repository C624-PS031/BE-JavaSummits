// models/kategori.js
import { DataTypes } from 'sequelize'
import sequelize from '../config/Database.js'

const Kategori = sequelize.define(
  'Kategori',
  {
    nama_kategori: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    tableName: 'kategori',
  },
)

export default Kategori

// models/kategori.js
import { DataTypes } from 'sequelize'
import sequelize from '../config/Database.js'
import Artikel from './Artikel.js'

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
// Kategori.hasMany(Artikel, { foreignKey: 'kategoriId' })

export default Kategori

// models/artikel.js
import { DataTypes } from 'sequelize'
import sequelize from '../config/Database.js'
import Kategori from './KategoriModel.js'

const Artikel = sequelize.define(
  'Artikel',
  {
    id_kategori: {
      type: DataTypes.INTEGER,
      references: {
        model: 'kategori',
        key: 'id',
      },
      allowNull: false,
    },
    judul_artikel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isi_artikel: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    imageList: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    tableName: 'artikel',
  },
)
// Artikel.belongsTo(Kategori, { foreignKey: 'kategoriId' })

export default Artikel

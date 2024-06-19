// models/basecamp.js
import { DataTypes } from 'sequelize'
import sequelize from '../config/Database.js'

const Basecamp = sequelize.define(
  'Basecamp',
  {
    kode_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    kode_basecamp: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nama_basecamp: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alamat: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jam_buka: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    jam_tutup: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    provinsi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gunung_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'gunung',
        key: 'id',
      },
      allowNull: false,
    },
  },
  {
    timestamps: true,
    tableName: 'basecamp',
  },
)

export default Basecamp

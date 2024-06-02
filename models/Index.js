// models/index.js
import sequelize from '../config/Database.js'
import Basecamp from './Basecamp.js'
import Kategori from './KategoriModel.js'
import Artikel from './Artikel.js'
import Gunung from './Gunung.js'

Basecamp.hasMany(Gunung, { foreignKey: 'basecamp_id' })
Gunung.belongsTo(Basecamp, { foreignKey: 'basecamp_id' })

Kategori.hasMany(Artikel, { foreignKey: 'id_kategori' })
Artikel.belongsTo(Kategori, { foreignKey: 'id_kategori' })

export { sequelize, Basecamp, Kategori, Artikel, Gunung }

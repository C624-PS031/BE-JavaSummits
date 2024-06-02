import { Sequelize } from 'sequelize'
const db = new Sequelize('javasummits', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
})

export default db

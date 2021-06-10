import Sequelize from 'sequelize';
import { sequelizedb } from './keys'

const sequelize = new Sequelize(sequelizedb.database, sequelizedb.user, sequelizedb.password, {
  host: sequelizedb.host,
  dialect: sequelizedb.dialect
});

export default sequelize;
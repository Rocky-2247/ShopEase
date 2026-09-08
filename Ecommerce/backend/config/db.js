import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '../.env') });

const dbDialect = process.env.DB_DIALECT || 'sqlite';
const dbHost = process.env.DB_HOST || 'localhost';
const dbPort = process.env.DB_PORT || 3306;
const dbUser = process.env.DB_USER || 'root';
const dbPassword = process.env.DB_PASSWORD || '';
const dbName = process.env.DB_NAME || 'shopease_db';

let sequelize;

if (dbDialect.toLowerCase() === 'mysql') {
  sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    port: Number(dbPort),
    dialect: 'mysql',
    logging: false,
    pool: {
      max: 10,
      min: 0,
      acquire: 10000,
      idle: 10000
    }
  });
} else {
  // SQLite fallback database
  sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, '../database.sqlite'),
    logging: false
  });
}

const initDatabase = async () => {
  try {
    await sequelize.authenticate();
    const dialect = sequelize.getDialect();
    console.log(`✅ Database connected successfully (${dialect.toUpperCase()})`);

    // Sync models quickly without slow alter reflection queries
    if (dialect === 'sqlite') {
      await sequelize.query('DROP TABLE IF EXISTS `Users_backup`;').catch(() => {});
      await sequelize.query('DROP TABLE IF EXISTS `Products_backup`;').catch(() => {});
      await sequelize.query('DROP TABLE IF EXISTS `Orders_backup`;').catch(() => {});
      await sequelize.sync();
      await sequelize.query('ALTER TABLE `Products` ADD COLUMN `video_url` VARCHAR(255);').catch(() => {});
      await sequelize.query('ALTER TABLE `CartItems` ADD COLUMN `session_id` VARCHAR(255);').catch(() => {});
      await sequelize.query('ALTER TABLE `CartItems` ADD COLUMN `variant_id` INTEGER;').catch(() => {});
    } else {
      await sequelize.sync();
      await sequelize.query('ALTER TABLE `Products` ADD COLUMN `video_url` VARCHAR(255) NULL;').catch(() => {});
      await sequelize.query('ALTER TABLE `CartItems` ADD COLUMN `session_id` VARCHAR(255) NULL;').catch(() => {});
      await sequelize.query('ALTER TABLE `CartItems` ADD COLUMN `variant_id` INTEGER NULL;').catch(() => {});
      await sequelize.query('ALTER TABLE `CartItems` MODIFY COLUMN `user_id` INTEGER NULL;').catch(() => {});
    }

    console.log('✅ Database models synchronized successfully');
    return sequelize;
  } catch (error) {
    if (error.original?.code === 'ER_ACCESS_DENIED_ERROR' || error.name === 'SequelizeAccessDeniedError') {
      console.error('\n❌ [MySQL Authentication Error]: Access denied for user \'' + dbUser + '\'@\'' + dbHost + '\'');
      console.error('👉 Please check your MySQL password in backend/.env:');
      console.error('   DB_PASSWORD=your_mysql_workbench_password\n');
    } else if (error.original?.code === 'ER_BAD_DB_ERROR') {
      console.error('\n❌ [MySQL Database Error]: Database \'' + dbName + '\' does not exist.');
      console.error('👉 Please run in MySQL Workbench: CREATE DATABASE shopease_db;\n');
    } else if (error.original?.code === 'ECONNREFUSED') {
      console.error('\n❌ [MySQL Connection Error]: Could not connect to MySQL server on ' + dbHost + ':' + dbPort);
      console.error('👉 Please ensure MySQL server is running.\n');
    } else {
      console.error('❌ Database connection error:', error.message);
    }
    throw error;
  }
};

export { sequelize, initDatabase };
export default sequelize;

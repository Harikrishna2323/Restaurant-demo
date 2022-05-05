import { ConnectionOptions } from 'typeorm';

/* this file is currently not used by TypeORM */
const connectionOptions = {
  type: "mysql",
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['build/entities/*.js'],
  maxQueryExecutionTime: 20_000,
  synchronize: false,
  logging: !!process.env.LOG_TYPEORM,
  migrations: ['build/migration/*.js'], // compiled migration files goes here
  cli: {
    migrationsDir: 'src/migration', // store newly created migration files
  },
} as ConnectionOptions;

module.exports = connectionOptions;

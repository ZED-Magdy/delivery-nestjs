import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  type: process.env.DB_TYPE || 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT) || 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
}));

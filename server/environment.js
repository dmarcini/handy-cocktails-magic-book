import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

export default {
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
};

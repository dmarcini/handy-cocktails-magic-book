import env from '../../environment.js';

export default {
    HOST: 'localhost',
    USER: env.DB_USER,
    PASSWORD: env.DB_PASSWORD,
    DB: 'handy-cocktails-magic-book',
    dialect: 'mysql',
    operatorAliases: false,
    define: {
        timestamps: false,
        freezeTableName: true,
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};

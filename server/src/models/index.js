import Sequelize from 'sequelize';

import dbConfig from '../config/db.js';

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorAliases: dbConfig.operatorAliases,
    define: {
        timestamps: dbConfig.define.timestamps,
        freezeTableName: dbConfig.define.freezeTableName,
    },
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    },
});

export default {
    Sequelize,
    sequelize,
};

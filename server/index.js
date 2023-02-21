import cors from 'cors';
import https from 'https';
import fs from 'fs';
import express, { Router } from 'express';

import db from './src/models/index.js';

const port = process.env.PORT || 8080;
const corsOptions = {
    origin: 'https://localhost:8081',
};

(() => {
    try {
        const app = express();
        const server = https.createServer(
            {
                key: fs.readFileSync('../key.pem'),
                cert: fs.readFileSync('../cert.pem'),
            },
            app
        );

        app.use(cors(corsOptions));
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
        app.use('/', Router());

        db.sequelize.sync();

        server.listen(port);

        console.log(`> Server ready on https://localhost:${port}`);
    } catch (error) {
        console.log('Error:::::', error);
    }
})();

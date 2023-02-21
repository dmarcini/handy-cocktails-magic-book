import next from 'next';
import https from 'https';
import fs from 'fs';

const port = process.env.PORT || 8081;
const dev = process.env.NODE_ENV !== 'production';

(async () => {
    const app = next({ dev });
    const server = https.createServer(
        {
            key: fs.readFileSync('../key.pem'),
            cert: fs.readFileSync('../cert.pem'),
        },
        (req, res) => {
            return app.getRequestHandler()(req, res);
        }
    );

    try {
        await app.prepare();

        server.listen(port, (error) => {
            if (error) {
                throw error;
            }

            console.log(`> Client ready on https://localhost:${port}`);
        });
    } catch (error) {
        console.log('Error:::::', error);
    }
})();

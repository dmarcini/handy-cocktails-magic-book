import path from 'path';

import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
    trailingSlash: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/styles')],
    },
    images: {
        domains: ['ik.imagekit.io'],
    },
    redirects: () => {
        return [
            {
                source: '/',
                destination: '/home',
                permanent: true,
            },
        ];
    },
};

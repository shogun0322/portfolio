const functions = require('firebase-functions');
const next = require('next');

const isDev = process.env.NODE_ENV !== 'production';
const app = next({ dev: isDev, conf: { distDir: 'next' } }); // ต้องตรงกับโฟลเดอร์ที่เราคัดลอกมา
const handle = app.getRequestHandler();

exports.nextjs = functions.https.onRequest((req, res) => {
  return app.prepare().then(() => handle(req, res));
});

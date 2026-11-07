import { createApp } from './app.js';
const server = createApp().listen(Number(process.env.PORT || 4000));
process.once('SIGTERM', () => server.close());
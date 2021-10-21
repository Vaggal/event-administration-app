import * as express from 'express';
import * as path from 'path';
import { Express } from 'express';
import * as cors from 'cors';

import eventsRouter from './routes/events';

import { DB_STRING, connectToDB } from './db';

export default function createApp(): Express {
  console.log(`Connecting to DB... ${DB_STRING}`);

  const app = express();
  app.use(express.json());
  app.use(cors());

  const clientDir = path.join(__dirname, '../public');
  app.use(express.static(clientDir));

  connectToDB()
    .then(() => {
      app.use('/api/events', eventsRouter);
    })
    .catch(console.error);

  return app;
}

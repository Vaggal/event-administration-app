import * as express from 'express';
import * as path from 'path';
import { Express } from 'express';
import * as cors from 'cors';

import eventsRouter from './routes/events';

export default function createApp(): Express {
  const app = express();
  app.use(express.json());
  app.use(cors());

  const clientDir = path.join(__dirname, '../public');
  app.use(express.static(clientDir));
  app.use('/api/events', eventsRouter);

  return app;
}

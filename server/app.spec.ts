import app from './app';
import { connectToDB, disconnectFromDB } from './db';

import * as request from 'supertest';

describe('AppComponent', () => {
  beforeEach(() => {
    return connectToDB();
  });

  afterEach(() => {
    return disconnectFromDB();
  });

  it('should run return the events', async () => {
    const response = await request(app()).get('/api/events');
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});

import { connect, disconnect } from 'mongoose';

const user = process.env.MONGO_USER || 'test';
const password = process.env.MONGO_PASS || 'testpass';
const mongoPort = process.env.MONGO_PORT || 27017;

const mongoHost = process.env.MONGO_HOST || 'localhost';
const auth = user ? `${user}:${password}@` : '';
const DB_STRING = `mongodb://${auth}${mongoHost}:${mongoPort}/eventsDB`;

const config = { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, authSource: 'eventsDB' };

const connectToDB = (): Promise<typeof import('mongoose')> => {
  return connect(DB_STRING, config);
};

export { DB_STRING, connectToDB, disconnect as disconnectFromDB };

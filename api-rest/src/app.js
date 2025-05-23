import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

import './database';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';
import studentRoutes from './routes/studentRoutes';
import photoRoutes from './routes/photoRoutes';

const whiteList = [
  'http://35.247.244.39/',
  'http://localhost:3000',
]

const corsOptions = {
  origin: function(origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(helmet());
    this.app.use(cors(corsOptions));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(path.resolve(__dirname, 'uploads')));
  }

  routes() {
    // this.app.use('/', homeRoutes);
    this.app.use('/users', userRoutes);
    this.app.use('/tokens', tokenRoutes);
    this.app.use('/students', studentRoutes);
    this.app.use('/photos', photoRoutes);
  }
}

export default new App().app;

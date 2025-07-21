import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { json } from 'body-parser';
import morgan from 'morgan';
import routes from './api/routes';

dotenv.config();

const app = express();

app.use(cors());
app.use(json());
app.use(morgan('dev'));

// Routes
app.use('/api', routes);

app.get('/', (_req, res) => {
  res.send('Micro Justice Backend API');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
  
import express from 'express';
const app = express();
import cors from 'cors';
app.use(express.json());
app.use(cors());
import itemRoutes from './routes/items.js'
import './database/db.js';
app.use('/items', itemRoutes)
app.listen(8000)
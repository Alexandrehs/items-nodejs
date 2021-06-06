import dotenv from 'dotenv';
import express, { json } from 'express';

import { routes } from './routes';
import './database';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.json());
app.use(routes);


app.listen(PORT, () => {
    console.log(`Running in port ${PORT}`);
});
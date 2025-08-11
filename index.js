import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { invalidPathHandler } from './src/Middlewares/invalidPathHandler.js';
import { globalErrorHandler } from './src/Middlewares/globalErrorHandler.js';
import { connectDb } from './Database/dbConnection.js';
import { useRoutes } from './src/Middlewares/useRoutes.js';
const app = express()
const port = 3000
dotenv.config();
app.use(json());
app.use(cors());
connectDb();
useRoutes(app);
app.use(invalidPathHandler);
app.use(globalErrorHandler);
process.on('unhandledRejection', (err) => {
    console.log(err);
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
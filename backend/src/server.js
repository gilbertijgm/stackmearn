// import dotenv from 'dotenv';
// dotenv.config();
//import express
import express from 'express';
const app = express();
import cors from 'cors';
import morgan from 'morgan';
import {errorHandler} from './middlewares/errorHandler.js';

//import connection db
import { initMongoDB } from './daos/mongodb/database.js';
initMongoDB();

//import routes
import notesRouter from './routes/notes.router.js';
import usersRouter from './routes/users.router.js';

//settings
const PORT = 8080;
app.listen(PORT, () => console.log(`server ok en el puerto ${PORT}`));

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(errorHandler);

//routes
app.use('/api/notes', notesRouter);
app.use('/api/users', usersRouter);

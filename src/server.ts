import express from 'express';
import cors from 'cors';
import path from 'path';

import PDFController from './controllers/PDFController';

require('dotenv').config();

const app = express();
const PORT : string|number = process.env.PORT || 3333;

const pdfController = new PDFController();

app.use(cors());
app.use(express.json());

app.post('/pdf', pdfController.create);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(PORT, () => console.log(`hosting @${PORT}`));

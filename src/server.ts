import express from 'express';
const app = express()
const PORT : string|number = process.env.PORT || 3333;

import PDFController from './controllers/PDFController';

const pdfController = new PDFController();

app.use(express.json())

app.post("/pdf", pdfController.create);

app.listen(PORT,() => console.log(`hosting @${PORT}`));
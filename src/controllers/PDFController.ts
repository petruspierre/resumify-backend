import { Request, Response } from 'express';
import path from 'path';
import PDFDocument from 'pdfkit';
import fs from 'fs';
import crypto from 'crypto';

import generateHeader from '../utils/generateHeader';

const JosefinSans = path.resolve(__dirname, '..', '..', 'assets', 'fonts', 'JosefinSans-Regular.ttf');

interface BodyInfo {
  type: string;
  title: string;
  content: string[];
}

class PDFController {
  create = (req: Request, res: Response) => {
    const { title, discipline, body } = req.body;

    [{
      type: 'topic',
      title: 'jooooj',
      content: []
    }]

    const doc = new PDFDocument;
    
    const date = new Date();
    const parsedDate = + date;
    const hash = crypto.randomBytes(3).toString('hex');

    doc.pipe(fs.createWriteStream(`uploads/tmp/${parsedDate}-${hash}-output.pdf`));

    generateHeader(doc, discipline, title);

    body.forEach((info:BodyInfo) => {
      if(info.type === 'topic') {
        doc
        .font(JosefinSans)
        .fillColor('#FA8072')
        .fontSize(14)
        .text(info.title, {
          align: 'left',
          paragraphGap: 5
        })
        .fontSize(2)
        .moveDown()
        .fontSize(12)
        .fillColor('#000')
        .list(info.content, {
          paragraphGap: 3,
          indent: 20,
          align: 'justify'
        })
        .moveDown();
      }
    })

    doc.end();

    res.status(200).json({ ok: true });
  }
}

export default PDFController;
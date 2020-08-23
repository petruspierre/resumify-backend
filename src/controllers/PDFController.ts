import { Request, Response } from 'express';
import path from 'path';
import PDFDocument from 'pdfkit';
import fs from 'fs';
import crypto from 'crypto';

import generateHeader from '../utils/generateHeader';
import getAccentColor from '../utils/getAccentColor';

const JosefinSans = path.resolve(__dirname, '..', '..', 'assets', 'fonts', 'JosefinSans-Regular.ttf');

interface BodyInfo {
  type: string;
  title: string;
  content: string[];
}

class PDFController {
  create = (req: Request, res: Response) => {
    const { title, discipline, body } = req.body;

    const doc = new PDFDocument();

    const date = new Date();
    const parsedDate = +date;
    const hash = crypto.randomBytes(3).toString('hex');
    const filePath = `uploads/tmp/${parsedDate}-${hash}-output.pdf`;
    const finalPath = `${process.env.URL}/${filePath}`;

    const accentColor = getAccentColor(discipline);

    doc.pipe(fs.createWriteStream(filePath));

    generateHeader(doc, discipline, title);

    body.forEach((info:BodyInfo) => {
      if (info.type === 'topic') {
        doc
          .font(JosefinSans)
          .fillColor('#000')
          .fontSize(12)
          .text(`• ${info.title}`, {
            align: 'left',
            paragraphGap: 5,
          })
          .fontSize(2)
          .moveDown();
      } else if (info.type === 'paragraph') {
        doc
          .font(JosefinSans)
          .fontSize(12)
          .fillColor('#000')
          .text(info.content[0], {
            paragraphGap: 5,
            indent: 20,
            align: 'justify',
          })
          .moveDown();
      } else if (info.type === 'subtitle') {
        doc
          .font(JosefinSans)
          .fontSize(14)
          .fillColor(accentColor)
          .text(info.content[0], {
            paragraphGap: 5,
            indent: 20,
            align: 'center',
          })
          .moveDown();
      }
    });

    doc.end();

    res.status(200).json({ finalPath });
  }
}

export default PDFController;

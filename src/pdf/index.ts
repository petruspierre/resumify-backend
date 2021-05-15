import PDFDocument from 'pdfkit';
import fs from 'fs';
import crypto from 'crypto';
import path from 'path';

import { IPDF, IBody } from '../types/pdf';
import generateHeader from '../utils/generateHeader';
import getAccentColor from '../utils/getAccentColor';

import createTopic from './topic';
import createParagraph from './paragraph';
import createSubtitle from './subtitle';

const JosefinSans = path.resolve(__dirname, '..', '..', 'assets', 'fonts', 'JosefinSans-Regular.ttf');

const createPDF = (pdf: IPDF) => {
  const { title, discipline, body } = pdf;

  const doc = new PDFDocument();

  const date = new Date();
  const hash = crypto.randomBytes(3).toString('hex');
  const filePath = `uploads/tmp/${+date}-${hash}-output.pdf`;
  const finalPath = `${process.env.URL}/${filePath}`;

  const accentColor = getAccentColor(discipline);

  doc.pipe(fs.createWriteStream(filePath));

  generateHeader(doc, discipline, title);

  body.forEach((info: IBody) => {
    if (info.type === 'topic') {
      createTopic(doc, info.title);
    } else if (info.type === 'paragraph') {
      createParagraph(doc, info.content);
    } else if (info.type === 'subtitle') {
      createSubtitle(doc, info.content, accentColor);
    }
  });

  doc.end();

  return finalPath;
};

export default createPDF;

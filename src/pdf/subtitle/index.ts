import path from 'path';
import PDFDocument from 'pdfkit';

const JosefinSans = path.resolve(__dirname, '..', '..', '..', 'assets', 'fonts', 'JosefinSans-Regular.ttf');

const createSubtitle = (doc: typeof PDFDocument, content: string[], color: string) => {
  doc
    .font(JosefinSans)
    .fontSize(14)
    .fillColor(color)
    .text(content[0], {
      align: 'center',
    })
    .moveDown();
};

export default createSubtitle;

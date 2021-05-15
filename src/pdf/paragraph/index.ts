import path from 'path';
import PDFDocument from 'pdfkit';

const JosefinSans = path.resolve(__dirname, '..', '..', '..', 'assets', 'fonts', 'JosefinSans-Regular.ttf');

const createParagraph = (doc: typeof PDFDocument, content: string[]) => {
  doc
    .font(JosefinSans)
    .fontSize(12)
    .fillColor('#000')
    .text(content[0], {
      paragraphGap: 5,
      indent: 20,
      align: 'justify',
    })
    .moveDown();
};

export default createParagraph;

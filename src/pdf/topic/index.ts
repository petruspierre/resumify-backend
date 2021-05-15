import path from 'path';
import PDFDocument from 'pdfkit';

const JosefinSans = path.resolve(__dirname, '..', '..', '..', 'assets', 'fonts', 'JosefinSans-Regular.ttf');

const createTopic = (doc: typeof PDFDocument, title: string) => {
  doc
    .font(JosefinSans)
    .fillColor('#000')
    .fontSize(12)
    .text(`• ${title}`, {
      align: 'left',
      paragraphGap: 5,
    })
    .fontSize(2)
    .moveDown();
};

export default createTopic;

import path from 'path';

const DancingScript = path.resolve(__dirname, '..', '..', 'assets', 'fonts', 'DancingScript-Regular.ttf');

const generateHeader = (doc: PDFKit.PDFDocument, discipline: string, title: string) => {
  doc
  .font(DancingScript)
  .fontSize(60)
  .fillColor('#FA8072')
  .text(discipline, {
    align: 'center'
  })
  .fontSize(14)
  .moveDown()
  .font(DancingScript)
  .fontSize(24)
  .fillColor('#FA8072')
  .text(title, {
    align: 'center'
  })
  .fontSize(14)
  .moveDown();
}

export default generateHeader;
import path from 'path';
import getAccentColor from './getAccentColor';

const DancingScript = path.resolve(__dirname, '..', '..', 'assets', 'fonts', 'DancingScript-Regular.ttf');

const generateHeader = (doc: PDFKit.PDFDocument, discipline: string, title: string) => {
  const accentColor = getAccentColor(discipline);
  doc
  .font(DancingScript)
  .fontSize(60)
  .fillColor(accentColor)
  .text(discipline, {
    align: 'center'
  })
  .fontSize(14)
  .moveDown()
  .font(DancingScript)
  .fontSize(24)
  .fillColor(accentColor)
  .text(title, {
    align: 'center'
  })
  .fontSize(14)
  .moveDown();
}

export default generateHeader;
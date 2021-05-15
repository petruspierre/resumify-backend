import { Request, Response } from 'express'

import createPDF from '../pdf';

class PDFController {
  create = (req: Request, res: Response) => {
    const finalPath = createPDF(req.body);

    res.status(200).json({ finalPath });
  }
}

export default PDFController;

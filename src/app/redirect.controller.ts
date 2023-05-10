import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import * as admin from 'firebase-admin';

@Controller('/')
export class RedirectController {
  public db = admin.firestore();

  public read = async (
    path: FirebaseFirestore.DocumentData,
  ): Promise<Array<{ id: string; data: any }> | null> => {
    try {
      const querySnapshot = await path.get();

      const documents: Array<{ id: string; data: any }> = [];

      querySnapshot.forEach((doc) => {
        const documentData = {
          id: doc.id,
          data: doc.data(),
        };
        documents.push(documentData);
      });

      return documents;
    } catch (error) {
      console.log('Error at reading collection :', error);
      return null;
    }
  };

  @Get('/:id')
  async redirect(@Param('id') id: string, @Res() res: Response) {
    const getLinks = this.db.collection('links');

    const links = await this.read(getLinks);

    const link = links.find((link) => link.data.id === id);

    console.log(link);

    if (link) {
      res.redirect(link.data.url);
    } else {
      res.status(404).send('Link not found');
    }
  }
}

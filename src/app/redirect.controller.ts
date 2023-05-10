import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import * as admin from 'firebase-admin';

@Controller('/')
export class RedirectController {
  public firebaseService = async (
    path: FirebaseFirestore.DocumentData,
  ): Promise<LinkInt[] | null> => {
    try {
      const querySnapshot = await path.get();

      const documents: any = [];

      querySnapshot.forEach((doc) => {
        documents.push(doc.data());
      });

      return documents;
    } catch (error) {
      console.log('Error at reading collection :', error);
      return null;
    }
  };

  @Get('/:id')
  async redirect(@Param('id') id: string, @Res() res: Response) {
    const db = admin.firestore();

    const getLinks = db.collection('links');

    const links = await this.firebaseService(getLinks);

    const link = links.find((link) => link.id === id);

    if (!link) {
      res.status(404).send('Link not found');
      return;
    }

    res.redirect(link.url);
  }
}

interface LinkInt {
  date: string;
  id: string;
  name: string;
  shortLink: string;
  url: string;
  user: string;
}

import { sign } from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';
// import { secret } from '../../../api/secret';


async function openDb() {
    return open({
      filename: './mydb.sqlite',
      driver: sqlite3.Database,
    });
  }


export default async function login(req: NextApiRequest, res: NextApiResponse) {
  const db = await openDb();

  if (req.method === 'POST') {
      console.log(await db.get('select * from person'));
    const person = await db.get('select * from person where email = ?', [
      req.body.email
    ]);

    var password = Buffer.from(person.password, 'base64').toString('utf-8');

      if (req.body.password === password) {
        const claims = { sub: person.id, myPersonEmail: person.email };
        const jwt = sign(claims, '03f0f96b-e448-42f5-9ce7-cdb1c42cd883', { expiresIn: '1h' });
        // const jwt = '0394jshdjshd3487ajhs';
        res.json({ authToken: jwt });
      } else {
        res.json({ message: 'Ups, something went wrong!' });
      }

  } else {
    res.status(405).json({ message: 'We only support POST' });
  }
}
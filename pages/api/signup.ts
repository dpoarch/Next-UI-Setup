import { NextApiRequest, NextApiResponse } from 'next';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

async function openDb() {
  return open({
    filename: './mydb.sqlite',
    driver: sqlite3.Database,
  });
}

export default async function signup(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await openDb();

  if (req.method === 'POST') {

      // Store hash in your password DB.
      const encrypt = Buffer.from(req.body.password, 'utf-8').toString('base64');
      
      const statement = await db.prepare('INSERT INTO person (name, email, password) values (?, ?, ?)');
      await statement.run(req.body.name, req.body.email, encrypt);

      const person = await db.all('select * from person');
      res.json(person);
    
  } else {
    res.status(405).json({ message: 'We only support POST' });
  }
}
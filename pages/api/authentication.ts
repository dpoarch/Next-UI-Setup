import { verify } from 'jsonwebtoken';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

async function openDb() {
    return open({
      filename: './mydb.sqlite',
      driver: sqlite3.Database,
    });
  }


export const authenticated = (fn: NextApiHandler) => async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  verify(req.headers.authorization!, '03f0f96b-e448-42f5-9ce7-cdb1c42cd883', async function(err, decoded) {
    if (!err && decoded) {
      return await fn(req, res);
    }

    res.status(401).json({ message: 'Sorry you are not authenticated' });
  });
};

export default authenticated(async function getPeople(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await openDb();
  const people = await db.all('select id, email, name from person');

  res.json(people);
});
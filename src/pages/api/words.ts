import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../app/lib/db';

export async function insertSearchWord(keyword: string, apiResponse: any, requestTimestamp: string) {
  const insertQuery =
    'INSERT INTO search_words(key_word, api_response, request_timestamp) VALUES($1, $2, $3) RETURNING *';
  const values = [keyword, JSON.stringify(apiResponse), requestTimestamp];
  const { rows } = await db.query(insertQuery, values);
  return rows[0];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      const { rows } = await db.query('SELECT * FROM search_words');
      res.status(200).json(rows);
    } else if (req.method === 'POST') {
      const { keyword, apiResponse, requestTimestamp } = req.body;
      if (!keyword || !apiResponse || !requestTimestamp) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      const insertQuery =
        'INSERT INTO search_words(key_word, api_response, request_timestamp) VALUES($1, $2, $3) RETURNING *';
      const values = [keyword, JSON.stringify(apiResponse), requestTimestamp];
      const { rows } = await db.query(insertQuery, values);

      res.status(201).json(rows[0]); // Respond with the inserted row
    } else {
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('Database query error', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

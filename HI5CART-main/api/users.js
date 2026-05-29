import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { email, password, name } = req.body;
      
      // Check if user exists
      const existingUser = await sql`SELECT * FROM users WHERE email = ${email}`;
      if (existingUser.length > 0) {
        return res.status(400).json({ error: 'User already exists' });
      }

      // Create user
      const result = await sql`
        INSERT INTO users (email, password, name, reward_stars)
        VALUES (${email}, ${password}, ${name}, 0)
        RETURNING *
      `;
      res.status(201).json(result[0]);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else if (req.method === 'GET') {
    try {
      const { email, password } = req.query;
      const result = await sql`SELECT * FROM users WHERE email = ${email} AND password = ${password}`;
      
      if (result.length === 0) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
      
      res.status(200).json(result[0]);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
